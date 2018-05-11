import React, {Component} from 'react';

export default class CoolArticle extends Component {

    constructor(props){
        console.info(props);
        super(props);
        this.state = {
            isOpen: true
        }
    }

    render(){
        const someText = this.state.isOpen && <p>Text is open</p>;
        return(
            <div>
                <button onClick={this.handleClickMe.bind(this)}>Click me!!!!</button>
                <p>This is cool article with some text</p>
                {someText}
            </div>
        )
    }

    // handleClickMe = () => {
    //     this.setState({
    //         isOpen: !this.state.isOpen
    //     });
    //     console.info('Clicked to the button!');
    // }

    handleClickMe() {
        this.setState({
            isOpen: !this.state.isOpen
        });
        console.info('Clicked to the button!');
    }
}