import React, {Component} from 'react';
import Article from './Article.js';
import CoolArticle from './CoolArticle.js';

export default class AppComponent extends Component{
    render(){
        return (
            <div>
                <h1>Hello World!</h1>
                <Article text='Some beautiful text!!!!' number={23} myObj={{name: 'Vasya', lastname: 'Pupkin'}} isCool/>
                <CoolArticle/>
            </div>
        )
    }
}