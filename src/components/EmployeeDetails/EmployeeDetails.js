
import React from 'react';

import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';

import Avatar from '@material-ui/core/Avatar';

import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import { AccountCircle } from '@material-ui/icons';
import { Grid } from '@material-ui/core';
import profile from '../../profile.png';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 20
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    typo: {
        lineHeight: 2
    },
    dialogTitle: {
        '& > h2':
        {
            display: 'flex',
            justifyContent: 'space-between',
        }
    }

}));

export default function EmployeeDetails() {

    const { id } = useParams();

    const data = useSelector(state => state.empData);

    const classes = useStyles();

    const [employee] = data.filter((emp) => emp.id === Number(id));


    return (
        <Container className={classes.root} maxWidth="sm">
            <Card>
                <CardHeader
                    className={classes.header}
                    avatar={
                        <Avatar aria-label="Avatar" className={classes.avatar}>
                            <AccountCircle />
                        </Avatar>
                    }

                    title={<Typography variant="body1" color="textSecondary" >Employee Details</Typography>}

                />

                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item xs={4} md={3}>
                            <img src={employee?.profile_image || profile} width="100%" alt={employee?.employee_name} />
                        </Grid>

                        <Grid item xs={8} md={4}>
                            <Typography className={classes.typo}>
                                <strong>Name: </strong> {employee?.employee_name} <br />
                                <strong>Salary: </strong> {employee?.employee_salary} <br />
                                <strong>Age: </strong> {employee?.employee_age} <br />
                            </Typography>
                        </Grid>


                    </Grid>

                </CardContent>
            </Card>
        </Container>
    );
}