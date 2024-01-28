import { Tabs } from "flowbite-react";
import { HiAdjustments, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import SidebarElement from "../component/SidebarElement";
import { Outlet } from "react-router-dom";
import ProjectContextProvider from "../context/ProjectDataContext";

function App() {
  return (
    <div className="w-screen h-screen flex flex-row">
      <ProjectContextProvider>
        <SidebarElement />
        <main className="w-full">
          <Tabs aria-label="Tabs with icons" style="underline">
            <Tabs.Item active title="Home" icon={HiUserCircle}>
              <div className="mx-7 my-2 h-full">
                <Outlet />
              </div>
            </Tabs.Item>
            <Tabs.Item
              disabled
              title="Assigned Issues"
              icon={MdDashboard}
            ></Tabs.Item>
            <Tabs.Item
              disabled
              title="Completed Issues"
              icon={HiAdjustments}
            ></Tabs.Item>
            <Tabs.Item disabled title="Disabled">
              Disabled content
            </Tabs.Item>
          </Tabs>
        </main>
      </ProjectContextProvider>
    </div>
  );
}

export default App;
