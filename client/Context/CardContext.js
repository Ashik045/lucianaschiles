import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

const isServer = typeof window !== 'undefined';

const INITIAL_STATE = {
    loading: false,
    list: isServer && localStorage.getItem('productlist') ? JSON.parse(localStorage.getItem('productlist')) : [],
    error: false,
}

// create context object
export const CartContext = createContext(INITIAL_STATE)

// context provider
export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem('productlist', JSON.stringify(state.list))
    }, [state.list])

    return (
        <CartContext.Provider value={{
            loading: state.loading,
            list: state.list,
            error: state.error,
            dispatch
        }}>
            {children}
        </CartContext.Provider>
    )
}