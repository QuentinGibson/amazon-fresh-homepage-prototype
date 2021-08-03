import Task from '../Task'
import data from '../../data.json'


const Col3 = ({activeStatus}) => {
  const tasks = data.tasks.filter(task => activeStatus !== "All" ? task.category === activeStatus : true)
  const taskList = tasks.map((task) => {
    const { category, title, desc, url } = task;
    return <Task category={category} title={title} desc={desc} url={url} />;
  });
    return (
      <>
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
          {taskList}
        </div>
      </>
    );
}
export default Col3;