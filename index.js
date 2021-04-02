import "./index.css";
import { change } from './base.js';

function craete() {
    const elem = document.createElement('div');
    elem.classList.add("root");
    elem.innerHTML = "hello word";
    document.body.appendChild(elem);
}

craete();
change();
if(module.hot) {
    module.hot.accept('./base.js', function() {
        console.log("Accepting the updated library module");
        change();
    })
}else {
    console.log("更新不了");
}
