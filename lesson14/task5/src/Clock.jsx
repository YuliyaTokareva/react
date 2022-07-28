import React, { useEffect, useState } from 'react'
import moment from 'moment'

function getTimeWithOffset(offset) {
    const currentTime = new Date()
    const utcOffset = currentTime.getTimezoneOffset() / 60

    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset))
}
function getTime(timeZone) {
    return moment(getTimeWithOffset(timeZone)).format('HH:mm:ss A')
}
const Clock = ({ offset, location }) => {
    const [clock, setClock] = useState({
        time: getTime(offset),
        timeZone: offset,
        city: location,
    })

    const { time, timeZone, city } = clock
    useEffect(() => {
        const interval = setInterval(() => {
            const { time, ...data } = clock
            setClock({
                time: getTime(timeZone),
                ...data,
                // timeZone,
                // city,
            })
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [offset])

    return (
        <div className="clock">
            <div className="clock__location">{city}</div>
            <div className="clock__time">{time}</div>
        </div>
    )
}

export default Clock
