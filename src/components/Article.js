import React from 'react'

function Article(props) {
    console.info(props);
    return (
        <div>
            <p>Some text!!!!</p>
            <p>{props.text}</p>
        </div>
    )
}

export default Article;