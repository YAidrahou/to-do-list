import React from "react";

const AddTask = ({ addToggle, task, changeTaskHandle }: { addToggle: () => void, task: string, changeTaskHandle: (text: string) => void }) => {

    return (
        <div className="add-task">
            <input
                type="text"
                value={task}
                onChange={(e) => changeTaskHandle(e.target.value)}
                placeholder="Enter a task..."
            />
            <button onClick={addToggle}>Add</button>
        </div>
    );
};

export default AddTask;