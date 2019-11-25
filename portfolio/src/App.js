import React, { Component } from 'react'

class RegularClass {}
class ComponentClass extends Component {}

const regularClassInstance = new RegularClass()
const componentClassInstance = new ComponentClass()

console.log('regularClassInstance', regularClassInstance)
console.log('componentClassInstance', componentClassInstance)

class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello!</h1>
                <p>Welcome to Chris Mahr's portfolio website.</p>
                <p>He's a software engineer who's always looking forward to working on meaningful projects.</p>
            </div>
        )
    }
}

export default App