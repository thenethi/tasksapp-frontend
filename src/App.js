import {Route,Switch} from 'react-router-dom'
import Tasks from './components/Tasks'
import TasksHome from './components/TasksHome'
import './App.css'


const App=()=>(
   <Switch>
      <Route exact path="/" component={TasksHome}/>
      <Route exact path="/tasks" component={Tasks}/>
   </Switch>
)

export default App