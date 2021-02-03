

export const initialState={
   
    tarray:[],
    darray:[],
}
export const Reducer=(state=initialState,actions)=>{
    
    if(actions.type==='ADDBLOG'){
        let tempT=state.tarray;
        let tempD=state.darray;
        return{
            ...state,
            tarray:[...tempT,actions.data.title],
            darray:[...tempD,actions.data.description]
            
            
            
        }
    }
    
    return state;
}
