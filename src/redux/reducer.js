

export const initialState={
    fname:'jemish',
    lname:'italiya123'
}
export const Reducer=(state=initialState,actions)=>{
    if(actions.type==='UPDATE'){
        let newfname='keyur';
        return{
            ...state,
            fname:newfname
        }
    }
    if(actions.type==='CLICKY'){
        let newlname='amipara';
        return{
            ...state,
            lname:newlname
        }
    }
    return state;
}
