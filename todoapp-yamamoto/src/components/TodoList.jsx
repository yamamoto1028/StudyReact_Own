import React from 'react'

export const TodoList = ({taskList, setTaskList}) => {

  const handleDelete = (id) => {
    //タスクを削除する。
    setTaskList(taskList.filter((task) => task.id !== id));//filter()…条件式がTRUEだと残す。FALSEだと除外。
  }

  const handleCompleted = (id) => {
    //取り消し戦を追加する
    setTaskList(taskList.map((task) => {
      if(id === task.id) {
        return {
          ...task,
            completed: !task.completed
        }
      }
      return task;
    }))
  };

  return (
    <div className="todoList">
      <div className="todos">
        {taskList.map(( task, index )=> (
          <div className={`todo ${task.completed ? "completed" : ""}`} key={ index }>
          <div className="todoText">
            <span>{task.text}</span>
          </div>
          <div className="icons">
            <button>
              <i className="fa-solid fa-check" onClick={() => handleCompleted(task.id)}></i>
              </button>
            <button>
            <i className="fa-solid fa-trash" onClick={() => handleDelete(task.id)}></i>
            </button>
          </div>
        </div>
        ))}
        
      </div>
      
    </div>
  )
}
