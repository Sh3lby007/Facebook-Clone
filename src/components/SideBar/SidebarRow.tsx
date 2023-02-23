import { SvgIconComponent } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./SidebarRow.css";

// In the Sidebar component, src and Icon might not always be present, therefore they have a undefined type
interface SidebarRowProps {
  src?: string;
  Icon?: SvgIconComponent;
  title: string;
}

function SidebarRow({ src, Icon, title }: SidebarRowProps) {
  return (
    <div className="sidebarRow">
      {/* If there is a src prop, we render out the Avatar with source used */}
      {src && <Avatar src={src} />}

      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
