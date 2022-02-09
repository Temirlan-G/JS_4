import React from 'react';
import ReactDOM from 'react-dom';


class Counter extends React.Component {
    state = {
        count: 0
    }

    onIncrease = () => {
        this.setState((oldState) => {
            return {
                count: oldState.count + 1
            }
        })
    }

    UNSAFE_componentWillMount = () => {
        console.log('WILL MOUNT')
    }

    componentDidMount = () => {
        console.log('DID MOUNT')

        this.myInterval = setInterval(() => {
            // console.log('Hello')
        }, 1000)
    }

    shouldComponentUpdate = (newProps, newState) => {
        if (newState.count === this.state.count) {
            return false
        } else {
            return true
        }
    }

    UNSAFE_componentWillUpdate = () => {
        console.log('WILL UPDATE')
    }

    componentDidUpdate = () => {
        console.log('DID UPDATE')
    }

    componentWillUnmount = () => {
        console.log('WILL UNMOUNT')
        clearInterval(this.myInterval)
    }

    render() {
        console.log('RENDER')

        return (
        <div>
            <p>{this.state.count}</p>
            <input onClick={this.onIncrease} type='button' value='Increase'/>
        </div>
        )
    }
    // componentDidMount = () => {
    //     console.log('DID MOUNT')
    // }
}


class App extends React.Component {
    state = {
        showCounter: true
    }

    onToggleCounter = () => {
        this.setState((oldState) => {
            return {
                showCounter: !oldState.showCounter
            }
        })
    }

    render() {
        const content = this.state.showCounter ? <Counter /> : null;
        return (
            <>
                {content}
                <input onClick={this.onToggleCounter} type='button' value='Toggle counter'/>
            </>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

