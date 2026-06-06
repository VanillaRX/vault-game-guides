/**
 * Steam Web API client — fetches real game data.
 * Public endpoints, API key required.
 *
 * Rate limit: ~100 requests per 5 minutes per IP (unofficial).
 * Use with ISR (revalidate: 3600) to stay well under limits.
 */

const STEAM_API = "https://api.steampowered.com";
const STEAM_STORE = "https://store.steampowered.com/api";

const API_KEY = process.env.STEAM_API_KEY || "";

export interface SteamPlayerCount {
  appId: number;
  currentPlayers: number;
  timestamp: number;
}

export interface SteamAppDetails {
  appId: number;
  name: string;
  headerImage: string;
  backgroundImage: string;
  shortDescription: string;
  developers: string[];
  publishers: string[];
  genres: string[];
  releaseDate: string;
  metacriticScore: number | null;
  positiveReviews: number;
  negativeReviews: number;
  currentPlayers: number | null;
}

async function steamFetch(endpoint: string, params: Record<string, string> = {}) {
  const url = new URL(`${STEAM_API}${endpoint}`);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  url.searchParams.set("key", API_KEY);

  const res = await fetch(url.toString(), { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error(`Steam API ${res.status}: ${res.statusText}`);
  return res.json();
}

/** Get current player count for an app. Public endpoint — API key optional but recommended. */
export async function getCurrentPlayers(appId: number): Promise<SteamPlayerCount | null> {
  try {
    const data = await steamFetch("/ISteamUserStats/GetNumberOfCurrentPlayers/v1/", {
      appid: String(appId),
    });
    if (data?.response?.player_count === undefined) return null;
    return {
      appId,
      currentPlayers: data.response.player_count,
      timestamp: Date.now(),
    };
  } catch {
    return null;
  }
}

/** Batch fetch player counts for multiple apps. */
export async function getCurrentPlayersBatch(appIds: number[]): Promise<SteamPlayerCount[]> {
  const results = await Promise.allSettled(appIds.map((id) => getCurrentPlayers(id)));
  return results
    .filter((r): r is PromiseFulfilledResult<SteamPlayerCount | null> => r.status === "fulfilled")
    .map((r) => r.value)
    .filter((v): v is SteamPlayerCount => v !== null);
}

/** Get Steam store details for an app. */
export async function getAppDetails(appId: number): Promise<SteamAppDetails | null> {
  try {
    const res = await fetch(`${STEAM_STORE}/appdetails?appids=${appId}`, {
      next: { revalidate: 86400 },
    });
    if (!res.ok) return null;
    const json = await res.json();
    const d = json[String(appId)]?.data;
    if (!d) return null;

    return {
      appId,
      name: d.name,
      headerImage: d.header_image,
      backgroundImage: d.background,
      shortDescription: d.short_description,
      developers: d.developers || [],
      publishers: d.publishers || [],
      genres: (d.genres || []).map((g: { description: string }) => g.description),
      releaseDate: d.release_date?.date || "",
      metacriticScore: d.metacritic?.score || null,
      positiveReviews: d.metacritic?.positive || 0,
      negativeReviews: d.metacritic?.negative || 0,
      currentPlayers: null,
    };
  } catch {
    return null;
  }
}

/** Get full game data with player count. */
export async function getGameWithPlayers(appId: number): Promise<SteamAppDetails | null> {
  const details = await getAppDetails(appId);
  if (!details) return null;
  const players = await getCurrentPlayers(appId);
  return { ...details, currentPlayers: players?.currentPlayers ?? null };
}
