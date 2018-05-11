import React, {Component} from 'react';

export default class CoolArticle extends Component {

    constructor(props){
        console.info('CoolArticle constructor with props:');
        console.info(props);
        super(props);
        this.state = {
            isOpen: true
        }
    }

    componentWillMount(){
        console.info('CoolArticle componentWillMount');
    }

    render(){
        const {article} = this.props;
        console.info('CoolArticle render');
        const someText = this.state.isOpen && <p>{article.text}</p>;
        return(
            <div>
                <button onClick={this.handleClickMe.bind(this)}>Click me!!!!</button>
                <h2>{article.title}</h2>
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
    }

    componentWillReceiveProps(nextProps){
        console.info('CoolArticle componentWillReceiveProps with nextProps:');
        console.info(nextProps);
    }

    componentWillUpdate(nextProps, nextState){
        console.info('CoolArticle componentWillUpdate with nextProps and nextState:');
        console.info(nextProps);
        console.info(nextState);
    }
}