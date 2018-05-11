import React, {Component} from 'react';
import './style.css'

export default class ToDoApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue:''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    render(){
        return (
            <div className="app-container">
                <input type='text' placeholder='Задача' defaultValue={this.state.inputValue} onChange={this.handleInputChange}/>
                <button onClick={this.handleAdd}>Добавить</button>
                <p>Entered: {this.state.inputValue}</p>
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
        this.setState({
            inputValue: ''
        });
        console.info(tempValue);
    }
}

