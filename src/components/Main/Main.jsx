import TaskListSmall from 'components/TaskListSmall'
import Tab from 'components/Tab'
const Main = () => {
 return (
  <>
    <div className="container mx-auto py-10 px-6">
      <Tab />
      <TaskListSmall />
    </div>
  </>
)};

export default Main