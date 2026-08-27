import * as LucideIcons from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaDiscord,
  FaXTwitter,
} from "react-icons/fa6";

import {
  SiC,
  SiCplusplus,
  SiKotlin,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiFirebase,
  SiAndroid,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiAndroidstudio,
} from "react-icons/si";

/* -------------------------------------------------------------------------- */
/*                              LUCIDE ICONS                                  */
/* -------------------------------------------------------------------------- */

export const lucideIconMap = {
  // Navigation
  Home: LucideIcons.Home,
  User: LucideIcons.User,
  FolderKanban: LucideIcons.FolderKanban,
  Brain: LucideIcons.Brain,
  Cpu: LucideIcons.Cpu,
  BriefcaseBusiness: LucideIcons.BriefcaseBusiness,
  GraduationCap: LucideIcons.GraduationCap,
  Mail: LucideIcons.Mail,
  Award: LucideIcons.Award,
  Trophy: LucideIcons.Trophy,
  Medal: LucideIcons.Medal,

  // Skills
  Server: LucideIcons.Server,
  Monitor: LucideIcons.Monitor,
  Database: LucideIcons.Database,
  Network: LucideIcons.Network,
  ShieldCheck: LucideIcons.ShieldCheck,
  Smartphone: LucideIcons.Smartphone,
  GitBranch: LucideIcons.GitBranch,
  Layout: LucideIcons.Layout,

  // Project
  FileText: LucideIcons.FileText,
  ListChecks: LucideIcons.ListChecks,
  Layers: LucideIcons.Layers,
  Images: LucideIcons.Images,
  Calendar: LucideIcons.Calendar,
  ExternalLink: LucideIcons.ExternalLink,
  ArrowUpRight: LucideIcons.ArrowUpRight,
  ArrowLeft: LucideIcons.ArrowLeft,

  // Experience / Education
  Building2: LucideIcons.Building2,
  Briefcase: LucideIcons.Briefcase,
  UserRound: LucideIcons.UserRound,
  MapPin: LucideIcons.MapPin,
  CalendarRange: LucideIcons.CalendarRange,
  School: LucideIcons.School,

  // Certificate
  BadgeCheck: LucideIcons.BadgeCheck,
  Eye: LucideIcons.Eye,
  Maximize2: LucideIcons.Maximize2,

  // Achievement / Competition
  Crown: LucideIcons.Crown,
  Users: LucideIcons.Users,
  CalendarDays: LucideIcons.CalendarDays,

  // GitHub
  BookMarked: LucideIcons.BookMarked,
  Star: LucideIcons.Star,
  GitFork: LucideIcons.GitFork,
  UserPlus: LucideIcons.UserPlus,
  Activity: LucideIcons.Activity,
  Globe: LucideIcons.Globe,
  Code2: LucideIcons.Code2,

  // Contact
  Phone: LucideIcons.Phone,
  Send: LucideIcons.Send,

  // Data / Status
  AlertTriangle: LucideIcons.AlertTriangle,
  CircleAlert: LucideIcons.CircleAlert,
  Info: LucideIcons.Info,
  CircleHelp: LucideIcons.CircleHelp,
  CircleX: LucideIcons.CircleX,
  CheckCircle2: LucideIcons.CheckCircle2,

  // General UI
  X: LucideIcons.X,
  Menu: LucideIcons.Menu,
  Search: LucideIcons.Search,
  Download: LucideIcons.Download,
  ChevronDown: LucideIcons.ChevronDown,
  ChevronUp: LucideIcons.ChevronUp,
  MoreHorizontal: LucideIcons.MoreHorizontal,
  Pencil: LucideIcons.Pencil,
  Copy: LucideIcons.Copy,
  Share2: LucideIcons.Share2,
  ArrowRight: LucideIcons.ArrowRight,
  ArrowUpDown: LucideIcons.ArrowUpDown,
  SlidersHorizontal: LucideIcons.SlidersHorizontal,
};

/* -------------------------------------------------------------------------- */
/*                           TECHNOLOGY ICONS                                 */
/* -------------------------------------------------------------------------- */

export const technologyIconMap = {
  SiC,
  SiCplusplus,
  SiKotlin,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiFirebase,
  SiAndroid,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiAndroidstudio,
};

/* -------------------------------------------------------------------------- */
/*                             SOCIAL ICONS                                   */
/* -------------------------------------------------------------------------- */

export const socialIconMap = {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaDiscord,
  FaXTwitter,
};

// FALLBACK ICON
export const MissingIcon = LucideIcons.CircleDashed;

// ICON RESOLVER
export function getIcon(iconName, iconLibrary = "lucide") {
  if (!iconName) {
    console.warn("Missing icon name.");
    return MissingIcon;
  }

  const maps = {
    lucide: lucideIconMap,
    technology: technologyIconMap,
    si: technologyIconMap,
    social: socialIconMap,
    fa6: socialIconMap,
  };

  const iconMap = maps[iconLibrary];

  if (!iconMap) {
    console.warn(
      `Unknown icon library "${iconLibrary}" for icon "${iconName}".`,
    );

    return MissingIcon;
  }

  const Icon = iconMap[iconName];

  if (!Icon) {
    console.warn(
      `Icon "${iconName}" was not found in "${iconLibrary}" icon map.`,
    );

    return MissingIcon;
  }

  return Icon;
}
