import { Link } from 'react-router-dom'

const About = () => {
    console.log('in about');
    return (
        <div>
            <h4>Version 1.0</h4>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default About
