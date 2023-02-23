import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import {
  Chat,
  EmojiFlags,
  ExpandMore,
  LocalHospital,
  People,
  Storefront,
  VideoLibrary,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";

function sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHw%3D&w=1000&q=80"
        title="Shelby"
      />
      <SidebarRow Icon={LocalHospital} title="Covid-19 Information Center" />
      <SidebarRow Icon={EmojiFlags} title="Pages" />
      <SidebarRow Icon={People} title="Friends" />
      <SidebarRow Icon={Chat} title="Messenger" />
      <SidebarRow Icon={Storefront} title="Marketplace" />
      <SidebarRow Icon={VideoLibrary} title="Videos" />
      <SidebarRow Icon={ExpandMore} title="Marketplace" />
    </div>
  );
}

export default sidebar;
