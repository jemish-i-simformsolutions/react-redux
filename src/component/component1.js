import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
const mapStateToProps=(state)=>{
    return{
     fname:state.fname,
     lname:state.lname
    };
}
class Component1 extends React.Component{
    
    render(){
        return(
        <>
        This is {this.props.fname} {this.props.lname}
        </>
        );
    }
}
export default (connect(mapStateToProps)(Component1));