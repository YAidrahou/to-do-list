import React from 'react';
import ToDoItem from './ToDoItem';
import { Task } from '../model/Task';

const ToDoList = ({
    tasks,
    isCompletedToggle,
    removeToggle
}: {
    tasks: Task[],
    isCompletedToggle: (id: number) => void,
    removeToggle: (id: number) => void
}) => {
    return (
        <div>
            <h1 className="todo-title">Todo List</h1>
            <div className="todo-list">
                {tasks.length === 0 ? (
                    <p className="text-gray-500 text-center">No tasks yet.</p>
                ) : (
                    <ul className='list-overflow'>
                        {tasks.map(item => (
                            <ToDoItem 
                                key={item.id}  
                                item={item}  
                                removeToggle={removeToggle} 
                                isCompletedToggle={isCompletedToggle} 
                            />
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ToDoList;
