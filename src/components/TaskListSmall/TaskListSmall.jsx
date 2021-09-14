import Search from 'components/Search'
import useSearch from 'hook/useSearch'

const TaskListSmall = () => {
  const {taskList} = useSearch()
  return (
    <>
      <div>
        <Search />
      </div>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
        {taskList}
      </div>
    </>
  );
}
export default TaskListSmall;
