import NavbarElement from "../component/NavbarElement";
import SidebarElement from "../component/SidebarElement";

function App() {
  return (
    <div className="w-full h-screen flex flex-row">
      <SidebarElement />
      <main className="w-full">
        <NavbarElement />
      </main>
    </div>
  );
}

export default App;
