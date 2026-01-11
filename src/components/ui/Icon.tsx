import {
  ArrowLeftRight,
  BookOpen,
  Boxes,
  BriefcaseBusiness,
  Building2,
  CreditCard,
  FileText,
  Globe,
  Landmark,
  Plug,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import type { IconName } from "@/content/products";

const ICONS: Record<IconName, React.ComponentType<{ className?: string }>> = {
  CreditCard,
  Landmark,
  ArrowLeftRight,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  Users,
  Boxes,
  FileText,
  Plug,
  Sparkles,
  ShieldCheck,
  Globe,
};

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const Cmp = ICONS[name];
  return <Cmp className={className} />;
}
