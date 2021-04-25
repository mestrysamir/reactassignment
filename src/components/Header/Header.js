import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    useHistory
} from "react-router-dom";
import { useDispatch } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import GroupIcon from '@material-ui/icons/Group';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DashboardIcon from '@material-ui/icons/Dashboard';

import { logout } from '../../store/actionCreators';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        marginLeft: theme.spacing(2),
    },
    list: {
        width: 250,
    },
}));

export default function Header() {
    const classes = useStyles();

    const history = useHistory();

    const dispatch = useDispatch();


    const [state, setState] = React.useState({

        left: false,

    });

    return (
        <div className={classes.root}>
            <AppBar position="static" >
                <Toolbar>

                    <GroupIcon fontSize="large" />

                    <Typography variant="h6" className={classes.title}>
                        Employees
                     </Typography>
                    <Button color="inherit" onClick={() => history.push('/')} startIcon={<DashboardIcon />}>Dashboard</Button>

                    <Button color="inherit" onClick={() => dispatch(logout())} startIcon={<AccountCircle />}>Logout</Button>
                </Toolbar>
            </AppBar>

        </div>
    );
}