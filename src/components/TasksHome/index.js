import { Link } from "react-router-dom";
import Header from "../Header";

import './index.css'

const TasksHome=()=>(
    <>
        <Header/>
        <div className="hero-section">
            <div className="content-container">
                <h1 className="hero-heading">Welcome, to the Tasks Application</h1>
                <p className="hero-para">A platform where we can <br/>Create, Update, and Delete our Tasks.</p>
                <Link to="/tasks" className="link-text">
                <button type="button" className="hero-button">Get Started</button>
                </Link>
            </div>
            <img src="https://img.freepik.com/free-vector/businessman-holding-pencil-big-complete-checklist-with-tick-marks_1150-35019.jpg?w=826&t=st=1706361406~exp=1706362006~hmac=c34cce4e43ae25244e4d7b8e7371019de546ac3b8815efa308de6495b280bfbe" alt="hero-logo" className="hero-section-image"/>
        </div>
    </>
)

export default TasksHome