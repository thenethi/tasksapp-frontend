import {Link,withRouter} from 'react-router-dom'
import './index.css'

const Header=()=>(
    <div className="header-container">
        <Link to="/" className="link-text">
        <div className="header-logo-container">
            <img src="https://play-lh.googleusercontent.com/pjUulZ-Vdo7qPKxk3IRhnk8SORPlgSydSyYEjm7fGcoXO8wDyYisWXwQqEjMryZ_sqK2" alt="header-logo" className="header-logo-image"/>
            <h1 className="header-title">Task Application</h1>
        </div>
        </Link>
        <ul type="none" className="header-titles">
            <Link to="/" className="link-text">
            <li className="header-nav-titles">Home</li>
            </Link>
            <Link to="/tasks" className="link-text">
            <li className="header-nav-titles">Tasks</li>
            </Link>
        </ul>
    </div>
)

export default withRouter(Header)