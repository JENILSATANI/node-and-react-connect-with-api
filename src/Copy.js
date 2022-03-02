import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';
import { Grid, Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";

import Pp from './Pp';
const Copy = () => {
    // let history = useHistory();

    const columns = [
        {
            title: "Id",
            field: "_id"
        },
        {
            title: "Name",
            field: "name"
        },
        {
            title: "Gmail",
            field: "gmail"
        }
        ,
        {
            title: "Phonenuber",
            field: "phonenumber"
        },
        {
            title: "City",
            field: "city"
        }
    ]
    const [click, setclick] = useState()
    const handlesubmit = () => {
        setclick({ message: "sucess" })
        console.log('button is')
        alert("boom")
    }
    const [state, setState] = useState([])
    useEffect(() => {

        getStudents()


    }, [])
    const getStudents = () => {
        axios.get(`http://localhost:8000/`)
            .then((res) => {
                console.log(res.data.data)
                const tabel = res.data.data
                setState(tabel)
            })
    }
    

    return (
        <Grid>
            <Button type="submit" variant="contained" color="primary" value={click} onClick={handlesubmit} >Submit</Button>

            <MaterialTable
                title="Student Details"
                columns={columns}
                data={state}
                options={{ actionsColumnIndex: -1, addRowPosition: "first" }}
                editable={{
                    onRowAdd: (newData) => new Promise(() => {
                        //Backend call
                        axios.post(`http://localhost:8000/App`)
                    }).then(resp => resp.json())
                        .then(resp => {
                            getStudents()
                        })
                    ,
                    onRowUpdate: (newData, oldData) => new Promise(() => {
                        //Backend call
                        console.log("oldsata====", newData)
                        console.log("oldData---------id------", newData._id);
                        console.log("oldsata====", newData)
                        axios.put(`http://localhost:8000/App/${newData._id}`, newData)

                    }).then(res => {
                        console.log("sucesss", res)
                        getStudents()

                    })
                    ,
                    onRowDelete: (oldData) => new Promise(() => {
                        console.log("oldData------", oldData);
                        console.log("oldData---------id------", oldData._id);
                        //Backend call
                        axios.delete(`http://localhost:8000/App/${oldData._id}`)

                    }).then(resp => {
                        console.log("ssssss", resp)
                        getStudents()
                    })
                }}

            />
        </Grid>
    );
}
export default Copy