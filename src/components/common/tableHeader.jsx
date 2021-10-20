import React, { Component } from 'react';
class TableHeader extends React.Component {
    raisedSort = path => {
        const changeSortedColumn = {...this.props.sortColumn};
        if(changeSortedColumn.path === path){
            changeSortedColumn.order = changeSortedColumn.order === 'asc' ? 'desc' : 'asc';
        }else{
            changeSortedColumn.path = path;
            changeSortedColumn.order = 'asc';
        }
        this.props.onSort(changeSortedColumn);
    }

    render() { 
        return (
        <thead>
            <tr>
                {this.props.columns.map(column =>
                     <th key={column.path || column.key} onClick={()=> this.raisedSort(column.path)}>{column.label}</th>)}
                <th></th>
            </tr>
        </thead> );
    }
}
 
export default TableHeader;