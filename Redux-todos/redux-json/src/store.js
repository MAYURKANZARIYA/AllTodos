import { configureStore } from "@reduxjs/toolkit";
import UseRedu from "./UseRedu";


export let store = configureStore({
    reducer: {
        acces: UseRedu

    }
})