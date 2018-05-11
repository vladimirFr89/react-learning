import React from 'react'
import CoolArticle from '../CoolArticle';

function ArticlesList() {
    const articlesList =  articles.map(function (article) {
        return (
            <li key = {article.id}><CoolArticle article={article} /></li>
        )
    });

    return (
        <ul>
            {articlesList}
        </ul>
    )
}

const articles = [
    {
        id:'0agdsla',
        title: 'Title 1',
        text: 'Some interesting text1'
    },{
        id:'1aernsm',
        title: 'Title 2',
        text: 'Some interesting text2'
    },{
        id:'2mvmkoe',
        title: 'Title 3',
        text: 'Some interesting text3'
    },{
        id:'3psmfri',
        title: 'Title 4',
        text: 'Some interesting text4'
    },{
        id:'4mofper',
        title: 'Title 5',
        text: 'Some interesting text5'
    }
];

export default ArticlesList;