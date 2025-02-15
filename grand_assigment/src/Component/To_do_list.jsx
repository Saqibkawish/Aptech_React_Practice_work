import React, { useState } from 'react';
import './ToDoList.css'; // Importing custom CSS for styling

export default function To_do_list() {
    let [input, setInput] = useState("");
    let [task, setTask] = useState([]);

    function to_do_list() {
        if (input.trim() !== "") {
            if (task.includes(input.trim())) {
                alert("Task already exists");
                setInput("");
            } else {
                setTask([...task, input]);
                setInput("");
            }
        } else {
            alert("Please enter a valid task");
        }
    }

    function deleteTask(index) {
        if (window.confirm("Are You Sure You Want to delete This task....?")) {
            setTask(task.filter((e, i) => i !== index));
        }
    }

    return (
        <div className='container'>
            <div className='todo-card'>
                <h1 className='todo-heading'>To Do List</h1>
                <div className='input-group'>
                    <input
                        className='todo-input'
                        type='text'
                        placeholder='Add a task'
                        value={input}
                        onChange={(i) => setInput(i.target.value)}
                    />
                    <button className='todo-btn' onClick={to_do_list}>Add Task</button>
                </div>

                {/* Task List */}
                <div className='task-list'>
                    {task.length === 0 ? (
                        <p className="empty-message">No tasks added yet.</p>
                    ) : (
                        task.map((e, i) => (
                            <div key={i} className="task-item">
                                <span>{e}</span>
                                <button className='delete-btn' onClick={() => deleteTask(i)}>
                                    <i className="bi bi-trash"></i> {/* Bootstrap Icon for trash */}
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}
