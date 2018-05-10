'use strict';
import React from 'react';
import {render} from 'react-dom';
import MyApp from './app.js';

document.addEventListener("DOMContentLoaded", function(event) {

    render(<MyApp/>, document.getElementById('app'));
});