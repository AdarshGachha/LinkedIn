import axios from "@/utils/axios";
import {
  addemploye,
  addjobs,
  addinternships,
  removeemploye,
  iserror,
  removeerror,
} from "../Reducers/employeReducer";
import { toast } from "react-toastify";

export const asynccurrentemploye = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("https://mern-deoply-backend.onrender.com/employe/current");
   dispatch(addemploye(data.employe)); 
    
  } catch (error) {
    dispatch(iserror(error.response.data));
    
  }
 
};

export const asyncsignupemploye = (employe) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("https://mern-deoply-backend.onrender.com/employe/signup",employe);
    dispatch(asynccurrentemploye());


    
  } catch (error) {
    dispatch(iserror(error.response.data));

    
  }
  
};

export const asyncsigninemploye = (employe) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("https://mern-deoply-backend.onrender.com/employe/signin",employe);
  // console.log(data);
  dispatch(asynccurrentemploye());


    
  } catch (error) {
    dispatch(iserror(error.response.data));
    
  }
  
};

export const asyncsignoutemploye = (employe) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("https://mern-deoply-backend.onrender.com/employe/signout");
  // console.log(data);
  dispatch(removeemploye());
    
  } catch (error) {
    dispatch(iserror(error.response.data));
    
  }
  
};


export const asyncupdateemploye = (employe) => async (dispatch, getState) => {
  try {

    const {_id} = getState().employeReducer.employe;
    const { data } = await axios.post("https://mern-deoply-backend.onrender.com/employe/update/"+_id,employe);
  // console.log(data);
  dispatch(asynccurrentemploye());

    
  } catch (error) {
    dispatch(iserror(error.response.data));
    
  }
  
};

export const asyncavataremploye = (avatar) => async (dispatch, getState) => {
  try {

    const {_id} = getState().employeReducer.employe;
    const { data } = await axios.post("https://mern-deoply-backend.onrender.com/employe/avatar/"+_id,avatar);
  // console.log(data);
  dispatch(asynccurrentemploye());

    
  } catch (error) {
    dispatch(iserror(error.response.data));
    
  }
  
};


export const asyncresetpasswordemploye = (password) => async (dispatch, getState) => {
  try {

    const {_id} = getState().employeReducer.employe;
    const { data } = await axios.post("https://mern-deoply-backend.onrender.com/employe/reset-password/"+_id,password);
  // console.log(data);
  dispatch(asynccurrentemploye());


    
  } catch (error) {
    dispatch(iserror(error.response.data));
    
  }
  
};


export const asyncforgetpasswordemploye = (email) => async (dispatch, getState) => {
  try {

    const { data } = await axios.post("https://mern-deoply-backend.onrender.com/employe/send-mail/",email);
  dispatch(asynccurrentemploye());


    
  } catch (error) {
    dispatch(iserror(error.response.data));
    
  }
  
};

export const asyncotppasswordemploye = (pwd) => async (dispatch, getState) => {
  try {

    const { data } = await axios.post("https://mern-deoply-backend.onrender.com/employe/forget-link/",pwd);
  dispatch(asynccurrentemploye());


    
  } catch (error) {
    dispatch(iserror(error.response.data));
    
  }
  
};



export const asynccreatejobemploye = (job) => async (dispatch, getState) => {
  try {

    const { data } = await axios.post("https://mern-deoply-backend.onrender.com/employe/job/create",job);
  dispatch(asynccurrentemploye());


    
  } catch (error) {
    dispatch(iserror(error.response.data));
    
  }
  
};


export const asynccreateinternshipemploye = (internship) => async (dispatch, getState) => {
  try {

    const { data } = await axios.post("https://mern-deoply-backend.onrender.com/employe/internship/create",internship);
  dispatch(asynccurrentemploye());


    
  } catch (error) {
    dispatch(iserror(error.response.data));
    
  }
  
};

