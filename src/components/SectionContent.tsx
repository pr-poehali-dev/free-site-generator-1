import Icon from "@/components/ui/icon";
import type { Section } from "@/components/Sidebar";

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-foreground tracking-tight">{title}</h1>
      {subtitle && <p className="text-muted-foreground text-sm mt-1">{subtitle}</p>}
    </div>
  );
}

function StatCard({ label, value, icon, delta }: { label: string; value: string; icon: string; delta?: string }) {
  return (
    <div className="bg-card border border-border rounded-lg p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{label}</span>
        <div className="w-7 h-7 rounded bg-secondary flex items-center justify-center">
          <Icon name={icon} size={14} className="text-muted-foreground" />
        </div>
      </div>
      <div className="text-2xl font-bold text-foreground">{value}</div>
      {delta && <div className="text-xs text-green-600 mt-1 font-medium">{delta}</div>}
    </div>
  );
}

function HomeSection() {
  return (
    <div>
      <SectionHeader title="Главная" subtitle="Добро пожаловать в БизнесПортал — ваш рабочий центр" />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Активных задач" value="24" icon="CheckSquare" delta="↑ 3 с прошлой недели" />
        <StatCard label="Сотрудников" value="148" icon="Users" />
        <StatCard label="Документов" value="1 204" icon="FolderOpen" delta="↑ 12 за месяц" />
        <StatCard label="Запросов" value="7" icon="MessageSquare" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-card border border-border rounded-lg p-5">
          <h3 className="font-semibold text-sm mb-4 text-foreground">Последние действия</h3>
          <div className="space-y-3">
            {[
              { text: "Обновлён договор с ООО «Альфа»", time: "10 мин назад", icon: "FilePen" },
              { text: "Новый запрос в поддержку #4521", time: "1 час назад", icon: "Headphones" },
              { text: "Добавлен пользователь Иванов А.С.", time: "3 часа назад", icon: "UserPlus" },
              { text: "Оплата тарифа «Профессиональный»", time: "Вчера", icon: "CreditCard" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <div className="w-7 h-7 rounded bg-secondary flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} size={13} className="text-muted-foreground" />
                </div>
                <span className="flex-1 text-foreground">{item.text}</span>
                <span className="text-xs text-muted-foreground flex-shrink-0">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-5">
          <h3 className="font-semibold text-sm mb-4 text-foreground">Быстрые действия</h3>
          <div className="space-y-2">
            {[
              { label: "Создать документ", icon: "FilePlus" },
              { label: "Новый запрос", icon: "MessageCirclePlus" },
              { label: "Пригласить сотрудника", icon: "UserPlus" },
              { label: "Сформировать отчёт", icon: "BarChart2" },
            ].map((a, i) => (
              <button key={i} className="w-full flex items-center gap-3 px-3 py-2.5 text-sm rounded-md border border-border hover:bg-secondary hover:border-[hsl(var(--accent))] transition-all text-left">
                <Icon name={a.icon} size={15} className="text-[hsl(var(--accent))]" />
                <span>{a.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileSection() {
  return (
    <div>
      <SectionHeader title="Профиль" subtitle="Управление личными данными и настройками аккаунта" />
      <div className="max-w-2xl space-y-4">
        <div className="bg-card border border-border rounded-lg p-6 flex items-center gap-5">
          <div className="w-16 h-16 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center text-2xl font-bold text-[hsl(var(--primary-foreground))] flex-shrink-0">
            ИП
          </div>
          <div>
            <div className="font-semibold text-lg">Иван Петров</div>
            <div className="text-sm text-muted-foreground">Администратор · ivan@company.ru</div>
            <div className="text-xs text-green-600 mt-1 font-medium">● Аккаунт активен</div>
          </div>
          <button className="ml-auto px-4 py-2 text-sm border border-border rounded-md hover:bg-secondary transition-colors">
            Редактировать
          </button>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="font-semibold text-sm mb-4">Данные аккаунта</h3>
          <div className="space-y-3">
            {[
              { label: "Имя", value: "Иван Петров" },
              { label: "Должность", value: "Руководитель" },
              { label: "Телефон", value: "+7 (999) 123-45-67" },
              { label: "Часовой пояс", value: "UTC+3 (Москва)" },
              { label: "Язык интерфейса", value: "Русский" },
            ].map((f, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <span className="text-sm text-muted-foreground">{f.label}</span>
                <span className="text-sm font-medium">{f.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="font-semibold text-sm mb-4">Безопасность</h3>
          <div className="space-y-2">
            {[
              { label: "Изменить пароль", icon: "Lock" },
              { label: "Двухфакторная аутентификация", icon: "ShieldCheck" },
              { label: "Активные сессии", icon: "Monitor" },
            ].map((a, i) => (
              <button key={i} className="w-full flex items-center gap-3 px-3 py-2.5 text-sm rounded-md border border-border hover:bg-secondary transition-all text-left">
                <Icon name={a.icon} size={15} className="text-[hsl(var(--accent))]" />
                <span>{a.label}</span>
                <Icon name="ChevronRight" size={14} className="ml-auto text-muted-foreground" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ServicesSection() {
  const plans = [
    {
      name: "Базовый",
      price: "1 490 ₽",
      period: "/ мес",
      features: ["До 5 пользователей", "10 ГБ хранилища", "Базовая поддержка", "Основные функции"],
      current: false,
    },
    {
      name: "Профессиональный",
      price: "4 990 ₽",
      period: "/ мес",
      features: ["До 25 пользователей", "100 ГБ хранилища", "Приоритетная поддержка", "API-доступ", "Расширенная аналитика"],
      current: true,
    },
    {
      name: "Корпоративный",
      price: "По запросу",
      period: "",
      features: ["Безлимит пользователей", "Неограниченное хранилище", "Выделенный менеджер", "SLA 99.9%", "Индивидуальные условия"],
      current: false,
    },
  ];

  return (
    <div>
      <SectionHeader title="Услуги" subtitle="Тарифные планы и подключаемые сервисы" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`bg-card border rounded-lg p-6 flex flex-col ${
              plan.current ? "border-[hsl(var(--accent))] shadow-md" : "border-border"
            }`}
          >
            {plan.current && (
              <div className="text-xs font-semibold text-[hsl(var(--accent))] uppercase tracking-wider mb-2">
                Текущий план
              </div>
            )}
            <h3 className="font-bold text-lg">{plan.name}</h3>
            <div className="mt-2 mb-5">
              <span className="text-3xl font-bold">{plan.price}</span>
              <span className="text-muted-foreground text-sm">{plan.period}</span>
            </div>
            <ul className="space-y-2 flex-1 mb-5">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-center gap-2 text-sm">
                  <Icon name="Check" size={14} className="text-green-600 flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-2.5 text-sm font-semibold rounded-md transition-colors ${
                plan.current
                  ? "bg-[hsl(var(--accent))] text-white hover:opacity-90"
                  : "border border-border hover:bg-secondary text-foreground"
              }`}
            >
              {plan.current ? "Текущий план" : "Выбрать план"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function DocsSection() {
  const articles = [
    { category: "Начало работы", items: ["Регистрация и вход", "Настройка профиля", "Первые шаги"] },
    { category: "API", items: ["Аутентификация", "Эндпоинты", "Webhooks", "Примеры кода"] },
    { category: "Интеграции", items: ["CRM-системы", "ERP-системы", "Платёжные системы"] },
    { category: "Безопасность", items: ["Управление доступом", "Двухфакторная аутентификация", "Журнал событий"] },
  ];

  return (
    <div>
      <SectionHeader title="Документация" subtitle="Руководства, справочники и техническая информация" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articles.map((cat, i) => (
          <div key={i} className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <Icon name="BookOpen" size={15} className="text-[hsl(var(--accent))]" />
              <h3 className="font-semibold text-sm">{cat.category}</h3>
            </div>
            <ul className="space-y-1">
              {cat.items.map((item, j) => (
                <li key={j}>
                  <button className="w-full text-left flex items-center gap-2 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                    <Icon name="ChevronRight" size={13} className="group-hover:translate-x-0.5 transition-transform" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function SupportSection() {
  const faqs = [
    { q: "Как изменить тарифный план?", a: "Перейдите в раздел «Услуги» и выберите нужный план. Изменение вступает в силу со следующего расчётного периода." },
    { q: "Как добавить нового пользователя?", a: "В разделе «Профиль» → «Управление пользователями» нажмите кнопку «Пригласить сотрудника» и укажите email." },
    { q: "Как восстановить доступ к аккаунту?", a: "На странице входа нажмите «Забыли пароль?» и следуйте инструкциям, направленным на ваш email." },
  ];

  return (
    <div>
      <SectionHeader title="Поддержка" subtitle="Помощь и ответы на вопросы" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-3">
          <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-2">Частые вопросы</h3>
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-5">
              <div className="font-semibold text-sm mb-2">{faq.q}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <Icon name="MessageCircle" size={16} className="text-[hsl(var(--accent))]" />
              <h3 className="font-semibold text-sm">Написать в поддержку</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-4">Ответим в течение 2 рабочих часов</p>
            <button className="w-full py-2.5 text-sm font-semibold bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-md hover:opacity-90 transition-opacity">
              Создать обращение
            </button>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <Icon name="Phone" size={16} className="text-[hsl(var(--accent))]" />
              <h3 className="font-semibold text-sm">Телефон</h3>
            </div>
            <div className="font-mono text-sm font-semibold">8 (800) 555-00-00</div>
            <div className="text-xs text-muted-foreground mt-1">Пн–Пт 9:00–18:00 (МСК)</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactsSection() {
  return (
    <div>
      <SectionHeader title="Контакты" subtitle="Реквизиты и способы связи" />
      <div className="max-w-2xl space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: "MapPin", title: "Адрес офиса", lines: ["Москва, 123112", "Пресненская наб., 10", "Пн–Пт 9:00–18:00 (МСК)"] },
            { icon: "Mail", title: "Электронная почта", lines: ["info@company.ru", "support@company.ru", "legal@company.ru"] },
            { icon: "Phone", title: "Телефон", lines: ["8 (800) 555-00-00", "+7 (495) 000-00-00", "Факс: +7 (495) 000-00-01"] },
            { icon: "Building", title: "Реквизиты", lines: ["ООО «Компания»", "ИНН: 7700000000", "ОГРН: 1000000000000"] },
          ].map((card, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-5">
              <div className="flex items-center gap-2 mb-3">
                <Icon name={card.icon} size={16} className="text-[hsl(var(--accent))]" />
                <h3 className="font-semibold text-sm">{card.title}</h3>
              </div>
              {card.lines.map((line, j) => (
                <div key={j} className="text-sm text-muted-foreground">{line}</div>
              ))}
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-lg p-5">
          <h3 className="font-semibold text-sm mb-4">Отправить сообщение</h3>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <input placeholder="Ваше имя" className="px-3 py-2 text-sm bg-background border border-border rounded-md outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] transition-all" />
              <input placeholder="Email" className="px-3 py-2 text-sm bg-background border border-border rounded-md outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] transition-all" />
            </div>
            <input placeholder="Тема" className="w-full px-3 py-2 text-sm bg-background border border-border rounded-md outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] transition-all" />
            <textarea rows={3} placeholder="Ваше сообщение..." className="w-full px-3 py-2 text-sm bg-background border border-border rounded-md outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] transition-all resize-none" />
            <button className="px-6 py-2.5 text-sm font-semibold bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-md hover:opacity-90 transition-opacity">
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface SectionContentProps {
  section: Section;
}

export default function SectionContent({ section }: SectionContentProps) {
  return (
    <div className="animate-slide-up">
      {section === "home" && <HomeSection />}
      {section === "profile" && <ProfileSection />}
      {section === "services" && <ServicesSection />}
      {section === "docs" && <DocsSection />}
      {section === "support" && <SupportSection />}
      {section === "contacts" && <ContactsSection />}
    </div>
  );
}
