import './index.css'

const TaskItem=(props)=>{
    const {taskItem,deleteTask}=props 
    const {taskId,taskName,taskDescription}=taskItem
    const deleteBtn=()=>{
        deleteTask(taskId)
    }
    return(
        <li className='task-item-container'>
            <h1 className='task-item-heading'>{taskName}</h1>
            <p className='task-item-description'>{taskDescription}</p>
            <button type="button" className='delete-button' onClick={deleteBtn}>Delete</button>
        </li>
    )
}

export default TaskItem