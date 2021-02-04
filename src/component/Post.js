import React from 'react';

export default class Post extends React.Component{
    render(){
        return(
            <>
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