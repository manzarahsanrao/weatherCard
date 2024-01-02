import style from './forecast1.module.css'
import React from 'react'
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import TireRepairIcon from '@mui/icons-material/TireRepair';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { TbUvIndex } from "react-icons/tb";
import uvindex from '../../../assets/icons/uvindex.png'
import AirIcon from '@mui/icons-material/Air';
import { MdDewPoint } from "react-icons/md";

const Forecast1 = ({ data }) => {
    const { current, location } = data

    return (
        <div className={style.forecast1}>
            <div className={style.forecastHeading}>
                <div className={style.heading1}>Today's Forecast</div>
                <div className={style.heading2}>Regular Forecast</div>
                <div className={style.heading2}>Hourly Forecast</div>
            </div>
            <div className={style.line}></div>
            <div className={style.forecastdetailBox}>
                <div className={style.humidity}>
                    <div className={style.humiditylogotext}>
                        <CloudQueueIcon />
                        Humidity</div>
                    <div className={style.humidityvalue}> {current.humidity}</div>
                </div>
                <div className={style.visibility}>
                    <div className={style.visibilitylogotext}>
                        <VisibilityIcon />
                        Visibility</div>
                    <div className={style.visibilityoutput}>{current.vis_km} km</div>
                </div>
                <div className={style.uvindex}>
                    <div className={style.uvindexlogotext}>  <TbUvIndex />
                        UVIndex </div>
                    <div className={style.uvindexoutput}>{current.uv}</div>
                </div>
                <div className={style.pressure}>
                    <div className={style.pressurelogotext}>
                        <TireRepairIcon />
                        Pressure
                    </div>
                    <div className={style.pressureoutput}>{current.pressure_mb} mb</div>
                </div>
                <div className={style.wind}>
                    <div className={style.windlogotext}>   <AirIcon />
                        Wind
                    </div>
                    <div className={style.windoutput}>{current.wind_kph} kph</div>
                </div>
                <div className={style.dewpoint}>
                    <div className={style.dewpointlogotext}>
                        <MdDewPoint />
                        Dew Point </div>
                    <div className={style.dewpointoutput}>16'</div>
                </div>
            </div>
        </div>
    )
}

export default Forecast1;
