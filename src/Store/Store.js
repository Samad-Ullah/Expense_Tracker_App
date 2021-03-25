import {createStore} from "redux";

import ExpenseReducer from '../Reducer/ExpenseReducer';

const store = createStore(ExpenseReducer);

export default store ;

