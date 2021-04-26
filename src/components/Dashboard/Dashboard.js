
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Container, TextField, Typography } from '@material-ui/core';
import { fetchData } from '../../store/actionCreators';

import DataList from './DataList';

const useStyles = makeStyles({
    button: {
        textTransform: 'none',
        marginLeft: 8
    },
    toolbar: {
        marginTop: 20,
        alignItems: 'flex-end',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    dialogTitle: {
        '& > h2':
        {
            display: 'flex',
            justifyContent: 'space-between',
        }
    }
});



export default function Dashboard() {

    const [filterData, setFilterData] = useState([]);

    const classes = useStyles();


    const data = useSelector(state => state.empData);

    const isApiError = useSelector(state => state.isApiError);

    const dispatch = useDispatch();



    const searchHandler = (e) => {
        const searchKey = e.target.value?.toLowerCase();
        if (data?.length) {
            setFilterData(data.filter((val) => {
                return val?.name?.toLowerCase().includes(searchKey)
            }))
        }

    }

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    useEffect(() => {
        setFilterData(data)
    }, [data])

    return (
        <Container maxWidth="lg">
            <div className={classes.toolbar}>
                <TextField id="standard-search" label="Search Employee" size="small" type="search" onChange={searchHandler} />
            </div>
            {isApiError ? <Typography align="center" color="error">Unable to load the data</Typography> : <>
                <Typography align="center">
                    Employee List
            </Typography>
                {filterData?.length ? <DataList data={filterData} /> : null}
            </>}
        </Container>
    )
}
