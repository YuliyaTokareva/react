import React, { useState } from 'react'
import Clock from './Clock.jsx'

const App = () => {
    const [toggle, setToggle] = useState({
        statusToggle: true,
    })
    const { statusToggle } = toggle
    console.log(statusToggle)

    return (
        <div>
            {statusToggle ? (
                <>
                    <Clock offset={0} location="London" />
                    <Clock offset={2} location="Kyiv" />
                    <Clock offset={-5} location="New York" />
                </>
            ) : (
                ''
            )}
            <button onClick={() => setToggle({ statusToggle: !statusToggle })}>Hide</button>
        </div>
    )
}

export default App
