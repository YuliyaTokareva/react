import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Dimensions = () => {
    const [dimentions, setDimentions] = useState({
        width: null,
        height: null,
    })
    const { width, height } = dimentions
    useEffect(() => {
        const { innerWidth, innerHeight } = window
        setDimentions({ width: innerWidth, height: innerHeight })
        const onResize = (e) => {
            const { innerWidth, innerHeight } = e.target
            setDimentions({ width: innerWidth, height: innerHeight })
        }
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [])

    return <div className="dimensions">{`${width}px - ${height}px`}</div>
}

export default Dimensions
