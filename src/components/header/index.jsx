import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  IconButton,
  Drawer,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import _ from "lodash";
import { useTheme } from "../../theme/useTheme";
import { getFromLS } from "../../utils/storage";

import "./style.scss";

const drawerWidth = 300;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const navData = [
  {
    primary: "Home",
    secondary: "About Me",
    description: " — View details about me.",
    href: "/home",
  },
  {
    primary: "Posts",
    secondary: "Astronomy Posts",
    description: " — View latest astronomy shots!",
    href: "/posts",
  },
  {
    primary: "Blogs",
    secondary: "Articles",
    description: " — Read my latest articles about space and astronomy",
    href: "/blogs",
  },
];

const Header = () => {
  const themesFromStore = getFromLS("Themes");
  const data = themesFromStore.data;
  const [open, setOpen] = React.useState(false);
  const [themes, setThemes] = useState([]);
  const { setMode } = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const themeSwitcher = (selectedTheme) => {
    setMode(selectedTheme);
    window.location.reload();
  };

  useEffect(() => {
    const temp = getFromLS("Themes");
    setThemes(_.keys(temp.data));
  }, []);

  return (
    <>
      <header className="sticky-top site-header">
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/" style={{ fontSize: "25px" }}>
            Elessar55
          </Link>
          <div className="d-flex align-items-center">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
            >
              <MenuIcon style={{ fontSize: "25px" }} />
            </IconButton>
          </div>
        </div>
      </header>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "#171a1a",
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List className="p-4">
          {navData.map((data, ind) => (
            <div key={ind} className="nav-items mt-4 mb-4">
              <ListItemButton
                alignItems="flex-start"
                href={data.href}
                className="m-2"
              >
                <ListItemAvatar>
                  <Avatar
                    alt={data.primary}
                    src="/static/images/avatar/1.jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="body1" className="nav-primary">
                      {data.primary}
                    </Typography>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline", fontWeight: "bold" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {data.secondary}
                      </Typography>
                      {data.description}
                    </React.Fragment>
                  }
                />
              </ListItemButton>
            </div>
          ))}
        </List>
        <Divider />
        <Typography variant="h4" gutterBottom className="m-2 text-white">
          Themes
        </Typography>
        <List className="p-4">
          {themes.length > 0 &&
            themes.map((theme, ind) => (
              <div key={ind} className="nav-items mt-4 mb-4">
                <ListItemButton
                  alignItems="flex-start"
                  key={data[theme].id}
                  onClick={() => themeSwitcher(data[theme])}
                >
                  <ListItemAvatar>
                    <Avatar
                      alt={data[theme].name}
                      src="/static/images/avatar/1.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={data[theme].name}
                    secondary={data[theme].description}
                  />
                </ListItemButton>
              </div>
            ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
