import Icon from "@/components/ui/icon";
import { NAV_ITEMS } from "@/components/Sidebar";
import type { Section } from "@/components/Sidebar";

const SEARCH_DATA = [
  { section: "home" as Section, title: "Обзор платформы", text: "Единая точка управления всеми бизнес-процессами компании." },
  { section: "home" as Section, title: "Статистика", text: "Ключевые показатели эффективности, отчёты и аналитика." },
  { section: "services" as Section, title: "Тарифный план Базовый", text: "Доступ к основным функциям платформы для малого бизнеса." },
  { section: "services" as Section, title: "Тарифный план Профессиональный", text: "Расширенные возможности, API-доступ и приоритетная поддержка." },
  { section: "services" as Section, title: "Тарифный план Корпоративный", text: "Индивидуальные условия, выделенный менеджер, SLA 99.9%." },
  { section: "docs" as Section, title: "Начало работы", text: "Инструкции по регистрации, настройке аккаунта и первым шагам." },
  { section: "docs" as Section, title: "API Документация", text: "Полное описание REST API, параметры запросов, коды ответов." },
  { section: "docs" as Section, title: "Интеграции", text: "Подключение сторонних сервисов: CRM, ERP, платёжные системы." },
  { section: "support" as Section, title: "Частые вопросы", text: "Ответы на популярные вопросы пользователей платформы." },
  { section: "support" as Section, title: "Создать обращение", text: "Опишите проблему — наши специалисты ответят в течение 2 часов." },
  { section: "contacts" as Section, title: "Офис", text: "Москва, Пресненская набережная, 10. Пн–Пт 9:00–18:00." },
  { section: "contacts" as Section, title: "Электронная почта", text: "info@company.ru — для общих запросов и предложений." },
];

function highlight(text: string, query: string) {
  if (!query.trim()) return <>{text}</>;
  const parts = text.split(new RegExp(`(${query})`, "gi"));
  return (
    <>
      {parts.map((p, i) =>
        p.toLowerCase() === query.toLowerCase() ? (
          <mark key={i} className="search-highlight">{p}</mark>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}

interface TopbarProps {
  search: string;
  searchResults: typeof SEARCH_DATA;
  isSearching: boolean;
  onSearchChange: (value: string) => void;
  onSearchClear: () => void;
  onNavigate: (section: Section) => void;
}

export default function Topbar({
  search,
  searchResults,
  isSearching,
  onSearchChange,
  onSearchClear,
  onNavigate,
}: TopbarProps) {
  return (
    <>
      <header className="flex items-center gap-4 px-6 py-4 bg-card border-b border-border">
        <div className="relative flex-1 max-w-xl">
          <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Поиск по всему сервису..."
            className="w-full pl-9 pr-4 py-2 text-sm bg-muted border border-border rounded-md outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-[hsl(var(--accent))] transition-all placeholder:text-muted-foreground"
          />
          {search && (
            <button
              onClick={onSearchClear}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <Icon name="X" size={14} />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <button className="p-2 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
            <Icon name="Bell" size={18} />
          </button>
          <div className="w-8 h-8 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center text-xs font-bold text-[hsl(var(--primary-foreground))]">
            ИП
          </div>
        </div>
      </header>

      {isSearching && (
        <div className="flex-1 overflow-y-auto p-6 animate-slide-up">
          <div className="flex items-center gap-2 mb-5">
            <Icon name="Search" size={18} className="text-muted-foreground" />
            <h2 className="text-lg font-semibold">
              Результаты поиска{" "}
              <span className="text-muted-foreground font-normal text-sm">
                — найдено {searchResults.length}
              </span>
            </h2>
          </div>

          {searchResults.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <Icon name="SearchX" size={40} className="mx-auto mb-3 opacity-40" />
              <p className="text-sm">Ничего не найдено по запросу «{search}»</p>
            </div>
          ) : (
            <div className="space-y-2">
              {searchResults.map((r, i) => {
                const nav = NAV_ITEMS.find((n) => n.id === r.section)!;
                return (
                  <button
                    key={i}
                    onClick={() => { onNavigate(r.section); onSearchClear(); }}
                    className="w-full text-left flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-[hsl(var(--accent))] hover:shadow-sm transition-all duration-150"
                  >
                    <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name={nav.icon} size={15} className="text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold mb-0.5">
                        {highlight(r.title, search)}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {highlight(r.text, search)}
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded flex-shrink-0">
                      {nav.label}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export { SEARCH_DATA };
