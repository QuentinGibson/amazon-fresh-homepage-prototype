import Task from '../Task'
import data from '../../data.json'

const tasks = data.tasks
const taskList = tasks.map(task => {
    const {category, title, desc, url} = task
    console.log(task)
    return (
        <Task category={category} title={title} desc={desc} url={url}/>
    )
})

const Col3 = () => {
    return (
      <>
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
          {taskList}
        </div>
      </>
    );
}
export default Col3;