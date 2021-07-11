import "./scss/nav.css"
import { useState } from "react"

function Nav() {
    const [todoOn, settodoOn] = useState(true)
    return (
        <div>
            <div className="nav">
                <div className="name"><h2>Todo App</h2></div>
                <div className="tabs">


                    <button className={todoOn ? "active" : ""}
                        onClick={() => {
                            settodoOn(true)
                        }}
                    >Todo </button>
                    <button className={todoOn ? "" : "active"} onClick={() => {
                        settodoOn(false)
                    }}>Budget </button>

                </div>
            </div>
        </div>
    )
}

export default Nav
