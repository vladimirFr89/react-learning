import React, {Component} from 'react';
import DoItem from '../DoItem';
import './style.css'

export default function Items(props) {
    const {items, onDeleteFn, onEditFn} = props;
    const listElements = items.map(function (item, index) {
        const keyId = index + item[0];
        return (
            <li key={keyId}><DoItem value = {item} onDeleteBtnClick={onDeleteFn} onEditBtnClick={onEditFn}/></li>
        )
    });

    return(
        <ul className='do-list'>
            {listElements}
        </ul>
    )
}