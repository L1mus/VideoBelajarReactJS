import IconProfile from "../icons/Iconprofile";
import IconClass from "../icons/Iconkelas";
import IconOrder from "../icons/Iconpesanan";

const SidebarLink = ({ children, active = false, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-colors duration-200 
      ${
        active
          ? "bg-main-secondary4 text-main-secondary font-bold border border-main-secondary"
          : "text-text-light-disabled hover:bg-other-primary-background"
      }`}
  >
    {children}
  </button>
);

function Sidebar({ activeTab, onNavigate }) {
  return (
    <aside className="w-full lg:w-1/4">
      <div className="bg-other-primary-background p-4 rounded-lg shadow-sm space-y-2">
        <SidebarLink
          active={activeTab === "Profil Saya"}
          onClick={() => onNavigate("profil")}
        >
          <IconProfile className="w-5 h-5" /> <span>Profil Saya</span>
        </SidebarLink>
        <SidebarLink
          active={activeTab === "Kelas Saya"}
          onClick={() => onNavigate("kelas")}
        >
          <IconClass className="w-5 h-5" /> <span>Kelas Saya</span>
        </SidebarLink>
        <SidebarLink
          active={activeTab === "Pesanan Saya"}
          onClick={() => onNavigate("pesanan")}
        >
          <IconOrder className="w-5 h-5" /> <span>Pesanan Saya</span>
        </SidebarLink>
      </div>
    </aside>
  );
}

export default Sidebar;
