import React, {Component} from 'react';
import './style.css'

class ScrollLoading extends Component {

    constructor() {
        super();
        this.state = {
            slidStatus: 9, // 0:
            statusStyle: {
                display: 'none',
                height: 0
            }
        }
        this.isLoading = false;
        this._end = 0;
        this._start = 0;
        this.marginBot = 0;
        this.silderStatusDefaultHeight = 30;
    }

    renderStatus() {
        switch (this.state.slidStatus) {
            case 0:
                return <p>放手加载</p>;
            case 1:
                return <p>正在加载…</p>;
            case 2:
            case 9:
                return '';
        }
    }

    _touchStart(event) {
        // var touch = event.touches[0];
        // 这种获取也可以，但已不推荐使用
        if (this.isLoading) {
            return false;
        }
        var touch = event.targetTouches[0];
        this._start = touch.pageY;
        return false;
    }

    checkIsBottom() {
        if (document.documentElement.scrollTop) {
            this.marginBot = document.documentElement.scrollHeight -
                (document.documentElement.scrollTop + document.body.scrollTop) -
                document.documentElement.clientHeight;
        } else {
            this.marginBot = document.body.scrollHeight - document.body.scrollTop - document.body.clientHeight;
        }
        console.log(this.marginBot);
        if (this.marginBot < 20) {
            return true;
        }
        return false;
    }

    _touchMove(event) {
        if (this.isLoading) {
            return false;
        }

        var touch = event.targetTouches[0];
        this._end = (this._start - touch.pageY);
        // 上滑超过一定的距离才执行操作
        if (this.checkIsBottom() && this._end > 20) {
            this.setState({
                slidStatus: 0,
                statusStyle: {
                    display: 'block',
                    height: (parseInt(this.silderStatusDefaultHeight) + this._end) + 'px',
                    lineHeight: (parseInt(this.silderStatusDefaultHeight) + this._end) + 'px'
                }
            });
        }
        return false;
    }

    loadedCallback(status) {
        this.setState({
            slidStatus: status,
            statusStyle: {
                display: 'none',
                height: parseInt(this.silderStatusDefaultHeight) + 'px',
                lineHeight: this.silderStatusDefaultHeight + 'px'
            }
        })
        this.isLoading = false;
    }

    _touchEnd(event) {
        if (this.checkIsBottom() && this._end > 20) {
            console.log('左滑或上滑' + this._end);
            this.setState({
                slidStatus: 1,
                statusStyle: {
                    display: 'block',
                    height: this.silderStatusDefaultHeight + 'px',
                    lineHeight: this.silderStatusDefaultHeight + 'px'
                }
            });
            this.isLoading = true;
            this.props.statusChangeListener(this.loadedCallback.bind(this));
            // 去加载
            console.log('去加载');
        } else {
            console.log('右滑或下滑' + this._end);
        }
        return false;
    }


    render() {
        let children = this.props.children;
        return (
            <div id="scroll-container"
                 onTouchStart={this._touchStart.bind(this)}
                 onTouchMove={this._touchMove.bind(this)}
                 onTouchEnd={this._touchEnd.bind(this)}
            >
                <div>
                    {children}
                </div>
                <div ref="slidStatus" className="slidStatus" style={this.state.statusStyle}>
                    {this.renderStatus()}
                </div>
            </div>
        )
    }
}


export default ScrollLoading;