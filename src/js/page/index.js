/**
 * Created by chenjianhui on 16/10/10.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import style from "./style.css"

class App extends  React.Component {

    handleStart(){
        console.log("dragstart");
    }

    handleDrag(){
        console.log("draging");
    }

    handleStop(){
        console.log("stop");
    }

    render() {
        return (
            <div>
                <Draggable
                    handle=".handle"
                    defaultPosition={{x: 0, y: 0}}
                    position={null}
                    grid={[25, 25]}
                    zIndex={100}
                    onStart={this.handleStart}
                    onDrag={this.handleDrag}
                    onStop={this.handleStop}>
                    <div>
                        <div className="handle">Drag from here</div>
                        <div>This readme is really dragging on...</div>
                    </div>
                </Draggable>
                <Draggable
                    handle=".handle"
                    defaultPosition={{x: 0, y: 0}}
                    position={null}
                    grid={[25, 25]}
                    zIndex={100}
                    onStart={this.handleStart}
                    onDrag={this.handleDrag}
                    onStop={this.handleStop}>
                    <div>
                        <div className="handle">Drag from here</div>
                        <div>This readme is really dragging on...</div>
                    </div>
                </Draggable>
                <Draggable
                    handle=".handle"
                    defaultPosition={{x: 0, y: 0}}
                    position={null}
                    grid={[25, 25]}
                    zIndex={100}
                    onStart={this.handleStart}
                    onDrag={this.handleDrag}
                    onStop={this.handleStop}>
                    <div>
                        <div className="handle">Drag from here</div>
                        <div>This readme is really dragging on...</div>
                    </div>
                </Draggable>
                <Draggable
                    handle=".handle"
                    defaultPosition={{x: 0, y: 0}}
                    position={null}
                    grid={[25, 25]}
                    zIndex={100}
                    onStart={this.handleStart}
                    onDrag={this.handleDrag}
                    onStop={this.handleStop}>
                    <div>
                        <div className="handle">Drag from here</div>
                        <div>This readme is really dragging on...</div>
                    </div>
                </Draggable>
            </div>
        );
    }
}

App.popTypes = {
    hello:React.PropTypes.any.isRequired
}

App.eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', event);
    console.log('Data: ', data);
};

ReactDOM.render(<App/>, document.getElementById("app"));