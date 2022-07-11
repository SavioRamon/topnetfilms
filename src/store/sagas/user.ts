
import { User } from "firebase/auth";
import { eventChannel } from "redux-saga";
import { call, put, take } from "redux-saga/effects";
import { authenticationAPI } from "../../services/firebase";
import { authWithServiceError, authWithServiceSuccess, autoLoginError, autoLoginSuccess, disconnectError, disconnectSuccess } from "../ducks/user";


export function* tryAuthWithService(action: {type: string; payload: string}) {
    const authenticationServices = {
        GOOGLE: () => {
            return authenticationAPI.googleAuth();
        },
    };

    const service = authenticationServices[action.payload as keyof typeof authenticationServices];
    const result: User | null = yield call(service);
    if(result) yield put(authWithServiceSuccess(result));
    else yield put(authWithServiceError);
}




export function* tryAutoLogin() {
    
    const currentUser: User | null = yield call(authenticationAPI.autoLogin);
    
    if(currentUser) yield put(autoLoginSuccess(currentUser))
    else yield put(autoLoginError());
}



export function* tryDisconnect() {
    const disconnected: boolean = yield call(authenticationAPI.disconnectUser);
    if(disconnected) yield put(disconnectSuccess());
    else yield put(disconnectError());
}


export function* getFavoriteList() {
    yield console.log("favorite list")
}