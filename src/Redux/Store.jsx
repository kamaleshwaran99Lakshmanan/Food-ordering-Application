import {configureStore} from '@reduxjs/toolkit';
import foodData from '../Redux/Slice';
export default configureStore({
    reducer:{
       foodData:foodData
    }
})