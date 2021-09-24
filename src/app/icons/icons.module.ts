import { NgModule } from "@angular/core";

import { FeatherModule } from "angular-feather";
import {
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  ArrowDown,
  ArrowLeft,
  ArrowUp,
  Award,
  Bell,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Clock,
  Code,
  Codesandbox,
  Copy,
  CreditCard,
  ExternalLink,
  Feather,
  Flag,
  FolderMinus,
  FolderPlus,
  Gift,
  Heart,
  Home,
  Image,
  Info,
  Key,
  Link,
  Link2,
  Mail,
  MessageSquare,
  Percent,
  Plus,
  Power,
  RefreshCw,
  Repeat,
  RotateCw,
  Search,
  Send,
  Settings,
  Share2,
  ShoppingBag,
  ShoppingCart,
  Trash2,
  TrendingUp,
  User,
  UserPlus,
  UserX,
  X,
} from "angular-feather/icons";
import {
  BellNotification,
  Bitclout,
  BitcloutCircle,
  Card,
  Coin,
  Diamond,
  Frame,
  Gem,
  Lock,
  MultipleNfts,
  Quote,
  SingleNft,
} from "src/assets/img/feather";

const icons = {
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  ArrowDown,
  ArrowLeft,
  ArrowUp,
  Award,
  Bell,
  BellNotification,
  Bitclout,
  BitcloutCircle,
  Card,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Clock,
  Code,
  Codesandbox,
  Coin,
  Copy,
  CreditCard,
  Diamond,
  ExternalLink,
  Feather,
  Flag,
  FolderMinus,
  FolderPlus,
  Frame,
  Gem,
  Gift,
  Heart,
  Home,
  Image,
  Info,
  Key,
  Link,
  Link2,
  Lock,
  Mail,
  MessageSquare,
  MultipleNfts,
  Percent,
  Power,
  Plus,
  Quote,
  RefreshCw,
  Repeat,
  RotateCw,
  Search,
  Send,
  Settings,
  Share2,
  ShoppingBag,
  ShoppingCart,
  SingleNft,
  Trash2,
  TrendingUp,
  User,
  UserPlus,
  UserX,
  X,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
