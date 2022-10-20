import React, { useRef, useEffect, useState } from 'react'
import './counter.scss'

const Lines = (props) => {
    const [startPosition, setStartPosition] = useState({ x: 0, y: 0 })
    const [isDrawing, setIsDrawing] = useState(false)
    const [endPosotion, setEndPosotion] = useState({ x: 0, y: 0 })
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvasRef.current.getContext('2d')
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
        context.fillStyle = '#000'
        context.beginPath()
        context.moveTo(startPosition.x, startPosition.y)
        context.lineTo(endPosotion.x, endPosotion.y)
        context.closePath()
        context.stroke()
        context.strokeStyle = 'black'
    }, [startPosition, isDrawing, endPosotion])
    const startLine = (e) => {
        if (isDrawing) {
            setIsDrawing(false)
            // setLinks([...links, { canvasRef }])
        }
        if (!isDrawing) {
            setIsDrawing(true)
            setStartPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
            setEndPosotion({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
        }
    }
    function lineDrow(e) {
        if (!isDrawing) {
            return
        }
        setEndPosotion({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
    }
    return (
        <>
            <canvas
                ref={canvasRef}
                id="canvas"
                onClick={(e) => startLine(e)}
                onMouseMove={(e) => lineDrow(e)}
                width="300"
                height="300"
            />
            {/* {console.log(links)} */}
            {/* {console.log(contextRef.current)} */}
        </>
    )
}

export default Lines
