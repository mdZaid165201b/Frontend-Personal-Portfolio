import {configureStore,combineReducers ,getDefaultMiddleware} from "@reduxjs/toolkit";
import authReducer from "../features/auth/auth";
import profileReducer from "../features/profile/profile";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import projectReducer from "../features/project/project";
import config from "tailwindcss/defaultConfig";
const persistConfig = {
    key: "auth",
    storage
}

const persistentReducer = persistReducer(persistConfig,authReducer)
const rootReducer = combineReducers({
    auth: persistentReducer,
    profile: profileReducer,
    project: projectReducer
})

export const store = configureStore({
    reducer: rootReducer
});

export const persistor = persistStore(store);


// export const store = configureStore({
//     reducer: {
//         auth: authReducer,
//         profile: profileReducer,
//     },
//     middleware: [
//         ...getDefaultMiddleware(),
//     ]
// })