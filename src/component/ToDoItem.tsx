import React from 'react';
import { faNoteSticky, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Task } from '../model/Task';
const ToDoItem = ({ item, isCompletedToggle, removeToggle }: { item: Task, isCompletedToggle: (id: number) => void, removeToggle: (id: number) => void }) => {

    const handleIsCompleted = () => {
        isCompletedToggle(item.id);
    }

    return (
        <li className={`todo-item ${(item.status == "completed") ? 'completed' : ''}`}>
            <input
            type="checkbox"
            checked={item.status === "completed"}
            onChange={handleIsCompleted}
            />
            <span className="todo-text">{item.text}</span>
            <FontAwesomeIcon
            icon={faTrash}
            className="todo-icon"
            onClick={() => removeToggle(item.id)}
            />
        </li>
    );
};

export default ToDoItem;