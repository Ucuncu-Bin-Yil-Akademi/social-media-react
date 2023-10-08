import NavMenu from "./LeftSidebarComponents/NavMenu";
import Messages from "./LeftSidebarComponents/Messages";
import { Divider } from "@mui/material";
export default function LeftSidebar() {
  return (
    <div className="flex flex-col gap-10">
      <NavMenu />
      <Divider />
      <Messages />
    </div>
  );
}
