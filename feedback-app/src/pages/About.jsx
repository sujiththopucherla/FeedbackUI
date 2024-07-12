import React from 'react'
import Card from '../shared/Card'
import { Link } from 'react-router-dom'
function About() {
  return (
    <Card>
        <div className="about">
            <h1>About This Project</h1>
            <p>this is a react App to leave Feedback to a app or a service</p>
            <p>Version:1.0.0</p>
            <p>
                <Link to="/">Back to Home</Link>
            </p>
        </div>
    </Card>
  )
}

export default About