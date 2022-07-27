import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

const ConnectionStatus = () => {
    const [connection, setConnection] = useState({
        statusOnline: true,
    })
    const { statusOnline } = connection
    useEffect(() => {
        const innerOnline = window.navigator.onLine
        setConnection({ statusOnline: innerOnline })
        window.addEventListener('online', setConnection)
        window.addEventListener('offline', setConnection)
        return () => {
            window.removeEventListener('offline', setConnection)
            window.removeEventListener('online', setConnection)
        }
    }, [window.navigator.onLine])

    return <div className="status status_offline">{!statusOnline ? 'Offline' : 'Online'}</div>
}

export default ConnectionStatus
