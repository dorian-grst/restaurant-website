import Home from './pages/Home'
import { useState } from 'react'

function App() {
    const [cursorX, setCursorX] = useState()
    const [cursorY, setCursorY] = useState()
    window.addEventListener('mousemove', (e) => {
        setCursorX(e.pageX)
        setCursorY(e.pageY)
    })

    return (
        <div className="main">
            <div
                className="cursor z-50 hidden lg:visible"
                style={{
                    left: cursorX + 'px',
                    top: cursorY + 'px',
                }}
            ></div>
            <Home></Home>
        </div>
    )
}

export default App
