import  { Component } from 'react'
import Header from './components/Header'
import './css/index.css'
import Mode from './components/Mode'

export default class App extends Component {

    state = {
        themeMode: "light",
    }

    handleButtonClick = () => {
        let mode = this.state.themeMode === 'light' ? 'dark' : 'light';
        this.setState({
            themeMode: mode
        })
    }

    render() {
        return (
            <>
                <Header />
                <div className="ui container">
                    <Mode themeMode={this.state.themeMode} handleButtonClick={this.handleButtonClick} />
                </div>
            </>
        )
    }
}
