import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Forecast1 from './forecast1.jsx'
import Forecast2 from './forecast2.jsx'
import style from './box2.module.css'
import { Apiurl } from '../../../axios/apiurl.jsx';
import LocationContext from '../../../context/locationContext.jsx';

const Box2 = ({ val }) => {

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
        <div className={style.box2}>
            {myData ? < Forecast1 data={myData} /> : "Error 404"}
            {myData ? < Forecast2 data={myData} val={val} /> : "Error 404"}
        </div>
    );
}

export default Box2;
