import {createStore} from "redux";

const initialState = {
    configurations: [],
    user: {
        logged: false,
        modalLogin: false,
        data: {}
    },
    coupon: {},
    cart: []
}

const reducer = (state = initialState, action) => {
    if (action.type === 'SET_CONFIGURATIONS') {
        return {...state,  configurations: action.data}
    }

    if (action.type === 'SET_LOGGED') {
        return {...state,  user: {...state.user, logged: true}}
    }

    if (action.type === 'SET_LOGOUT') {
        return {...state,  user: {...state.user, logged: false}}
    }

    if (action.type === 'SET_LOGGED_DATA') {
        return {...state,  user: {...state.user, data: action.data}}
    }

    if(action.type === 'ADD_CART_ITEM'){
        return {...state,  cart: [
                ...state.cart, action.item
        ]}
    }

    if(action.type === 'UPDATE_CART'){
        return {...state,  cart: action.data}
    }

    if(action.type === 'ADD_COUPON'){
        return {...state,  coupon: action.data}
    }

    if(action.type === 'MODAL_LOGIN'){
        return {...state,  user: {
                ...state.user,
                modalLogin: !state.user.modalLogin
            }}
    }

    return state
}

const store = createStore(reducer)

export default  store
