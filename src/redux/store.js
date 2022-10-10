// import { configureStore } from "@reduxjs/toolkit";
// import todoFetch from './reducer';

// const store = configureStore({
//     reducer: {
//         todo: todoFetch
//     }
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

const store = configureStore({
    reducer: reducer,
});

export default store;