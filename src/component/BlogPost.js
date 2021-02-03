import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {addBlog} from '../ActionProvider/Actions';
import "../Pro.css";

const mapStateToProps=(state)=>{
    return{
        xyz:state.xyz,
        tarray:state.tarray,
        darray:state.darray,
        
    };
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({addBlog},dispatch)
}



  class BlogPost extends React.Component{
     
    addToArray=()=>{
        this.props.addBlog(this.t,this.d);
        
    }
    t='';
    d='';
    dataArray=[this.props.tarray.length];
    concatArray=(x)=>{
        for(let i=0;i<this.props.tarray.length;i++){
            x[i]=this.props.tarray[i]+'$'+this.props.darray[i];
        }
        return x;
    }
    splitVal=(val)=>{
        return val.split('$');

    }
    
  
    
    render(){
        
     
        return(
        <>
        <span id="addblog">
        <table>
        <tbody>
        <tr>
        <td> Title:</td>
        <td><input id='title'  type='text' onChange={(event)=>{this.t=event.target.value}} /></td>
        </tr>
        <tr>
        <td>Description:</td>
        <td><textarea  id='tarea' onChange={(event)=>{this.d=event.target.value}} /></td>
        </tr>
        
        {console.log(this.splitVal('italiya$jemish'))}
        
        <tr >
        <td colSpan='2'><button id='addbtn' onClick={this.addToArray} >Post Blog</button></td>
        </tr>
        </tbody>
        </table>
        </span>
        <div>
        {
        this.concatArray(this.dataArray).map((val)=>{
            let title='';
            let data='';
            for(let i=0;i<val.length;i++){
                if(val.charAt(i)=='$'){
                    title=val.substring(0,i);
                    data=val.substring(i+1,val.length);
                    break;
                }
            }
             return(
             <div id='post'>
             <div id='posttitle'>
             {title}
             
             </div>
             <div id='postdescription'>
             {data} 
             </div>
             </div>
             );

         })
        }
        </div>
        </>
        );
    }
}
export default (connect(mapStateToProps,mapDispatchToProps)(BlogPost));
