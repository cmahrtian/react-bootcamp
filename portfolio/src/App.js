import React, { Component } from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = { 
            displayBio: false 
        }
    }
    
    render() {
        return (
            <div>
                <h1>Hello!</h1>
                <p>Welcome to Chris Mahr's portfolio website.</p>
                <p>He's a software engineer who's always looking forward to working on meaningful projects.</p>
                { 
                    this.state.displayBio ? (
                        <div>
                            <p>He lives in Brooklyn, NY, and have been coding for the past four years.</p>
                            <p>His favorite programming language is JavaScript. He's been using mostly Vue.js for the past two years, but has been teaching himself React.js more recently.</p>
                            <p>Besides coding, he also loves to cook and play ultimate frisbee.</p>
                        </div>
                    ) : null 
                }
            </div>
        )
    }
}

export default App