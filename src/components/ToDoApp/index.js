import React, {Component} from 'react';
import DoList from '../DoList';
import './style.css';

export default class ToDoApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue:'',
            toDoList: []
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    render(){
        return (
            <div className="app-container">
                <input type='text' placeholder='Задача' value={this.state.inputValue} onChange={this.handleInputChange}/>
                <button onClick={this.handleAdd}>Добавить</button>
                <DoList doList = {this.state.toDoList} onDeleteFn = {this.handleDelete} onEditFn = {this.handleEdit}/>
            </div>
        )
    }

    handleInputChange(e){
        this.setState({
            inputValue: e.target.value
        });
    }

    handleAdd () {
        let tempValue = this.state.inputValue;
        const tempArray = this.state.toDoList.slice();
        tempArray.push(tempValue);
        this.setState({
            inputValue: '',
            toDoList: tempArray
        });
        console.info(tempValue);
        console.info(tempArray);
    }

    handleDelete(value) {
        console.log('ToDoApp handleDelete for ' + value);
        const index = this.state.toDoList.indexOf(value);
        console.log('Element position is ' + index);
        if (index) {
            if (index === this.state.toDoList.length - 1) {
                const tempArr = this.state.toDoList.slice(0, index);
                this.setState({
                    inputValue:'',
                    toDoList: tempArr
                });
            } else {
                const tempArrFirst = this.state.toDoList.slice(0, index);
                const next = index + 1;
                const tempArr = tempArrFirst.concat(this.state.toDoList.slice(next));
                this.setState({
                    inputValue:'',
                    toDoList: tempArr
                });
            }

        } else {
            //когда удаляем елемент с индексом 0
            const tempArr = this.state.toDoList.slice(1);
            this.setState({
                inputValue:'',
                toDoList: tempArr
            });
        }
    }

    handleEdit(oldValue, newValue) {
        console.info('ToDoApp handleEdit for ' + oldValue + ' to ' + newValue);
        const index = this.state.toDoList.indexOf(oldValue);
        console.log('Element position is ' + index);
        if (index) {
            if (index === this.state.toDoList.length - 1) {
                const tempArr = this.state.toDoList.slice(0, index);
                tempArr.push(newValue);
                this.setState({
                    inputValue:'',
                    toDoList: tempArr
                });
            } else {
                const tempArrFirst = this.state.toDoList.slice(0, index);
                tempArrFirst.push(newValue);
                const next = index + 1;
                const tempArr = tempArrFirst.concat(this.state.toDoList.slice(next));
                this.setState({
                    inputValue:'',
                    toDoList: tempArr
                });
            }

        } else {
            //когда удаляем елемент с индексом 0
            const tempArrFirst = [];
            tempArrFirst.push(newValue);
            const tempArr = tempArrFirst.concat(this.state.toDoList.slice(1));
            this.setState({
                inputValue:'',
                toDoList: tempArr
            });
        }

    }
}

