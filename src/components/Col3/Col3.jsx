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
        <div>
          <div className="relative">
            <div className="text-indigo-50 absolute ml-3 inset-0 m-auto lg:w-4 lg:h-4 md:w-4 md:h-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx={10} cy={10} r={7} />
                <line x1={21} y1={21} x2={15} y2={15} />
              </svg>
            </div>
            <input className="hidden bg-indigo-50 bg-opacity-10 md:block focus:outline-none focus:border-indigo-700 lg:w-96 w-72 rounded text-sm text-indigo-50 pl-8 py-2 placeholder-indigo-50 bg-gray-700" type="text" placeholder="Search here" />
          </div>
        </div>
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
          {taskList}
        </div>
      </>
    );
}
export default Col3;
