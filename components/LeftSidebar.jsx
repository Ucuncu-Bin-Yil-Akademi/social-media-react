import NavMenu from "./LeftSidebarComponents/NavMenu";
import Messages from "./LeftSidebarComponents/Messages";
import { Divider } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Cookie from "js-cookie";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

export default function LeftSidebar() {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <div className="flex flex-col gap-3">
      <NavMenu />
      <Divider />
      <Messages />
      <Divider />
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-5">
          <SettingsIcon
            style={{
              color: "rgb(87 83 78)",
              fontSize: "1.8rem",
            }}
          />{" "}
          <span className="text-stone-600 text-lg">Settings</span>
        </div>
        <div
          className="flex items-center gap-5 cursor-pointer"
          onClick={() => {
            dispatch({
              type: "LOGOUT",
            });
            Cookie.remove("user_token");
            router.push("/login");
          }}
        >
          <LogoutIcon
            style={{
              color: "rgb(194 65 12)",
              fontSize: "1.8rem",
            }}
          />{" "}
          <span className="text-orange-700">Logout</span>
        </div>
      </div>
    </div>
  );
}
