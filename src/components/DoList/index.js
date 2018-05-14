import React, {Component} from 'react';
import Items from '../Items';

export default class DoList extends Component{
    constructor(props){
        super(props);
        const {onDeleteFn, onEditFn} = props;
        this.state = {
            itemsList: [],
            onDeleteBtnClick: onDeleteFn,
            onEditBtnClickCallBack: onEditFn
        };
    }

    componentWillReceiveProps(nextProps){
        const {doList} = nextProps;
        // if (doList.length && doList.length !== this.state.itemsList.length) {
        //     console.info('DoList setState!');
        //     this.setState({
        //         itemsList: doList.slice()
        //     });
        // }

        console.info('DoList setState!');
        this.setState({
            itemsList: doList.slice()
        });

    }

    render(){
        return (
            <Items items={this.state.itemsList}
                   onDeleteFn = {this.state.onDeleteBtnClick}
                   onEditFn = {this.state.onEditBtnClickCallBack}/>
        )
    }
}