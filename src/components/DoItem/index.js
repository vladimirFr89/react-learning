import React, {Component} from 'react';
import DoItemEdit from '../DoItemEdit';
import './style.css'

export default class DoItem extends Component {
    constructor(props) {
        super(props);
        console.info('DoItem constructor with props:');
        console.info(props);
        const {value, onDeleteBtnClick, onEditBtnClick} = props;
        this.state = {
            isEdit: false,
            value: value,
            onDeleteClick: onDeleteBtnClick,
            onEditBtnClickCallBack: onEditBtnClick
        };

        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleApply = this.handleApply.bind(this);
    }

    render() {
        console.info('DoItem render ' + this.state.value);
        const itemValueElement = this.state.isEdit ?
            <DoItemEdit value = {this.state.value} applyFn = {this.handleApply}/>
            : <div>{this.state.value}</div>;
        return (
            <div className='do-item-row'>
                <div className='do-item-row--item'>
                    {itemValueElement}
                </div>
                <div className='do-item-row--item'>
                    <button onClick={this.handleDelete}>Удалить</button>
                </div>
                <div className='do-item-row--item'>
                    <button onClick={this.handleEdit}>Редактировать</button>
                </div>
            </div>
        )
    }

    handleDelete() {
        console.log('DoItem handleDelete for ' + this.state.value);
        this.state.onDeleteClick(this.state.value);
    }

    handleEdit() {
        console.log('DoItem handleEdit for ' + this.state.value);
        this.setState({
            isEdit: true
        });
    }

    handleApply(value){
        console.log('DoItem handleApply for ' + this.state.value + " to " + value);
        this.setState({
            isEdit: false
        });
        this.state.onEditBtnClickCallBack(this.state.value, value);
    }

}