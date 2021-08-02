import Task from '../Task'
const Col3 = () => {
    return (
      <>
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
          <div className="rounded border-gray-300  dark:border-gray-700 border border-2">
            <Task/>
          </div>
          <div className="rounded border-gray-300  dark:border-gray-700 border border-2 ">
            <Task/>
          </div>
          <div className="rounded border-gray-300  dark:border-gray-700 border border-2 ">
            <Task/>
          </div>
          <div className="rounded border-gray-300  dark:border-gray-700 border border-2">
            <Task/>
          </div>
          <div className="rounded border-gray-300  dark:border-gray-700 border border-2">
            <Task/>
          </div>
        </div>
      </>
    );
}
export default Col3;