import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");
const API_URL = "https://jsonplaceholder.typicode.com/todos";

// const todoFetch = createSlice({
//     name: "todo",
//     initialState: {
//         data: []
//     },
//     reducers: {
//         addTodos: (state, action) => {
//             state.data.push(action.payload);
//         },
//         removeTodos: (state, action) => {
//             state.filter((item) => item.id !== action.payload);
//         },
//         updateTodos: (state, action) => {
//             state.map((todo) => {
//                 if (todo.id === action.payload.id) {
//                     return {
//                         ...todo,
//                         item: action.payload.item,
//                     };
//                 }
//             })
//         },
//         completeTodos: (state, action) => {
//             state.map((todo) => {
//                 if (todo.id === action.payload) {
//                     return {
//                         ...todo,
//                         completed: true,
//                     };
//                 }
//             });
//         },
//     }
// })

// export const updateTodoAsync = (data) => async (dispatch) => {
//     try {
//         const response = await axios.get(`${API_URL}/${data}`);
//         dispatch(updateTodos(response.data));
//     } catch (err) {
//         throw new Error(err);
//     }
// };

// export const addTodoAsync = (data) => async (dispatch) => {
//     try {
//         // console.log(data);
//         const response = await axios.post(API_URL, data);
//         // console.log(response);
//         dispatch(addTodos(response.data));
//     } catch (err) {
//         throw new Error(err);
//     }
// };

// export const removeTodoAsync = (data) => async (dispatch) => {
//     try {
//         // console.log(data);
//         const response = await axios.post(API_URL, data);
//         // console.log(response);
//         dispatch(removeTodos(response.data));
//     } catch (err) {
//         throw new Error(err);
//     }
// };

// export const complateTodoAsync = (data) => async (dispatch) => {
//     try {
//         // console.log(data);
//         const response = await axios.post(API_URL, data);
//         // console.log(response);
//         dispatch(completeTodos(response.data));
//     } catch (err) {
//         throw new Error(err);
//     }
// };

const initialState = [];

const addTodoReducer = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodos: (state, action) => {
            state.push(action.payload);
            return state;
        },
        removeTodos: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
        updateTodos: (state, action) => {
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        item: action.payload.item,
                    };
                }
                return todo;
            });
        },
        completeTodos: (state, action) => {
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: true,
                    };
                }
                return todo;
            });
        },
    },
});

export const {
    addTodos,
    removeTodos,
    updateTodos,
    completeTodos,
} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;

// export const {
//     addTodos,
//     removeTodos,
//     updateTodos,
//     completeTodos, } = todoFetch.actions;
// export const showTodo = (state) => state.todo.data;
// export default todoFetch.reducer;