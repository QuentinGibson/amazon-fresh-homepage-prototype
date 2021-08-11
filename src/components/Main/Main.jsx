import TaskListSmall from '../TaskListSmall'
import Tab from '../Tab'
import {useState} from 'react'
const Main = () => {

    const [activeStatus, setActiveStatus] = useState("All");
 return (
  <>
    <div className="container mx-auto py-10 px-6">
      <Tab activeStatus={activeStatus} setActiveStatus={setActiveStatus}/>
      <TaskListSmall activeStatus={activeStatus}/>
    </div>
  </>
)};

export default Main