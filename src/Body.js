import "./scss/body.css"
import { useContext } from "react"
import { globalContext } from "./CONTEXT"
import Single from "./Single"
import Modal from './Modal';
import Alert from "./alert"

function Body() {
    const { state, submit, setText, setOut, setItem } = useContext(globalContext)
    setItem()
    return (
        <div className="body">
            {state.alert ? setTimeout(() => {
                setOut()
            }, 3000) : null}

            {state.isModal && <Modal state={state} />}

            <div className="input">
                {state.alert ? <Alert /> : null}
                <form onSubmit={(e) => {
                    e.preventDefault()
                    submit()
                    setItem()
                }} >
                    <input type="text"
                        value={state.todo}
                        onChange={(e) => {
                            setText(e)
                        }}
                        className="todo" placeholder="Add a todo" />
                    <button type="submit" className="todo-sub">Add </button>
                </form>
            </div>
            <div className="list">
                {
                    state.todoList.length > 0 ? state.todoList.map((one) => {
                        return <Single item={one} key={one.id} />
                    }) : null
                }
            </div>
        </div>
    )
}
export default Body
