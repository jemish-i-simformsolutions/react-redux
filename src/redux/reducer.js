

export const initialState={
   
    blogs:[],
    count:0
    //xyz:''
}
export const Reducer=(state=initialState,actions)=>{
    
    switch (actions.type) {
        case 'ADDBLOG':
            let tempBlogs=state.blogs;//.push({title:actions.data.title,description:actions.data.description});
            let tempCount=state.count+1;
            const timeanddate=new Date();
            return {...state,
                blogs:[...tempBlogs,{id:state.count,title:actions.data.title,description:actions.data.description,date:timeanddate.getDate()+"/"+timeanddate.getMonth()+"/"+timeanddate.getFullYear()+"  "+timeanddate.getHours()+":"+timeanddate.getMinutes()+":"+timeanddate.getSeconds()}],
                count:tempCount
            };
            case 'DELETEBLOG':
                let tempArray=state.blogs.filter((val)=>actions.data.id!==val.id);
                let tempCount1=state.count-1;
                return {...state,
                blogs:tempArray,
                count:tempCount1
                };
            
            default:return state;
    }



    // if(actions.type==='ADDBLOG'){
       
    //     let tempBlogs=state.blogs;//.push({title:actions.data.title,description:actions.data.description});
    //     let tempCount=state.count+1;
    //     const timeanddate=new Date();
    //     return{
    //         ...state,
            
    //         blogs:[...tempBlogs,{id:state.count,title:actions.data.title,description:actions.data.description,date:timeanddate.getDate()+"/"+timeanddate.getMonth()+"/"+timeanddate.getFullYear()+"  "+timeanddate.getHours()+":"+timeanddate.getMinutes()+":"+timeanddate.getSeconds()}],
    //         count:tempCount
           
    //     }
    // }
    // if(actions.type==='DELETEBLOG'){
    //    let tempArray=state.blogs.filter((val)=>actions.data.id!==val.id);
    //    let tempCount=state.count-1;
    //     return{
    //         ...state,
    //         blogs:tempArray,
    //         count:tempCount
    //     }
    // }
    // return state;
}
