import Task from '../Task'
import data from '../../data.json'
import Search from '../Search'
import {useState} from 'react'



const TaskListSmall = ({activeStatus}) => {
  const [search, setSearch] = useState('')
  const isFiltered = (task) => {
    const active = (activeStatus !== "All" ? task.category === activeStatus : true)
    const searched = (task.category.includes(search) || task.desc.includes(search) || task.title.includes(search))
    if (active) {
      if (search.trim().toLowerCase() !== "") {
        return searched
      }
      return active
    }
    return false
  }
  const tasks = data.tasks.filter(task => {
    return isFiltered(task)
  })

  const taskList = tasks.map((task) => {
    const { category, title, desc, url } = task;
    return <Task category={category} title={title} desc={desc} url={url} />;
  });
    return (
      <>
        <div>
          <Search setSearch={setSearch}/>
        </div>
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
          {taskList}
        </div>
      </>
    );
}
export default TaskListSmall;
