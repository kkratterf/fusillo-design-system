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
  color?: keyof typeof colorToHex;
  size?: keyof typeof sizeToPx;
  className?: string;
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

const IconAccessibility: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <Accessibility color={colorHex} size={pixelSize} strokeWidth={stroke} className={className}/>
  );
};

const IconActivitySquare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ActivitySquare color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconActivity: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Activity color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconAlarmCheck: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <AlarmCheck color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconAirVent: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <AirVent color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconAirplay: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Airplay color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconAlarmClock: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <AlarmClock color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconAlarmClockOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlarmClockOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconAlarmMinus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <AlarmMinus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconAlarmPlus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <AlarmPlus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconAlbum: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Album color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconAlertCircle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <AlertCircle color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconAlertOctagon: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlertOctagon color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconAlertTriangle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlertTriangle color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconAlignCenterHorizontal: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignCenterHorizontal
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconAlignCenterVertical: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignCenterVertical
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconAlignCenter: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <AlignCenter color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconAlignEndHorizontal: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignEndHorizontal
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconAlignEndVertical: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignEndVertical color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconAlignHorizontalDistributeCenter: React.FC<IconProps> = ({
  color,
  size,
  className
}) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignHorizontalDistributeCenter
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconAlignHorizontalDistributeEnd: React.FC<IconProps> = ({
  color,
  size,
  className,
}) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignHorizontalDistributeEnd
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
      className={className}
    />
  );
};

const IconAlignHorizontalDistributeStart: React.FC<IconProps> = ({
  color,
  size,
  className,
}) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignHorizontalDistributeStart
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
      className={className}
    />
  );
};

const IconAlignHorizontalJustifyCenter: React.FC<IconProps> = ({
  color,
  size,
  className,
}) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignHorizontalJustifyCenter
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
      className={className}
    />
  );
};

const IconAlignHorizontalJustifyEnd: React.FC<IconProps> = ({
  color,
  size,
  className,
}) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignHorizontalJustifyEnd
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
      className={className}
    />
  );
};

const IconAlignHorizontalJustifyStart: React.FC<IconProps> = ({
  color,
  size,
  className,
}) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignHorizontalJustifyStart
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
      className={className}
    />
  );
};

const IconAlignHorizontalSpaceAround: React.FC<IconProps> = ({
  color,
  size,
  className,
}) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignHorizontalSpaceAround
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
      className={className}
    />
  );
};

const IconAlignHorizontalSpaceBetween: React.FC<IconProps> = ({
  color,
  size,
  className,
}) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignHorizontalSpaceBetween
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
      className={className}
    />
  );
};

const IconAlignJustify: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignJustify color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconAlignLeft: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <AlignLeft color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconAlignRight: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <AlignRight color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconAlignStartHorizontal: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignStartHorizontal
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconAlignStartVertical: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignStartVertical
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconAlignVerticalDistributeCenter: React.FC<IconProps> = ({
  color,
  size,
  className,
}) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignVerticalDistributeCenter
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
      className={className}
    />
  );
};

const IconAlignVerticalDistributeEnd: React.FC<IconProps> = ({
  color,
  size,
  className,
}) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignVerticalDistributeEnd
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
      className={className}
    />
  );
};

const IconAlignVerticalDistributeStart: React.FC<IconProps> = ({
  color,
  size,
  className,
}) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignVerticalDistributeStart
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
      className={className}
    />
  );
};

const IconAlignVerticalJustifyCenter: React.FC<IconProps> = ({
  color,
  size,
  className,
}) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignVerticalJustifyCenter
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
      className={className}
    />
  );
};

const IconAlignVerticalJustifyEnd: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignVerticalJustifyEnd
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconAlignVerticalJustifyStart: React.FC<IconProps> = ({
  color,
  size,
  className,
}) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignVerticalJustifyStart
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
      className={className}
    />
  );
};

const IconAlignVerticalSpaceAround: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignVerticalSpaceAround
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconAlignVerticalSpaceBetween: React.FC<IconProps> = ({
  color,
  size,
  className,
}) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <AlignVerticalSpaceBetween
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
      className={className}
    />
  );
};

const IconAmpersand: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Ampersand color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconAmpersands: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Ampersands color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconAnchor: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Anchor color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconAngry: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Angry color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconAnnoyed: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Annoyed color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconAntenna: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Antenna color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconAperture: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Aperture color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconAppWindow: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <AppWindow color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconApple: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Apple color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconArchiveRestore: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArchiveRestore color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconArchiveX: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ArchiveX color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconArchive: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Archive color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconAreaChart: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <AreaChart color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconArmchair: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Armchair color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconArrowBigDownDash: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowBigDownDash color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconArrowBigDown: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowBigDown color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconArrowBigLeftDash: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowBigLeftDash color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconArrowBigLeft: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowBigLeft color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconArrowBigRightDash: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowBigRightDash color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconArrowBigRight: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowBigRight color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconArrowBigUpDash: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowBigUpDash color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconArrowBigUp: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ArrowBigUp color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconArrowDownCircle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowDownCircle color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconArrowDownFromLine: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowDownFromLine color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconArrowDownLeftFromCircle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowDownLeftFromCircle
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconArrowDownLeftSquare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowDownLeftSquare
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconArrowDownLeft: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowDownLeft color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconArrowDownNarrowWide: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowDownNarrowWide
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconArrowDownRightFromCircle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowDownRightFromCircle
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconArrowDownRightSquare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowDownRightSquare
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconArrowDownRight: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowDownRight color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconArrowDownSquare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowDownSquare color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconArrowDownToDot: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowDownToDot color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconArrowDownToLine: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowDownToLine color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconArrowDownUp: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ArrowDownUp color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconArrowDown: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ArrowDown color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconArrowLeftCircle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowLeftCircle color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconArrowLeftFromLine: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowLeftFromLine color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconArrowLeftRight: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowLeftRight color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconArrowLeftSquare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowLeftSquare color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconArrowLeftToLine: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowLeftToLine color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconArrowLeft: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ArrowLeft color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconArrowRightCircle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowRightCircle color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconArrowRightFromLine: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowRightFromLine
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconArrowRightLeft: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowRightLeft color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconArrowRightSquare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowRightSquare color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconArrowRightToLine: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowRightToLine color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconArrowRight: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ArrowRight color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconArrowUpCircle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowUpCircle color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconArrowUpDown: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ArrowUpDown color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconArrowUpFromDot: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowUpFromDot color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconArrowUpFromLine: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowUpFromLine color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconArrowUpLeftFromCircle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowUpLeftFromCircle
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconArrowUpLeftSquare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowUpLeftSquare color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconArrowUpLeft: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ArrowUpLeft color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconArrowUpRightFromCircle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowUpRightFromCircle
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconArrowUpRightSquare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowUpRightSquare
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconArrowUpRight: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowUpRight color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconArrowUpSquare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowUpSquare color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconArrowUpToLine: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowUpToLine color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconArrowUpWideNarrow: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowUpWideNarrow color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconArrowUp: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ArrowUp color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconArrowsUpFromLine: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowsUpFromLine color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconAsterisk: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Asterisk color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconAtSign: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <AtSign color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconAtom: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Atom color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconAward: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Award color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconAxe: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Axe color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBaby: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Baby color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBackpack: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Backpack color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBadgeAlert: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BadgeAlert color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBadgeCent: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BadgeCent color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBadgeDollarSign: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BadgeDollarSign color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconBadgeEuro: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BadgeEuro color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBadgeHelp: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BadgeHelp color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBadgeIndianRupee: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BadgeIndianRupee color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconBadgeInfo: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BadgeInfo color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBadgeJapaneseYen: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BadgeJapaneseYen color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconBadgeMinus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BadgeMinus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBadgePercent: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BadgePercent color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconBadgePlus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BadgePlus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBadgePoundSterling: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BadgePoundSterling
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconBadgeRussianRuble: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BadgeRussianRuble color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconBadgeSwissFranc: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BadgeSwissFranc color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconBadgeX: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BadgeX color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBadge: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Badge color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBaggageClaim: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BaggageClaim color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconBan: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Ban color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBanana: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Banana color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBanknote: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Banknote color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBarChart2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BarChart2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBarChart3: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BarChart3 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBarChart4: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BarChart4 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBarChartBig: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BarChartBig color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBarChartHorizontalBig: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BarChartHorizontalBig
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconBarChartHorizontal: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BarChartHorizontal
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconBarChart: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BarChart color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBaseline: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Baseline color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBath: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Bath color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBatteryCharging: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BatteryCharging color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconBatteryFull: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BatteryFull color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBatteryLow: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BatteryLow color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBatteryMedium: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BatteryMedium color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconBatteryWarning: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BatteryWarning color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconBattery: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Battery color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBeaker: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Beaker color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBeanOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BeanOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBean: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Bean color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBedDouble: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BedDouble color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBedSingle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BedSingle color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBed: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Bed color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBeef: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Beef color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBeer: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Beer color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBellDot: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BellDot color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBellMinus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BellMinus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBellOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BellOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBellPlus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BellPlus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBellRing: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BellRing color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBell: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Bell color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBike: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Bike color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBinary: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Binary color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBiohazard: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Biohazard color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBird: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Bird color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBitcoin: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Bitcoin color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBlinds: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Blinds color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBlocks: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Blocks color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBluetoothConnected: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BluetoothConnected
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconBluetoothOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BluetoothOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconBluetoothSearching: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BluetoothSearching
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconBluetooth: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Bluetooth color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBold: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Bold color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBomb: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Bomb color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBone: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Bone color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBookCopy: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BookCopy color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBookDown: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BookDown color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBookKey: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BookKey color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBookLock: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BookLock color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBookMarked: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BookMarked color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBookMinus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BookMinus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBookOpenCheck: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BookOpenCheck color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconBookOpen: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BookOpen color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBookPlus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BookPlus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBookTemplate: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BookTemplate color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconBookUp2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BookUp2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBookUp: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BookUp color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBookX: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BookX color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBook: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Book color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBookmarkCheck: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BookmarkCheck color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconBookmarkMinus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BookmarkMinus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconBookmarkPlus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BookmarkPlus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconBookmarkX: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BookmarkX color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBookmark: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Bookmark color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBoomBox: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BoomBox color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBot: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Bot color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBoxSelect: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BoxSelect color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBox: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Box color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBoxes: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Boxes color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBrackets: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Brackets color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBrainCircuit: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BrainCircuit color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconBrainCog: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BrainCog color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBrain: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Brain color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBriefcase: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Briefcase color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBringToFront: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <BringToFront color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconBrush: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Brush color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBugOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BugOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBugPlay: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BugPlay color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBug: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Bug color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBuilding2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Building2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBuilding: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Building color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBusFront: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BusFront color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Bus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCableCar: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CableCar color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCable: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Cable color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCakeSlice: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CakeSlice color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCake: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Cake color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCalculator: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Calculator color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCalendarCheck2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CalendarCheck2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconCalendarCheck: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CalendarCheck color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconCalendarClock: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CalendarClock color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconCalendarDays: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CalendarDays color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconCalendarHeart: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CalendarHeart color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconCalendarMinus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CalendarMinus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconCalendarOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CalendarOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCalendarPlus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CalendarPlus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconCalendarRange: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CalendarRange color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconCalendarSearch: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CalendarSearch color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconCalendarX2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CalendarX2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCalendarX: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CalendarX color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCalendar: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Calendar color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCameraOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CameraOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCamera: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Camera color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCandlestickChart: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CandlestickChart color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconCandyCane: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CandyCane color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCandyOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CandyOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCandy: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Candy color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCarFront: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CarFront color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCarTaxiFront: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CarTaxiFront color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconCar: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Car color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCarrot: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Carrot color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCaseLower: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CaseLower color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCaseSensitive: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CaseSensitive color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconCaseUpper: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CaseUpper color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCassetteTape: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CassetteTape color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconCast: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Cast color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCastle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Castle color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCat: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Cat color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCheckCheck: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CheckCheck color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCheckCircle2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CheckCircle2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconCheckCircle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CheckCircle color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCheckSquare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CheckSquare color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCheck: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Check color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconChefHat: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ChefHat color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCherry: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Cherry color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconChevronDownCircle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ChevronDownCircle color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconChevronDownSquare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ChevronDownSquare color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconChevronDown: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ChevronDown
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
      className={className}
    />
  );
};

const IconChevronFirst: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ChevronFirst color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconChevronLast: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ChevronLast color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconChevronLeftCircle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ChevronLeftCircle color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconChevronLeftSquare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ChevronLeftSquare color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconChevronLeft: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ChevronLeft color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconChevronRightCircle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ChevronRightCircle
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconChevronRightSquare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ChevronRightSquare
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconChevronRight: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ChevronRight color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconChevronUpCircle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ChevronUpCircle color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconChevronUpSquare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ChevronUpSquare color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconChevronUp: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ChevronUp color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconChevronsDownUp: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ChevronsDownUp color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconChevronsDown: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ChevronsDown color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconChevronsLeftRight: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ChevronsLeftRight color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconChevronsLeft: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ChevronsLeft color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconChevronsRightLeft: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ChevronsRightLeft color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconChevronsRight: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ChevronsRight color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconChevronsUpDown: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ChevronsUpDown color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconChevronsUp: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ChevronsUp color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconChrome: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Chrome color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconChurch: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Church color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCigaretteOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CigaretteOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconCigarette: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Cigarette color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCircleDashed: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CircleDashed color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconCircleDollarSign: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CircleDollarSign color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconCircleDotDashed: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CircleDotDashed color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconCircleDot: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CircleDot color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCircleEllipsis: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CircleEllipsis color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconCircleEqual: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CircleEqual color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCircleOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CircleOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCircleSlash: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CircleSlash color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCircle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Circle color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCircuitBoard: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CircuitBoard color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconCitrus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Citrus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconClapperboard: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <Clapperboard color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconClipboardCheck: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ClipboardCheck color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconClipboardCopy: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ClipboardCopy color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconClipboardEdit: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ClipboardEdit color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconClipboardList: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ClipboardList color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconClipboardPaste: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ClipboardPaste color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconClipboardSignature: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ClipboardSignature
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconClipboardType: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ClipboardType color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconClipboardX: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ClipboardX color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconClipboard: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Clipboard color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconClock1: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Clock1 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconClock10: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Clock10 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconClock11: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Clock11 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconClock12: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Clock12 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconClock2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Clock2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconClock3: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Clock3 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconClock4: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Clock4 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconClock5: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Clock5 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconClock6: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Clock6 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconClock7: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Clock7 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconClock8: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Clock8 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconClock9: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Clock9 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconClock: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Clock color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCloudCog: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CloudCog color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCloudDrizzle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CloudDrizzle color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconCloudFog: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CloudFog color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCloudHail: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CloudHail color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCloudLightning: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CloudLightning color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconCloudMoonRain: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CloudMoonRain color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconCloudMoon: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CloudMoon color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCloudOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CloudOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCloudRainWind: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CloudRainWind color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconCloudRain: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CloudRain color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCloudSnow: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CloudSnow color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCloudSunRain: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CloudSunRain color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconCloudSun: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CloudSun color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCloud: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Cloud color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCloudy: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Cloudy color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconClover: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Clover color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconClub: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Club color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCode2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Code2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCode: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Code color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCodepen: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Codepen color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCodesandbox: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Codesandbox color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCoffee: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Coffee color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCog: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Cog color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCoins: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Coins color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconColumns: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Columns color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCombine: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Combine color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCommand: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Command color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCompass: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Compass color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconComponent: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Component color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconComputer: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Computer color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconConciergeBell: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ConciergeBell color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconConstruction: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <Construction color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconContact2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Contact2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconContact: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Contact color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconContainer: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Container color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconContrast: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Contrast color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCookie: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Cookie color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCopyCheck: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CopyCheck color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCopyMinus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CopyMinus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCopyPlus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CopyPlus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCopySlash: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CopySlash color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCopyX: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CopyX color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCopy: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Copy color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCopyleft: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Copyleft color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCopyright: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Copyright color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCornerDownLeft: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CornerDownLeft color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconCornerDownRight: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CornerDownRight color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconCornerLeftDown: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CornerLeftDown color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconCornerLeftUp: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CornerLeftUp color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconCornerRightDown: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CornerRightDown color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconCornerRightUp: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CornerRightUp color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconCornerUpLeft: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CornerUpLeft color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconCornerUpRight: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CornerUpRight color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconCpu: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Cpu color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCreativeCommons: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CreativeCommons color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconCreditCard: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CreditCard color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCroissant: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Croissant color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCrop: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Crop color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCross: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Cross color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCrosshair: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Crosshair color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCrown: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Crown color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCupSoda: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <CupSoda color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCurrency: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Currency color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconDatabaseBackup: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <DatabaseBackup color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconDatabaseZap: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <DatabaseZap color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconDatabase: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Database color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconDelete: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Delete color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconDessert: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Dessert color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconDiamond: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Diamond color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconDice1: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Dice1 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconDice2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Dice2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconDice3: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Dice3 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconDice4: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Dice4 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconDice5: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Dice5 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconDice6: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Dice6 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconDices: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Dices color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconDiff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Diff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconDisc2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Disc2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconDisc3: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Disc3 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconDisc: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Disc color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconDivideCircle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <DivideCircle color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconDivideSquare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <DivideSquare color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconDivide: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Divide color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconDnaOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <DnaOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconDna: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Dna color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconDog: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Dog color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconDollarSign: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <DollarSign color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconDonut: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Donut color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconDoorClosed: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <DoorClosed color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconDoorOpen: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <DoorOpen color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconDot: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Dot color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconDownloadCloud: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <DownloadCloud color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconDownload: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Download color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconDrama: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Drama color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconDribbble: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Dribbble color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconDroplet: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Droplet color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconDroplets: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Droplets color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconDrumstick: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Drumstick color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconDumbbell: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Dumbbell color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconEarOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <EarOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconEar: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Ear color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconEggFried: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <EggFried color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconEggOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <EggOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconEgg: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Egg color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconEqualNot: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <EqualNot color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconEqual: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Equal color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconEraser: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Eraser color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconEuro: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Euro color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconExpand: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Expand color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconExternalLink: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ExternalLink color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconEyeOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <EyeOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconEye: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Eye color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFacebook: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Facebook color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFactory: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Factory color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFan: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Fan color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFastForward: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FastForward color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFeather: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Feather color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFerrisWheel: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FerrisWheel color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFigma: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Figma color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileArchive: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileArchive color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileAudio2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileAudio2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileAudio: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileAudio color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileBadge2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileBadge2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileBadge: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileBadge color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileBarChart2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FileBarChart2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconFileBarChart: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FileBarChart color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconFileBox: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileBox color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileCheck2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileCheck2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileCheck: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileCheck color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileClock: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileClock color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileCode2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileCode2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileCode: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileCode color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileDiff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileDiff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileDigit: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileDigit color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileDown: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileDown color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileEdit: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileEdit color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileHeart: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileHeart color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileImage: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileImage color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileInput: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileInput color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileJson2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileJson2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileJson: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileJson color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileKey2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileKey2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileKey: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileKey color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileLineChart: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FileLineChart color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconFileLock2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileLock2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileLock: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileLock color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileMinus2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileMinus2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileMinus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileMinus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileOutput: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileOutput color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFilePieChart: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FilePieChart color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconFilePlus2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FilePlus2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFilePlus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FilePlus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileQuestion: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FileQuestion color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconFileScan: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileScan color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileSearch2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileSearch2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileSearch: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileSearch color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileSignature: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FileSignature color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconFileSpreadsheet: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FileSpreadsheet color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconFileStack: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileStack color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileSymlink: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileSymlink color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileTerminal: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FileTerminal color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconFileText: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileText color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileType2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileType2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileType: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileType color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileUp: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileUp color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileVideo2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileVideo2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileVideo: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileVideo color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileVolume2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileVolume2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileVolume: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileVolume color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileWarning: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileWarning color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileX2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileX2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileX: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileX color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFile: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <File color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFiles: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Files color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFilm: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Film color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFilterX: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FilterX color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFilter: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Filter color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFingerprint: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Fingerprint color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFishOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FishOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFishSymbol: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FishSymbol color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFish: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Fish color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFlagOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FlagOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFlagTriangleLeft: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FlagTriangleLeft color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconFlagTriangleRight: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FlagTriangleRight color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconFlag: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Flag color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFlame: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Flame color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFlashlightOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FlashlightOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconFlashlight: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Flashlight color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFlaskConicalOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FlaskConicalOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconFlaskConical: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FlaskConical color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconFlaskRound: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FlaskRound color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFlipHorizontal2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FlipHorizontal2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconFlipHorizontal: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FlipHorizontal color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconFlipVertical2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FlipVertical2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconFlipVertical: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FlipVertical color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconFlower2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Flower2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFlower: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Flower color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFocus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Focus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFoldHorizontal: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FoldHorizontal color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconFoldVertical: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FoldVertical color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconFolderArchive: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FolderArchive color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconFolderCheck: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderCheck color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFolderClock: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderClock color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFolderClosed: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FolderClosed color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconFolderDot: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderDot color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFolderDown: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderDown color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFolderEdit: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderEdit color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFolderGit2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderGit2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFolderGit: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderGit color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFolderHeart: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderHeart color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFolderInput: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderInput color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFolderKanban: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FolderKanban color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconFolderKey: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderKey color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFolderLock: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderLock color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFolderMinus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderMinus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFolderOpenDot: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FolderOpenDot color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconFolderOpen: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderOpen color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFolderOutput: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FolderOutput color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconFolderPlus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderPlus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFolderRoot: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderRoot color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFolderSearch2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FolderSearch2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconFolderSearch: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FolderSearch color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconFolderSymlink: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FolderSymlink color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconFolderSync: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderSync color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFolderTree: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderTree color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFolderUp: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderUp color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFolderX: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderX color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFolder: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Folder color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFolders: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Folders color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFootprints: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Footprints color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconForklift: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Forklift color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFormInput: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FormInput color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconForward: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Forward color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFrame: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Frame color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFramer: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Framer color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFrown: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Frown color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFuel: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Fuel color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFunctionSquare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <FunctionSquare color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconGalleryHorizontalEnd: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <GalleryHorizontalEnd
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconGalleryHorizontal: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <GalleryHorizontal color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconGalleryThumbnails: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <GalleryThumbnails color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconGalleryVerticalEnd: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <GalleryVerticalEnd
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconGalleryVertical: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <GalleryVertical color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconGamepad2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Gamepad2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconGamepad: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Gamepad color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconGanttChart: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <GanttChart color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconGaugeCircle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <GaugeCircle color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconGauge: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Gauge color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconGavel: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Gavel color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconGem: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Gem color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconGhost: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Ghost color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconGift: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Gift color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconGitBranchPlus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <GitBranchPlus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconGitBranch: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <GitBranch color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconGitCommit: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <GitCommit color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconGitCompare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <GitCompare color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconGitFork: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <GitFork color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconGitMerge: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <GitMerge color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconGitPullRequestClosed: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <GitPullRequestClosed
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconGitPullRequestDraft: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <GitPullRequestDraft
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconGitPullRequest: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <GitPullRequest color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconGithub: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Github color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconGitlab: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Gitlab color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconGlassWater: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <GlassWater color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconGlasses: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Glasses color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconGlobe2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Globe2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconGlobe: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Globe color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconGoal: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Goal color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconGrab: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Grab color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconGraduationCap: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <GraduationCap color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconGrape: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Grape color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconGripHorizontal: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <GripHorizontal color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconGripVertical: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <GripVertical color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconGrip: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Grip color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconGroup: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Group color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconHammer: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Hammer color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconHandMetal: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <HandMetal color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconHand: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Hand color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconHardDriveDownload: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <HardDriveDownload color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconHardDriveUpload: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <HardDriveUpload color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconHardDrive: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <HardDrive color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconHardHat: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <HardHat color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconHash: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Hash color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconHaze: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Haze color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconHdmiPort: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <HdmiPort color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconHeading1: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Heading1 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconHeading2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Heading2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconHeading3: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Heading3 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconHeading4: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Heading4 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconHeading5: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Heading5 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconHeading6: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Heading6 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconHeading: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Heading color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconHeadphones: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Headphones color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconHeartCrack: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <HeartCrack color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconHeartHandshake: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <HeartHandshake color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconHeartOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <HeartOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconHeartPulse: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <HeartPulse color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconHeart: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Heart color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconHelpCircle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <HelpCircle color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconHelpingHand: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <HelpingHand color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconHexagon: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Hexagon color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconHighlighter: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Highlighter color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconHistory: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <History color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconHome: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Home color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconHopOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <HopOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconHop: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Hop color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconHotel: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Hotel color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconHourglass: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Hourglass color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconIceCream2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <IceCream2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconIceCream: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <IceCream color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconImageMinus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ImageMinus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconImageOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ImageOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconImagePlus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ImagePlus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconImage: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Image color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconImport: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Import color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconInbox: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Inbox color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconIndent: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Indent color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconIndianRupee: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <IndianRupee color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconInfinity: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Infinity color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconInfo: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Info color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconInstagram: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Instagram color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconItalic: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Italic color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconIterationCcw: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <IterationCcw color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconIterationCw: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <IterationCw color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconJapaneseYen: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <JapaneseYen color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconJoystick: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Joystick color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconKanban: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Kanban color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconKeyRound: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <KeyRound color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconKeySquare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <KeySquare color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconKey: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Key color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconKeyboard: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Keyboard color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconLampCeiling: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <LampCeiling color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconLampDesk: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <LampDesk color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconLampFloor: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <LampFloor color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconLampWallDown: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <LampWallDown color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconLampWallUp: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <LampWallUp color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconLamp: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Lamp color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconLandmark: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Landmark color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconLanguages: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Languages color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconLaptop2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Laptop2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconLaptop: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Laptop color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconLassoSelect: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <LassoSelect color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconLasso: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Lasso color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconLaugh: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Laugh color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconLayers: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Layers color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconLayoutDashboard: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <LayoutDashboard color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconLayoutGrid: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <LayoutGrid color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconLayoutList: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <LayoutList color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconLayoutPanelLeft: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <LayoutPanelLeft color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconLayoutPanelTop: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <LayoutPanelTop color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconLayoutTemplate: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <LayoutTemplate color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconLayout: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Layout color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconLeaf: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Leaf color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconLeafyGreen: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <LeafyGreen color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconLibrary: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Library color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconLifeBuoy: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <LifeBuoy color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconLigature: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Ligature color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconLightbulbOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <LightbulbOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconLightbulb: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Lightbulb color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconLineChart: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <LineChart color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconLink2Off: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Link2Off color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconLink2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Link2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconLink: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Link color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconLinkedin: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Linkedin color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconListChecks: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ListChecks color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconListEnd: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ListEnd color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconListFilter: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ListFilter color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconListMinus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ListMinus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconListMusic: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ListMusic color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconListOrdered: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ListOrdered color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconListPlus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ListPlus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconListRestart: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ListRestart color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconListStart: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ListStart color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconListTodo: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ListTodo color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconListTree: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ListTree color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconListVideo: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ListVideo color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconListX: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ListX color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconList: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <List color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconLoader2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Loader2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconLoader: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Loader color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconLocateFixed: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <LocateFixed color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconLocateOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <LocateOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconLocate: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Locate color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconLock: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Lock color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconLogIn: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <LogIn color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconLogOut: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <LogOut color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconLollipop: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Lollipop color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconLuggage: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Luggage color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMSquare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MSquare color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMagnet: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Magnet color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMailCheck: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MailCheck color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMailMinus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MailMinus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMailOpen: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MailOpen color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMailPlus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MailPlus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMailQuestion: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MailQuestion color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconMailSearch: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MailSearch color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMailWarning: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MailWarning color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMailX: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MailX color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMail: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Mail color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMailbox: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Mailbox color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMails: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Mails color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMapPinOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MapPinOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMapPin: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MapPin color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMap: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Map color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMartini: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Martini color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMaximize2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Maximize2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMaximize: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Maximize color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMedal: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Medal color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMegaphoneOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MegaphoneOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconMegaphone: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Megaphone color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMeh: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Meh color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMemoryStick: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MemoryStick color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMenuSquare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MenuSquare color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMenu: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Menu color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMerge: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Merge color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMessageCircle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MessageCircle color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconMessageSquareDashed: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MessageSquareDashed
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconMessageSquarePlus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MessageSquarePlus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconMessageSquare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MessageSquare color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconMessagesSquare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MessagesSquare color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconMic2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Mic2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMicOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MicOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMic: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Mic color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMicroscope: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Microscope color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMicrowave: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Microwave color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMilestone: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Milestone color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMilkOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MilkOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMilk: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Milk color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMinimize2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Minimize2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMinimize: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Minimize color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMinusCircle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MinusCircle color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMinusSquare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MinusSquare color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMinus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Minus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMonitorCheck: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MonitorCheck color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconMonitorDot: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MonitorDot color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMonitorDown: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MonitorDown color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMonitorOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MonitorOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMonitorPause: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MonitorPause color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconMonitorPlay: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MonitorPlay color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMonitorSmartphone: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MonitorSmartphone color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconMonitorSpeaker: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MonitorSpeaker color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconMonitorStop: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MonitorStop color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMonitorUp: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MonitorUp color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMonitorX: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MonitorX color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMonitor: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Monitor color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMoonStar: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MoonStar color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMoon: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Moon color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMoreHorizontal: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MoreHorizontal color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconMoreVertical: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MoreVertical color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconMountainSnow: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MountainSnow color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconMountain: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Mountain color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMousePointer2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MousePointer2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconMousePointerClick: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MousePointerClick color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconMousePointerSquareDashed: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MousePointerSquareDashed
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconMousePointer: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MousePointer color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconMouse: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Mouse color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMoveDiagonal2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MoveDiagonal2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconMoveDiagonal: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MoveDiagonal color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconMoveDownLeft: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MoveDownLeft color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconMoveDownRight: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MoveDownRight color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconMoveDown: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MoveDown color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMoveHorizontal: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MoveHorizontal color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconMoveLeft: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MoveLeft color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMoveRight: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MoveRight color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMoveUpLeft: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MoveUpLeft color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMoveUpRight: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MoveUpRight color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMoveUp: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <MoveUp color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMoveVertical: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <MoveVertical color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconMove: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Move color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMusic2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Music2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMusic3: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Music3 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMusic4: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Music4 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMusic: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Music color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconNavigation2Off: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <Navigation2Off color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconNavigation2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Navigation2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconNavigationOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <NavigationOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconNavigation: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Navigation color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconNetwork: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Network color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconNewspaper: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Newspaper color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconNfc: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Nfc color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconNutOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <NutOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconNut: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Nut color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconOctagon: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Octagon color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconOption: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Option color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconOrbit: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Orbit color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconOutdent: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Outdent color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPackage2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Package2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPackageCheck: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PackageCheck color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconPackageMinus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PackageMinus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconPackageOpen: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PackageOpen color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPackagePlus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PackagePlus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPackageSearch: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PackageSearch color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconPackageX: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PackageX color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPackage: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Package color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPaintBucket: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PaintBucket color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPaintbrush2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Paintbrush2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPaintbrush: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Paintbrush color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPalette: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Palette color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPalmtree: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Palmtree color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPanelBottomClose: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PanelBottomClose color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconPanelBottomInactive: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PanelBottomInactive
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconPanelBottomOpen: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PanelBottomOpen color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconPanelBottom: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PanelBottom color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPanelLeftInactive: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PanelLeftInactive color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconPanelRightClose: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PanelRightClose color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconPanelRightInactive: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PanelRightInactive
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconPanelRightOpen: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PanelRightOpen color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconPanelRight: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PanelRight color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPanelTopClose: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PanelTopClose color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconPanelTopInactive: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PanelTopInactive color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconPanelTopOpen: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PanelTopOpen color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconPanelTop: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PanelTop color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPaperclip: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Paperclip color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconParentheses: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Parentheses color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconParkingCircleOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ParkingCircleOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconParkingCircle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ParkingCircle color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconParkingMeter: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ParkingMeter color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconParkingSquareOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ParkingSquareOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconParkingSquare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ParkingSquare color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconPartyPopper: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PartyPopper color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPauseCircle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PauseCircle color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPauseOctagon: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PauseOctagon color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconPause: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Pause color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPawPrint: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PawPrint color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPcCase: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PcCase color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPenTool: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PenTool color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPencilLine: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PencilLine color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPencilRuler: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PencilRuler color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPencil: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Pencil color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPercentCircle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PercentCircle color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconPercentDiamond: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PercentDiamond color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconPercentSquare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PercentSquare color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconPercent: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Percent color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPersonStanding: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PersonStanding color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconPhoneCall: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PhoneCall color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPhoneForwarded: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PhoneForwarded color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconPhoneIncoming: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PhoneIncoming color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconPhoneMissed: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PhoneMissed color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPhoneOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PhoneOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPhoneOutgoing: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PhoneOutgoing color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconPhone: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Phone color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPiSquare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PiSquare color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPi: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Pi color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPictureInPicture2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PictureInPicture2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconPictureInPicture: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PictureInPicture color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconPieChart: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PieChart color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPiggyBank: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PiggyBank color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPilcrowSquare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PilcrowSquare color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconPilcrow: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Pilcrow color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPill: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Pill color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPinOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PinOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPin: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Pin color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPipette: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Pipette color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPizza: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Pizza color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPlaneLanding: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PlaneLanding color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconPlaneTakeoff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PlaneTakeoff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconPlane: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Plane color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPlayCircle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PlayCircle color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPlaySquare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PlaySquare color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPlay: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Play color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPlug2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Plug2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPlugZap2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PlugZap2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPlugZap: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PlugZap color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPlug: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Plug color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPlusCircle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PlusCircle color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPlusSquare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PlusSquare color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPlus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Plus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPocketKnife: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PocketKnife color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPocket: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Pocket color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPodcast: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Podcast color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPointer: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Pointer color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPopcorn: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Popcorn color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPopsicle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Popsicle color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPoundSterling: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PoundSterling color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconPowerOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PowerOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPower: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Power color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPresentation: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <Presentation color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconPrinter: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Printer color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconProjector: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Projector color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPuzzle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Puzzle color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconQrCode: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <QrCode color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconQuote: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Quote color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconRabbit: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Rabbit color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconRadar: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Radar color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconRadiation: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Radiation color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconRadioReceiver: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <RadioReceiver color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconRadioTower: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <RadioTower color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconRadio: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Radio color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconRailSymbol: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <RailSymbol color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconRainbow: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Rainbow color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconRat: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Rat color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconRatio: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Ratio color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconReceipt: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Receipt color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconRectangleHorizontal: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <RectangleHorizontal
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconRectangleVertical: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <RectangleVertical color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconRecycle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Recycle color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconRedo2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Redo2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconRedoDot: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <RedoDot color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconRedo: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Redo color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconRefreshCcwDot: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <RefreshCcwDot color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconRefreshCcw: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <RefreshCcw color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconRefreshCwOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <RefreshCwOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconRefreshCw: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <RefreshCw color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconRefrigerator: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <Refrigerator color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconRegex: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Regex color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconRemoveFormatting: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <RemoveFormatting color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconRepeat1: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Repeat1 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconRepeat2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Repeat2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconRepeat: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Repeat color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconReplaceAll: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ReplaceAll color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconReplace: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Replace color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconReplyAll: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ReplyAll color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconReply: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Reply color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconRewind: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Rewind color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconRocket: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Rocket color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconRockingChair: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <RockingChair color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconRollerCoaster: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <RollerCoaster color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconRotateCcw: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <RotateCcw color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconRotateCw: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <RotateCw color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconRouter: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Router color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconRows: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Rows color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconRss: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Rss color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconRuler: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Ruler color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconRussianRuble: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <RussianRuble color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconSailboat: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Sailboat color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSalad: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Salad color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSandwich: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Sandwich color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSatelliteDish: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <SatelliteDish color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconSatellite: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Satellite color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSaveAll: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SaveAll color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSave: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Save color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconScale: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Scale color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconScaling: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Scaling color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconScanFace: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ScanFace color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconScanLine: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ScanLine color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconScan: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Scan color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconScatterChart: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ScatterChart color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconSchool2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <School2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSchool: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <School color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconScissorsLineDashed: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ScissorsLineDashed
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconScissorsSquareDashedBottom: React.FC<IconProps> = ({
  color,
  size,
  className,
}) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ScissorsSquareDashedBottom
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke}
      className={className}
    />
  );
};

const IconScissorsSquare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ScissorsSquare color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconScissors: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Scissors color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconScreenShareOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ScreenShareOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconScreenShare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ScreenShare color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconScrollText: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ScrollText color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconScroll: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Scroll color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSearchCheck: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SearchCheck color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSearchCode: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SearchCode color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSearchSlash: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SearchSlash color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSearchX: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SearchX color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSearch: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Search color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSendToBack: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SendToBack color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSend: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Send color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSeparatorHorizontal: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <SeparatorHorizontal
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconSeparatorVertical: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <SeparatorVertical color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconServerCog: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ServerCog color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconServerCrash: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ServerCrash color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconServerOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ServerOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconServer: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Server color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSettings2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Settings2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSettings: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Settings color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconShapes: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Shapes color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconShare2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Share2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconShare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Share color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSheet: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Sheet color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconShell: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Shell color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconShieldAlert: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ShieldAlert color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconShieldBan: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ShieldBan color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconShieldCheck: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ShieldCheck color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconShieldEllipsis: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ShieldEllipsis color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconShieldHalf: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ShieldHalf color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconShieldMinus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ShieldMinus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconShieldOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ShieldOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconShieldPlus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ShieldPlus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconShieldQuestion: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ShieldQuestion color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconShield: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Shield color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconShipWheel: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ShipWheel color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconShip: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Ship color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconShirt: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Shirt color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconShoppingBag: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ShoppingBag color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconShoppingBasket: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ShoppingBasket color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconShoppingCart: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ShoppingCart color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconShovel: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Shovel color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconShowerHead: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ShowerHead color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconShrink: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Shrink color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconShrub: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Shrub color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconShuffle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Shuffle color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSigmaSquare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SigmaSquare color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSigma: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Sigma color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSignalHigh: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SignalHigh color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSignalLow: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SignalLow color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSignalMedium: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <SignalMedium color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconSignalZero: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SignalZero color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSignal: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Signal color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSiren: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Siren color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSkipBack: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SkipBack color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSkipForward: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SkipForward color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSkull: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Skull color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSlack: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Slack color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSlash: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Slash color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSlice: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Slice color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSlidersHorizontal: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <SlidersHorizontal color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconSliders: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Sliders color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSmartphoneCharging: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <SmartphoneCharging
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconSmartphoneNfc: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <SmartphoneNfc color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconSmartphone: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Smartphone color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSmilePlus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SmilePlus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSmile: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Smile color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSnail: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Snail color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSnowflake: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Snowflake color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSofa: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Sofa color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSoup: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Soup color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSpace: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Space color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSpade: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Spade color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSparkle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Sparkle color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSpeaker: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Speaker color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSpeech: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Speech color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSpellCheck2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SpellCheck2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSpellCheck: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SpellCheck color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSpline: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Spline color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSplitSquareHorizontal: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <SplitSquareHorizontal
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconSplitSquareVertical: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <SplitSquareVertical
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconSplit: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Split color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSprayCan: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SprayCan color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSprout: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Sprout color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSquareAsterisk: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <SquareAsterisk color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconSquareCode: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SquareCode color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSquareDashedBottomCode: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <SquareDashedBottomCode
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconSquareDashedBottom: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <SquareDashedBottom
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconSquareDot: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SquareDot color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSquareEqual: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SquareEqual color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSquareSlash: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SquareSlash color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSquareStack: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SquareStack color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSquare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Square color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSquirrel: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Squirrel color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconStamp: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Stamp color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconStarHalf: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <StarHalf color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconStarOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <StarOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconStar: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Star color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconStepBack: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <StepBack color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconStepForward: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <StepForward color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconStethoscope: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Stethoscope color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSticker: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Sticker color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconStickyNote: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <StickyNote color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconStopCircle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <StopCircle color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconStore: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Store color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconStretchHorizontal: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <StretchHorizontal color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconStretchVertical: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <StretchVertical color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconStrikethrough: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <Strikethrough color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconSubscript: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Subscript color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSubtitles: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Subtitles color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSunDim: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SunDim color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSunMedium: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SunMedium color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSunMoon: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SunMoon color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSunSnow: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SunSnow color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSun: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Sun color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSunrise: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Sunrise color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSunset: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Sunset color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSuperscript: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Superscript color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSwissFranc: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <SwissFranc color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSwitchCamera: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <SwitchCamera color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconSword: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Sword color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSwords: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Swords color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSyringe: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Syringe color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTable2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Table2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTableProperties: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <TableProperties color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconTable: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Table color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTabletSmartphone: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <TabletSmartphone color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconTablet: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Tablet color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTablets: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Tablets color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTag: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Tag color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTags: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Tags color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTally1: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Tally1 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTally2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Tally2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTally3: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Tally3 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTally4: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Tally4 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTally5: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Tally5 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTarget: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Target color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTent: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Tent color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTerminalSquare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <TerminalSquare color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconTerminal: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Terminal color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTestTube2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <TestTube2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTestTube: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <TestTube color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTestTubes: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <TestTubes color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTextCursorInput: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <TextCursorInput color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconTextCursor: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <TextCursor color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTextQuote: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <TextQuote color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconText: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Text color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTheater: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Theater color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconThermometerSnowflake: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ThermometerSnowflake
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconThermometerSun: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ThermometerSun color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconThermometer: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Thermometer color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconThumbsDown: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ThumbsDown color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconThumbsUp: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ThumbsUp color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTicket: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Ticket color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTimerOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <TimerOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTimerReset: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <TimerReset color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTimer: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Timer color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconToggleLeft: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ToggleLeft color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconToggleRight: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ToggleRight color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTornado: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Tornado color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTouchpadOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <TouchpadOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTouchpad: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Touchpad color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTowerControl: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <TowerControl color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconToyBrick: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ToyBrick color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTractor: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Tractor color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTrafficCone: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <TrafficCone color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTrainFrontTunnel: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <TrainFrontTunnel color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconTrainFront: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <TrainFront color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTrainTrack: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <TrainTrack color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTrash2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Trash2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTrash: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Trash color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTreeDeciduous: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <TreeDeciduous color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconTreePine: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <TreePine color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTrees: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Trees color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTrello: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Trello color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTrendingDown: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <TrendingDown color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconTrendingUp: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <TrendingUp color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTriangleRight: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <TriangleRight color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconTriangle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Triangle color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTrophy: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Trophy color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTruck: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Truck color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTurtle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Turtle color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTv2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Tv2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTv: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Tv color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTwitch: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Twitch color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTwitter: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Twitter color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconType: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Type color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconUmbrella: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Umbrella color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconUnderline: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Underline color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconUndo2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Undo2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconUndoDot: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <UndoDot color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconUndo: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Undo color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconUnfoldHorizontal: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <UnfoldHorizontal color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconUnfoldVertical: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <UnfoldVertical color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconUngroup: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Ungroup color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconUnlink2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Unlink2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconUnlink: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Unlink color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconUnlock: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Unlock color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconUnplug: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Unplug color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconUploadCloud: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <UploadCloud color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconUpload: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Upload color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconUsb: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Usb color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconUser2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <User2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconUserCheck2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <UserCheck2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconUserCheck: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <UserCheck color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconUserCircle2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <UserCircle2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconUserCircle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <UserCircle color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconUserCog2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <UserCog2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconUserCog: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <UserCog color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconUserMinus2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <UserMinus2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconUserMinus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <UserMinus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconUserPlus2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <UserPlus2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconUserPlus: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <UserPlus color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconUserSquare2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <UserSquare2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconUserSquare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <UserSquare color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconUserX2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <UserX2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconUserX: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <UserX color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconUser: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <User color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconUsers2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Users2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconUsers: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Users color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconUtensilsCrossed: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <UtensilsCrossed color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconUtensils: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Utensils color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconUtilityPole: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <UtilityPole color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconVariable: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Variable color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconVegan: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Vegan color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconVenetianMask: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <VenetianMask color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconVibrateOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <VibrateOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconVibrate: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Vibrate color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconVideoOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <VideoOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconVideo: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Video color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconVideotape: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Videotape color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconView: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <View color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconVoicemail: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Voicemail color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconVolume1: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Volume1 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconVolume2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Volume2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconVolumeX: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <VolumeX color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconVolume: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Volume color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconVote: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Vote color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconWallet2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Wallet2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconWalletCards: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <WalletCards color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconWallet: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Wallet color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconWallpaper: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Wallpaper color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconWand2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Wand2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconWand: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Wand color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconWarehouse: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Warehouse color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconWatch: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Watch color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconWaves: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Waves color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconWebcam: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Webcam color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconWebhook: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Webhook color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconWheatOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <WheatOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconWheat: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Wheat color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconWholeWord: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <WholeWord color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconWifiOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <WifiOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconWifi: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Wifi color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconWind: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Wind color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconWineOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <WineOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconWine: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Wine color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconWorkflow: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Workflow color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconWrapText: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <WrapText color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconWrench: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Wrench color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconXCircle: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <XCircle color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconXOctagon: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <XOctagon color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconXSquare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <XSquare color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconX: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <X color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconYoutube: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Youtube color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconZapOff: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ZapOff color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconZap: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Zap color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconZoomIn: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ZoomIn color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconZoomOut: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ZoomOut color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconArrowDown01: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ArrowDown01 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconArrowDown10: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ArrowDown10 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconArrowDownAZ: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ArrowDownAZ color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconArrowDownWideNarrow: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowDownWideNarrow
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconArrowDownZA: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ArrowDownZA color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconArrowUp01: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ArrowUp01 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconArrowUp10: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ArrowUp10 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconArrowUpAZ: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ArrowUpAZ color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconArrowUpNarrowWide: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <ArrowUpNarrowWide color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconArrowUpZA: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ArrowUpZA color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconAxis3D: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Axis3D color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBadgeCheck: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <BadgeCheck color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconBraces: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Braces color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconCircleSlash2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <CircleSlash2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconFileAxis3D: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileAxis3D color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFileCog: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FileCog color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconFolderCog: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <FolderCog color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconGanttChartSquare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <GanttChartSquare color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconGrid2X2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Grid2X2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconGrid: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Grid color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconKanbanSquareDashed: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <KanbanSquareDashed
      color={colorHex}
      size={pixelSize}
      strokeWidth={stroke} className={className}
    />
  );
};

const IconKanbanSquare: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <KanbanSquare color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconInspect: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Inspect color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconMove3D: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Move3D color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconPanelLeftClose: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PanelLeftClose color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconPanelLeftOpen: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <PanelLeftOpen color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconPanelLeft: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <PanelLeft color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconEdit3: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Edit3 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconEdit: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Edit color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconEdit2: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Edit2 color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconRotate3D: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Rotate3D color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconScale3D: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Scale3D color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSendHorizonal: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return (
    <SendHorizonal color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />
  );
};

const IconShieldClose: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <ShieldClose color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconSparkles: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Sparkles color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTextSelect: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <TextSelect color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
};

const IconTrain: React.FC<IconProps> = ({ color, size, className }) => {
  const { pixelSize, colorHex } = getIcon(color, size);
  return <Train color={colorHex} size={pixelSize} strokeWidth={stroke} className={className} />;
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
