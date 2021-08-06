import ACTIONS from "../ACTIONS"
function id() {
    const a = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "1", "2", "3", "s", "p", "6"]

    let id = ""

    for (let i = 0; i < a.length; i++) {
        let q = a[Math.floor(Math.random() * a.length)]
        id += q
    }

    return id

}
function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.SET_TODO:
            return { ...state, todo: action.payload.name }
        case ACTIONS.FORM_SUB:
            if (state.todo === "") {
                return {
                    ...state, alert: true
                }

            }
            else {
                return {

                    ...state, todoList: [...state.todoList, {
                        id: id(),
                        title: state.todo,
                    }], todo: ""

                }
            }
        case ACTIONS.SET_OUT:
            return {
                ...state, alert: false
            }
        case ACTIONS.EDIT:
            let aa = action.payload.id
            let editArr = state.todoList.filter((one) => {
                return one.id === aa
            })
            let newArr = state.todoList.filter((one) => {
                return one.id !== aa
            })
            return { ...state, todoList: newArr, todo: editArr[0].title }
        case ACTIONS.DEL:
            let bb = action.payload.id
            let delArr = state.todoList.filter((one) => {
                return one.id !== bb
            })
            return { ...state, todoList: delArr }

        case ACTIONS.MODAL:
            return { ...state, isModal: !state.isModal }

        case ACTIONS.DEL_ID:
            return { ...state, delId: action.payload.id }

        default:
            return state

    }
}


export default reducer