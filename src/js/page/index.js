/**
 * Created by chenjianhui on 16/10/10.
 */
import React from 'react';
import ReactDom from 'react-dom';
import DemoReact from '../component/demo-react'
// import Vue from 'vue';
// import DemoVue from '../component/demo-vue.vue'
//
// new Vue({
//     el: '#app_1',
//     template: '<DemoVue />',
//     components: { 'DemoVue':DemoVue }
// });

ReactDom.render(<div>
    <DemoReact/>
</div>,document.getElementById('app'))
