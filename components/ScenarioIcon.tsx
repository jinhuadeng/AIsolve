'use client';

import { 
  Presentation, BookOpenText, Languages, Mic, Table2, 
  BrainCircuit, SearchCheck, Mail, Scissors, ScanSearch, 
  Palette, Camera, Clapperboard, Home, LayoutTemplate, 
  Image as ImageIcon, Terminal, Database, MessageCircle, 
  Music, FileUser, Calculator, Scale, Sparkles, GraduationCap 
} from 'lucide-react';

const iconMap: Record<string, any> = {
  'ppt': Presentation,
  'doc': BookOpenText,
  'trans': Languages,
  'mic': Mic,
  'excel': Table2,
  'mind': BrainCircuit,
  'search': SearchCheck,
  'email': Mail,
  'cut': Scissors,
  'zoom': ScanSearch,
  'logo': Palette,
  'photo': Camera,
  'video': Clapperboard,
  'home': Home,
  'poster': LayoutTemplate,
  'img': ImageIcon,
  'code': Terminal,
  'web': LayoutTemplate,
  'sql': Database,
  'speak': MessageCircle,
  'music': Music,
  'resume': FileUser,
  'math': Calculator,
  'legal': Scale,
  'edu': GraduationCap,
  'default': Sparkles
};

interface Props {
  name: string;
  className?: string;
}

export function ScenarioIcon({ name, className }: Props) {
  const IconComponent = iconMap[name] || iconMap['default'];
  return <IconComponent className={className} strokeWidth={1.5} />;
}