import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {addBlog,deleteBlog} from '../ActionProvider/Actions';
import "../Pro.css";
import Post from './Post'

const mapStateToProps=(state)=>{
    return{
        // xyz:state.xyz,
        // tarray:state.tarray,
        // darray:state.darray,
        blogs:state.blogs
        
    };
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({addBlog,deleteBlog},dispatch)
}




  class BlogPost extends React.Component{
     
    addToArray=()=>{
        this.props.addBlog(this.t,this.d);
        
    }
    deleteToArray=(value)=>{
    this.props.deleteBlog(value);
    }
    t='';
    d='';
    
    
  
    
    render(){
        
     
        return(
        <>
        <span id="addblog">
        <table>
        <tbody>
        <tr>
        <td>Title:</td>
        <td><input id='title'  type='text' onChange={(event)=>{this.t=event.target.value}} /></td>
        </tr>
        <tr>
        <td>Description:</td>
        <td><textarea  id='tarea' onChange={(event)=>{this.d=event.target.value}} /></td>
        </tr>
        
        
        
        <tr >
        <td colSpan='2'><button id='addbtn' onClick={this.addToArray} >Post Blog</button></td>
        </tr>
        </tbody>
        </table>
        </span>
        <div>
        <ul>
        {this.props.blogs.map((val)=>{
             return(
                
             <div id='post' key={val.id.toString()}>
             <Post  title={val.title} data={val.description} date={val.date} />
             
             <div>
             <button id='dltblog' onClick={()=>this.deleteToArray(val)} >Delete Blog</button>
          
             
             
             </div>
             </div>
             );

         })
        }
        
        </ul>
        
        </div>
        </>
        );
    }
}
export default (connect(mapStateToProps,mapDispatchToProps)(BlogPost));

