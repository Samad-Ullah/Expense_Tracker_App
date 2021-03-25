const initialState = {
    expense: [""]
}
const  ExpenseReducer = (state=initialState , action)=>{
    switch (action.type){
        case 'ADD':
            return{
                ...state , 
            }
        default:
            return state;
    }
}

export default ExpenseReducer;