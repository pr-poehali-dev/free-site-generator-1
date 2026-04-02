import Icon from "@/components/ui/icon";

type Section = "home" | "profile" | "services" | "docs" | "support" | "contacts";

const NAV_ITEMS: { id: Section; label: string; icon: string }[] = [
  { id: "home", label: "Главная", icon: "LayoutDashboard" },
  { id: "profile", label: "Профиль", icon: "UserCircle" },
  { id: "services", label: "Услуги", icon: "Briefcase" },
  { id: "docs", label: "Документация", icon: "FileText" },
  { id: "support", label: "Поддержка", icon: "LifeBuoy" },
  { id: "contacts", label: "Контакты", icon: "Mail" },
];

interface SidebarProps {
  activeSection: Section;
  sidebarOpen: boolean;
  onNavigate: (section: Section) => void;
  onToggle: () => void;
}

export default function Sidebar({ activeSection, sidebarOpen, onNavigate, onToggle }: SidebarProps) {
  return (
    <aside
      className={`flex flex-col transition-all duration-300 bg-[hsl(var(--sidebar-background))] border-r border-[hsl(var(--sidebar-border))] ${
        sidebarOpen ? "w-60" : "w-16"
      }`}
    >
      <div className="flex items-center gap-3 px-4 py-5 border-b border-[hsl(var(--sidebar-border))]">
        <div className="w-8 h-8 rounded bg-[hsl(var(--sidebar-primary))] flex items-center justify-center flex-shrink-0">
          <Icon name="Building2" size={16} className="text-white" />
        </div>
        {sidebarOpen && (
          <span className="font-bold text-[hsl(var(--sidebar-primary-foreground))] text-sm tracking-wide leading-tight">
            БизнесПортал
          </span>
        )}
      </div>

      <nav className="flex-1 py-4 space-y-0.5 px-2 overflow-y-auto">
        {NAV_ITEMS.map((item) => {
          const active = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-colors duration-150 ${
                active
                  ? "bg-[hsl(var(--sidebar-primary))] text-white font-semibold"
                  : "text-[hsl(var(--sidebar-foreground))] hover:bg-[hsl(var(--sidebar-accent))] hover:text-[hsl(var(--sidebar-accent-foreground))]"
              }`}
            >
              <Icon name={item.icon} size={18} className="flex-shrink-0" />
              {sidebarOpen && <span className="truncate">{item.label}</span>}
            </button>
          );
        })}
      </nav>

      <div className="px-2 pb-4">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md text-[hsl(var(--sidebar-foreground))] hover:bg-[hsl(var(--sidebar-accent))] transition-colors text-xs"
        >
          <Icon name={sidebarOpen ? "PanelLeftClose" : "PanelLeftOpen"} size={16} />
          {sidebarOpen && <span>Свернуть</span>}
        </button>
      </div>
    </aside>
  );
}

export { NAV_ITEMS };
export type { Section };
