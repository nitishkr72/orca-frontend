import { Sidebar } from "flowbite-react";
import { useContext } from "react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiUser,
  HiChevronRight,
  HiChevronUp,
} from "react-icons/hi";
import { PiProjectorScreenChart } from "react-icons/pi";

import { twMerge } from "tailwind-merge";
import { ProjectContext } from "../context/ProjectDataContext";

export default function SidebarElement() {
  const context = useContext(ProjectContext);

  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items className="flex flex-col h-full justify-between">
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
          <Sidebar.Collapse
            icon={PiProjectorScreenChart}
            label="Projects"
            renderChevronIcon={(theme, open) => {
              const IconComponent = open ? HiChevronUp : HiChevronRight;

              return (
                <IconComponent
                  aria-hidden
                  className={twMerge(
                    theme.label.icon.open[open ? "on" : "off"]
                  )}
                />
              );
            }}
          >
            {context?.projectData.map((project, index) => {
              return (
                <Sidebar.Item key={index} href="#">
                  {project}
                </Sidebar.Item>
              );
            })}
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Log out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
