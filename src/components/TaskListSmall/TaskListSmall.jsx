import Search from 'components/Search'
import useSearch from 'hook/useSearch'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Task from 'components/Task'
import './style.css'

const TaskListSmall = () => {
  let {activeTaskList} = useSearch()
  return (
    <>
      <div>
        <Search />
      </div>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
        <TransitionGroup component={null}>
          {activeTaskList.map(
            ({id, category, title, desc, url}) => {
              return(
              <CSSTransition
                timeout={500}
                classNames="fade"
                key={id}
                >
                  <Task category={category} title={title} desc={desc} url={url} id={id} />
              </CSSTransition>
              )}
          )}
        </TransitionGroup>
      </div>
    </>
  );
}
export default TaskListSmall;
