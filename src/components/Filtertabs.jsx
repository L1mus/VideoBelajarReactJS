function FilterTabs({
  tabs,
  activeTab,
  onTabClick,
  activeColorClass = "text-main-tertiary",
  borderColorClass = "bg-main-tertiary",
}) {
  return (
    <div className="flex items-center gap-6 flex-nowrap overflow-x-auto">
      {tabs.map((tab) => (
        <a
          key={tab}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onTabClick(tab);
          }}
          className={`relative py-3 px-1 text-sm font-semibold transition-colors duration-200 whitespace-nowrap ${
            activeTab === tab
              ? activeColorClass
              : "text-text-dark-secondary hover:text-main-tertiary"
          }`}
        >
          {tab}
          {activeTab === tab && (
            <div
              className={`absolute bottom-0 left-1 h-1 rounded-full ${borderColorClass}`}
              style={{ width: "50%" }}
            ></div>
          )}
        </a>
      ))}
    </div>
  );
}

export default FilterTabs;
