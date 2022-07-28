import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

const ConnectionStatus = () => {
    const [connection, setConnection] = useState({
        statusOnline: true,
    })
    const { statusOnline } = connection
    useEffect(() => {
        // const innerOnline = window.navigator.onLine
        // setConnection({ statusOnline: innerOnline })
        window.addEventListener('online', () => setConnection({ statusOnline: true }))
        window.addEventListener('offline', () => setConnection({ statusOnline: false }))
        return () => {
            window.removeEventListener('online', () => setConnection({ statusOnline: true }))
            window.removeEventListener('offline', () => setConnection({ statusOnline: false }))
        }
    }, [])

    return (
        <div className={`${statusOnline ? 'status_online' : 'status_offline'} status`}>
            {statusOnline ? 'online' : 'offline'}
        </div>
    )
}

export default ConnectionStatus
