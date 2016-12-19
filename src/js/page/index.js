/**
 * Created by chenjianhui on 16/10/10.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import style from "./style.css"
import ScrollLoading from "../component/scrollLoading"

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [{"id": 0, "name": "people0"}, {"id": 1, "name": "people1"}, {"id": 2, "name": "people2"}, {
                "id": 3,
                "name": "people3"
            }, {"id": 4, "name": "people4"}, {"id": 5, "name": "people5"}, {"id": 6, "name": "people6"}, {
                "id": 7,
                "name": "people7"
            }, {"id": 8, "name": "people8"}, {"id": 9, "name": "people9"}, {"id": 20, "name": "people20"}, {
                "id": 21,
                "name": "people21"
            }, {"id": 22, "name": "people22"}, {"id": 23, "name": "people23"}]
        }
    }

    statusChangeListener(cb) {
        let _self = this;
        setTimeout(function () {
            _self.setState(
                {
                    data: [{"id": 0, "name": "people0"}, {"id": 1, "name": "people1"}, {"id": 2, "name": "people2"}, {
                        "id": 3,
                        "name": "people3"
                    }, {"id": 4, "name": "people4"}, {"id": 5, "name": "people5"}, {"id": 6, "name": "people6"}, {
                        "id": 7,
                        "name": "people7"
                    }, {"id": 8, "name": "people8"}, {"id": 9, "name": "people9"}, {"id": 10, "name": "people10"}, {
                        "id": 11,
                        "name": "people11"
                    }, {"id": 12, "name": "people12"}, {"id": 13, "name": "people13"}, {
                        "id": 14,
                        "name": "people14"
                    }, {"id": 15, "name": "people15"}, {"id": 16, "name": "people16"}, {
                        "id": 17,
                        "name": "people17"
                    }, {"id": 18, "name": "people18"}, {"id": 19, "name": "people19"}]
                }
            )
            cb && typeof cb == 'function' && cb(2)
        }, 1000)
    }

    render() {
        return (
            <ScrollLoading statusChangeListener={this.statusChangeListener.bind(this)}>
                <div>
                    <ul>
                        {this.state.data.map(function (item) {
                            return <li key={item.id}>{item.name}</li>
                        })}
                    </ul>
                </div>
            </ScrollLoading>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));