import React, { useEffect, useState } from 'react'
import style from './timebox.module.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Timebox = ({ data }) => {
    // console.log(data)
    const timezone = ['EST', 'GMT', 'IST', 'PDT', 'JST'];
    const { location, current } = data;
    const [timeFormat, setTimeFormat] = useState();
    const [dateFormat, setDateFormat] = useState();

    const checkTime = () => {
        const hours = location.localtime.split(' ');
        const time = location.localtime.slice(10, 15);
        if (hours[1].split(':')[0] < 12) {
            setTimeFormat(`${time} AM`)
        } else {
            setTimeFormat(`${time} PM`)
        }
    }

    const checkDate = () => {

        const dateObj = new Date(location.localtime.slice(0, 10));
        const year = dateObj.getFullYear();
        const month = dateObj.toLocaleString('default', { month: 'short' });
        const day = dateObj.getDate()
        const fullDay = dateObj.toLocaleString('default', { weekday: 'long' }); // 'SAT'
        const formattedDate = `${fullDay}, ${year}-${month}-${day}`;
        setDateFormat(formattedDate)
    }

    useEffect(() => {
        checkTime();
        checkDate();
    }, [])

    return (
        <>
            <div className={style.timeDateDaybox}>
                {/* timeDate */}
                <div className={style.timeDate}>
                    <p className={style.time}>{timeFormat}</p>
                    <p className={style.date}>{dateFormat}</p>
                </div>
                {/* timeZone */}
                <div className={style.timezone}>
                    <div className={style.timezoneValuesBox} >
                        {
                            timezone.map((values) => <div className={style.timezoneValues}>{values}</div>
                            )
                        }
                    </div>
                    <div className={style.timezoneArrow}><ArrowRightAltIcon /></div>
                </div>
            </div >
        </>
    )
}

export default Timebox;
