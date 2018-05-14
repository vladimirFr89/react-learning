import React, {Component} from 'react';
import './style.css'

export default class DoItemEdit extends Component{

    constructor(props){
        super(props);
        const {value, applyFn} = props;
        this.state = {
            value: value,
            onApplyBtnClick: applyFn
        };

        this.handleApply = this.handleApply.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    render(){
       return (
           <div className='editing-row'>
               <div className='editing-row--item'>
                   <input type='text' defaultValue={this.state.value} onChange={this.handleInputChange}/>
               </div>
               <div className='editing-row--item'>
                   <button onClick={this.handleApply}>Применить</button>
               </div>
           </div>
       )
    }

    handleApply(){
        console.log('DoItemEdit handleApply for ' + this.state.value);
        this.state.onApplyBtnClick(this.state.value);
    }

    handleInputChange(e){
        this.setState({
            value: e.target.value
        });
    }
}