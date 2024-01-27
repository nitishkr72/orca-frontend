import { Sidebar, Navbar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiUser,
} from "react-icons/hi";
import Home from "./component/Home";

function NavbarElement() {
  return (
    <Navbar fluid rounded>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Issues</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

function SidebarElement() {
  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Issues
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox} label="3">
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Projects
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Log out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

function App() {
  return (
    <div className="w-full h-screen flex flex-row">
      <SidebarElement />
      <main className="w-full">
        <NavbarElement />
        <div className="m-4">
          <Home />
        </div>
      </main>
    </div>
  );
}

export default App;
