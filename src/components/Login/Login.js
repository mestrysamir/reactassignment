import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Grid, Container, Paper, TextField, Button, Typography } from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';

import { makeStyles } from '@material-ui/core/styles';

import { login } from '../../store/actionCreators';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2, 2),
        height: '100%'
    },
    container: {
        padding: theme.spacing(3, 3),
        maxWidth: 280,
        width: '100%'

    },
    textbox: {
        margin: theme.spacing(1.5, 'auto'),
        width: '100%',
    },
    button: {
        margin: theme.spacing(1.5, 1, 1.5, 0),
    }

}));

function Login() {
    const classes = useStyles();

    const dispatch = useDispatch();

    const history = useHistory();

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    function handleSubmit(e) {
        const emailRegx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        e.preventDefault();
        if (!values.email || !emailRegx.test(values.email)) {
            setErrors({ ...errors, email: 'Please enter valid email' })
            return
        }

        if (!values.password || values.password.length < 8) {
            setErrors({ ...errors, password: 'Please enter valid password' })
            return
        }

        dispatch(login());
        history.push('/');
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setErrors({ ...errors, [name]: '' })
        setValues({ ...values, [name]: value })
    }

    return (
        <Container maxWidth="md" className={classes.root}>
            <Grid container className={classes.root} spacing={3} direction="row"
                justify="center" alignItems="center">

                <Paper className={classes.container} elevation={0}>
                    <Typography variant="h5" gutterBottom>
                        Login
                  </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField id="email" name="email" onChange={handleChange} error={Boolean(errors.email)}
                            helperText={errors?.email} value={values.email} className={classes.textbox} size="small" label="Email/ Username" variant="outlined" />

                        <TextField id="password" name="password" onChange={handleChange} error={Boolean(errors.password)}
                            helperText={errors?.password} value={values.password} type="password" className={classes.textbox} size="small" label="Password" variant="outlined" />

                        <Button color="primary" type="submit" className={classes.button} variant="contained" startIcon={<LockOpenIcon />}>Login</Button>

                    </form>
                </Paper>
            </Grid>
        </Container>
    )
}

export default Login;