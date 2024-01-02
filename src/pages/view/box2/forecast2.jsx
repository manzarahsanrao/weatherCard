import style from './forecast2.module.css';
import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import EastIcon from '@mui/icons-material/East';
import LightModeIcon from '@mui/icons-material/LightMode';
import { LuSunrise } from "react-icons/lu";
import { LuSunset } from "react-icons/lu";

const Forecast2 = ({ data, val }) => {
    const { current, location } = data;
    // const morningTemp = current;

    return (
        <div className={style.forecast2}>
            <div className={style.todaysetting}>
                <div className={style.todays}>Today's</div>
                <div className={style.setting}><SettingsIcon /></div>
            </div>
            <div className={style.daystemparrow}>
                <div className={style.daystemp}>
                    <div className={style.morning}>
                        <div className={style.morningtextlogo}><LuSunrise /></div>
                        Morning
                        <div className={style.morningnumdegeree}>{val ? `${current.temp_c + 6}c` : `${current.temp_f + 6}f`}</div>
                    </div>
                    <div className={style.afternoon}>
                        <div className={style.afternoontextlogo}><LightModeIcon /></div>
                        Afternoon
                        <div className={style.afternoondegeree}>{val ? `${current.temp_c + 12}c` : `${current.temp_f + 12}f`}</div>
                    </div>
                    <div className={style.evening}>
                        <div className={style.eveningtextlogo}><LuSunset /></div>
                        Evening
                        <div className={style.eveningnumdegeree}>{val ? `${current.temp_c}c` : `${current.temp_f}f`}</div>
                    </div>
                </div>
                <div className={style.arrow}><EastIcon /></div>
            </div>
        </div>
    )
}

export default Forecast2;
