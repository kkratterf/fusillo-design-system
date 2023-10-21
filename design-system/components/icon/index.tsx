import React from 'react';
import {
  Accessibility,
  ActivitySquare,
  Activity,
  AlarmCheck,
  AirVent,
  Airplay,
  AlarmClock,
  AlarmClockOff,
  AlarmMinus,
  AlarmPlus,
  Album,
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  AlignCenterHorizontal,
  AlignCenterVertical,
  AlignCenter,
  AlignEndHorizontal,
  AlignEndVertical,
  AlignHorizontalDistributeCenter,
  AlignHorizontalDistributeEnd,
  AlignHorizontalDistributeStart,
  AlignHorizontalJustifyCenter,
  AlignHorizontalJustifyEnd,
  AlignHorizontalJustifyStart,
  AlignHorizontalSpaceAround,
  AlignHorizontalSpaceBetween,
  AlignJustify,
  AlignLeft,
  AlignRight,
  AlignStartHorizontal,
  AlignStartVertical,
  AlignVerticalDistributeCenter,
  AlignVerticalDistributeEnd,
  AlignVerticalDistributeStart,
  AlignVerticalJustifyCenter,
  AlignVerticalJustifyEnd,
  AlignVerticalJustifyStart,
  AlignVerticalSpaceAround,
  AlignVerticalSpaceBetween,
  Ampersand,
  Ampersands,
  Anchor,
  Angry,
  Annoyed,
  Antenna,
  Aperture,
  AppWindow,
  Apple,
  ArchiveRestore,
  ArchiveX,
  Archive,
  AreaChart,
  Armchair,
  ArrowBigDownDash,
  ArrowBigDown,
  ArrowBigLeftDash,
  ArrowBigLeft,
  ArrowBigRightDash,
  ArrowBigRight,
  ArrowBigUpDash,
  ArrowBigUp,
  ArrowDownCircle,
  ArrowDownFromLine,
  ArrowDownLeftFromCircle,
  ArrowDownLeftSquare,
  ArrowDownLeft,
  ArrowDownNarrowWide,
  ArrowDownRightFromCircle,
  ArrowDownRightSquare,
  ArrowDownRight,
  ArrowDownSquare,
  ArrowDownToDot,
  ArrowDownToLine,
  ArrowDownUp,
  ArrowDown,
  ArrowLeftCircle,
  ArrowLeftFromLine,
  ArrowLeftRight,
  ArrowLeftSquare,
  ArrowLeftToLine,
  ArrowLeft,
  ArrowRightCircle,
  ArrowRightFromLine,
  ArrowRightLeft,
  ArrowRightSquare,
  ArrowRightToLine,
  ArrowRight,
  ArrowUpCircle,
  ArrowUpDown,
  ArrowUpFromDot,
  ArrowUpFromLine,
  ArrowUpLeftFromCircle,
  ArrowUpLeftSquare,
  ArrowUpLeft,
  ArrowUpRightFromCircle,
  ArrowUpRightSquare,
  ArrowUpRight,
  ArrowUpSquare,
  ArrowUpToLine,
  ArrowUpWideNarrow,
  ArrowUp,
  ArrowsUpFromLine,
  Asterisk,
  AtSign,
  Atom,
  Award,
  Axe,
  Baby,
  Backpack,
  BadgeAlert,
  BadgeCent,
  BadgeDollarSign,
  BadgeEuro,
  BadgeHelp,
  BadgeIndianRupee,
  BadgeInfo,
  BadgeJapaneseYen,
  BadgeMinus,
  BadgePercent,
  BadgePlus,
  BadgePoundSterling,
  BadgeRussianRuble,
  BadgeSwissFranc,
  BadgeX,
  Badge,
  BaggageClaim,
  Ban,
  Banana,
  Banknote,
  BarChart2,
  BarChart3,
  BarChart4,
  BarChartBig,
  BarChartHorizontalBig,
  BarChartHorizontal,
  BarChart,
  Baseline,
  Bath,
  BatteryCharging,
  BatteryFull,
  BatteryLow,
  BatteryMedium,
  BatteryWarning,
  Battery,
  Beaker,
  BeanOff,
  Bean,
  BedDouble,
  BedSingle,
  Bed,
  Beef,
  Beer,
  BellDot,
  BellMinus,
  BellOff,
  BellPlus,
  BellRing,
  Bell,
  Bike,
  Binary,
  Biohazard,
  Bird,
  Bitcoin,
  Blinds,
  Blocks,
  BluetoothConnected,
  BluetoothOff,
  BluetoothSearching,
  Bluetooth,
  Bold,
  Bomb,
  Bone,
  BookCopy,
  BookDown,
  BookKey,
  BookLock,
  BookMarked,
  BookMinus,
  BookOpenCheck,
  BookOpen,
  BookPlus,
  BookTemplate,
  BookUp2,
  BookUp,
  BookX,
  Book,
  BookmarkCheck,
  BookmarkMinus,
  BookmarkPlus,
  BookmarkX,
  Bookmark,
  BoomBox,
  Bot,
  BoxSelect,
  Box,
  Boxes,
  Brackets,
  BrainCircuit,
  BrainCog,
  Brain,
  Briefcase,
  BringToFront,
  Brush,
  BugOff,
  BugPlay,
  Bug,
  Building2,
  Building,
  BusFront,
  Bus,
  CableCar,
  Cable,
  CakeSlice,
  Cake,
  Calculator,
  CalendarCheck2,
  CalendarCheck,
  CalendarClock,
  CalendarDays,
  CalendarHeart,
  CalendarMinus,
  CalendarOff,
  CalendarPlus,
  CalendarRange,
  CalendarSearch,
  CalendarX2,
  CalendarX,
  Calendar,
  CameraOff,
  Camera,
  CandlestickChart,
  CandyCane,
  CandyOff,
  Candy,
  CarFront,
  CarTaxiFront,
  Car,
  Carrot,
  CaseLower,
  CaseSensitive,
  CaseUpper,
  CassetteTape,
  Cast,
  Castle,
  Cat,
  CheckCheck,
  CheckCircle2,
  CheckCircle,
  CheckSquare,
  Check,
  ChefHat,
  Cherry,
  ChevronDownCircle,
  ChevronDownSquare,
  ChevronDown,
  ChevronFirst,
  ChevronLast,
  ChevronLeftCircle,
  ChevronLeftSquare,
  ChevronLeft,
  ChevronRightCircle,
  ChevronRightSquare,
  ChevronRight,
  ChevronUpCircle,
  ChevronUpSquare,
  ChevronUp,
  ChevronsDownUp,
  ChevronsDown,
  ChevronsLeftRight,
  ChevronsLeft,
  ChevronsRightLeft,
  ChevronsRight,
  ChevronsUpDown,
  ChevronsUp,
  Chrome,
  Church,
  CigaretteOff,
  Cigarette,
  CircleDashed,
  CircleDollarSign,
  CircleDotDashed,
  CircleDot,
  CircleEllipsis,
  CircleEqual,
  CircleOff,
  CircleSlash,
  Circle,
  CircuitBoard,
  Citrus,
  Clapperboard,
  ClipboardCheck,
  ClipboardCopy,
  ClipboardEdit,
  ClipboardList,
  ClipboardPaste,
  ClipboardSignature,
  ClipboardType,
  ClipboardX,
  Clipboard,
  Clock1,
  Clock10,
  Clock11,
  Clock12,
  Clock2,
  Clock3,
  Clock4,
  Clock5,
  Clock6,
  Clock7,
  Clock8,
  Clock9,
  Clock,
  CloudCog,
  CloudDrizzle,
  CloudFog,
  CloudHail,
  CloudLightning,
  CloudMoonRain,
  CloudMoon,
  CloudOff,
  CloudRainWind,
  CloudRain,
  CloudSnow,
  CloudSunRain,
  CloudSun,
  Cloud,
  Cloudy,
  Clover,
  Club,
  Code2,
  Code,
  Codepen,
  Codesandbox,
  Coffee,
  Cog,
  Coins,
  Columns,
  Combine,
  Command,
  Compass,
  Component,
  Computer,
  ConciergeBell,
  Construction,
  Contact2,
  Contact,
  Container,
  Contrast,
  Cookie,
  CopyCheck,
  CopyMinus,
  CopyPlus,
  CopySlash,
  CopyX,
  Copy,
  Copyleft,
  Copyright,
  CornerDownLeft,
  CornerDownRight,
  CornerLeftDown,
  CornerLeftUp,
  CornerRightDown,
  CornerRightUp,
  CornerUpLeft,
  CornerUpRight,
  Cpu,
  CreativeCommons,
  CreditCard,
  Croissant,
  Crop,
  Cross,
  Crosshair,
  Crown,
  CupSoda,
  Currency,
  DatabaseBackup,
  DatabaseZap,
  Database,
  Delete,
  Dessert,
  Diamond,
  Dice1,
  Dice2,
  Dice3,
  Dice4,
  Dice5,
  Dice6,
  Dices,
  Diff,
  Disc2,
  Disc3,
  Disc,
  DivideCircle,
  DivideSquare,
  Divide,
  DnaOff,
  Dna,
  Dog,
  DollarSign,
  Donut,
  DoorClosed,
  DoorOpen,
  Dot,
  DownloadCloud,
  Download,
  Drama,
  Dribbble,
  Droplet,
  Droplets,
  Drumstick,
  Dumbbell,
  EarOff,
  Ear,
  EggFried,
  EggOff,
  Egg,
  EqualNot,
  Equal,
  Eraser,
  Euro,
  Expand,
  ExternalLink,
  EyeOff,
  Eye,
  Facebook,
  Factory,
  Fan,
  FastForward,
  Feather,
  FerrisWheel,
  Figma,
  FileArchive,
  FileAudio2,
  FileAudio,
  FileBadge2,
  FileBadge,
  FileBarChart2,
  FileBarChart,
  FileBox,
  FileCheck2,
  FileCheck,
  FileClock,
  FileCode2,
  FileCode,
  FileDiff,
  FileDigit,
  FileDown,
  FileEdit,
  FileHeart,
  FileImage,
  FileInput,
  FileJson2,
  FileJson,
  FileKey2,
  FileKey,
  FileLineChart,
  FileLock2,
  FileLock,
  FileMinus2,
  FileMinus,
  FileOutput,
  FilePieChart,
  FilePlus2,
  FilePlus,
  FileQuestion,
  FileScan,
  FileSearch2,
  FileSearch,
  FileSignature,
  FileSpreadsheet,
  FileStack,
  FileSymlink,
  FileTerminal,
  FileText,
  FileType2,
  FileType,
  FileUp,
  FileVideo2,
  FileVideo,
  FileVolume2,
  FileVolume,
  FileWarning,
  FileX2,
  FileX,
  File,
  Files,
  Film,
  FilterX,
  Filter,
  Fingerprint,
  FishOff,
  FishSymbol,
  Fish,
  FlagOff,
  FlagTriangleLeft,
  FlagTriangleRight,
  Flag,
  Flame,
  FlashlightOff,
  Flashlight,
  FlaskConicalOff,
  FlaskConical,
  FlaskRound,
  FlipHorizontal2,
  FlipHorizontal,
  FlipVertical2,
  FlipVertical,
  Flower2,
  Flower,
  Focus,
  FoldHorizontal,
  FoldVertical,
  FolderArchive,
  FolderCheck,
  FolderClock,
  FolderClosed,
  FolderDot,
  FolderDown,
  FolderEdit,
  FolderGit2,
  FolderGit,
  FolderHeart,
  FolderInput,
  FolderKanban,
  FolderKey,
  FolderLock,
  FolderMinus,
  FolderOpenDot,
  FolderOpen,
  FolderOutput,
  FolderPlus,
  FolderRoot,
  FolderSearch2,
  FolderSearch,
  FolderSymlink,
  FolderSync,
  FolderTree,
  FolderUp,
  FolderX,
  Folder,
  Folders,
  Footprints,
  Forklift,
  FormInput,
  Forward,
  Frame,
  Framer,
  Frown,
  Fuel,
  FunctionSquare,
  GalleryHorizontalEnd,
  GalleryHorizontal,
  GalleryThumbnails,
  GalleryVerticalEnd,
  GalleryVertical,
  Gamepad2,
  Gamepad,
  GanttChart,
  GaugeCircle,
  Gauge,
  Gavel,
  Gem,
  Ghost,
  Gift,
  GitBranchPlus,
  GitBranch,
  GitCommit,
  GitCompare,
  GitFork,
  GitMerge,
  GitPullRequestClosed,
  GitPullRequestDraft,
  GitPullRequest,
  Github,
  Gitlab,
  GlassWater,
  Glasses,
  Globe2,
  Globe,
  Goal,
  Grab,
  GraduationCap,
  Grape,
  GripHorizontal,
  GripVertical,
  Grip,
  Group,
  Hammer,
  HandMetal,
  Hand,
  HardDriveDownload,
  HardDriveUpload,
  HardDrive,
  HardHat,
  Hash,
  Haze,
  HdmiPort,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Heading,
  Headphones,
  HeartCrack,
  HeartHandshake,
  HeartOff,
  HeartPulse,
  Heart,
  HelpCircle,
  HelpingHand,
  Hexagon,
  Highlighter,
  History,
  Home,
  HopOff,
  Hop,
  Hotel,
  Hourglass,
  IceCream2,
  IceCream,
  ImageMinus,
  ImageOff,
  ImagePlus,
  Image,
  Import,
  Inbox,
  Indent,
  IndianRupee,
  Infinity,
  Info,
  Instagram,
  Italic,
  IterationCcw,
  IterationCw,
  JapaneseYen,
  Joystick,
  Kanban,
  KeyRound,
  KeySquare,
  Key,
  Keyboard,
  LampCeiling,
  LampDesk,
  LampFloor,
  LampWallDown,
  LampWallUp,
  Lamp,
  Landmark,
  Languages,
  Laptop2,
  Laptop,
  LassoSelect,
  Lasso,
  Laugh,
  Layers,
  LayoutDashboard,
  LayoutGrid,
  LayoutList,
  LayoutPanelLeft,
  LayoutPanelTop,
  LayoutTemplate,
  Layout,
  Leaf,
  LeafyGreen,
  Library,
  LifeBuoy,
  Ligature,
  LightbulbOff,
  Lightbulb,
  LineChart,
  Link2Off,
  Link2,
  Link,
  Linkedin,
  ListChecks,
  ListEnd,
  ListFilter,
  ListMinus,
  ListMusic,
  ListOrdered,
  ListPlus,
  ListRestart,
  ListStart,
  ListTodo,
  ListTree,
  ListVideo,
  ListX,
  List,
  Loader2,
  Loader,
  LocateFixed,
  LocateOff,
  Locate,
  Lock,
  LogIn,
  LogOut,
  Lollipop,
  Luggage,
  MSquare,
  Magnet,
  MailCheck,
  MailMinus,
  MailOpen,
  MailPlus,
  MailQuestion,
  MailSearch,
  MailWarning,
  MailX,
  Mail,
  Mailbox,
  Mails,
  MapPinOff,
  MapPin,
  Map,
  Martini,
  Maximize2,
  Maximize,
  Medal,
  MegaphoneOff,
  Megaphone,
  Meh,
  MemoryStick,
  MenuSquare,
  Menu,
  Merge,
  MessageCircle,
  MessageSquareDashed,
  MessageSquarePlus,
  MessageSquare,
  MessagesSquare,
  Mic2,
  MicOff,
  Mic,
  Microscope,
  Microwave,
  Milestone,
  MilkOff,
  Milk,
  Minimize2,
  Minimize,
  MinusCircle,
  MinusSquare,
  Minus,
  MonitorCheck,
  MonitorDot,
  MonitorDown,
  MonitorOff,
  MonitorPause,
  MonitorPlay,
  MonitorSmartphone,
  MonitorSpeaker,
  MonitorStop,
  MonitorUp,
  MonitorX,
  Monitor,
  MoonStar,
  Moon,
  MoreHorizontal,
  MoreVertical,
  MountainSnow,
  Mountain,
  MousePointer2,
  MousePointerClick,
  MousePointerSquareDashed,
  MousePointer,
  Mouse,
  MoveDiagonal2,
  MoveDiagonal,
  MoveDownLeft,
  MoveDownRight,
  MoveDown,
  MoveHorizontal,
  MoveLeft,
  MoveRight,
  MoveUpLeft,
  MoveUpRight,
  MoveUp,
  MoveVertical,
  Move,
  Music2,
  Music3,
  Music4,
  Music,
  Navigation2Off,
  Navigation2,
  NavigationOff,
  Navigation,
  Network,
  Newspaper,
  Nfc,
  NutOff,
  Nut,
  Octagon,
  Option,
  Orbit,
  Outdent,
  Package2,
  PackageCheck,
  PackageMinus,
  PackageOpen,
  PackagePlus,
  PackageSearch,
  PackageX,
  Package,
  PaintBucket,
  Paintbrush2,
  Paintbrush,
  Palette,
  Palmtree,
  PanelBottomClose,
  PanelBottomInactive,
  PanelBottomOpen,
  PanelBottom,
  PanelLeftInactive,
  PanelRightClose,
  PanelRightInactive,
  PanelRightOpen,
  PanelRight,
  PanelTopClose,
  PanelTopInactive,
  PanelTopOpen,
  PanelTop,
  Paperclip,
  Parentheses,
  ParkingCircleOff,
  ParkingCircle,
  ParkingMeter,
  ParkingSquareOff,
  ParkingSquare,
  PartyPopper,
  PauseCircle,
  PauseOctagon,
  Pause,
  PawPrint,
  PcCase,
  PenTool,
  PencilLine,
  PencilRuler,
  Pencil,
  PercentCircle,
  PercentDiamond,
  PercentSquare,
  Percent,
  PersonStanding,
  PhoneCall,
  PhoneForwarded,
  PhoneIncoming,
  PhoneMissed,
  PhoneOff,
  PhoneOutgoing,
  Phone,
  PiSquare,
  Pi,
  PictureInPicture2,
  PictureInPicture,
  PieChart,
  PiggyBank,
  PilcrowSquare,
  Pilcrow,
  Pill,
  PinOff,
  Pin,
  Pipette,
  Pizza,
  PlaneLanding,
  PlaneTakeoff,
  Plane,
  PlayCircle,
  PlaySquare,
  Play,
  Plug2,
  PlugZap2,
  PlugZap,
  Plug,
  PlusCircle,
  PlusSquare,
  Plus,
  PocketKnife,
  Pocket,
  Podcast,
  Pointer,
  Popcorn,
  Popsicle,
  PoundSterling,
  PowerOff,
  Power,
  Presentation,
  Printer,
  Projector,
  Puzzle,
  QrCode,
  Quote,
  Rabbit,
  Radar,
  Radiation,
  RadioReceiver,
  RadioTower,
  Radio,
  RailSymbol,
  Rainbow,
  Rat,
  Ratio,
  Receipt,
  RectangleHorizontal,
  RectangleVertical,
  Recycle,
  Redo2,
  RedoDot,
  Redo,
  RefreshCcwDot,
  RefreshCcw,
  RefreshCwOff,
  RefreshCw,
  Refrigerator,
  Regex,
  RemoveFormatting,
  Repeat1,
  Repeat2,
  Repeat,
  ReplaceAll,
  Replace,
  ReplyAll,
  Reply,
  Rewind,
  Rocket,
  RockingChair,
  RollerCoaster,
  RotateCcw,
  RotateCw,
  Router,
  Rows,
  Rss,
  Ruler,
  RussianRuble,
  Sailboat,
  Salad,
  Sandwich,
  SatelliteDish,
  Satellite,
  SaveAll,
  Save,
  Scale,
  Scaling,
  ScanFace,
  ScanLine,
  Scan,
  ScatterChart,
  School2,
  School,
  ScissorsLineDashed,
  ScissorsSquareDashedBottom,
  ScissorsSquare,
  Scissors,
  ScreenShareOff,
  ScreenShare,
  ScrollText,
  Scroll,
  SearchCheck,
  SearchCode,
  SearchSlash,
  SearchX,
  Search,
  SendToBack,
  Send,
  SeparatorHorizontal,
  SeparatorVertical,
  ServerCog,
  ServerCrash,
  ServerOff,
  Server,
  Settings2,
  Settings,
  Shapes,
  Share2,
  Share,
  Sheet,
  Shell,
  ShieldAlert,
  ShieldBan,
  ShieldCheck,
  ShieldEllipsis,
  ShieldHalf,
  ShieldMinus,
  ShieldOff,
  ShieldPlus,
  ShieldQuestion,
  Shield,
  ShipWheel,
  Ship,
  Shirt,
  ShoppingBag,
  ShoppingBasket,
  ShoppingCart,
  Shovel,
  ShowerHead,
  Shrink,
  Shrub,
  Shuffle,
  SigmaSquare,
  Sigma,
  SignalHigh,
  SignalLow,
  SignalMedium,
  SignalZero,
  Signal,
  Siren,
  SkipBack,
  SkipForward,
  Skull,
  Slack,
  Slash,
  Slice,
  SlidersHorizontal,
  Sliders,
  SmartphoneCharging,
  SmartphoneNfc,
  Smartphone,
  SmilePlus,
  Smile,
  Snail,
  Snowflake,
  Sofa,
  Soup,
  Space,
  Spade,
  Sparkle,
  Speaker,
  Speech,
  SpellCheck2,
  SpellCheck,
  Spline,
  SplitSquareHorizontal,
  SplitSquareVertical,
  Split,
  SprayCan,
  Sprout,
  SquareAsterisk,
  SquareCode,
  SquareDashedBottomCode,
  SquareDashedBottom,
  SquareDot,
  SquareEqual,
  SquareSlash,
  SquareStack,
  Square,
  Squirrel,
  Stamp,
  StarHalf,
  StarOff,
  Star,
  StepBack,
  StepForward,
  Stethoscope,
  Sticker,
  StickyNote,
  StopCircle,
  Store,
  StretchHorizontal,
  StretchVertical,
  Strikethrough,
  Subscript,
  Subtitles,
  SunDim,
  SunMedium,
  SunMoon,
  SunSnow,
  Sun,
  Sunrise,
  Sunset,
  Superscript,
  SwissFranc,
  SwitchCamera,
  Sword,
  Swords,
  Syringe,
  Table2,
  TableProperties,
  Table,
  TabletSmartphone,
  Tablet,
  Tablets,
  Tag,
  Tags,
  Tally1,
  Tally2,
  Tally3,
  Tally4,
  Tally5,
  Target,
  Tent,
  TerminalSquare,
  Terminal,
  TestTube2,
  TestTube,
  TestTubes,
  TextCursorInput,
  TextCursor,
  TextQuote,
  Text,
  Theater,
  ThermometerSnowflake,
  ThermometerSun,
  Thermometer,
  ThumbsDown,
  ThumbsUp,
  Ticket,
  TimerOff,
  TimerReset,
  Timer,
  ToggleLeft,
  ToggleRight,
  Tornado,
  TouchpadOff,
  Touchpad,
  TowerControl,
  ToyBrick,
  Tractor,
  TrafficCone,
  TrainFrontTunnel,
  TrainFront,
  TrainTrack,
  Trash2,
  Trash,
  TreeDeciduous,
  TreePine,
  Trees,
  Trello,
  TrendingDown,
  TrendingUp,
  TriangleRight,
  Triangle,
  Trophy,
  Truck,
  Turtle,
  Tv2,
  Tv,
  Twitch,
  Twitter,
  Type,
  Umbrella,
  Underline,
  Undo2,
  UndoDot,
  Undo,
  UnfoldHorizontal,
  UnfoldVertical,
  Ungroup,
  Unlink2,
  Unlink,
  Unlock,
  Unplug,
  UploadCloud,
  Upload,
  Usb,
  User2,
  UserCheck2,
  UserCheck,
  UserCircle2,
  UserCircle,
  UserCog2,
  UserCog,
  UserMinus2,
  UserMinus,
  UserPlus2,
  UserPlus,
  UserSquare2,
  UserSquare,
  UserX2,
  UserX,
  User,
  Users2,
  Users,
  UtensilsCrossed,
  Utensils,
  UtilityPole,
  Variable,
  Vegan,
  VenetianMask,
  VibrateOff,
  Vibrate,
  VideoOff,
  Video,
  Videotape,
  View,
  Voicemail,
  Volume1,
  Volume2,
  VolumeX,
  Volume,
  Vote,
  Wallet2,
  WalletCards,
  Wallet,
  Wallpaper,
  Wand2,
  Wand,
  Warehouse,
  Watch,
  Waves,
  Webcam,
  Webhook,
  WheatOff,
  Wheat,
  WholeWord,
  WifiOff,
  Wifi,
  Wind,
  WineOff,
  Wine,
  Workflow,
  WrapText,
  Wrench,
  XCircle,
  XOctagon,
  XSquare,
  X,
  Youtube,
  ZapOff,
  Zap,
  ZoomIn,
  ZoomOut,
  ArrowDown01,
  ArrowDown10,
  ArrowDownAZ,
  ArrowDownWideNarrow,
  ArrowDownZA,
  ArrowUp01,
  ArrowUp10,
  ArrowUpAZ,
  ArrowUpNarrowWide,
  ArrowUpZA,
  Axis3D,
  BadgeCheck,
  Braces,
  CircleSlash2,
  FileAxis3D,
  FileCog,
  FolderCog,
  GanttChartSquare,
  Grid2X2,
  Grid,
  KanbanSquareDashed,
  KanbanSquare,
  Inspect,
  Move3D,
  PanelLeftClose,
  PanelLeftOpen,
  PanelLeft,
  Edit3,
  Edit,
  Edit2,
  Rotate3D,
  Scale3D,
  SendHorizonal,
  ShieldClose,
  Sparkles,
  TextSelect,
  Train,
} from 'lucide-react';

import '../../style/tokens.css';

type IconProps = {
  color: keyof typeof colorToHex;
  size: keyof typeof sizeToPx;
};

const colorToHex: Record<string, string> = {
  default: 'var(--color-icon)',
  brand: 'var(--color-icon-brand)',
  danger: 'var(--color-icon-danger)',
  warning: 'var(--color-icon-warning)',
  success: 'var(--color-icon-success)',
  info: 'var(--color-icon-info)',
  discovery: 'var(--color-icon-discovery)',
};

const sizeToPx: Record<string, string> = {
  xs: '16px',
  sm: '24px',
  xl: '32px',
};

const stroke = 2;

const getIcon = (color: IconProps['color'], size: IconProps['size']) => {
  const pixelSize = sizeToPx[size];
  const colorHex = colorToHex[color];
  return { pixelSize, colorHex };
};

const IconAccessibility: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <Accessibility color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconActivitySquare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ActivitySquare color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconActivity: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Activity color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconAlarmCheck: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <AlarmCheck color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconAirVent: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <AirVent color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconAirplay: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Airplay color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconAlarmClock: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <AlarmClock color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconAlarmClockOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlarmClockOff color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconAlarmMinus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <AlarmMinus color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconAlarmPlus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <AlarmPlus color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconAlbum: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Album color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconAlertCircle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <AlertCircle color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconAlertOctagon: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlertOctagon color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconAlertTriangle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlertTriangle color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconAlignCenterHorizontal: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignCenterHorizontal
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconAlignCenterVertical: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignCenterVertical
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconAlignCenter: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <AlignCenter color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconAlignEndHorizontal: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignEndHorizontal
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconAlignEndVertical: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignEndVertical color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconAlignHorizontalDistributeCenter: React.FC<IconProps> = ({
  color,
  size,
}) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignHorizontalDistributeCenter
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconAlignHorizontalDistributeEnd: React.FC<IconProps> = ({
  color,
  size,
}) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignHorizontalDistributeEnd
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconAlignHorizontalDistributeStart: React.FC<IconProps> = ({
  color,
  size,
}) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignHorizontalDistributeStart
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconAlignHorizontalJustifyCenter: React.FC<IconProps> = ({
  color,
  size,
}) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignHorizontalJustifyCenter
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconAlignHorizontalJustifyEnd: React.FC<IconProps> = ({
  color,
  size,
}) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignHorizontalJustifyEnd
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconAlignHorizontalJustifyStart: React.FC<IconProps> = ({
  color,
  size,
}) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignHorizontalJustifyStart
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconAlignHorizontalSpaceAround: React.FC<IconProps> = ({
  color,
  size,
}) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignHorizontalSpaceAround
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconAlignHorizontalSpaceBetween: React.FC<IconProps> = ({
  color,
  size,
}) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignHorizontalSpaceBetween
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconAlignJustify: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignJustify color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconAlignLeft: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <AlignLeft color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconAlignRight: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <AlignRight color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconAlignStartHorizontal: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignStartHorizontal
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconAlignStartVertical: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignStartVertical
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconAlignVerticalDistributeCenter: React.FC<IconProps> = ({
  color,
  size,
}) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignVerticalDistributeCenter
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconAlignVerticalDistributeEnd: React.FC<IconProps> = ({
  color,
  size,
}) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignVerticalDistributeEnd
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconAlignVerticalDistributeStart: React.FC<IconProps> = ({
  color,
  size,
}) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignVerticalDistributeStart
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconAlignVerticalJustifyCenter: React.FC<IconProps> = ({
  color,
  size,
}) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignVerticalJustifyCenter
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconAlignVerticalJustifyEnd: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignVerticalJustifyEnd
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconAlignVerticalJustifyStart: React.FC<IconProps> = ({
  color,
  size,
}) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignVerticalJustifyStart
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconAlignVerticalSpaceAround: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignVerticalSpaceAround
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconAlignVerticalSpaceBetween: React.FC<IconProps> = ({
  color,
  size,
}) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignVerticalSpaceBetween
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconAmpersand: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Ampersand color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconAmpersands: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Ampersands color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconAnchor: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Anchor color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconAngry: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Angry color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconAnnoyed: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Annoyed color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconAntenna: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Antenna color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconAperture: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Aperture color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconAppWindow: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <AppWindow color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconApple: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Apple color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconArchiveRestore: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArchiveRestore color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconArchiveX: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ArchiveX color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconArchive: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Archive color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconAreaChart: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <AreaChart color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconArmchair: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Armchair color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconArrowBigDownDash: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowBigDownDash color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconArrowBigDown: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowBigDown color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconArrowBigLeftDash: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowBigLeftDash color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconArrowBigLeft: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowBigLeft color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconArrowBigRightDash: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowBigRightDash color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconArrowBigRight: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowBigRight color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconArrowBigUpDash: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowBigUpDash color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconArrowBigUp: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ArrowBigUp color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconArrowDownCircle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowDownCircle color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconArrowDownFromLine: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowDownFromLine color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconArrowDownLeftFromCircle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowDownLeftFromCircle
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconArrowDownLeftSquare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowDownLeftSquare
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconArrowDownLeft: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowDownLeft color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconArrowDownNarrowWide: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowDownNarrowWide
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconArrowDownRightFromCircle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowDownRightFromCircle
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconArrowDownRightSquare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowDownRightSquare
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconArrowDownRight: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowDownRight color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconArrowDownSquare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowDownSquare color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconArrowDownToDot: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowDownToDot color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconArrowDownToLine: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowDownToLine color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconArrowDownUp: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ArrowDownUp color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconArrowDown: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ArrowDown color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconArrowLeftCircle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowLeftCircle color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconArrowLeftFromLine: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowLeftFromLine color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconArrowLeftRight: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowLeftRight color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconArrowLeftSquare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowLeftSquare color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconArrowLeftToLine: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowLeftToLine color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconArrowLeft: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ArrowLeft color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconArrowRightCircle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowRightCircle color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconArrowRightFromLine: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowRightFromLine
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconArrowRightLeft: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowRightLeft color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconArrowRightSquare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowRightSquare color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconArrowRightToLine: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowRightToLine color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconArrowRight: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ArrowRight color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconArrowUpCircle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowUpCircle color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconArrowUpDown: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ArrowUpDown color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconArrowUpFromDot: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowUpFromDot color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconArrowUpFromLine: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowUpFromLine color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconArrowUpLeftFromCircle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowUpLeftFromCircle
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconArrowUpLeftSquare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowUpLeftSquare color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconArrowUpLeft: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ArrowUpLeft color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconArrowUpRightFromCircle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowUpRightFromCircle
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconArrowUpRightSquare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowUpRightSquare
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconArrowUpRight: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowUpRight color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconArrowUpSquare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowUpSquare color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconArrowUpToLine: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowUpToLine color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconArrowUpWideNarrow: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowUpWideNarrow color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconArrowUp: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ArrowUp color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconArrowsUpFromLine: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowsUpFromLine color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconAsterisk: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Asterisk color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconAtSign: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <AtSign color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconAtom: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Atom color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconAward: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Award color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconAxe: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Axe color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBaby: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Baby color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBackpack: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Backpack color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBadgeAlert: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BadgeAlert color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBadgeCent: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BadgeCent color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBadgeDollarSign: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BadgeDollarSign color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconBadgeEuro: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BadgeEuro color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBadgeHelp: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BadgeHelp color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBadgeIndianRupee: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BadgeIndianRupee color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconBadgeInfo: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BadgeInfo color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBadgeJapaneseYen: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BadgeJapaneseYen color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconBadgeMinus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BadgeMinus color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBadgePercent: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BadgePercent color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconBadgePlus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BadgePlus color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBadgePoundSterling: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BadgePoundSterling
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconBadgeRussianRuble: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BadgeRussianRuble color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconBadgeSwissFranc: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BadgeSwissFranc color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconBadgeX: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BadgeX color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBadge: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Badge color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBaggageClaim: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BaggageClaim color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconBan: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Ban color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBanana: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Banana color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBanknote: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Banknote color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBarChart2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BarChart2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBarChart3: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BarChart3 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBarChart4: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BarChart4 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBarChartBig: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BarChartBig color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBarChartHorizontalBig: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BarChartHorizontalBig
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconBarChartHorizontal: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BarChartHorizontal
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconBarChart: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BarChart color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBaseline: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Baseline color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBath: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Bath color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBatteryCharging: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BatteryCharging color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconBatteryFull: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BatteryFull color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBatteryLow: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BatteryLow color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBatteryMedium: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BatteryMedium color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconBatteryWarning: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BatteryWarning color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconBattery: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Battery color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBeaker: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Beaker color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBeanOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BeanOff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBean: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Bean color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBedDouble: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BedDouble color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBedSingle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BedSingle color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBed: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Bed color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBeef: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Beef color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBeer: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Beer color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBellDot: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BellDot color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBellMinus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BellMinus color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBellOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BellOff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBellPlus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BellPlus color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBellRing: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BellRing color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBell: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Bell color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBike: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Bike color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBinary: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Binary color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBiohazard: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Biohazard color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBird: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Bird color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBitcoin: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Bitcoin color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBlinds: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Blinds color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBlocks: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Blocks color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBluetoothConnected: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BluetoothConnected
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconBluetoothOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BluetoothOff color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconBluetoothSearching: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BluetoothSearching
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconBluetooth: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Bluetooth color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBold: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Bold color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBomb: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Bomb color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBone: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Bone color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBookCopy: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BookCopy color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBookDown: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BookDown color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBookKey: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BookKey color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBookLock: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BookLock color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBookMarked: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BookMarked color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBookMinus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BookMinus color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBookOpenCheck: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BookOpenCheck color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconBookOpen: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BookOpen color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBookPlus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BookPlus color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBookTemplate: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BookTemplate color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconBookUp2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BookUp2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBookUp: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BookUp color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBookX: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BookX color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBook: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Book color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBookmarkCheck: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BookmarkCheck color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconBookmarkMinus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BookmarkMinus color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconBookmarkPlus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BookmarkPlus color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconBookmarkX: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BookmarkX color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBookmark: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Bookmark color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBoomBox: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BoomBox color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBot: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Bot color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBoxSelect: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BoxSelect color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBox: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Box color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBoxes: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Boxes color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBrackets: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Brackets color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBrainCircuit: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BrainCircuit color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconBrainCog: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BrainCog color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBrain: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Brain color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBriefcase: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Briefcase color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBringToFront: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BringToFront color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconBrush: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Brush color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBugOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BugOff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBugPlay: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BugPlay color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBug: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Bug color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBuilding2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Building2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBuilding: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Building color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBusFront: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BusFront color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Bus color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCableCar: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CableCar color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCable: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Cable color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCakeSlice: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CakeSlice color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCake: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Cake color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCalculator: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Calculator color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCalendarCheck2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CalendarCheck2 color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconCalendarCheck: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CalendarCheck color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconCalendarClock: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CalendarClock color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconCalendarDays: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CalendarDays color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconCalendarHeart: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CalendarHeart color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconCalendarMinus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CalendarMinus color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconCalendarOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CalendarOff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCalendarPlus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CalendarPlus color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconCalendarRange: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CalendarRange color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconCalendarSearch: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CalendarSearch color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconCalendarX2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CalendarX2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCalendarX: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CalendarX color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCalendar: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Calendar color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCameraOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CameraOff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCamera: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Camera color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCandlestickChart: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CandlestickChart color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconCandyCane: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CandyCane color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCandyOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CandyOff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCandy: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Candy color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCarFront: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CarFront color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCarTaxiFront: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CarTaxiFront color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconCar: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Car color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCarrot: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Carrot color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCaseLower: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CaseLower color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCaseSensitive: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CaseSensitive color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconCaseUpper: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CaseUpper color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCassetteTape: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CassetteTape color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconCast: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Cast color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCastle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Castle color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCat: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Cat color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCheckCheck: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CheckCheck color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCheckCircle2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CheckCircle2 color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconCheckCircle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CheckCircle color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCheckSquare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CheckSquare color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCheck: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Check color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconChefHat: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ChefHat color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCherry: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Cherry color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconChevronDownCircle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ChevronDownCircle color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconChevronDownSquare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ChevronDownSquare color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconChevronDown: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ChevronDown color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconChevronFirst: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ChevronFirst color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconChevronLast: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ChevronLast color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconChevronLeftCircle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ChevronLeftCircle color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconChevronLeftSquare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ChevronLeftSquare color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconChevronLeft: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ChevronLeft color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconChevronRightCircle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ChevronRightCircle
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconChevronRightSquare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ChevronRightSquare
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconChevronRight: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ChevronRight color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconChevronUpCircle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ChevronUpCircle color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconChevronUpSquare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ChevronUpSquare color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconChevronUp: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ChevronUp color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconChevronsDownUp: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ChevronsDownUp color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconChevronsDown: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ChevronsDown color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconChevronsLeftRight: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ChevronsLeftRight color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconChevronsLeft: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ChevronsLeft color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconChevronsRightLeft: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ChevronsRightLeft color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconChevronsRight: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ChevronsRight color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconChevronsUpDown: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ChevronsUpDown color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconChevronsUp: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ChevronsUp color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconChrome: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Chrome color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconChurch: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Church color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCigaretteOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CigaretteOff color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconCigarette: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Cigarette color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCircleDashed: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CircleDashed color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconCircleDollarSign: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CircleDollarSign color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconCircleDotDashed: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CircleDotDashed color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconCircleDot: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CircleDot color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCircleEllipsis: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CircleEllipsis color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconCircleEqual: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CircleEqual color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCircleOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CircleOff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCircleSlash: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CircleSlash color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCircle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Circle color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCircuitBoard: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CircuitBoard color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconCitrus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Citrus color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconClapperboard: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <Clapperboard color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconClipboardCheck: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ClipboardCheck color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconClipboardCopy: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ClipboardCopy color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconClipboardEdit: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ClipboardEdit color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconClipboardList: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ClipboardList color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconClipboardPaste: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ClipboardPaste color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconClipboardSignature: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ClipboardSignature
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconClipboardType: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ClipboardType color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconClipboardX: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ClipboardX color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconClipboard: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Clipboard color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconClock1: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Clock1 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconClock10: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Clock10 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconClock11: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Clock11 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconClock12: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Clock12 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconClock2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Clock2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconClock3: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Clock3 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconClock4: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Clock4 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconClock5: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Clock5 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconClock6: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Clock6 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconClock7: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Clock7 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconClock8: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Clock8 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconClock9: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Clock9 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconClock: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Clock color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCloudCog: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CloudCog color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCloudDrizzle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CloudDrizzle color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconCloudFog: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CloudFog color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCloudHail: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CloudHail color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCloudLightning: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CloudLightning color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconCloudMoonRain: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CloudMoonRain color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconCloudMoon: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CloudMoon color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCloudOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CloudOff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCloudRainWind: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CloudRainWind color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconCloudRain: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CloudRain color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCloudSnow: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CloudSnow color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCloudSunRain: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CloudSunRain color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconCloudSun: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CloudSun color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCloud: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Cloud color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCloudy: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Cloudy color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconClover: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Clover color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconClub: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Club color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCode2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Code2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCode: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Code color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCodepen: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Codepen color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCodesandbox: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Codesandbox color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCoffee: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Coffee color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCog: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Cog color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCoins: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Coins color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconColumns: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Columns color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCombine: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Combine color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCommand: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Command color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCompass: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Compass color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconComponent: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Component color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconComputer: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Computer color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconConciergeBell: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ConciergeBell color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconConstruction: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <Construction color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconContact2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Contact2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconContact: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Contact color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconContainer: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Container color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconContrast: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Contrast color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCookie: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Cookie color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCopyCheck: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CopyCheck color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCopyMinus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CopyMinus color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCopyPlus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CopyPlus color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCopySlash: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CopySlash color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCopyX: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CopyX color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCopy: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Copy color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCopyleft: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Copyleft color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCopyright: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Copyright color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCornerDownLeft: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CornerDownLeft color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconCornerDownRight: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CornerDownRight color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconCornerLeftDown: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CornerLeftDown color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconCornerLeftUp: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CornerLeftUp color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconCornerRightDown: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CornerRightDown color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconCornerRightUp: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CornerRightUp color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconCornerUpLeft: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CornerUpLeft color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconCornerUpRight: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CornerUpRight color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconCpu: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Cpu color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCreativeCommons: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CreativeCommons color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconCreditCard: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CreditCard color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCroissant: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Croissant color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCrop: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Crop color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCross: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Cross color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCrosshair: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Crosshair color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCrown: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Crown color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCupSoda: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CupSoda color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCurrency: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Currency color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconDatabaseBackup: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <DatabaseBackup color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconDatabaseZap: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <DatabaseZap color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconDatabase: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Database color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconDelete: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Delete color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconDessert: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Dessert color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconDiamond: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Diamond color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconDice1: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Dice1 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconDice2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Dice2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconDice3: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Dice3 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconDice4: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Dice4 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconDice5: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Dice5 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconDice6: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Dice6 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconDices: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Dices color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconDiff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Diff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconDisc2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Disc2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconDisc3: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Disc3 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconDisc: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Disc color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconDivideCircle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <DivideCircle color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconDivideSquare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <DivideSquare color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconDivide: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Divide color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconDnaOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <DnaOff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconDna: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Dna color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconDog: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Dog color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconDollarSign: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <DollarSign color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconDonut: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Donut color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconDoorClosed: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <DoorClosed color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconDoorOpen: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <DoorOpen color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconDot: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Dot color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconDownloadCloud: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <DownloadCloud color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconDownload: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Download color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconDrama: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Drama color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconDribbble: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Dribbble color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconDroplet: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Droplet color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconDroplets: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Droplets color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconDrumstick: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Drumstick color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconDumbbell: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Dumbbell color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconEarOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <EarOff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconEar: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Ear color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconEggFried: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <EggFried color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconEggOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <EggOff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconEgg: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Egg color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconEqualNot: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <EqualNot color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconEqual: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Equal color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconEraser: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Eraser color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconEuro: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Euro color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconExpand: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Expand color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconExternalLink: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ExternalLink color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconEyeOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <EyeOff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconEye: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Eye color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFacebook: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Facebook color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFactory: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Factory color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFan: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Fan color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFastForward: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FastForward color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFeather: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Feather color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFerrisWheel: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FerrisWheel color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFigma: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Figma color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileArchive: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileArchive color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileAudio2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileAudio2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileAudio: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileAudio color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileBadge2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileBadge2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileBadge: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileBadge color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileBarChart2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FileBarChart2 color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconFileBarChart: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FileBarChart color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconFileBox: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileBox color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileCheck2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileCheck2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileCheck: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileCheck color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileClock: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileClock color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileCode2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileCode2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileCode: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileCode color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileDiff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileDiff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileDigit: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileDigit color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileDown: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileDown color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileEdit: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileEdit color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileHeart: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileHeart color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileImage: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileImage color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileInput: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileInput color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileJson2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileJson2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileJson: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileJson color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileKey2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileKey2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileKey: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileKey color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileLineChart: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FileLineChart color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconFileLock2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileLock2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileLock: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileLock color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileMinus2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileMinus2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileMinus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileMinus color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileOutput: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileOutput color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFilePieChart: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FilePieChart color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconFilePlus2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FilePlus2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFilePlus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FilePlus color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileQuestion: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FileQuestion color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconFileScan: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileScan color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileSearch2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileSearch2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileSearch: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileSearch color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileSignature: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FileSignature color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconFileSpreadsheet: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FileSpreadsheet color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconFileStack: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileStack color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileSymlink: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileSymlink color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileTerminal: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FileTerminal color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconFileText: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileText color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileType2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileType2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileType: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileType color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileUp: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileUp color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileVideo2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileVideo2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileVideo: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileVideo color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileVolume2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileVolume2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileVolume: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileVolume color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileWarning: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileWarning color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileX2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileX2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileX: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileX color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFile: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <File color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFiles: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Files color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFilm: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Film color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFilterX: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FilterX color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFilter: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Filter color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFingerprint: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Fingerprint color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFishOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FishOff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFishSymbol: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FishSymbol color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFish: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Fish color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFlagOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FlagOff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFlagTriangleLeft: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FlagTriangleLeft color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconFlagTriangleRight: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FlagTriangleRight color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconFlag: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Flag color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFlame: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Flame color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFlashlightOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FlashlightOff color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconFlashlight: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Flashlight color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFlaskConicalOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FlaskConicalOff color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconFlaskConical: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FlaskConical color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconFlaskRound: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FlaskRound color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFlipHorizontal2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FlipHorizontal2 color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconFlipHorizontal: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FlipHorizontal color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconFlipVertical2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FlipVertical2 color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconFlipVertical: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FlipVertical color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconFlower2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Flower2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFlower: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Flower color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFocus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Focus color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFoldHorizontal: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FoldHorizontal color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconFoldVertical: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FoldVertical color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconFolderArchive: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FolderArchive color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconFolderCheck: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderCheck color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFolderClock: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderClock color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFolderClosed: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FolderClosed color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconFolderDot: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderDot color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFolderDown: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderDown color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFolderEdit: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderEdit color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFolderGit2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderGit2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFolderGit: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderGit color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFolderHeart: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderHeart color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFolderInput: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderInput color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFolderKanban: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FolderKanban color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconFolderKey: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderKey color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFolderLock: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderLock color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFolderMinus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderMinus color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFolderOpenDot: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FolderOpenDot color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconFolderOpen: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderOpen color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFolderOutput: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FolderOutput color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconFolderPlus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderPlus color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFolderRoot: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderRoot color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFolderSearch2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FolderSearch2 color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconFolderSearch: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FolderSearch color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconFolderSymlink: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FolderSymlink color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconFolderSync: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderSync color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFolderTree: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderTree color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFolderUp: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderUp color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFolderX: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderX color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFolder: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Folder color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFolders: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Folders color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFootprints: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Footprints color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconForklift: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Forklift color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFormInput: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FormInput color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconForward: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Forward color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFrame: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Frame color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFramer: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Framer color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFrown: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Frown color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFuel: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Fuel color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFunctionSquare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FunctionSquare color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconGalleryHorizontalEnd: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <GalleryHorizontalEnd
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconGalleryHorizontal: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <GalleryHorizontal color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconGalleryThumbnails: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <GalleryThumbnails color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconGalleryVerticalEnd: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <GalleryVerticalEnd
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconGalleryVertical: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <GalleryVertical color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconGamepad2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Gamepad2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconGamepad: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Gamepad color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconGanttChart: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <GanttChart color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconGaugeCircle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <GaugeCircle color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconGauge: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Gauge color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconGavel: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Gavel color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconGem: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Gem color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconGhost: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Ghost color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconGift: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Gift color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconGitBranchPlus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <GitBranchPlus color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconGitBranch: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <GitBranch color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconGitCommit: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <GitCommit color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconGitCompare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <GitCompare color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconGitFork: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <GitFork color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconGitMerge: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <GitMerge color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconGitPullRequestClosed: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <GitPullRequestClosed
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconGitPullRequestDraft: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <GitPullRequestDraft
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconGitPullRequest: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <GitPullRequest color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconGithub: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Github color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconGitlab: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Gitlab color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconGlassWater: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <GlassWater color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconGlasses: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Glasses color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconGlobe2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Globe2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconGlobe: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Globe color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconGoal: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Goal color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconGrab: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Grab color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconGraduationCap: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <GraduationCap color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconGrape: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Grape color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconGripHorizontal: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <GripHorizontal color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconGripVertical: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <GripVertical color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconGrip: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Grip color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconGroup: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Group color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconHammer: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Hammer color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconHandMetal: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <HandMetal color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconHand: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Hand color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconHardDriveDownload: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <HardDriveDownload color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconHardDriveUpload: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <HardDriveUpload color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconHardDrive: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <HardDrive color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconHardHat: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <HardHat color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconHash: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Hash color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconHaze: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Haze color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconHdmiPort: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <HdmiPort color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconHeading1: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Heading1 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconHeading2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Heading2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconHeading3: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Heading3 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconHeading4: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Heading4 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconHeading5: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Heading5 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconHeading6: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Heading6 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconHeading: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Heading color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconHeadphones: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Headphones color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconHeartCrack: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <HeartCrack color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconHeartHandshake: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <HeartHandshake color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconHeartOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <HeartOff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconHeartPulse: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <HeartPulse color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconHeart: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Heart color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconHelpCircle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <HelpCircle color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconHelpingHand: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <HelpingHand color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconHexagon: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Hexagon color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconHighlighter: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Highlighter color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconHistory: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <History color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconHome: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Home color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconHopOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <HopOff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconHop: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Hop color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconHotel: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Hotel color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconHourglass: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Hourglass color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconIceCream2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <IceCream2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconIceCream: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <IceCream color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconImageMinus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ImageMinus color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconImageOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ImageOff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconImagePlus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ImagePlus color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconImage: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Image color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconImport: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Import color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconInbox: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Inbox color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconIndent: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Indent color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconIndianRupee: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <IndianRupee color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconInfinity: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Infinity color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconInfo: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Info color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconInstagram: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Instagram color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconItalic: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Italic color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconIterationCcw: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <IterationCcw color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconIterationCw: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <IterationCw color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconJapaneseYen: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <JapaneseYen color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconJoystick: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Joystick color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconKanban: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Kanban color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconKeyRound: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <KeyRound color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconKeySquare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <KeySquare color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconKey: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Key color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconKeyboard: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Keyboard color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconLampCeiling: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <LampCeiling color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconLampDesk: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <LampDesk color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconLampFloor: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <LampFloor color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconLampWallDown: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <LampWallDown color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconLampWallUp: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <LampWallUp color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconLamp: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Lamp color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconLandmark: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Landmark color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconLanguages: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Languages color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconLaptop2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Laptop2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconLaptop: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Laptop color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconLassoSelect: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <LassoSelect color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconLasso: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Lasso color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconLaugh: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Laugh color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconLayers: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Layers color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconLayoutDashboard: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <LayoutDashboard color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconLayoutGrid: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <LayoutGrid color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconLayoutList: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <LayoutList color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconLayoutPanelLeft: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <LayoutPanelLeft color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconLayoutPanelTop: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <LayoutPanelTop color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconLayoutTemplate: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <LayoutTemplate color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconLayout: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Layout color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconLeaf: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Leaf color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconLeafyGreen: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <LeafyGreen color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconLibrary: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Library color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconLifeBuoy: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <LifeBuoy color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconLigature: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Ligature color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconLightbulbOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <LightbulbOff color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconLightbulb: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Lightbulb color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconLineChart: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <LineChart color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconLink2Off: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Link2Off color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconLink2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Link2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconLink: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Link color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconLinkedin: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Linkedin color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconListChecks: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ListChecks color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconListEnd: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ListEnd color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconListFilter: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ListFilter color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconListMinus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ListMinus color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconListMusic: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ListMusic color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconListOrdered: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ListOrdered color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconListPlus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ListPlus color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconListRestart: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ListRestart color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconListStart: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ListStart color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconListTodo: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ListTodo color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconListTree: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ListTree color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconListVideo: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ListVideo color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconListX: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ListX color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconList: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <List color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconLoader2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Loader2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconLoader: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Loader color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconLocateFixed: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <LocateFixed color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconLocateOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <LocateOff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconLocate: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Locate color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconLock: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Lock color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconLogIn: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <LogIn color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconLogOut: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <LogOut color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconLollipop: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Lollipop color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconLuggage: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Luggage color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMSquare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MSquare color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMagnet: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Magnet color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMailCheck: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MailCheck color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMailMinus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MailMinus color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMailOpen: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MailOpen color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMailPlus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MailPlus color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMailQuestion: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MailQuestion color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconMailSearch: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MailSearch color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMailWarning: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MailWarning color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMailX: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MailX color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMail: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Mail color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMailbox: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Mailbox color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMails: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Mails color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMapPinOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MapPinOff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMapPin: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MapPin color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMap: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Map color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMartini: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Martini color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMaximize2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Maximize2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMaximize: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Maximize color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMedal: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Medal color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMegaphoneOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MegaphoneOff color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconMegaphone: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Megaphone color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMeh: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Meh color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMemoryStick: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MemoryStick color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMenuSquare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MenuSquare color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMenu: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Menu color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMerge: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Merge color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMessageCircle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MessageCircle color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconMessageSquareDashed: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MessageSquareDashed
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconMessageSquarePlus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MessageSquarePlus color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconMessageSquare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MessageSquare color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconMessagesSquare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MessagesSquare color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconMic2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Mic2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMicOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MicOff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMic: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Mic color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMicroscope: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Microscope color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMicrowave: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Microwave color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMilestone: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Milestone color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMilkOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MilkOff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMilk: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Milk color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMinimize2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Minimize2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMinimize: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Minimize color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMinusCircle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MinusCircle color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMinusSquare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MinusSquare color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMinus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Minus color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMonitorCheck: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MonitorCheck color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconMonitorDot: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MonitorDot color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMonitorDown: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MonitorDown color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMonitorOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MonitorOff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMonitorPause: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MonitorPause color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconMonitorPlay: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MonitorPlay color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMonitorSmartphone: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MonitorSmartphone color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconMonitorSpeaker: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MonitorSpeaker color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconMonitorStop: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MonitorStop color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMonitorUp: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MonitorUp color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMonitorX: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MonitorX color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMonitor: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Monitor color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMoonStar: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MoonStar color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMoon: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Moon color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMoreHorizontal: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MoreHorizontal color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconMoreVertical: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MoreVertical color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconMountainSnow: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MountainSnow color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconMountain: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Mountain color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMousePointer2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MousePointer2 color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconMousePointerClick: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MousePointerClick color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconMousePointerSquareDashed: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MousePointerSquareDashed
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconMousePointer: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MousePointer color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconMouse: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Mouse color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMoveDiagonal2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MoveDiagonal2 color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconMoveDiagonal: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MoveDiagonal color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconMoveDownLeft: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MoveDownLeft color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconMoveDownRight: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MoveDownRight color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconMoveDown: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MoveDown color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMoveHorizontal: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MoveHorizontal color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconMoveLeft: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MoveLeft color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMoveRight: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MoveRight color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMoveUpLeft: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MoveUpLeft color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMoveUpRight: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MoveUpRight color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMoveUp: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MoveUp color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMoveVertical: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MoveVertical color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconMove: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Move color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMusic2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Music2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMusic3: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Music3 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMusic4: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Music4 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMusic: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Music color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconNavigation2Off: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <Navigation2Off color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconNavigation2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Navigation2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconNavigationOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <NavigationOff color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconNavigation: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Navigation color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconNetwork: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Network color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconNewspaper: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Newspaper color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconNfc: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Nfc color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconNutOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <NutOff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconNut: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Nut color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconOctagon: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Octagon color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconOption: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Option color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconOrbit: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Orbit color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconOutdent: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Outdent color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPackage2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Package2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPackageCheck: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PackageCheck color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconPackageMinus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PackageMinus color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconPackageOpen: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PackageOpen color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPackagePlus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PackagePlus color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPackageSearch: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PackageSearch color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconPackageX: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PackageX color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPackage: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Package color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPaintBucket: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PaintBucket color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPaintbrush2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Paintbrush2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPaintbrush: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Paintbrush color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPalette: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Palette color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPalmtree: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Palmtree color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPanelBottomClose: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PanelBottomClose color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconPanelBottomInactive: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PanelBottomInactive
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconPanelBottomOpen: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PanelBottomOpen color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconPanelBottom: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PanelBottom color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPanelLeftInactive: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PanelLeftInactive color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconPanelRightClose: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PanelRightClose color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconPanelRightInactive: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PanelRightInactive
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconPanelRightOpen: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PanelRightOpen color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconPanelRight: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PanelRight color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPanelTopClose: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PanelTopClose color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconPanelTopInactive: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PanelTopInactive color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconPanelTopOpen: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PanelTopOpen color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconPanelTop: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PanelTop color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPaperclip: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Paperclip color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconParentheses: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Parentheses color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconParkingCircleOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ParkingCircleOff color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconParkingCircle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ParkingCircle color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconParkingMeter: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ParkingMeter color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconParkingSquareOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ParkingSquareOff color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconParkingSquare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ParkingSquare color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconPartyPopper: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PartyPopper color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPauseCircle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PauseCircle color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPauseOctagon: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PauseOctagon color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconPause: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Pause color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPawPrint: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PawPrint color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPcCase: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PcCase color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPenTool: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PenTool color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPencilLine: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PencilLine color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPencilRuler: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PencilRuler color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPencil: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Pencil color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPercentCircle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PercentCircle color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconPercentDiamond: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PercentDiamond color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconPercentSquare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PercentSquare color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconPercent: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Percent color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPersonStanding: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PersonStanding color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconPhoneCall: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PhoneCall color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPhoneForwarded: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PhoneForwarded color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconPhoneIncoming: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PhoneIncoming color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconPhoneMissed: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PhoneMissed color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPhoneOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PhoneOff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPhoneOutgoing: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PhoneOutgoing color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconPhone: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Phone color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPiSquare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PiSquare color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPi: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Pi color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPictureInPicture2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PictureInPicture2 color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconPictureInPicture: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PictureInPicture color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconPieChart: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PieChart color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPiggyBank: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PiggyBank color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPilcrowSquare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PilcrowSquare color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconPilcrow: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Pilcrow color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPill: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Pill color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPinOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PinOff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPin: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Pin color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPipette: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Pipette color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPizza: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Pizza color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPlaneLanding: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PlaneLanding color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconPlaneTakeoff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PlaneTakeoff color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconPlane: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Plane color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPlayCircle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PlayCircle color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPlaySquare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PlaySquare color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPlay: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Play color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPlug2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Plug2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPlugZap2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PlugZap2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPlugZap: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PlugZap color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPlug: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Plug color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPlusCircle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PlusCircle color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPlusSquare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PlusSquare color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPlus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Plus color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPocketKnife: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PocketKnife color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPocket: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Pocket color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPodcast: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Podcast color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPointer: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Pointer color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPopcorn: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Popcorn color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPopsicle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Popsicle color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPoundSterling: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PoundSterling color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconPowerOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PowerOff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPower: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Power color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPresentation: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <Presentation color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconPrinter: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Printer color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconProjector: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Projector color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPuzzle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Puzzle color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconQrCode: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <QrCode color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconQuote: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Quote color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconRabbit: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Rabbit color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconRadar: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Radar color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconRadiation: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Radiation color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconRadioReceiver: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <RadioReceiver color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconRadioTower: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <RadioTower color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconRadio: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Radio color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconRailSymbol: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <RailSymbol color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconRainbow: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Rainbow color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconRat: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Rat color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconRatio: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Ratio color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconReceipt: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Receipt color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconRectangleHorizontal: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <RectangleHorizontal
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconRectangleVertical: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <RectangleVertical color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconRecycle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Recycle color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconRedo2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Redo2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconRedoDot: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <RedoDot color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconRedo: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Redo color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconRefreshCcwDot: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <RefreshCcwDot color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconRefreshCcw: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <RefreshCcw color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconRefreshCwOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <RefreshCwOff color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconRefreshCw: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <RefreshCw color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconRefrigerator: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <Refrigerator color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconRegex: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Regex color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconRemoveFormatting: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <RemoveFormatting color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconRepeat1: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Repeat1 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconRepeat2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Repeat2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconRepeat: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Repeat color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconReplaceAll: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ReplaceAll color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconReplace: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Replace color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconReplyAll: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ReplyAll color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconReply: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Reply color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconRewind: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Rewind color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconRocket: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Rocket color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconRockingChair: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <RockingChair color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconRollerCoaster: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <RollerCoaster color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconRotateCcw: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <RotateCcw color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconRotateCw: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <RotateCw color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconRouter: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Router color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconRows: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Rows color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconRss: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Rss color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconRuler: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Ruler color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconRussianRuble: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <RussianRuble color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconSailboat: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Sailboat color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSalad: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Salad color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSandwich: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Sandwich color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSatelliteDish: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <SatelliteDish color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconSatellite: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Satellite color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSaveAll: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SaveAll color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSave: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Save color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconScale: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Scale color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconScaling: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Scaling color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconScanFace: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ScanFace color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconScanLine: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ScanLine color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconScan: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Scan color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconScatterChart: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ScatterChart color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconSchool2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <School2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSchool: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <School color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconScissorsLineDashed: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ScissorsLineDashed
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconScissorsSquareDashedBottom: React.FC<IconProps> = ({
  color,
  size,
}) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ScissorsSquareDashedBottom
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconScissorsSquare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ScissorsSquare color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconScissors: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Scissors color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconScreenShareOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ScreenShareOff color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconScreenShare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ScreenShare color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconScrollText: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ScrollText color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconScroll: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Scroll color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSearchCheck: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SearchCheck color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSearchCode: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SearchCode color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSearchSlash: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SearchSlash color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSearchX: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SearchX color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSearch: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Search color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSendToBack: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SendToBack color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSend: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Send color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSeparatorHorizontal: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <SeparatorHorizontal
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconSeparatorVertical: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <SeparatorVertical color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconServerCog: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ServerCog color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconServerCrash: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ServerCrash color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconServerOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ServerOff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconServer: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Server color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSettings2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Settings2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSettings: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Settings color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconShapes: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Shapes color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconShare2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Share2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconShare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Share color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSheet: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Sheet color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconShell: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Shell color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconShieldAlert: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ShieldAlert color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconShieldBan: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ShieldBan color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconShieldCheck: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ShieldCheck color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconShieldEllipsis: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ShieldEllipsis color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconShieldHalf: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ShieldHalf color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconShieldMinus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ShieldMinus color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconShieldOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ShieldOff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconShieldPlus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ShieldPlus color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconShieldQuestion: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ShieldQuestion color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconShield: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Shield color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconShipWheel: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ShipWheel color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconShip: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Ship color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconShirt: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Shirt color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconShoppingBag: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ShoppingBag color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconShoppingBasket: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ShoppingBasket color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconShoppingCart: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ShoppingCart color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconShovel: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Shovel color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconShowerHead: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ShowerHead color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconShrink: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Shrink color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconShrub: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Shrub color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconShuffle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Shuffle color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSigmaSquare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SigmaSquare color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSigma: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Sigma color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSignalHigh: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SignalHigh color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSignalLow: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SignalLow color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSignalMedium: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <SignalMedium color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconSignalZero: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SignalZero color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSignal: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Signal color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSiren: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Siren color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSkipBack: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SkipBack color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSkipForward: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SkipForward color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSkull: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Skull color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSlack: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Slack color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSlash: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Slash color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSlice: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Slice color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSlidersHorizontal: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <SlidersHorizontal color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconSliders: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Sliders color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSmartphoneCharging: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <SmartphoneCharging
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconSmartphoneNfc: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <SmartphoneNfc color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconSmartphone: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Smartphone color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSmilePlus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SmilePlus color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSmile: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Smile color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSnail: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Snail color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSnowflake: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Snowflake color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSofa: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Sofa color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSoup: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Soup color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSpace: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Space color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSpade: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Spade color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSparkle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Sparkle color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSpeaker: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Speaker color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSpeech: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Speech color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSpellCheck2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SpellCheck2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSpellCheck: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SpellCheck color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSpline: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Spline color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSplitSquareHorizontal: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <SplitSquareHorizontal
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconSplitSquareVertical: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <SplitSquareVertical
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconSplit: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Split color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSprayCan: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SprayCan color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSprout: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Sprout color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSquareAsterisk: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <SquareAsterisk color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconSquareCode: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SquareCode color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSquareDashedBottomCode: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <SquareDashedBottomCode
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconSquareDashedBottom: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <SquareDashedBottom
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconSquareDot: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SquareDot color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSquareEqual: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SquareEqual color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSquareSlash: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SquareSlash color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSquareStack: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SquareStack color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSquare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Square color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSquirrel: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Squirrel color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconStamp: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Stamp color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconStarHalf: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <StarHalf color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconStarOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <StarOff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconStar: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Star color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconStepBack: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <StepBack color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconStepForward: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <StepForward color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconStethoscope: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Stethoscope color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSticker: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Sticker color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconStickyNote: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <StickyNote color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconStopCircle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <StopCircle color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconStore: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Store color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconStretchHorizontal: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <StretchHorizontal color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconStretchVertical: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <StretchVertical color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconStrikethrough: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <Strikethrough color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconSubscript: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Subscript color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSubtitles: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Subtitles color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSunDim: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SunDim color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSunMedium: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SunMedium color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSunMoon: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SunMoon color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSunSnow: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SunSnow color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSun: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Sun color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSunrise: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Sunrise color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSunset: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Sunset color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSuperscript: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Superscript color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSwissFranc: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SwissFranc color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSwitchCamera: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <SwitchCamera color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconSword: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Sword color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSwords: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Swords color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSyringe: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Syringe color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTable2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Table2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTableProperties: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <TableProperties color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconTable: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Table color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTabletSmartphone: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <TabletSmartphone color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconTablet: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Tablet color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTablets: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Tablets color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTag: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Tag color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTags: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Tags color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTally1: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Tally1 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTally2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Tally2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTally3: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Tally3 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTally4: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Tally4 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTally5: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Tally5 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTarget: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Target color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTent: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Tent color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTerminalSquare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <TerminalSquare color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconTerminal: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Terminal color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTestTube2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <TestTube2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTestTube: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <TestTube color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTestTubes: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <TestTubes color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTextCursorInput: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <TextCursorInput color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconTextCursor: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <TextCursor color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTextQuote: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <TextQuote color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconText: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Text color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTheater: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Theater color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconThermometerSnowflake: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ThermometerSnowflake
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconThermometerSun: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ThermometerSun color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconThermometer: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Thermometer color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconThumbsDown: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ThumbsDown color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconThumbsUp: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ThumbsUp color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTicket: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Ticket color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTimerOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <TimerOff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTimerReset: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <TimerReset color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTimer: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Timer color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconToggleLeft: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ToggleLeft color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconToggleRight: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ToggleRight color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTornado: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Tornado color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTouchpadOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <TouchpadOff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTouchpad: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Touchpad color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTowerControl: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <TowerControl color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconToyBrick: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ToyBrick color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTractor: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Tractor color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTrafficCone: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <TrafficCone color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTrainFrontTunnel: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <TrainFrontTunnel color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconTrainFront: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <TrainFront color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTrainTrack: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <TrainTrack color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTrash2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Trash2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTrash: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Trash color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTreeDeciduous: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <TreeDeciduous color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconTreePine: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <TreePine color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTrees: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Trees color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTrello: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Trello color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTrendingDown: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <TrendingDown color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconTrendingUp: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <TrendingUp color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTriangleRight: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <TriangleRight color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconTriangle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Triangle color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTrophy: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Trophy color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTruck: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Truck color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTurtle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Turtle color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTv2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Tv2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTv: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Tv color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTwitch: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Twitch color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTwitter: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Twitter color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconType: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Type color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconUmbrella: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Umbrella color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconUnderline: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Underline color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconUndo2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Undo2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconUndoDot: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <UndoDot color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconUndo: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Undo color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconUnfoldHorizontal: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <UnfoldHorizontal color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconUnfoldVertical: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <UnfoldVertical color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconUngroup: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Ungroup color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconUnlink2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Unlink2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconUnlink: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Unlink color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconUnlock: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Unlock color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconUnplug: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Unplug color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconUploadCloud: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <UploadCloud color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconUpload: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Upload color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconUsb: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Usb color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconUser2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <User2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconUserCheck2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <UserCheck2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconUserCheck: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <UserCheck color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconUserCircle2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <UserCircle2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconUserCircle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <UserCircle color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconUserCog2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <UserCog2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconUserCog: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <UserCog color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconUserMinus2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <UserMinus2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconUserMinus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <UserMinus color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconUserPlus2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <UserPlus2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconUserPlus: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <UserPlus color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconUserSquare2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <UserSquare2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconUserSquare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <UserSquare color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconUserX2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <UserX2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconUserX: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <UserX color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconUser: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <User color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconUsers2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Users2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconUsers: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Users color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconUtensilsCrossed: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <UtensilsCrossed color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconUtensils: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Utensils color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconUtilityPole: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <UtilityPole color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconVariable: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Variable color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconVegan: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Vegan color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconVenetianMask: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <VenetianMask color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconVibrateOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <VibrateOff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconVibrate: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Vibrate color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconVideoOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <VideoOff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconVideo: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Video color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconVideotape: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Videotape color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconView: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <View color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconVoicemail: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Voicemail color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconVolume1: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Volume1 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconVolume2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Volume2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconVolumeX: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <VolumeX color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconVolume: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Volume color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconVote: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Vote color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconWallet2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Wallet2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconWalletCards: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <WalletCards color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconWallet: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Wallet color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconWallpaper: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Wallpaper color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconWand2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Wand2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconWand: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Wand color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconWarehouse: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Warehouse color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconWatch: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Watch color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconWaves: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Waves color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconWebcam: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Webcam color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconWebhook: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Webhook color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconWheatOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <WheatOff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconWheat: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Wheat color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconWholeWord: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <WholeWord color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconWifiOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <WifiOff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconWifi: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Wifi color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconWind: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Wind color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconWineOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <WineOff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconWine: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Wine color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconWorkflow: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Workflow color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconWrapText: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <WrapText color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconWrench: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Wrench color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconXCircle: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <XCircle color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconXOctagon: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <XOctagon color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconXSquare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <XSquare color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconX: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <X color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconYoutube: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Youtube color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconZapOff: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ZapOff color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconZap: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Zap color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconZoomIn: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ZoomIn color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconZoomOut: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ZoomOut color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconArrowDown01: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ArrowDown01 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconArrowDown10: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ArrowDown10 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconArrowDownAZ: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ArrowDownAZ color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconArrowDownWideNarrow: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowDownWideNarrow
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconArrowDownZA: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ArrowDownZA color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconArrowUp01: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ArrowUp01 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconArrowUp10: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ArrowUp10 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconArrowUpAZ: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ArrowUpAZ color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconArrowUpNarrowWide: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowUpNarrowWide color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconArrowUpZA: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ArrowUpZA color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconAxis3D: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Axis3D color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBadgeCheck: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BadgeCheck color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconBraces: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Braces color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconCircleSlash2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CircleSlash2 color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconFileAxis3D: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileAxis3D color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFileCog: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileCog color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconFolderCog: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderCog color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconGanttChartSquare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <GanttChartSquare color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconGrid2X2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Grid2X2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconGrid: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Grid color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconKanbanSquareDashed: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <KanbanSquareDashed
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
    />
  );
};

const IconKanbanSquare: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <KanbanSquare color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconInspect: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Inspect color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconMove3D: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Move3D color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconPanelLeftClose: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PanelLeftClose color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconPanelLeftOpen: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PanelLeftOpen color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconPanelLeft: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PanelLeft color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconEdit3: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Edit3 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconEdit: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Edit color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconEdit2: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Edit2 color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconRotate3D: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Rotate3D color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconScale3D: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Scale3D color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSendHorizonal: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <SendHorizonal color={colorHex} size={pixelSize} strokeWidth={stroke} />
  );
};

const IconShieldClose: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ShieldClose color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconSparkles: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Sparkles color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTextSelect: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <TextSelect color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

const IconTrain: React.FC<IconProps> = ({ color, size }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Train color={colorHex} size={pixelSize} strokeWidth={stroke} />;
};

export {
  IconAccessibility,
  IconActivitySquare,
  IconActivity,
  IconAlarmCheck,
  IconAirVent,
  IconAirplay,
  IconAlarmClock,
  IconAlarmClockOff,
  IconAlarmMinus,
  IconAlarmPlus,
  IconAlbum,
  IconAlertCircle,
  IconAlertOctagon,
  IconAlertTriangle,
  IconAlignCenterHorizontal,
  IconAlignCenterVertical,
  IconAlignCenter,
  IconAlignEndHorizontal,
  IconAlignEndVertical,
  IconAlignHorizontalDistributeCenter,
  IconAlignHorizontalDistributeEnd,
  IconAlignHorizontalDistributeStart,
  IconAlignHorizontalJustifyCenter,
  IconAlignHorizontalJustifyEnd,
  IconAlignHorizontalJustifyStart,
  IconAlignHorizontalSpaceAround,
  IconAlignHorizontalSpaceBetween,
  IconAlignJustify,
  IconAlignLeft,
  IconAlignRight,
  IconAlignStartHorizontal,
  IconAlignStartVertical,
  IconAlignVerticalDistributeCenter,
  IconAlignVerticalDistributeEnd,
  IconAlignVerticalDistributeStart,
  IconAlignVerticalJustifyCenter,
  IconAlignVerticalJustifyEnd,
  IconAlignVerticalJustifyStart,
  IconAlignVerticalSpaceAround,
  IconAlignVerticalSpaceBetween,
  IconAmpersand,
  IconAmpersands,
  IconAnchor,
  IconAngry,
  IconAnnoyed,
  IconAntenna,
  IconAperture,
  IconAppWindow,
  IconApple,
  IconArchiveRestore,
  IconArchiveX,
  IconArchive,
  IconAreaChart,
  IconArmchair,
  IconArrowBigDownDash,
  IconArrowBigDown,
  IconArrowBigLeftDash,
  IconArrowBigLeft,
  IconArrowBigRightDash,
  IconArrowBigRight,
  IconArrowBigUpDash,
  IconArrowBigUp,
  IconArrowDownCircle,
  IconArrowDownFromLine,
  IconArrowDownLeftFromCircle,
  IconArrowDownLeftSquare,
  IconArrowDownLeft,
  IconArrowDownNarrowWide,
  IconArrowDownRightFromCircle,
  IconArrowDownRightSquare,
  IconArrowDownRight,
  IconArrowDownSquare,
  IconArrowDownToDot,
  IconArrowDownToLine,
  IconArrowDownUp,
  IconArrowDown,
  IconArrowLeftCircle,
  IconArrowLeftFromLine,
  IconArrowLeftRight,
  IconArrowLeftSquare,
  IconArrowLeftToLine,
  IconArrowLeft,
  IconArrowRightCircle,
  IconArrowRightFromLine,
  IconArrowRightLeft,
  IconArrowRightSquare,
  IconArrowRightToLine,
  IconArrowRight,
  IconArrowUpCircle,
  IconArrowUpDown,
  IconArrowUpFromDot,
  IconArrowUpFromLine,
  IconArrowUpLeftFromCircle,
  IconArrowUpLeftSquare,
  IconArrowUpLeft,
  IconArrowUpRightFromCircle,
  IconArrowUpRightSquare,
  IconArrowUpRight,
  IconArrowUpSquare,
  IconArrowUpToLine,
  IconArrowUpWideNarrow,
  IconArrowUp,
  IconArrowsUpFromLine,
  IconAsterisk,
  IconAtSign,
  IconAtom,
  IconAward,
  IconAxe,
  IconBaby,
  IconBackpack,
  IconBadgeAlert,
  IconBadgeCent,
  IconBadgeDollarSign,
  IconBadgeEuro,
  IconBadgeHelp,
  IconBadgeIndianRupee,
  IconBadgeInfo,
  IconBadgeJapaneseYen,
  IconBadgeMinus,
  IconBadgePercent,
  IconBadgePlus,
  IconBadgePoundSterling,
  IconBadgeRussianRuble,
  IconBadgeSwissFranc,
  IconBadgeX,
  IconBadge,
  IconBaggageClaim,
  IconBan,
  IconBanana,
  IconBanknote,
  IconBarChart2,
  IconBarChart3,
  IconBarChart4,
  IconBarChartBig,
  IconBarChartHorizontalBig,
  IconBarChartHorizontal,
  IconBarChart,
  IconBaseline,
  IconBath,
  IconBatteryCharging,
  IconBatteryFull,
  IconBatteryLow,
  IconBatteryMedium,
  IconBatteryWarning,
  IconBattery,
  IconBeaker,
  IconBeanOff,
  IconBean,
  IconBedDouble,
  IconBedSingle,
  IconBed,
  IconBeef,
  IconBeer,
  IconBellDot,
  IconBellMinus,
  IconBellOff,
  IconBellPlus,
  IconBellRing,
  IconBell,
  IconBike,
  IconBinary,
  IconBiohazard,
  IconBird,
  IconBitcoin,
  IconBlinds,
  IconBlocks,
  IconBluetoothConnected,
  IconBluetoothOff,
  IconBluetoothSearching,
  IconBluetooth,
  IconBold,
  IconBomb,
  IconBone,
  IconBookCopy,
  IconBookDown,
  IconBookKey,
  IconBookLock,
  IconBookMarked,
  IconBookMinus,
  IconBookOpenCheck,
  IconBookOpen,
  IconBookPlus,
  IconBookTemplate,
  IconBookUp2,
  IconBookUp,
  IconBookX,
  IconBook,
  IconBookmarkCheck,
  IconBookmarkMinus,
  IconBookmarkPlus,
  IconBookmarkX,
  IconBookmark,
  IconBoomBox,
  IconBot,
  IconBoxSelect,
  IconBox,
  IconBoxes,
  IconBrackets,
  IconBrainCircuit,
  IconBrainCog,
  IconBrain,
  IconBriefcase,
  IconBringToFront,
  IconBrush,
  IconBugOff,
  IconBugPlay,
  IconBug,
  IconBuilding2,
  IconBuilding,
  IconBusFront,
  IconBus,
  IconCableCar,
  IconCable,
  IconCakeSlice,
  IconCake,
  IconCalculator,
  IconCalendarCheck2,
  IconCalendarCheck,
  IconCalendarClock,
  IconCalendarDays,
  IconCalendarHeart,
  IconCalendarMinus,
  IconCalendarOff,
  IconCalendarPlus,
  IconCalendarRange,
  IconCalendarSearch,
  IconCalendarX2,
  IconCalendarX,
  IconCalendar,
  IconCameraOff,
  IconCamera,
  IconCandlestickChart,
  IconCandyCane,
  IconCandyOff,
  IconCandy,
  IconCarFront,
  IconCarTaxiFront,
  IconCar,
  IconCarrot,
  IconCaseLower,
  IconCaseSensitive,
  IconCaseUpper,
  IconCassetteTape,
  IconCast,
  IconCastle,
  IconCat,
  IconCheckCheck,
  IconCheckCircle2,
  IconCheckCircle,
  IconCheckSquare,
  IconCheck,
  IconChefHat,
  IconCherry,
  IconChevronDownCircle,
  IconChevronDownSquare,
  IconChevronDown,
  IconChevronFirst,
  IconChevronLast,
  IconChevronLeftCircle,
  IconChevronLeftSquare,
  IconChevronLeft,
  IconChevronRightCircle,
  IconChevronRightSquare,
  IconChevronRight,
  IconChevronUpCircle,
  IconChevronUpSquare,
  IconChevronUp,
  IconChevronsDownUp,
  IconChevronsDown,
  IconChevronsLeftRight,
  IconChevronsLeft,
  IconChevronsRightLeft,
  IconChevronsRight,
  IconChevronsUpDown,
  IconChevronsUp,
  IconChrome,
  IconChurch,
  IconCigaretteOff,
  IconCigarette,
  IconCircleDashed,
  IconCircleDollarSign,
  IconCircleDotDashed,
  IconCircleDot,
  IconCircleEllipsis,
  IconCircleEqual,
  IconCircleOff,
  IconCircleSlash,
  IconCircle,
  IconCircuitBoard,
  IconCitrus,
  IconClapperboard,
  IconClipboardCheck,
  IconClipboardCopy,
  IconClipboardEdit,
  IconClipboardList,
  IconClipboardPaste,
  IconClipboardSignature,
  IconClipboardType,
  IconClipboardX,
  IconClipboard,
  IconClock1,
  IconClock10,
  IconClock11,
  IconClock12,
  IconClock2,
  IconClock3,
  IconClock4,
  IconClock5,
  IconClock6,
  IconClock7,
  IconClock8,
  IconClock9,
  IconClock,
  IconCloudCog,
  IconCloudDrizzle,
  IconCloudFog,
  IconCloudHail,
  IconCloudLightning,
  IconCloudMoonRain,
  IconCloudMoon,
  IconCloudOff,
  IconCloudRainWind,
  IconCloudRain,
  IconCloudSnow,
  IconCloudSunRain,
  IconCloudSun,
  IconCloud,
  IconCloudy,
  IconClover,
  IconClub,
  IconCode2,
  IconCode,
  IconCodepen,
  IconCodesandbox,
  IconCoffee,
  IconCog,
  IconCoins,
  IconColumns,
  IconCombine,
  IconCommand,
  IconCompass,
  IconComponent,
  IconComputer,
  IconConciergeBell,
  IconConstruction,
  IconContact2,
  IconContact,
  IconContainer,
  IconContrast,
  IconCookie,
  IconCopyCheck,
  IconCopyMinus,
  IconCopyPlus,
  IconCopySlash,
  IconCopyX,
  IconCopy,
  IconCopyleft,
  IconCopyright,
  IconCornerDownLeft,
  IconCornerDownRight,
  IconCornerLeftDown,
  IconCornerLeftUp,
  IconCornerRightDown,
  IconCornerRightUp,
  IconCornerUpLeft,
  IconCornerUpRight,
  IconCpu,
  IconCreativeCommons,
  IconCreditCard,
  IconCroissant,
  IconCrop,
  IconCross,
  IconCrosshair,
  IconCrown,
  IconCupSoda,
  IconCurrency,
  IconDatabaseBackup,
  IconDatabaseZap,
  IconDatabase,
  IconDelete,
  IconDessert,
  IconDiamond,
  IconDice1,
  IconDice2,
  IconDice3,
  IconDice4,
  IconDice5,
  IconDice6,
  IconDices,
  IconDiff,
  IconDisc2,
  IconDisc3,
  IconDisc,
  IconDivideCircle,
  IconDivideSquare,
  IconDivide,
  IconDnaOff,
  IconDna,
  IconDog,
  IconDollarSign,
  IconDonut,
  IconDoorClosed,
  IconDoorOpen,
  IconDot,
  IconDownloadCloud,
  IconDownload,
  IconDrama,
  IconDribbble,
  IconDroplet,
  IconDroplets,
  IconDrumstick,
  IconDumbbell,
  IconEarOff,
  IconEar,
  IconEggFried,
  IconEggOff,
  IconEgg,
  IconEqualNot,
  IconEqual,
  IconEraser,
  IconEuro,
  IconExpand,
  IconExternalLink,
  IconEyeOff,
  IconEye,
  IconFacebook,
  IconFactory,
  IconFan,
  IconFastForward,
  IconFeather,
  IconFerrisWheel,
  IconFigma,
  IconFileArchive,
  IconFileAudio2,
  IconFileAudio,
  IconFileBadge2,
  IconFileBadge,
  IconFileBarChart2,
  IconFileBarChart,
  IconFileBox,
  IconFileCheck2,
  IconFileCheck,
  IconFileClock,
  IconFileCode2,
  IconFileCode,
  IconFileDiff,
  IconFileDigit,
  IconFileDown,
  IconFileEdit,
  IconFileHeart,
  IconFileImage,
  IconFileInput,
  IconFileJson2,
  IconFileJson,
  IconFileKey2,
  IconFileKey,
  IconFileLineChart,
  IconFileLock2,
  IconFileLock,
  IconFileMinus2,
  IconFileMinus,
  IconFileOutput,
  IconFilePieChart,
  IconFilePlus2,
  IconFilePlus,
  IconFileQuestion,
  IconFileScan,
  IconFileSearch2,
  IconFileSearch,
  IconFileSignature,
  IconFileSpreadsheet,
  IconFileStack,
  IconFileSymlink,
  IconFileTerminal,
  IconFileText,
  IconFileType2,
  IconFileType,
  IconFileUp,
  IconFileVideo2,
  IconFileVideo,
  IconFileVolume2,
  IconFileVolume,
  IconFileWarning,
  IconFileX2,
  IconFileX,
  IconFile,
  IconFiles,
  IconFilm,
  IconFilterX,
  IconFilter,
  IconFingerprint,
  IconFishOff,
  IconFishSymbol,
  IconFish,
  IconFlagOff,
  IconFlagTriangleLeft,
  IconFlagTriangleRight,
  IconFlag,
  IconFlame,
  IconFlashlightOff,
  IconFlashlight,
  IconFlaskConicalOff,
  IconFlaskConical,
  IconFlaskRound,
  IconFlipHorizontal2,
  IconFlipHorizontal,
  IconFlipVertical2,
  IconFlipVertical,
  IconFlower2,
  IconFlower,
  IconFocus,
  IconFoldHorizontal,
  IconFoldVertical,
  IconFolderArchive,
  IconFolderCheck,
  IconFolderClock,
  IconFolderClosed,
  IconFolderDot,
  IconFolderDown,
  IconFolderEdit,
  IconFolderGit2,
  IconFolderGit,
  IconFolderHeart,
  IconFolderInput,
  IconFolderKanban,
  IconFolderKey,
  IconFolderLock,
  IconFolderMinus,
  IconFolderOpenDot,
  IconFolderOpen,
  IconFolderOutput,
  IconFolderPlus,
  IconFolderRoot,
  IconFolderSearch2,
  IconFolderSearch,
  IconFolderSymlink,
  IconFolderSync,
  IconFolderTree,
  IconFolderUp,
  IconFolderX,
  IconFolder,
  IconFolders,
  IconFootprints,
  IconForklift,
  IconFormInput,
  IconForward,
  IconFrame,
  IconFramer,
  IconFrown,
  IconFuel,
  IconFunctionSquare,
  IconGalleryHorizontalEnd,
  IconGalleryHorizontal,
  IconGalleryThumbnails,
  IconGalleryVerticalEnd,
  IconGalleryVertical,
  IconGamepad2,
  IconGamepad,
  IconGanttChart,
  IconGaugeCircle,
  IconGauge,
  IconGavel,
  IconGem,
  IconGhost,
  IconGift,
  IconGitBranchPlus,
  IconGitBranch,
  IconGitCommit,
  IconGitCompare,
  IconGitFork,
  IconGitMerge,
  IconGitPullRequestClosed,
  IconGitPullRequestDraft,
  IconGitPullRequest,
  IconGithub,
  IconGitlab,
  IconGlassWater,
  IconGlasses,
  IconGlobe2,
  IconGlobe,
  IconGoal,
  IconGrab,
  IconGraduationCap,
  IconGrape,
  IconGripHorizontal,
  IconGripVertical,
  IconGrip,
  IconGroup,
  IconHammer,
  IconHandMetal,
  IconHand,
  IconHardDriveDownload,
  IconHardDriveUpload,
  IconHardDrive,
  IconHardHat,
  IconHash,
  IconHaze,
  IconHdmiPort,
  IconHeading1,
  IconHeading2,
  IconHeading3,
  IconHeading4,
  IconHeading5,
  IconHeading6,
  IconHeading,
  IconHeadphones,
  IconHeartCrack,
  IconHeartHandshake,
  IconHeartOff,
  IconHeartPulse,
  IconHeart,
  IconHelpCircle,
  IconHelpingHand,
  IconHexagon,
  IconHighlighter,
  IconHistory,
  IconHome,
  IconHopOff,
  IconHop,
  IconHotel,
  IconHourglass,
  IconIceCream2,
  IconIceCream,
  IconImageMinus,
  IconImageOff,
  IconImagePlus,
  IconImage,
  IconImport,
  IconInbox,
  IconIndent,
  IconIndianRupee,
  IconInfinity,
  IconInfo,
  IconInstagram,
  IconItalic,
  IconIterationCcw,
  IconIterationCw,
  IconJapaneseYen,
  IconJoystick,
  IconKanban,
  IconKeyRound,
  IconKeySquare,
  IconKey,
  IconKeyboard,
  IconLampCeiling,
  IconLampDesk,
  IconLampFloor,
  IconLampWallDown,
  IconLampWallUp,
  IconLamp,
  IconLandmark,
  IconLanguages,
  IconLaptop2,
  IconLaptop,
  IconLassoSelect,
  IconLasso,
  IconLaugh,
  IconLayers,
  IconLayoutDashboard,
  IconLayoutGrid,
  IconLayoutList,
  IconLayoutPanelLeft,
  IconLayoutPanelTop,
  IconLayoutTemplate,
  IconLayout,
  IconLeaf,
  IconLeafyGreen,
  IconLibrary,
  IconLifeBuoy,
  IconLigature,
  IconLightbulbOff,
  IconLightbulb,
  IconLineChart,
  IconLink2Off,
  IconLink2,
  IconLink,
  IconLinkedin,
  IconListChecks,
  IconListEnd,
  IconListFilter,
  IconListMinus,
  IconListMusic,
  IconListOrdered,
  IconListPlus,
  IconListRestart,
  IconListStart,
  IconListTodo,
  IconListTree,
  IconListVideo,
  IconListX,
  IconList,
  IconLoader2,
  IconLoader,
  IconLocateFixed,
  IconLocateOff,
  IconLocate,
  IconLock,
  IconLogIn,
  IconLogOut,
  IconLollipop,
  IconLuggage,
  IconMSquare,
  IconMagnet,
  IconMailCheck,
  IconMailMinus,
  IconMailOpen,
  IconMailPlus,
  IconMailQuestion,
  IconMailSearch,
  IconMailWarning,
  IconMailX,
  IconMail,
  IconMailbox,
  IconMails,
  IconMapPinOff,
  IconMapPin,
  IconMap,
  IconMartini,
  IconMaximize2,
  IconMaximize,
  IconMedal,
  IconMegaphoneOff,
  IconMegaphone,
  IconMeh,
  IconMemoryStick,
  IconMenuSquare,
  IconMenu,
  IconMerge,
  IconMessageCircle,
  IconMessageSquareDashed,
  IconMessageSquarePlus,
  IconMessageSquare,
  IconMessagesSquare,
  IconMic2,
  IconMicOff,
  IconMic,
  IconMicroscope,
  IconMicrowave,
  IconMilestone,
  IconMilkOff,
  IconMilk,
  IconMinimize2,
  IconMinimize,
  IconMinusCircle,
  IconMinusSquare,
  IconMinus,
  IconMonitorCheck,
  IconMonitorDot,
  IconMonitorDown,
  IconMonitorOff,
  IconMonitorPause,
  IconMonitorPlay,
  IconMonitorSmartphone,
  IconMonitorSpeaker,
  IconMonitorStop,
  IconMonitorUp,
  IconMonitorX,
  IconMonitor,
  IconMoonStar,
  IconMoon,
  IconMoreHorizontal,
  IconMoreVertical,
  IconMountainSnow,
  IconMountain,
  IconMousePointer2,
  IconMousePointerClick,
  IconMousePointerSquareDashed,
  IconMousePointer,
  IconMouse,
  IconMoveDiagonal2,
  IconMoveDiagonal,
  IconMoveDownLeft,
  IconMoveDownRight,
  IconMoveDown,
  IconMoveHorizontal,
  IconMoveLeft,
  IconMoveRight,
  IconMoveUpLeft,
  IconMoveUpRight,
  IconMoveUp,
  IconMoveVertical,
  IconMove,
  IconMusic2,
  IconMusic3,
  IconMusic4,
  IconMusic,
  IconNavigation2Off,
  IconNavigation2,
  IconNavigationOff,
  IconNavigation,
  IconNetwork,
  IconNewspaper,
  IconNfc,
  IconNutOff,
  IconNut,
  IconOctagon,
  IconOption,
  IconOrbit,
  IconOutdent,
  IconPackage2,
  IconPackageCheck,
  IconPackageMinus,
  IconPackageOpen,
  IconPackagePlus,
  IconPackageSearch,
  IconPackageX,
  IconPackage,
  IconPaintBucket,
  IconPaintbrush2,
  IconPaintbrush,
  IconPalette,
  IconPalmtree,
  IconPanelBottomClose,
  IconPanelBottomInactive,
  IconPanelBottomOpen,
  IconPanelBottom,
  IconPanelLeftInactive,
  IconPanelRightClose,
  IconPanelRightInactive,
  IconPanelRightOpen,
  IconPanelRight,
  IconPanelTopClose,
  IconPanelTopInactive,
  IconPanelTopOpen,
  IconPanelTop,
  IconPaperclip,
  IconParentheses,
  IconParkingCircleOff,
  IconParkingCircle,
  IconParkingMeter,
  IconParkingSquareOff,
  IconParkingSquare,
  IconPartyPopper,
  IconPauseCircle,
  IconPauseOctagon,
  IconPause,
  IconPawPrint,
  IconPcCase,
  IconPenTool,
  IconPencilLine,
  IconPencilRuler,
  IconPencil,
  IconPercentCircle,
  IconPercentDiamond,
  IconPercentSquare,
  IconPercent,
  IconPersonStanding,
  IconPhoneCall,
  IconPhoneForwarded,
  IconPhoneIncoming,
  IconPhoneMissed,
  IconPhoneOff,
  IconPhoneOutgoing,
  IconPhone,
  IconPiSquare,
  IconPi,
  IconPictureInPicture2,
  IconPictureInPicture,
  IconPieChart,
  IconPiggyBank,
  IconPilcrowSquare,
  IconPilcrow,
  IconPill,
  IconPinOff,
  IconPin,
  IconPipette,
  IconPizza,
  IconPlaneLanding,
  IconPlaneTakeoff,
  IconPlane,
  IconPlayCircle,
  IconPlaySquare,
  IconPlay,
  IconPlug2,
  IconPlugZap2,
  IconPlugZap,
  IconPlug,
  IconPlusCircle,
  IconPlusSquare,
  IconPlus,
  IconPocketKnife,
  IconPocket,
  IconPodcast,
  IconPointer,
  IconPopcorn,
  IconPopsicle,
  IconPoundSterling,
  IconPowerOff,
  IconPower,
  IconPresentation,
  IconPrinter,
  IconProjector,
  IconPuzzle,
  IconQrCode,
  IconQuote,
  IconRabbit,
  IconRadar,
  IconRadiation,
  IconRadioReceiver,
  IconRadioTower,
  IconRadio,
  IconRailSymbol,
  IconRainbow,
  IconRat,
  IconRatio,
  IconReceipt,
  IconRectangleHorizontal,
  IconRectangleVertical,
  IconRecycle,
  IconRedo2,
  IconRedoDot,
  IconRedo,
  IconRefreshCcwDot,
  IconRefreshCcw,
  IconRefreshCwOff,
  IconRefreshCw,
  IconRefrigerator,
  IconRegex,
  IconRemoveFormatting,
  IconRepeat1,
  IconRepeat2,
  IconRepeat,
  IconReplaceAll,
  IconReplace,
  IconReplyAll,
  IconReply,
  IconRewind,
  IconRocket,
  IconRockingChair,
  IconRollerCoaster,
  IconRotateCcw,
  IconRotateCw,
  IconRouter,
  IconRows,
  IconRss,
  IconRuler,
  IconRussianRuble,
  IconSailboat,
  IconSalad,
  IconSandwich,
  IconSatelliteDish,
  IconSatellite,
  IconSaveAll,
  IconSave,
  IconScale,
  IconScaling,
  IconScanFace,
  IconScanLine,
  IconScan,
  IconScatterChart,
  IconSchool2,
  IconSchool,
  IconScissorsLineDashed,
  IconScissorsSquareDashedBottom,
  IconScissorsSquare,
  IconScissors,
  IconScreenShareOff,
  IconScreenShare,
  IconScrollText,
  IconScroll,
  IconSearchCheck,
  IconSearchCode,
  IconSearchSlash,
  IconSearchX,
  IconSearch,
  IconSendToBack,
  IconSend,
  IconSeparatorHorizontal,
  IconSeparatorVertical,
  IconServerCog,
  IconServerCrash,
  IconServerOff,
  IconServer,
  IconSettings2,
  IconSettings,
  IconShapes,
  IconShare2,
  IconShare,
  IconSheet,
  IconShell,
  IconShieldAlert,
  IconShieldBan,
  IconShieldCheck,
  IconShieldEllipsis,
  IconShieldHalf,
  IconShieldMinus,
  IconShieldOff,
  IconShieldPlus,
  IconShieldQuestion,
  IconShield,
  IconShipWheel,
  IconShip,
  IconShirt,
  IconShoppingBag,
  IconShoppingBasket,
  IconShoppingCart,
  IconShovel,
  IconShowerHead,
  IconShrink,
  IconShrub,
  IconShuffle,
  IconSigmaSquare,
  IconSigma,
  IconSignalHigh,
  IconSignalLow,
  IconSignalMedium,
  IconSignalZero,
  IconSignal,
  IconSiren,
  IconSkipBack,
  IconSkipForward,
  IconSkull,
  IconSlack,
  IconSlash,
  IconSlice,
  IconSlidersHorizontal,
  IconSliders,
  IconSmartphoneCharging,
  IconSmartphoneNfc,
  IconSmartphone,
  IconSmilePlus,
  IconSmile,
  IconSnail,
  IconSnowflake,
  IconSofa,
  IconSoup,
  IconSpace,
  IconSpade,
  IconSparkle,
  IconSpeaker,
  IconSpeech,
  IconSpellCheck2,
  IconSpellCheck,
  IconSpline,
  IconSplitSquareHorizontal,
  IconSplitSquareVertical,
  IconSplit,
  IconSprayCan,
  IconSprout,
  IconSquareAsterisk,
  IconSquareCode,
  IconSquareDashedBottomCode,
  IconSquareDashedBottom,
  IconSquareDot,
  IconSquareEqual,
  IconSquareSlash,
  IconSquareStack,
  IconSquare,
  IconSquirrel,
  IconStamp,
  IconStarHalf,
  IconStarOff,
  IconStar,
  IconStepBack,
  IconStepForward,
  IconStethoscope,
  IconSticker,
  IconStickyNote,
  IconStopCircle,
  IconStore,
  IconStretchHorizontal,
  IconStretchVertical,
  IconStrikethrough,
  IconSubscript,
  IconSubtitles,
  IconSunDim,
  IconSunMedium,
  IconSunMoon,
  IconSunSnow,
  IconSun,
  IconSunrise,
  IconSunset,
  IconSuperscript,
  IconSwissFranc,
  IconSwitchCamera,
  IconSword,
  IconSwords,
  IconSyringe,
  IconTable2,
  IconTableProperties,
  IconTable,
  IconTabletSmartphone,
  IconTablet,
  IconTablets,
  IconTag,
  IconTags,
  IconTally1,
  IconTally2,
  IconTally3,
  IconTally4,
  IconTally5,
  IconTarget,
  IconTent,
  IconTerminalSquare,
  IconTerminal,
  IconTestTube2,
  IconTestTube,
  IconTestTubes,
  IconTextCursorInput,
  IconTextCursor,
  IconTextQuote,
  IconText,
  IconTheater,
  IconThermometerSnowflake,
  IconThermometerSun,
  IconThermometer,
  IconThumbsDown,
  IconThumbsUp,
  IconTicket,
  IconTimerOff,
  IconTimerReset,
  IconTimer,
  IconToggleLeft,
  IconToggleRight,
  IconTornado,
  IconTouchpadOff,
  IconTouchpad,
  IconTowerControl,
  IconToyBrick,
  IconTractor,
  IconTrafficCone,
  IconTrainFrontTunnel,
  IconTrainFront,
  IconTrainTrack,
  IconTrash2,
  IconTrash,
  IconTreeDeciduous,
  IconTreePine,
  IconTrees,
  IconTrello,
  IconTrendingDown,
  IconTrendingUp,
  IconTriangleRight,
  IconTriangle,
  IconTrophy,
  IconTruck,
  IconTurtle,
  IconTv2,
  IconTv,
  IconTwitch,
  IconTwitter,
  IconType,
  IconUmbrella,
  IconUnderline,
  IconUndo2,
  IconUndoDot,
  IconUndo,
  IconUnfoldHorizontal,
  IconUnfoldVertical,
  IconUngroup,
  IconUnlink2,
  IconUnlink,
  IconUnlock,
  IconUnplug,
  IconUploadCloud,
  IconUpload,
  IconUsb,
  IconUser2,
  IconUserCheck2,
  IconUserCheck,
  IconUserCircle2,
  IconUserCircle,
  IconUserCog2,
  IconUserCog,
  IconUserMinus2,
  IconUserMinus,
  IconUserPlus2,
  IconUserPlus,
  IconUserSquare2,
  IconUserSquare,
  IconUserX2,
  IconUserX,
  IconUser,
  IconUsers2,
  IconUsers,
  IconUtensilsCrossed,
  IconUtensils,
  IconUtilityPole,
  IconVariable,
  IconVegan,
  IconVenetianMask,
  IconVibrateOff,
  IconVibrate,
  IconVideoOff,
  IconVideo,
  IconVideotape,
  IconView,
  IconVoicemail,
  IconVolume1,
  IconVolume2,
  IconVolumeX,
  IconVolume,
  IconVote,
  IconWallet2,
  IconWalletCards,
  IconWallet,
  IconWallpaper,
  IconWand2,
  IconWand,
  IconWarehouse,
  IconWatch,
  IconWaves,
  IconWebcam,
  IconWebhook,
  IconWheatOff,
  IconWheat,
  IconWholeWord,
  IconWifiOff,
  IconWifi,
  IconWind,
  IconWineOff,
  IconWine,
  IconWorkflow,
  IconWrapText,
  IconWrench,
  IconXCircle,
  IconXOctagon,
  IconXSquare,
  IconX,
  IconYoutube,
  IconZapOff,
  IconZap,
  IconZoomIn,
  IconZoomOut,
  IconArrowDown01,
  IconArrowDown10,
  IconArrowDownAZ,
  IconArrowDownWideNarrow,
  IconArrowDownZA,
  IconArrowUp01,
  IconArrowUp10,
  IconArrowUpAZ,
  IconArrowUpNarrowWide,
  IconArrowUpZA,
  IconAxis3D,
  IconBadgeCheck,
  IconBraces,
  IconCircleSlash2,
  IconFileAxis3D,
  IconFileCog,
  IconFolderCog,
  IconGanttChartSquare,
  IconGrid2X2,
  IconGrid,
  IconKanbanSquareDashed,
  IconKanbanSquare,
  IconInspect,
  IconMove3D,
  IconPanelLeftClose,
  IconPanelLeftOpen,
  IconPanelLeft,
  IconEdit3,
  IconEdit,
  IconEdit2,
  IconRotate3D,
  IconScale3D,
  IconSendHorizonal,
  IconShieldClose,
  IconSparkles,
  IconTextSelect,
  IconTrain,
};
