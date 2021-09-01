import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { AccountCircleRounded } from '@material-ui/icons';
import { useState } from 'react';

const useAppBarStyle = makeStyles((theme) => ({
    appBarRoot: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1
    },
    menuProfile:{
        marginLeft: theme.spacing(2),
    }
}));

const DefaultAppBar = () => {
    const style = useAppBarStyle();
    const [loggedIn, setLoggedIn] = useState(false);

    return(
        <div className={style.appBarRoot}>
            <AppBar>
                <Toolbar>
                    <IconButton edge="start" className={style.menuButton}>
                        <MenuIcon />                       
                    </IconButton>
                    <Typography variant="h6" className={style.title}>
                        Welcome
                    </Typography>
                    {
                        !loggedIn 
                        ? <Button 
                            color="inherit" 
                            onClick={() => setLoggedIn(true)}>
                                Login</Button>
                        :
                        <IconButton 
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AccountCircleRounded />
                        </IconButton>
                    } 
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default DefaultAppBar;