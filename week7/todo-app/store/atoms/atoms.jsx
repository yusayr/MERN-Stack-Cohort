import { atom, selector } from "recoil"

export const todoState = atom({
    key: "todoState",
    default: [],
});

export const searchQueryState = atom({
    key: "searchQueryState",
    default: '',
});

export const filteredTodoState = selector({
    key: 'filteredTodoState',
    get: ({get}) => {
        const query = get(searchQueryState).toLowerCase();
        const todos = get(todoState);
        return todos.filter(todo=> todo.todo.toLowerCase().includes(query));
    }
});
