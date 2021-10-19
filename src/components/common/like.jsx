import React, { Component } from 'react';

const Like = (props) => {
    let classes= "fa fa-heart";
    if(!props.liked) classes += "-o";
    return (<i className={classes} onClick={props.onClick} aria-label="hidden"></i>);
}
 
export default Like;

// class Like extends React.Component {
//     render() { 
//         let classes= "fa fa-heart";
//         if(!this.props.liked) classes += "-o";
//         return (<i className={classes} onClick={this.props.onClick} aria-label="hidden"></i>);
//     }
// }
 
// export default Like;