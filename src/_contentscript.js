import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import "./configure-webpack.js";
import 'semantic-ui-css/semantic.css';
import $ from '../jquery.js';

//turn on main.js
// chrome.browserAction.onClicked.addListener(function(tab) {
// chrome.tabs.executeScript(null, {file: "main.js"});
// });

let existsAlready = !($('#lapiChromeExtensionContainer').length === 0);
if (existsAlready!=true) {
    // chrome.tabs.executeScript(null, {file: "contentscript.js"});

    // var url = chrome.extension.getURL('container.html');
    //let height = "35px";
    let height = "165px";

    // var iframe = "<iframe src='"+ url + "' id='lapiChromeExtensionContainer' style='height:"+height+"'></iframe>";

    var containerDiv = "<div id='lapiChromeExtensionContainer' style='height:"+height+"'></div>";

    // var containerDivSpacer = "<div id='lapiChromeExtensionContainerSpacer' style='height:"+height+"'></div>";

    $('body').append(containerDiv);

    $('body').css({
        '-ms-transform': 'translateY(165px)',
        '-webkit-transform': 'translateY(165px)',
        'transform': 'translateY(165px)'
    });

    // $('body').css('marginTop','165px');
    // $('body').css('padding-top','64px');

    ReactDOM.render(<App />, document.getElementById('lapiChromeExtensionContainer'));
    console.log("2nd without bang", $('#lapiChromeExtensionContainer'));
    console.log("2nd with bang", !!$('#lapiChromeExtensionContainer'));
}
