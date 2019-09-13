import {takeLatest,call,put,all} from 'react-saga/effects'
import {toast} from 'react-toastify'

import {logInSucess, signFailure} from './actions'
import history from '@/services/history'

export function* logIn({payload}){
  try{
    const{email,password} = payload
    const response = yield call(api.post, 'sessions',{
      email,
      password,
    });

    const {token,user} = response.data
    if(!user.provider) {
      toast.error('User is not provider');
      return;
    }

    api.default.headers.Authorization = `Bearer ${token}`;
    yield put(logInSucess(token,user))
    history.push('/dashboard')
  }catch(err) {
    toast.error('Authentication failed. Please verify your data')
    yield put(signFailure())
  }
}

export function* signUpe({payload}){
  try {
    const{name,email,password} = payload
    yield call(api.post,'users',{
      name,
      email,
      password,
      provider:true
    });
    history.push('/')
  } catch (error) {
    toast.error('Registration failed. Please verify your data');
    yield put(signFailure());
  }
}

export function setToken({payload}){
  if(!payload) return
  const {token} = payload.auth;
  if(token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function logOut(){
  history.push('/')
}
export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/LOG_IN_REQUEST', logIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/LOG_OUT',logOut),
]);