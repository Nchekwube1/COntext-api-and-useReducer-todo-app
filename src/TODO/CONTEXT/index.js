import reducer from "../REDUCERS"
import ACTIONS from "../ACTIONS"
import init from "../INIT"
import { createContext, useReducer } from "react"
export const globalContext = createContext({ init })


function Provider({ children }) {

    function INITIAL() {

        let x = localStorage.getItem("state")
        if (x) {
            return JSON.parse(localStorage.getItem("state"))
        }
        else return init



    }
    const [state, dispatch] = useReducer(reducer, INITIAL())

    const submit = () => {
        dispatch({ type: ACTIONS.FORM_SUB })

    }
    const setText = (e) => {
        dispatch({ type: ACTIONS.SET_TODO, payload: { name: e.target.value } })
    }
    const edit = (pp) => {
        dispatch({
            type: ACTIONS.EDIT
            , payload: {
                id: pp
            }
        })
    }
    const setOut = () => {
        dispatch({ type: ACTIONS.SET_OUT })
    }

    const del = (aa) => {
        dispatch({
            type: ACTIONS.DEL
            , payload: {
                id: aa
            }
        })
    }
    const delid = (gg) => {
        dispatch({
            type: ACTIONS.DEL_ID,
            payload: { id: gg.toString() }
        })
    }

    const modal = () => {
        dispatch({
            type: ACTIONS.MODAL
        })
    }

    const setItem = () => [
        localStorage.setItem("state", JSON.stringify(state))
    ]
    return (
        <globalContext.Provider value={{
            state,
            submit,
            setText,
            edit,
            del,
            modal,
            delid,
            setItem,
            setOut

        }}>
            {children}
        </globalContext.Provider>
    )
}

export default Provider