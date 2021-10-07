import React, { Component } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import "./Home.css"

export default class Home extends Component {
    static propTypes = {
    }

    render() {
        return (
            <div class = "home-background">                
                <Header></Header>
                <Footer></Footer>
            </div>
        )
    }
}
