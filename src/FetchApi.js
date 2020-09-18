import React, { useEffect, useState } from 'react';
import axios from 'axios';


const FetchApi = () => {
    const [num, setNum] = useState();
    const [dataa, getDetails] = useState();
    const [id, setId] = useState();

    useEffect(()=>{
        async function getData(){
            const res = await axios.get(`https://reqres.in/api/users?page=${num}`)
            console.log(res.data.data.length);
            getDetails(res.data.data[0].first_name)
            console.log(dataa);
        }
        getData()
    })
    return (
        <>
            <h1>{num}</h1>
            
            <select value={num} onChange={(event) => {
                setNum(event.target.value)
            }}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="5">5</option>
            </select>
        </>
    )
};

export default FetchApi;