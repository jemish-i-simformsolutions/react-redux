import React from 'react';

export default class Post extends React.Component{
    render(){
        return(
            <>
            <span id='date'>{this.props.date}</span>
            <div id='posttitle'>
             {this.props.title} 
             
             </div>
             <div id='postdescription'>
             {this.props.data} 
             </div>
             
            </>

        );
    }
}