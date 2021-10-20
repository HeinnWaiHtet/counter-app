import React from 'react';
const ListGroup = (props) => {
    const {items, valueProperty, onItemSelect, selectedGenere, nameProperty} = props;
    return ( 
    <ul className="list-group">
        {items.map(item =>
           <li
            onClick = {()=>onItemSelect(item)}
            key={item[valueProperty]}
            className= {selectedGenere === item ? "list-group-item active" : "list-group-item"}>{item[nameProperty]}</li>)}
    </ul> );
}

ListGroup.defaultProps = {
    valueProperty : "_id",
    nameProperty : "name"
};
 
export default ListGroup;