import React from "react";
import {
  AppBar,
  CssBaseline,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { AccountCircleRounded } from "@material-ui/icons";
import { useState } from "react";
import SearchField from "./Search.component";

const useAppBarStyle = makeStyles((theme) => ({
  appBarRoot: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  menuProfile: {
    marginLeft: theme.spacing(2),
  },
}));

const DefaultAppBar = () => {
  const style = useAppBarStyle();
  const [loggedIn, setLoggedIn] = useState(false);
  const [accountMenu, setAccountMenu] = useState(null);

  const isAccountMenuOpen = Boolean(accountMenu);
  // once clicked, set the current target
  const handleAccountMenuOpen = (event) => {
    setAccountMenu(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAccountMenu(null);
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
      <AppBar>
        <Toolbar>
          <IconButton edge="start" className={style.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={style.title}>
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
      /** This is a conditional rendering */
      {renderAccountMenu}
    </div>
  );
};

export default DefaultAppBar;
