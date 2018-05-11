'use strict';
import React from 'react';
import {render} from 'react-dom';
import MyApp from './components/ToDoApp';

document.addEventListener("DOMContentLoaded", function(event) {

    render(<MyApp/>, document.getElementById('root'));
});