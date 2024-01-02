import { useState, useContext } from 'react'
import React from 'react'
import style from './tempbox.module.css'
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Select from 'react-select'
import LocationContext from '../../../context/locationContext';


const Tempbox = ({ data, getCurrentDeg: sendCurrentDeg }) => {

    const { current, location } = data;
    const options = [
        { value: 'KARACHI', label: 'Karachi' },
        { value: 'LAHORE', label: 'Lahore' },
        { value: 'ISLAMABAD', label: 'Islamabad' },
    ]

    const [temp, setTemp] = useState(true);

    const upDateLocation = useContext(LocationContext);
    console.log(upDateLocation)
    const { location: storeLoc, changeLoc } = upDateLocation


    return (

        <div className={style.tempBox}>

            {/* temp box */}
            <div className={style.temp}>
                <div className={style.tempNumDegree}>
                    <div className={style.tempNum}>{temp ? current.temp_c : current.temp_f}</div>
                    <TripOriginIcon />
                </div>
                <div className={style.tempunit}>
                    <div className={style.tempunitC} onClick={() => {
                        setTemp(true)
                        sendCurrentDeg(true)
                    }}>C</div>
                    <div className={style.tempunitF} onClick={() => {
                        setTemp(false)
                        sendCurrentDeg(false)
                    }}>F</div>
                </div>
                <div className={style.temptype}>
                    <img className={style.temptypeicon} src={current.condition.icon} />
                    <div className={style.temptypetext}>{current.condition.text}</div>
                </div>
            </div>

            {/* city country box */}
            <div className={style.location}>
                <p className={style.city}>{location.name}</p>
                <p className={style.country}>{location.region}, {location.country}</p>
            </div>

            {/* change location box */}
            <div className={style.changelocation}>
                <div className={style.changelocationlogo}><LocationOnIcon /></div>
                <div className={style.changelocationtext}> <Select
                    options={options}
                    defaultValue={storeLoc}
                    placeholder="Change location"
                    onChange={(selectedOption) => changeLoc(selectedOption.label)}
                    isSearchable
                    noOptionsMessage={() => "No location found"}
                    styles={{
                        placeholder: (baseStyles) => ({
                            ...baseStyles,
                            color: 'black',
                        }),
                        menuList: () => ({
                            color: "#1d2836"
                        }),
                        indicatorsContainer: () => ({
                            cursor: 'pointer'
                        }),
                    }}
                /> </div>
            </div>
        </div>


    )
}


export default Tempbox;