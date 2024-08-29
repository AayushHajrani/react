import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "todo msg",
            completed: false,
        }
    ],
    addtodo: (todo) => { },
    updatetodo: (id, todo) => { },
    deletetodo: (id) => { },
    togglecomplete: (id) => { }
})

export const usetodo = () => {
    return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider