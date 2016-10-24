/**
 * Created by chenjianhui on 16/10/10.
 */
import React from 'react';
import classnames from 'classnames';
import ReactDom from 'react-dom';
import styles from './style.less';

console.log(styles);
ReactDom.render(
    <div>
        <div className={"list"}>
            hello world
        </div>
    </div>
    ,
    document.getElementById("main-container")
);
