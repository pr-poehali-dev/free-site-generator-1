import { useState, useMemo } from "react";
import Sidebar from "@/components/Sidebar";
import Topbar, { SEARCH_DATA } from "@/components/Topbar";
import SectionContent from "@/components/SectionContent";
import type { Section } from "@/components/Sidebar";

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const searchResults = useMemo(() => {
    if (!search.trim()) return [];
    const q = search.toLowerCase();
    return SEARCH_DATA.filter(
      (d) => d.title.toLowerCase().includes(q) || d.text.toLowerCase().includes(q)
    );
  }, [search]);

  const isSearching = search.trim().length > 0;

  function handleNavigate(section: Section) {
    setActiveSection(section);
    setSearch("");
  }

  return (
    <div className="flex h-screen overflow-hidden bg-background font-golos">
      <Sidebar
        activeSection={activeSection}
        sidebarOpen={sidebarOpen}
        onNavigate={handleNavigate}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar
          search={search}
          searchResults={searchResults}
          isSearching={isSearching}
          onSearchChange={setSearch}
          onSearchClear={() => setSearch("")}
          onNavigate={handleNavigate}
        />

        {!isSearching && (
          <main className="flex-1 overflow-y-auto p-6">
            <SectionContent section={activeSection} />
          </main>
        )}
      </div>
    </div>
  );
}
