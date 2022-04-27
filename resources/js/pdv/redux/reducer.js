import {createStore} from "redux";

const initialState = {
    cart: [],
    productModal: false,
    deliveryOption: null,
    paymentOption: null,
    regionCurrent: null,
    regionData: []
}

const reducer = (state = initialState, action) => {
    if(action.type === 'ADD_CART_ITEM'){
        return {...state,  cart: [
                ...state.cart, action.item
        ]}
    }

    if(action.type === 'UPDATE_CART'){
        return {...state,  cart: action.data}
    }

    if(action.type === 'PRODUCT_MODAL'){
        return {...state,  productModal: action.data}
    }

    if(action.type === 'SET_CURRENT_REGION'){
        return {...state,  regionCurrent: action.data}
    }

    if(action.type === 'SET_REGIONS'){
        return {...state,  regionData: action.data}
    }

    if(action.type === 'SET_DELIVERY_METHODO'){
        return {...state,  deliveryOption: action.data}
    }

    if(action.type === 'SET_PAYMENT_METHODO'){
        return {...state,  paymentOption: action.data}
    }

    return state
}

const store = createStore(reducer)

export default  store
