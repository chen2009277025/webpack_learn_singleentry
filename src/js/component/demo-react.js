/**
 * Created by chenjianhui on 17/1/9.
 */
import React,{Component} from 'react';
import { DatePicker, Button} from 'antd';

class Demo extends Component{
    handleChange(value) {
        this.refs.datapickerShow.innerHTML = value
    }
    render(){
        return <div>
            <p>hello this is an React component</p>
            <form className="form">
                <DatePicker onChange={value => this.handleChange(value)} />
                <p ref="datapickerShow"> </p>
                <Button>more</Button>
            </form>
        </div>
    }
}

export default Demo;