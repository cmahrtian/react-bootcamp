import React, { Component } from 'react'
import Projects from './Projects'
import SocialProfiles from './SocialProfiles'
import profile from './assets/profile.png'

class App extends Component {
    state = {
        displayBio: false
    }

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio })
    }
    
    render() {
        return (
            <div>
                <img src={profile} 
                    alt='profile'
                    className='profile' 
                />
                <h1>Hello!</h1>
                <p>Welcome to Chris Mahr's portfolio website.</p>
                <p>He's a software engineer who's always looking forward to working on meaningful projects.</p>
                { 
                    this.state.displayBio ? (
                        <div>
                            <p>He lives in Brooklyn, NY, and have been coding for the past four years.</p>
                            <p>His favorite programming language is JavaScript. He's been using mostly Vue.js for the past two years, but has been teaching himself React.js more recently.</p>
                            <p>Besides coding, he also loves to cook and play ultimate frisbee.</p>
                            <button onClick={this.toggleDisplayBio}>Show Less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read More</button>
                        </div>
                    ) 
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

export default App