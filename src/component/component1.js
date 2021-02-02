import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {update1,clicky} from '../ActionProvider/Actions'
const mapStateToProps=(state)=>{
    return{
     fname:state.fname,
     lname:state.lname
    };
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({update1,clicky},dispatch)
    // return{
    //     update1:()=>{dispatch(update1())},
    //     clicky:()=>{dispatch(clicky())}

    // };
}
class Component1 extends React.Component{
    handleClick=()=>{
        this.props.update1();
    }
    clicky=()=>{
        this.props.clicky();
    }
    
    render(){
        return(
        <>
        This is {this.props.fname} {this.props.lname}
        <button onClick={this.handleClick}>Press</button>
        <button onClick={this.clicky}>Press here</button>
        </>
        );
    }
}
export default (connect(mapStateToProps,mapDispatchToProps)(Component1));