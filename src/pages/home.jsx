import { useState } from 'react'
import style from './home.module.css'
import Box1 from './view/box1/box1.jsx'
import Box2 from './view/box2/box2.jsx'

const Home = () => {
    const [currentDeg, setCurrentDeg] = useState(true)

    const updateCurrentDeg = (val) => {
        setCurrentDeg(val)
    }

    return (
        <>
            <div className={style.card}>
                <main className={style.main}>
                    <Box1 getCurrentDeg={updateCurrentDeg} />
                    <Box2 val={currentDeg} />
                </main>
            </div>
        </>
    )
}

export default Home