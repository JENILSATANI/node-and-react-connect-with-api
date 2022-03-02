import React, { useState, useEffect, usere } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom'
const Copy = () => {
    const { id } = useParams();
    const [Fristname, setFristname] = useState()
    const [email, setEmail] = useState('')
    const [phonenumber, setphonenumber] = useState('')
    const [city, setcity] = useState('')
    
    useEffect(() => {
        getuser()
        // post()   
    }, [])

    const getuser = () => {
        axios.get(`http://localhost:8000/App/${id}`).then((result) => {
            console.log("result.data", result.data)
            setFristname(result.data.data.name)
            setEmail(result.data.data.gmail)
            setphonenumber(result.data.data.phonenumber)
            setcity(result.data.data.city)

        })
    }

    // function updatebackenddat() {
    //     let item = {
    //         name: Fristname,
    //         gmail: email,
    //         phonenumber: phonenumber,
    //         city: city
    //     }
    //     console.log(item)
    //     axios.put(`http://localhost:8000/App/${id}`, item).then((res) => {
    //         console.log("updare", res)

    //     })

    // }
    function updatebackenddat  () {
        let item ={
            name: Fristname,
            gmail: email,
            phonenumber: phonenumber,
            city: city
        }
        console.log(item)
        axios.post("http://localhost:8000/",item).then((res) => {
            console.log("updare", res)
    })

}
    const [FirstnameErr, setFristnameErr] = useState({});

    const [allEntry, setAllEntry] = useState([])
    const submitForm = (e) => {
        e.preventDefault();
        const isValid = formValidation()

        const newEntry = { Fristname, email, phonenumber, city }

        if (isValid) {
            setAllEntry([...allEntry, newEntry])
            setFristname('');
            setEmail('')
            setphonenumber('')
            setcity('')
        }

    }

    const formValidation = () => {
        const FirstnameErr = {};
        let isValid = true;

        if (Fristname.trim().length < 5) {
            FirstnameErr.Firstname = "Frist Name is Not Valid"
            isValid = false;
        }

        setFristnameErr(FirstnameErr)
        return isValid

    }

    return (

        <>
            data: {id}
            <p class="oo" ><span>Information Form</span></p>

            <form class="MM" onSubmit={submitForm}>
                <div class="bb">
                    <label htmlfor='Fristname'> FullName:</label>
                    <input required type='text' name='Fristname' value={Fristname} onChange={(e) => setFristname(e.target.value)}></input>
                    <br />
                    {Object.keys(FirstnameErr).map((key) => {
                        return <div style={{ color: 'red' }}>{FirstnameErr[key]}</div>
                    })}
                </div>
                <br />
                <div class='A'>
                    <lable htmlFor='email'> Email:  </lable>
                    <input required type='text' name='email' autoComplete='off'
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br />
                </div>
                <br />
                <div class='B'>
                    <label htmlFor="phonenumber" name=" phonenumber">phonenumber:</label>
                    <input type='number' name='phonenumber' value={phonenumber} onChange={(e) => setphonenumber(e.target.value)} />


                </div>
                <br />
                <br />
                <label htmlFor='city' name='city'>City:</label>
                <input type='text' value={city} onChange={(e) => setcity(e.target.value)} />
                <br />
                <br />
                <Button type='button' class='btn btn-success'>
                    <button type='submit' onClick={updatebackenddat}>Submit</button>
                </Button>
            </form>
            <br />
            <div class='AS'>
                <div className='showDataStyles'>
                    <div style={{ display: allEntry.length === 0 ? 'none' : 'block' }}>
                        <table class="table-danger" style={{ margin: 'auto', width: '50%', border: '2px solid red' }}  >
                            <tr style={{ border: '2px solid red ' }} >
                                <th>Name</th>
                                <th>email </th>
                                <th>phonenumber</th>
                                <th>City</th>
                            </tr>
                            {
                                allEntry.map((curElem) => {
                                    return (
                                        <tr>
                                            <td>
                                                <p>{curElem.Fristname}</p>
                                            </td>
                                            <td>
                                                <p>   {curElem.email}  </p>
                                            </td>
                                            <td>
                                                <p> {curElem.phonenumber} </p>
                                            </td>
                                            <td>
                                                <p> {curElem.city} </p>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                    </div>
                </div>
            </div>

        </>
    )


}


export default Copy;