import React, { useEffect, useState } from 'react';
import { Task } from '../model/Task';
import AddTask from './AddTask';
import ToDoList from './ToDoList';
const ToDoContainer = () =>  {
    
    const [tasks, setTasks] = useState<Task[]>(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    
    const [newTask, setNewTask] = useState<string>('');

    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const changeTaskHandle = (text:string) => {
        setNewTask(text);
    }
        
    const isCompletedToggle = (id:number) => {
        setTasks(
            tasks.map((task:Task) =>
              task.id === id ? { ...task, status: (task.status == "completed" ? "no" : "completed") } : task
            )
          );
    };

    const addTask = () => {
        if (newTask.trim() === '') return;
        const newTaskObj: Task = {
          id: Date.now(),
          text: newTask,
          status: "no",
        };
    
        setTasks([...tasks, newTaskObj]);
        setNewTask('');
    };

    const removeToggle = (id:number) => {
        setTasks(tasks.filter((task:Task) => task.id !== id));
    };

    return (
        <div className='todo-container'>
            <AddTask addToggle={addTask} task={newTask} changeTaskHandle={changeTaskHandle} />
            <ToDoList tasks={tasks} isCompletedToggle={isCompletedToggle} removeToggle={removeToggle} />
        </div>
    );
};
export default ToDoContainer;