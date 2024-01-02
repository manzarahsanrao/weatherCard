import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Tempbox from './tempbox.jsx'
import Timebox from './timebox.jsx'
import style from './box1.module.css'
import { Apiurl } from '../../../axios/apiurl.jsx';
import LocationContext from '../../../context/locationContext.jsx';
// import { getapi } from '../../../axios/getapi.jsx';

const Box1 = ({ getCurrentDeg }) => {

    const [myData, setData] = useState();
    console.log("mydata", myData)
    const { location, changeLoc } = useContext(LocationContext);
    // console.log(location)
    console.log(`${Apiurl}${location}`)

    const getWeatherData = async () => {
        try {
            const response = await axios.get(`${Apiurl}${location}`);
            setData(response.data)
        } catch (error) {
            console.error('Error ====> ', error.message);
            throw error
        }

    }

    useEffect(() => {
        getWeatherData();
    }, [location]);
    return (
        <div className={style.box1}>
            {myData ? <Tempbox data={myData} getCurrentDeg={getCurrentDeg} /> : "Error 404"}
            {myData ? <Timebox data={myData} /> : "Error 404"}
        </div>
    );
}

export default Box1;
