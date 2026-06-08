import * as fs from "node:fs";
import * as path from "node:path";

const DIR = path.resolve(__dirname, "..", "src", "data", "games");
const INDEX = path.resolve(DIR, "index.json");

// AI-generated classification + Chinese content
const content: Record<string, { tags: string[]; zhTitle: string; zhShortDescription: string; zhDescription: string; metaDescriptionZh: string }> = {
  "against-the-storm": { tags:["city-builder","management","roguelike","strategy"], zhTitle:"风暴之城", zhShortDescription:"黑暗幻想风格的城市建造 Roguelite，在永不停息的暴雨中建立并管理定居点。", zhDescription:"《风暴之城》是一款黑暗幻想风格的城市建造 Roguelite 游戏。作为总督，你需要在永不停息的暴雨中建立定居点，满足女王的指令。每局游戏随机生成不同的建筑蓝图、资源和挑战，迫使你不断调整策略。融合了城市建造的资源管理和 Roguelike 的随机性与重玩性。", metaDescriptionZh:"《风暴之城》Steam 攻略与评测 — 黑暗幻想城市建造 Roguelite，随机蓝图与资源管理。" },
  "anno-1800": { tags:["city-builder","management","strategy","multiplayer"], zhTitle:"纪元1800", zhShortDescription:"引领工业革命的城市建造与供应链管理游戏，跨越新旧世界的贸易帝国。", zhDescription:"《纪元1800》是获奖无数的城市建造与供应链管理游戏。玩家从一座小岛起步，逐步建立横跨新旧世界的贸易帝国。核心玩法围绕产业链优化——从农民到投资人的五级人口系统，每条产业链都需要精确规划布局。", metaDescriptionZh:"《纪元1800》产业链布局攻略 — 仓库摆放、工会优化、跨区域供应链完全指南。" },
  "banished": { tags:["city-builder","survival","management","colony-sim"], zhTitle:"放逐之城", zhShortDescription:"经典中世纪城市建造与生存模拟，管理资源、抵御寒冬。", zhDescription:"《放逐之城》是一款经典的中世纪城市建造与生存模拟游戏。你控制一群被放逐的旅人从零开始在荒野中建立城镇。核心挑战是资源管理——木材、食物、工具和燃料的平衡。", metaDescriptionZh:"《放逐之城》新手攻略 — 资源管理、冬季生存、人口控制完全指南。" },
  "campsite-hustle": { tags:["management","cozy","casual"], zhTitle:"营地经营模拟器", zhShortDescription:"经营你的露营地，布置帐篷、管理资源、吸引游客。", zhDescription:"《Campsite Hustle》是一款轻松愉快的露营地经营管理游戏。搭建帐篷、布置篝火区、管理物资库存，吸引游客前来度假。游戏节奏舒适，画面温馨。", metaDescriptionZh:"《Campsite Hustle》露营地经营攻略 — 帐篷布局、资源管理、游客满意度。" },
  "cities-skylines": { tags:["city-builder","management","simulation"], zhTitle:"城市天际线", zhShortDescription:"现代经典城市建造模拟器，规划交通、管理经济、打造大都市。", zhDescription:"《城市天际线》是现代城市建造模拟的标杆之作。从道路规划到公共交通，从水电供应到垃圾处理，交通流优化和经济平衡是核心玩法。海量 MOD 社区让可能性无限延伸。", metaDescriptionZh:"《城市天际线》交通规划与城市布局攻略 — 道路设计、公共交通、区域划分完全指南。" },
  "civilization-vi": { tags:["strategy","4x","turn-based","multiplayer"], zhTitle:"文明VI", zhShortDescription:"终极 4X 策略游戏，从石器时代到信息时代。", zhDescription:"《文明VI》是 Firaxis 打造的终极 4X 策略游戏。选择一位历史领袖，通过科技研发、文化发展、军事征服来赢得胜利。区域相邻加成系统是核心创新——每个区域的产出取决于周围地形。", metaDescriptionZh:"《文明VI》区域相邻加成完全攻略 — 学院区、工业区、剧院广场最优摆放。" },
  "coral-island": { tags:["farming","cozy","life-sim","crafting"], zhTitle:"珊瑚岛", zhShortDescription:"热带海岛农场模拟，耕种、潜水、恋爱、修复珊瑚礁。", zhDescription:"《珊瑚岛》是一款热带海岛风格的农场模拟游戏。继承荒废农场后，在岛上耕种作物、饲养动物、与村民建立关系。独特之处在于海洋生态——潜水探索珊瑚礁、清理海洋垃圾。3D画面精美，是星露谷玩家不可错过的选择。", metaDescriptionZh:"《珊瑚岛》新手攻略 — 农耕指南、NPC好感度、潜水探索、珊瑚礁修复。" },
  "deep-crafter": { tags:["survival","crafting","automation","management"], zhTitle:"深海工厂", zhShortDescription:"在深海建造自动化工厂，采集资源、研发科技。", zhDescription:"《深海工厂》将自动化工厂建造搬到深海之中。在海底建造采矿站、铺设传送带、搭建复杂的生产线，从手动采集进化到全自动工业体系。", metaDescriptionZh:"《深海工厂》自动化生产线攻略 — 海底采矿、传送带布局、科技树指南。" },
  "dinkum": { tags:["farming","cozy","life-sim","crafting","multiplayer"], zhTitle:"丁克姆", zhShortDescription:"澳洲荒野版动物森友会——耕种、建造、探索。", zhDescription:"《Dinkum》是设定在澳大利亚荒野的生活模拟游戏。在一片原始荒野中建立家园——耕种、钓鱼、采矿、捕虫，与动物村民交朋友。支持多人合作，和朋友们一起开荒。", metaDescriptionZh:"《Dinkum》新手攻略 — 开荒技巧、赚钱方法、动物村民好感度、多人合作指南。" },
  "dragon-shelter": { tags:["cozy","management","casual"], zhTitle:"龙之庇护所", zhShortDescription:"经营一座龙族庇护所，照顾受伤的龙、修复栖息地。", zhDescription:"《Dragon Shelter》是一款温馨的龙族庇护所经营游戏。照顾一群受伤的龙——喂食、治疗、建造栖息地。修复污染的土地、恢复魔法生态。适合喜欢星露谷和史莱姆牧场的玩家。", metaDescriptionZh:"《Dragon Shelter》庇护所经营攻略 — 龙类饲养、栖息地建造、资源管理指南。" },
  "elden-ring": { tags:["action","rpg","open-world","multiplayer"], zhTitle:"艾尔登法环", zhShortDescription:"FromSoftware 巅峰之作，在交界地中探索、战斗、征服半神。", zhDescription:"《艾尔登法环》是 FromSoftware 的开放世界动作 RPG 巅峰之作。魂系战斗深度与开放世界自由度的完美结合，迷宫般的地下城和史诗级的 BOSS 战令人难忘。", metaDescriptionZh:"《艾尔登法环》BOSS 攻略与配装指南 — 全BOSS打法、武器推荐、魔法流派。" },
  "fabledom": { tags:["city-builder","cozy","casual","management"], zhTitle:"童话王国", zhShortDescription:"温馨童话风格的城市建造游戏，建造王国、发展外交。", zhDescription:"《Fabledom》是一款温馨童话风格的城市建造游戏。在奇幻世界中建造城堡、发展村庄、管理资源。独特的恋爱系统让你可以与其他统治者建立关系。", metaDescriptionZh:"《Fabledom》童话城市建造攻略 — 资源管理、外交策略、王国发展指南。" },
  "factorio": { tags:["automation","management","survival","crafting","multiplayer"], zhTitle:"异星工厂", zhShortDescription:"终极自动化模拟游戏，建造巨型工厂、优化生产线。", zhDescription:"《异星工厂》是自动化模拟游戏的巅峰之作。从手动采矿开始，逐步建造越来越复杂的自动化生产线——传送带、机械臂、火车、物流机器人。'工厂必须增长'是玩家社区的口头禅。", metaDescriptionZh:"《异星工厂》生产线布局攻略 — 传送带设计、火车信号、核电站建造指南。" },
  "farming-simulator-22": { tags:["farming","simulation","management","multiplayer"], zhTitle:"模拟农场22", zhShortDescription:"最真实的农业模拟，驾驶真实品牌农用机械经营农场。", zhDescription:"《模拟农场22》是最逼真的农业模拟游戏。驾驶 John Deere、Case IH 等真实品牌的农用机械，在广袤田野上耕种、播种、施肥、收割。巨大 MOD 社区让可玩性无限。", metaDescriptionZh:"《模拟农场22》新手攻略 — 作物选择、机械推荐、畜牧管理指南。" },
  "farming-simulator-25": { tags:["farming","simulation","management","multiplayer"], zhTitle:"模拟农场25", zhShortDescription:"系列最新作，全新引擎、动态天气、更多作物。", zhDescription:"《模拟农场25》是系列最新作品。全新引擎带来画质飞跃，新增水稻、菠菜等作物和 GPS 辅助驾驶等现代技术。地图更大、细节更丰富。", metaDescriptionZh:"《模拟农场25》新手指南 — 新作物、新机械、GPS辅助驾驶技巧。" },
  "farthest-frontier": { tags:["city-builder","survival","management","colony-sim"], zhTitle:"最远的边陲", zhShortDescription:"中世纪城镇建造与生存模拟，抵御掠夺者，熬过寒冬。", zhDescription:"《最远的边陲》是一款精致的中世纪城市建造与生存模拟。从十几名定居者开始造房屋、开农田、建防御。每个冬天都是生存考验——食物、燃料、疾病缺一不可。", metaDescriptionZh:"《最远的边陲》城镇建造攻略 — 农耕轮作、城墙设计、冬季生存、疾病控制。" },
  "field-of-mistria": { tags:["farming","cozy","rpg","life-sim"], zhTitle:"雾原田野", zhShortDescription:"90年代动画风格的农场 RPG，耕种、魔法、冒险。", zhDescription:"《Fields of Mistria》受90年代日本动画启发的农场模拟 RPG。在迷人的雾原小镇耕种、钓鱼、采矿、战斗。发现镇上隐藏的古老魔法秘密。像素美术精美绝伦。", metaDescriptionZh:"《雾原田野》新手攻略 — 农耕指南、魔法系统、NPC好感度、地下城探索。" },
  "foundation": { tags:["city-builder","management","simulation"], zhTitle:"Foundation", zhShortDescription:"无网格有机中世纪城市建造，划定区域而非放置建筑。", zhDescription:"《Foundation》是无网格中世纪城市建造游戏。划定住宅区、农业区和工业区，村民自己决定修路和盖房。这种有机生长让每座城市独一无二。纪念碑建造系统需要精细供应链管理。", metaDescriptionZh:"《Foundation》有机城市布局攻略 — 区域规划、供应链、纪念碑建造指南。" },
  "frozenheim": { tags:["city-builder","survival","strategy","multiplayer"], zhTitle:"冰霜之地", zhShortDescription:"北欧维京主题的城市建造与 RTS，建立部落、掠夺敌人。", zhDescription:"《Frozenheim》是北欧维京主题的城市建造与即时战略游戏。在冰天雪地中建立维京部落——建造长屋、港口，管理资源熬过寒冬。融合了城市建造深度和 RTS 战斗节奏。", metaDescriptionZh:"《冰霜之地》维京城镇建造攻略 — 资源管理、部队编制、部落战争策略。" },
  "going-medieval": { tags:["colony-sim","city-builder","survival","management"], zhTitle:"前往中世纪", zhShortDescription:"3D 殖民模拟，建造多层城堡、管理居民心理。", zhDescription:"《前往中世纪》是灾后中世纪世界的3D殖民模拟游戏。带领幸存者从零建造定居点。多层建筑系统可以建造真正意义上的城堡。居民有独立心理状态、技能和需求。", metaDescriptionZh:"《前往中世纪》城堡建造攻略 — 多层建筑设计、居民心情管理、冬季生存策略。" },
  "jurassic-world-evolution-2": { tags:["management","simulation","strategy"], zhTitle:"侏罗纪世界进化2", zhShortDescription:"建造并管理恐龙主题公园，培育基因改造的史前生物。", zhDescription:"《侏罗纪世界进化2》是侏罗纪系列授权的恐龙公园管理模拟。建造围场、孵化恐龙、管理游客设施。混沌理论模式让你体验电影情节的另类走向。", metaDescriptionZh:"《侏罗纪世界进化2》恐龙公园攻略 — 围场设计、恐龙培育、游客管理。" },
  "kingdoms-and-castles": { tags:["city-builder","management","strategy"], zhTitle:"王国与城堡", zhShortDescription:"低多边形中世纪城市建造，从村庄到王国。", zhDescription:"《Kingdoms and Castles》是画风清新的低多边形中世纪城市建造游戏。从村庄发展为拥有城堡和港口的大王国。管理资源、规划布局、抵御维京掠夺者和恶龙。", metaDescriptionZh:"《王国与城堡》城市建造攻略 — 布局规划、防御策略、居民满意度管理。" },
  "kynseed": { tags:["farming","rpg","life-sim","crafting"], zhTitle:"血脉之种", zhShortDescription:"世代传承的奇幻农场 RPG，耕种、探险、成家、老去。", zhDescription:"《Kynseed》是独特的世代传承奇幻农场 RPG。经营农场、探索世界、结婚生子，最终老去让下一代继承遗产。世界随时间变化，NPC也变老死亡，选择影响几代人。", metaDescriptionZh:"《血脉之种》世代传承攻略 — 农耕系统、探险指南、婚姻与后代养成。" },
  "life-below": { tags:["survival","crafting","management"], zhTitle:"深海余生", zhShortDescription:"在衰亡的海洋中建立海底基地，探索深海、重建文明。", zhDescription:"《Life Below》是深海生存与管理游戏。在海洋正在死亡的时候建立海底基地，探索衰亡的海洋生态系统。幽暗的深海、神秘的珊瑚礁遗迹、孤独而美丽的海洋世界。", metaDescriptionZh:"《深海余生》海底基地建造攻略 — 资源采集、基地布局、海洋探索指南。" },
  "littlewood": { tags:["cozy","life-sim","city-builder","crafting"], zhTitle:"小小森林", zhShortDescription:"你拯救世界之后的故事——重建家园、耕种、交友。", zhDescription:"《Littlewood》是独特的温暖模拟游戏，故事发生在大魔王已经被打败之后。改造地形、建造房屋、邀请村民、耕种作物。纯粹建造和社交乐趣，没有战斗。", metaDescriptionZh:"《小小森林》小镇重建攻略 — 地形改造、建筑布局、NPC好感度指南。" },
  "manor-lords": { tags:["city-builder","strategy","management"], zhTitle:"庄园领主", zhShortDescription:"中世纪城市建设与大战场 RTS 的完美融合。", zhDescription:"《Manor Lords》将中世纪城市建造与大战场即时战略完美融合。精细管理城镇的每条街道，同时指挥军队在战场上交锋。追求历史真实性，基于真实中世纪研究。", metaDescriptionZh:"《庄园领主》城市建造与战争攻略 — 农田布局、城市扩张、军团指挥指南。" },
  "monster-hunter-world": { tags:["action","rpg","multiplayer","co-op"], zhTitle:"怪物猎人世界", zhShortDescription:"狩猎巨兽、打造装备、组队挑战——终极合作动作狩猎。", zhDescription:"《怪物猎人世界》是 Capcom 的动作狩猎巅峰。追踪并狩猎巨大怪物，用材料打造更强的武器防具。每种武器有完全不同的操作手感。四人合作狩猎是核心乐趣。", metaDescriptionZh:"《怪物猎人世界》武器配装攻略 — 14种武器指南、怪物弱点、装备搭配。" },
  "my-time-at-portia": { tags:["farming","cozy","life-sim","crafting","rpg"], zhTitle:"波西亚时光", zhShortDescription:"继承工坊、建造奇迹、恋爱交友——3D工坊经营与生活模拟。", zhDescription:"《波西亚时光》是迷人的3D工坊经营与生活模拟游戏。接取订单、收集材料、打造物品、完成委托。核心是工坊制作——开采矿石、熔炼金属、组装复杂机械。", metaDescriptionZh:"《波西亚时光》工坊经营攻略 — 材料收集、物品制作、NPC好感度、遗迹探索。" },
  "my-time-at-sandrock": { tags:["farming","cozy","life-sim","crafting","rpg"], zhTitle:"沙石镇时光", zhShortDescription:"《波西亚时光》续作，沙漠小镇、更大工坊、更深战斗。", zhDescription:"《沙石镇时光》是《波西亚时光》续作，舞台搬到沙漠小镇沙石镇。工坊系统更复杂、战斗更深、NPC互动更丰富。在水资源稀缺的沙漠环境中经营工坊，同时揭开古老秘密。", metaDescriptionZh:"《沙石镇时光》工坊攻略 — 沙漠资源采集、工坊升级、NPC好感度。" },
  "northgard": { tags:["strategy","city-builder","survival","multiplayer"], zhTitle:"北境守护", zhShortDescription:"北欧神话策略游戏，选择氏族、扩张领地、征服北境。", zhDescription:"《Northgard》是北欧神话背景策略游戏。控制维京氏族在北境建立定居点。每个氏族有独特玩法——狼族擅长战斗、鹿族精于贸易、熊族适应寒冬。", metaDescriptionZh:"《北境守护》氏族攻略 — 各氏族玩法差异、资源管理、科技路线。" },
  "ooblets": { tags:["farming","cozy","casual","life-sim"], zhTitle:"舞动的欧布莱特", zhShortDescription:"宝可梦+星露谷+舞蹈——收集可爱生物、经营农场。", zhDescription:"《Ooblets》是古怪可爱的混合类型游戏——生物收集+农场模拟，战斗是舞蹈对决。收集奇特生物、训练它们参加舞蹈比赛，同时经营农场。幽默风趣，角色设计充满个性。", metaDescriptionZh:"《Ooblets》生物收集攻略 — Ooblet图鉴、舞蹈对战策略、农场经营技巧。" },
  "oxygen-not-included": { tags:["colony-sim","management","survival","simulation"], zhTitle:"缺氧", zhShortDescription:"2D 太空殖民模拟，每个物理系统都是你的敌人。", zhDescription:"《缺氧》是 Klei 出品的深度太空殖民模拟。管理复制人在地下建立殖民地。真实的物理模拟——氧气消耗、温度扩散、液体流动、气压变化。循环利用一切资源。", metaDescriptionZh:"《缺氧》殖民基地攻略 — 氧气循环、温度控制、电力系统、自动化设计。" },
  "palia": { tags:["life-sim","cozy","farming","crafting","multiplayer","mmo"], zhTitle:"帕里亚", zhShortDescription:"免费 MMO 生活模拟，建造家园、耕种捕鱼。", zhDescription:"《Palia》是免费多人在线生活模拟游戏。建造装饰家园、耕种作物、钓鱼捕虫、狩猎采矿。强调合作而非竞争——和全球玩家一起探索冒险。画面温馨精致。", metaDescriptionZh:"《帕里亚》新手指南 — 家园建造、技能升级、社区活动参与攻略。" },
  "palworld": { tags:["survival","crafting","open-world","multiplayer","co-op"], zhTitle:"幻兽帕鲁", zhShortDescription:"宝可梦+方舟——捕捉帕鲁、建造基地、用枪战斗。", zhDescription:"《幻兽帕鲁》将生物收集与生存建造疯狂融合。捕捉帕鲁让它们在工厂工作、农场种地、战场战斗——甚至给它们装备枪支。黑色幽默贯穿始终，支持多人合作。", metaDescriptionZh:"《幻兽帕鲁》全帕鲁图鉴 — 帕鲁捕捉、基地建造、繁殖配方完全指南。" },
  "planet-coaster-2": { tags:["management","simulation"], zhTitle:"过山车之星2", zhShortDescription:"终极主题公园模拟器续作，建造水上乐园、设计过山车。", zhDescription:"《过山车之星2》是 Frontier 的终极主题公园模拟器续作。新增水上乐园元素——水上滑梯、造浪池、漂流河。建造系统极为自由，手动调整轨道每个节点。", metaDescriptionZh:"《过山车之星2》公园攻略 — 轨道建造技巧、游客满意度、盈利优化。" },
  "project-zomboid": { tags:["survival","crafting","open-world","multiplayer"], zhTitle:"僵尸毁灭工程", zhShortDescription:"最真实的僵尸生存模拟——你能活多久。", zhDescription:"《僵尸毁灭工程》是史上最硬核的僵尸生存模拟。管理饥饿、口渴、疲劳、体温、情绪和伤势。世界每个角落都可互动。丧尸感染是永久性的——被咬一口，角色终究会死。", metaDescriptionZh:"《僵尸毁灭工程》生存攻略 — 基地选址、技能加点、战斗技巧、长期策略。" },
  "rimworld": { tags:["colony-sim","management","survival","strategy"], zhTitle:"边缘世界", zhShortDescription:"AI 叙事者驱动的科幻殖民模拟，每局都是独特故事。", zhDescription:"《RimWorld》是独一无二的科幻殖民模拟。由 AI 叙事者驱动，每局生成全新故事。管理殖民者心情、需求、伤口和疾病。从温度系统到社交关系，每个系统相互关联。", metaDescriptionZh:"《边缘世界》殖民管理攻略 — 杀阵设计、心情优化、殖民地布局指南。" },
  "roots-of-pacha": { tags:["farming","cozy","life-sim","crafting"], zhTitle:"帕查之根", zhShortDescription:"石器时代农场模拟——驯化第一批作物、发明第一批工具。", zhDescription:"《Roots of Pacha》是石器时代的独特农场模拟。在人类文明黎明之时驯化野生植物、发明原始工具、与部落成员合作推动文明进步。'想法'系统让你的发现推动部落进入新时代。", metaDescriptionZh:"《帕查之根》石器农场攻略 — 作物驯化、工具发明、部落发展指南。" },
  "satisfactory": { tags:["automation","management","open-world","multiplayer"], zhTitle:"幸福工厂", zhShortDescription:"3D 第一人称工厂建造，探索外星世界，建造巨型自动化生产线。", zhDescription:"《Satisfactory》将自动化逻辑带到3D外星世界。第一人称探索、寻找矿脉、建造工厂、铺设传送带。从俯视自己建造的巨型工厂时，成就感无可替代。", metaDescriptionZh:"《幸福工厂》工厂布局攻略 — 传送带设计、生产线规划、资源节点地图。" },
  "settlement-rising": { tags:["city-builder","colony-sim","management","strategy"], zhTitle:"定居点崛起", zhShortDescription:"中世纪城市建造与殖民模拟，管理供应链、发展贸易。", zhDescription:"《Settlements Rising》是中世纪城市建造与殖民模拟游戏。从零建立定居点，管理完整供应链，发展贸易路线。每个村民有独立技能、需求和日常活动。", metaDescriptionZh:"《定居点崛起》城市建造攻略 — 供应链管理、贸易路线、防御策略。" },
  "slime-rancher": { tags:["cozy","farming","management","adventure"], zhTitle:"史莱姆牧场", zhShortDescription:"到外星世界经营史莱姆牧场——收集可爱史莱姆、探索荒野。", zhDescription:"《史莱姆牧场》是独特的第一人称农场模拟。用真空枪收集可爱史莱姆，建造围栏圈养，喂食让它们产出结晶来赚钱。探索广阔荒野，发现新物种，揭开外星世界秘密。", metaDescriptionZh:"《史莱姆牧场》牧场攻略 — 史莱姆图鉴、围栏设计、探索路线、赚钱技巧。" },
  "slime-rancher-2": { tags:["cozy","farming","management","adventure"], zhTitle:"史莱姆牧场2", zhShortDescription:"续作来到彩虹岛，更多史莱姆、更美世界。", zhDescription:"《史莱姆牧场2》将舞台搬到美丽的彩虹岛。继承一代核心玩法——收集史莱姆、经营牧场——同时在画面和世界规模上实现飞跃。新史莱姆种类、新生态系统。", metaDescriptionZh:"《史莱姆牧场2》新手指南 — 彩虹岛探索、新史莱姆图鉴、牧场扩建攻略。" },
  "solarpunk": { tags:["survival","crafting","farming","cozy","multiplayer"], zhTitle:"太阳朋克", zhShortDescription:"漂浮岛屿上的太阳能朋克生存——建造飞艇农场、自动化生产。", zhDescription:"《Solarpunk》是漂浮天空岛屿上的太阳能朋克生存游戏。收集太阳能、水和资源，建造飞艇、农田和自动化系统。支持单人冒险和多人合作，画面明亮鲜艳。", metaDescriptionZh:"《太阳朋克》天空生存攻略 — 飞艇建造、太阳能管理、自动化农场设计。" },
  "song-of-syx": { tags:["city-builder","colony-sim","management","strategy"], zhTitle:"塞克斯之歌", zhShortDescription:"史诗级城市建造与大规模战斗——从几十人到数万人。", zhDescription:"《Songs of Syx》追求规模感的城市建造与战斗模拟。从几十个公民到数万人口的庞大帝国。宏观管理——制定政策、规划城市、指挥军团。数千单位大规模战斗，场面壮观。", metaDescriptionZh:"《塞克斯之歌》帝国攻略 — 经济管理、军事策略、人口增长、城市建设。" },
  "space-haven": { tags:["colony-sim","management","survival","simulation"], zhTitle:"太空避难所", zhShortDescription:"设计并管理你的星际飞船——在宇宙中探索、交易、生存。", zhDescription:"《Space Haven》让你设计和管理星际飞船。从空白船舱开始，建造生活区、工厂、医疗舱。管理氧气、食物、电力。探索星球、开采资源、与飞船交易或战斗。", metaDescriptionZh:"《太空避难所》飞船攻略 — 船舱布局、船员管理、资源循环、太空探索。" },
  "stardew-valley": { tags:["farming","cozy","life-sim","rpg","crafting","multiplayer"], zhTitle:"星露谷物语", zhShortDescription:"像素农场 RPG 终极标杆——种田、恋爱、挖矿、钓鱼。", zhDescription:"《星露谷物语》重新定义了农场模拟游戏。继承祖父的旧农场从头开始。内容远超农耕——挖矿探索地下洞穴、在节日上与村民互动、修复社区中心、与12位角色恋爱。发售近十年仍在免费更新。", metaDescriptionZh:"《星露谷物语》全方位攻略 — 农耕布局、NPC好感度、矿洞探索、社区中心收集包。" },
  "stellaris": { tags:["strategy","4x","simulation","multiplayer"], zhTitle:"群星", zhShortDescription:"Paradox 太空 4X 策略巨作——探索银河、建立帝国。", zhDescription:"《群星》是 Paradox 的太空 4X 策略游戏。设计独特的星际文明，探索随机生成的银河系。事件系统生成丰富的叙事，每局都是独一无二的太空史诗。", metaDescriptionZh:"《群星》帝国攻略 — 种族特性搭配、科技路线、舰队配置、外交策略。" },
  "sun-haven": { tags:["farming","cozy","rpg","life-sim","multiplayer"], zhTitle:"太阳天堂", zhShortDescription:"幻想RPG农场模拟——三座城市、多种种族、魔法耕作。", zhDescription:"《Sun Haven》是幻想RPG风格农场模拟。经营人类、精灵、恶魔三座不同城市的农场。比传统农场模拟更重RPG元素——技能树、魔法系统、战斗地下城。多种族可选，支持最多8人合作。", metaDescriptionZh:"《太阳天堂》全种族农场攻略 — 三城市开荒、魔法技能、战斗技巧、NPC好感度。" },
  "the-wandering-village": { tags:["city-builder","survival","management","simulation"], zhTitle:"流浪村庄", zhShortDescription:"建造在巨兽背上的村庄——管理资源、与巨兽共生。", zhDescription:"《The Wandering Village》设定极具创意——城市建在行走巨兽背上。在巨兽背上建造农场和工坊，与其建立共生关系帮助它恢复健康。在末日荒野中，巨兽不断行走带来新挑战。", metaDescriptionZh:"《流浪村庄》巨兽背上建造攻略 — 资源管理、翁布共生系统、生物群落策略。" },
  "timberborn": { tags:["city-builder","management","survival","simulation"], zhTitle:"海狸建造者", zhShortDescription:"人类灭绝后由海狸重建文明——建造水坝、管理水源。", zhDescription:"《Timberborn》设定在人类灭绝后由进化海狸重建文明。水利工程是独特核心——建造水坝、水库和灌溉系统。垂直建筑系统让海狸城市向高处发展，形成壮观立体景观。两个派系各有不同玩法。", metaDescriptionZh:"《海狸建造者》水利工程攻略 — 水坝设计、旱季生存、垂直城市、两派系差异。" },
  "tiny-glade": { tags:["cozy","casual","creative"], zhTitle:"微光幽谷", zhShortDescription:"无压力建造玩具——在微型世界中自由建造，没有目标。", zhDescription:"《Tiny Glade》是纯粹的建造玩具。在迷人微型画布上自由绘制石头城堡、红瓦屋顶、蜿蜒小径。没有资源管理、没有敌人、没有失败条件——纯粹创造乐趣。程序化生成让建筑自然与环境融合。", metaDescriptionZh:"《微光幽谷》建造创意指南 — 城堡设计、路径规划、景观美化技巧。" },
  "travellers-rest": { tags:["farming","cozy","management","crafting"], zhTitle:"旅者驿站", zhShortDescription:"经营中世纪酒馆——酿造啤酒、烹饪美食、招待旅人。", zhDescription:"《Travellers Rest》让你经营中世纪酒馆。酿造啤酒、蒸馏烈酒、烹饪美食。酒馆自由设计——吧台、桌椅、壁炉、酒桶。扩建规模、雇佣员工、解锁新配方。画风温馨。", metaDescriptionZh:"《旅者驿站》酒馆攻略 — 酿造配方、酒馆设计、员工管理、赚钱技巧。" },
  "valheim": { tags:["survival","crafting","open-world","multiplayer","co-op"], zhTitle:"英灵神殿", zhShortDescription:"维京风格生存建造——探索第十神界、建造长屋。", zhDescription:"《Valheim》是维京风格的生存建造游戏，设定在北欧神话第十神界。从木屋到长屋，清晰的进度递进——每个 BOSS 击败后解锁新材料。低多边形画面配合光影创造独特视觉。", metaDescriptionZh:"《英灵神殿》全 BOSS 攻略 — 建造技巧、资源采集路线、生物群落生存指南。" },
  "x4-foundations": { tags:["simulation","management","strategy","open-world"], zhTitle:"X4 基石", zhShortDescription:"终极太空帝国模拟——开飞船、建工厂、组舰队。", zhDescription:"《X4: Foundations》是太空模拟游戏巅峰。每个 NPC 飞船都有真实贸易路线。从小船开始建立太空站、工厂群和舰队。经济系统完全模拟——从矿场到市场的完整贸易链。", metaDescriptionZh:"《X4 基石》太空帝国攻略 — 贸易路线、工厂布局、舰队配置指南。" },
};

const files = fs.readdirSync(DIR).filter(f => f.endsWith(".json") && f !== "index.json");
let updated = 0;
const allGames: unknown[] = [];

for (const f of files) {
  const data = JSON.parse(fs.readFileSync(path.join(DIR, f), "utf-8"));
  const slug = data.slug as string;
  const c = content[slug];
  if (!c) {
    console.log("MISSING:", slug);
    allGames.push(data);
    continue;
  }
  data.tags = c.tags;
  data.zhTitle = c.zhTitle;
  data.zhShortDescription = c.zhShortDescription;
  data.zhDescription = c.zhDescription;
  data.metaDescriptionZh = c.metaDescriptionZh;
  // Clean HTML from description
  data.description = (data.description as string).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  fs.writeFileSync(path.join(DIR, f), JSON.stringify(data, null, 2));
  allGames.push(data);
  updated++;
}

console.log(`Updated ${updated} / ${files.length} games`);

// Rebuild index
fs.writeFileSync(INDEX, JSON.stringify({
  games: allGames,
  total: allGames.length,
  updatedAt: new Date().toISOString(),
}, null, 2));
console.log(`Index: ${allGames.length} games`);
