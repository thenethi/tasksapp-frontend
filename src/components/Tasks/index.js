import { Component } from "react";
import Header from "../Header";
import TaskItem from '../TaskItem'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Input from '@mui/material/Input';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { v4 as uuidv4 } from 'uuid';
import './index.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

class Tasks extends Component{
    state={tasksList:[],open:false,taskName:'',taskDescription:''}

    componentDidMount(){
        this.getTaskItems()
    }

    getTaskItems=async()=>{
        const apiUrl="https://tasks-backend-production-a54f.up.railway.app/tasks";
        const options={
            method:'GET'
        }
        const response=await fetch(apiUrl,options)
        const data=await response.json()
        const formattedData=data.map((each)=>({
            taskId:each.task_id,
            taskName:each.tasks_name,
            taskDescription:each.tasks_description
        }))
        this.setState({tasksList:formattedData})
    }

    handleOpen=()=>{
        this.setState({open:true})
    }

    handleClose=()=>{
        this.setState({open:false})
    }

    onChangeTitle=event=>{
        this.setState({taskName:event.target.value})
    }

    onChangeDescription=event=>{
        this.setState({taskDescription:event.target.value})
    }

    addTasksToList=async()=>{
        const {taskName,taskDescription}=this.state
        const taskId=uuidv4()
        const taskDetails={taskId,taskName,taskDescription}
        this.setState(prev=>({
            tasksList:[...prev.tasksList,taskDetails],taskName:'',taskDescription:''
        }))
    }

    onDeleteTask=(id)=>{
        const {tasksList}=this.state 
        const filteredList=tasksList.filter((each)=>each.taskId!==id)
        this.setState({tasksList:filteredList})
    }

    render(){
        const {tasksList,open,taskName,taskDescription}=this.state 

        return(
            <>
                <Header/>
                <div className="tasks-list-container">
                    <h1>Tasks List</h1>
                    <ul className="tasks-container">
                        {
                            tasksList.map((each)=><TaskItem key={each.taskId} taskItem={each} deleteTask={this.onDeleteTask}/>)
                        }
                    </ul>
                    <div>
                        <Button onClick={this.handleOpen} className='add-task-button'>+ Add a Task</Button>
                        <Modal
                            open={open}
                            onClose={this.handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style} className="modal-items">
                                <label htmlFor='title-input'>Enter Title</label>
                                <Input id="title-input" onChange={this.onChangeTitle} value={taskName}/>
                                <label htmlFor='description-input'>Enter Description</label>
                                <TextareaAutosize aria-label="minimum height" minRows={3} placeholder="Enter description of 250 words" id="description-input" onChange={this.onChangeDescription} value={taskDescription}/>
                                <Button className='add-task-button' onClick={this.addTasksToList}>Save</Button>
                            </Box>
                        </Modal>
                    </div>
                </div>
            </>
        )
    }
}

export default Tasks;