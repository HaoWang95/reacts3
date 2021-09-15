import React from "react";
import clsx from "clsx";
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  List,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  AccountCircleRounded,
  ChevronLeft,
  ChevronRight,
} from "@material-ui/icons";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { useState } from "react";
import SearchField from "./Search.component";
import Register from "./Register.component";

const drawerWidth = 240;

const useAppBarStyle = makeStyles((theme) => ({
  appBarRoot: {
    display: "flex",
    //flexGrow: 1,
  },
  // define the transition for the drawer action
  appBarTransition: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  // define the shift action for the content
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    //marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    // keep it default
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 1,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: drawerWidth / 2,
    marginRight: drawerWidth / 2,
  },

  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  menuProfile: {
    marginLeft: theme.spacing(2),
  },
}));

const DefaultAppBar = () => {
  const style = useAppBarStyle();
  const sysTheme = useTheme();

  // state management for appbar drawer
  const [drawerOpen, setDrawerOpen] = useState(false);

  // state management for logged in status, needs to be replaced with redux management
  const [loggedIn, setLoggedIn] = useState(false);
  // state management for account menu
  const [accountMenu, setAccountMenu] = useState(null);

  const isAccountMenuOpen = Boolean(accountMenu);
  // once clicked, set the current target
  const handleAccountMenuOpen = (event) => {
    setAccountMenu(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAccountMenu(null);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const renderAccountMenu = (
    <Menu
      anchorEl={accountMenu}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isAccountMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Account profile</MenuItem>
      <MenuItem
        onClick={(event) => {
          setLoggedIn((prev) => !prev);
          handleMenuClose();
        }}
      >
        Logout
      </MenuItem>
    </Menu>
  );

  return (
    <div className={style.appBarRoot}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(style.appBarTransition, {
          [style.appBarShift]: drawerOpen,
        })}
      >
        <Toolbar>
          <IconButton
            edge="start"
            onClick={handleDrawerOpen}
            className={clsx(style.menuButton, drawerOpen && style.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={style.title} noWrap>
            Welcome
          </Typography>
          <SearchField />
          {!loggedIn ? (
            <Button color="inherit" onClick={() => setLoggedIn(true)}>
              Login
            </Button>
          ) : (
            <MenuItem>
              <IconButton
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
                onClick={handleAccountMenuOpen}
              >
                <AccountCircleRounded />
              </IconButton>
            </MenuItem>
          )}
        </Toolbar>
      </AppBar>
      {renderAccountMenu}
      <Drawer
        className={style.drawer}
        variant="persistent"
        anchor="left"
        open={drawerOpen}
        classes={{
          paper: style.drawerPaper,
        }}
      >
        <div className={style.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {sysTheme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(style.content, {
          [style.contentShift]: drawerOpen,
        })}
      >
        <div className={style.drawerHeader} />
        <Register />
      </main>
    </div>
  );
};

export default DefaultAppBar;
