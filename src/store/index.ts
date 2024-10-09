import { IUser } from "../interfaces/user";
import { createStore } from "redux"

export interface IInithialState {
    usersList: IUser[],
};

export const inithialState: IInithialState = {
    usersList: [],
};

export const SET_USERS = "SET_USERS";

function rootReducer(state = inithialState, action: { type: string, payload: any }) {
    switch(action.type) {
        case SET_USERS: {
            return { ...state, usersList: action.payload };
        }
        default: {
            return state;
        }
    }
}


export const handleSetUsers = (payload: IUser[]) => {
    return { type: SET_USERS, payload };
};

export const store = createStore(rootReducer);
