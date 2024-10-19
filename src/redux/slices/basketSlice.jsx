import { createSlice } from '@reduxjs/toolkit'



const getBasketFromStorage = () => {
    if (localStorage.getItem("basket")) {
        return JSON.parse(localStorage.getItem("basket"));
    }
    return [];
}
const initialState = {
    basketProducts: getBasketFromStorage(),
    drawer: false,
    totalAmount: 0,
}

const writeFormBasketToStorage = (basket) => {

    localStorage.setItem("basket", JSON.stringify(basket))
}
export const basketSlice = createSlice({

    name: "basketSlice",
    initialState,
    reducers: {
        addProductToBasket: (state, action) => {
            const findProduct = state.basketProducts && state.basketProducts.find((basket) => basket.id === action.payload.id);
            if (findProduct) {
                const extractedProduct = state.basketProducts.filter((product) => product.id !== action.payload.id)
                state.basketProducts = [...extractedProduct, action.payload];

                writeFormBasketToStorage(state.basketProducts)
            } else {


                state.basketProducts = [...state.basketProducts, action.payload];
                writeFormBasketToStorage(state.basketProducts)
            }
            caltulateBasket()
        },
        setDrawer: (state) => {
            state.drawer = !state.drawer;
        },
        caltulateBasket: (state) => {
            state.totalAmount = 0
            state.basketProducts && state.basketProducts.map((product) => {
                state.totalAmount += product.price * product.count;
            })
        }
    },

})

export const { addProductToBasket, setDrawer, caltulateBasket } = basketSlice.actions

export default basketSlice.reducer