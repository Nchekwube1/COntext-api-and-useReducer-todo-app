import "./scss/single.css"
import { useContext } from "react"
import { globalContext } from "./CONTEXT"
import editImg from "./icons/iconfinder_103514_edit_text_document_icon.svg"
import delImg from "./icons/iconfinder_3669360_delete_forever_ic_icon.svg"

function Single({ item }) {
    const { edit, delid, modal } = useContext(globalContext)
    return (
        <div className="single">
            <div className="txt"><h1>{item.title}</h1></div>
            <div className="btns">
                <div className="edit" ><button onClick={() => {
                    edit(item.id)
                }}><img src={editImg} alt="edit btn" /></button ></div>
                <div className="del" ><button onClick={() => {
                    delid(item.id)
                    modal()
                }}><img src={delImg} alt="del btn" /></button></div>
            </div>
        </div>
    )
}

export default Single
