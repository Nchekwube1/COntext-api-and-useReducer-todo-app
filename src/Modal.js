import React from 'react'
import "./scss/modal.css"
import { useContext } from "react"
import { globalContext } from "./CONTEXT"

function Modal({ state }) {
    const { modal, del, setItem } = useContext(globalContext)

    return (
        <div className="modal">
            <div className="btn-container">
                <div className="hold">
                    <div className="txt"><h2>are you sure?</h2></div>
                    <div className="btn">
                        <button onClick={() => {
                            del(state.delId)
                            modal()
                            setItem()
                        }} >yes</button>
                        <button onClick={() => { modal() }}>no</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
