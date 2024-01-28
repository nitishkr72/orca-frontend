// import { Navbar } from "flowbite-react";

// export default function NavbarElement() {
//   return (
//     <Navbar fluid rounded className="border-b-2 border-cyan-400 rounded-none">
//       <Navbar.Collapse>
//         <Navbar.Link href="#" active className="text-xl">
//           Home
//         </Navbar.Link>
//         <Navbar.Link href="#" className="text-xl">
//           Issues
//         </Navbar.Link>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

import { Tabs } from "flowbite-react";
import { HiAdjustments, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import Home from "./Home";

export default function NavbarElement() {
  return (
    <Tabs aria-label="Tabs with icons" style="underline">
      <Tabs.Item active title="Home" icon={HiUserCircle}>
        <div className="mx-7 my-2 w-full h-full">
          <Home />
        </div>
      </Tabs.Item>
      <Tabs.Item title="Assigned Issues" icon={MdDashboard}></Tabs.Item>
      <Tabs.Item title="Completed Issues" icon={HiAdjustments}></Tabs.Item>
      <Tabs.Item disabled title="Disabled">
        Disabled content
      </Tabs.Item>
    </Tabs>
  );
}
