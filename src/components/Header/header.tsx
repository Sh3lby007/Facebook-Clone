import "./Header.css";
import { Avatar, IconButton } from "@mui/material";
import {
  Flag,
  Home,
  Search,
  Storefront,
  Subscriptions,
  SupervisedUserCircle,
} from "@mui/icons-material";
import Add from "@mui/icons-material/Add";

function header() {
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt=""
        />
        <div className="header_input">
          <Search />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>

      <div className="header_center">
        <div className="header_option header_option-active">
          <Home fontSize="large" />
        </div>

        <div className="header_option">
          <Flag fontSize="large" />
        </div>
        <div className="header_option">
          <Subscriptions fontSize="large" />
        </div>
        <div className="header_option">
          <Storefront fontSize="large" />
        </div>
        <div className="header_option">
          <SupervisedUserCircle fontSize="large" />
        </div>
      </div>

      <div className="header_right">
        <div className="header_info">
          <Avatar src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHw%3D&w=1000&q=80" />
          <h4>Shelby Zheng</h4>
        </div>

        <IconButton>
          <Add />
        </IconButton>
      </div>
    </div>
  );
}

export default header;
