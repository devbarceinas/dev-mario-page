import { TaskRow } from "./TaskRow";

const TaskTable = ({ title, tasks, handleToggleTask, showCompleted = false}) => {

  const handleTaskRow = (isDone) => {
    return (
      tasks
        .filter(task => task.done === isDone)
        .map((task) => (
          <TaskRow key={task.name} task={task} handleToggleTask={handleToggleTask} />
        ))
    );
  }

  return (
    <section>
      {!showCompleted &&  <h3>{title}</h3>}
      <ul className="list-group list-group-numered mt-4">
        {handleTaskRow(showCompleted)}
      </ul>
    </section>
  );
};

export { TaskTable };
