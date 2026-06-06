import { AlertTriangle, Lightbulb, Info, Zap, Shield } from "lucide-react";

type CalloutType = "tip" | "warning" | "info" | "strategy" | "danger";

const config: Record<CalloutType, { icon: typeof AlertTriangle; border: string; bg: string }> = {
  tip: {
    icon: Lightbulb,
    border: "border-[var(--amber)]/40",
    bg: "bg-[var(--amber)]/5",
  },
  warning: {
    icon: AlertTriangle,
    border: "border-red-500/40",
    bg: "bg-red-500/5",
  },
  info: {
    icon: Info,
    border: "border-blue-400/40",
    bg: "bg-blue-400/5",
  },
  strategy: {
    icon: Zap,
    border: "border-[var(--accent)]/40",
    bg: "bg-[var(--accent)]/5",
  },
  danger: {
    icon: Shield,
    border: "border-orange-500/40",
    bg: "bg-orange-500/5",
  },
};

interface CalloutProps {
  type: CalloutType;
  title?: string;
  children: React.ReactNode;
}

export function Callout({ type, title, children }: CalloutProps) {
  const { icon: Icon, border, bg } = config[type];
  return (
    <div className={`my-5 rounded-xl border ${border} ${bg} p-4`}>
      <div className="flex items-start gap-3">
        <Icon size={18} className="mt-0.5 shrink-0 text-[var(--neon)]" />
        <div>
          {title && (
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--fg)]/70">
              {title}
            </p>
          )}
          <div className="text-sm leading-relaxed text-[var(--fg)]/80 [&_b]:text-[var(--fg)]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
