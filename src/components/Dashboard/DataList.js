import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: 20
    },
    List: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        margin: '10px auto'
    },
}));




export default function DataList({ data }) {
    const classes = useStyles();

    const history = useHistory();


    return (
        <Container maxWidth="sm" className={classes.root}>
            <List className={classes.List}>
                {data?.map((emp) => {
                    return (<ListItem button key={emp.id} onClick={() => history.push(`/employee/${emp.id}`)}>
                        <ListItemText primary={emp.employee_name} />
                    </ListItem>)
                })}
            </List>
        </Container>
    );
}