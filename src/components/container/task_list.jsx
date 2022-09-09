import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import '../../styles/task.scss';
import TaskForm from '../pure/forms/taskForm';


const TaskListComponent = () => {

    const defaultTask1 = new Task('Example1', 'Description1', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Ddescription2', false, LEVELS.URGENT);
    const defaultTask3 = new Task('Example3', 'Ddescription3', false, LEVELS.BLOKING);
    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    //control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State ghas been modified');
        setLoading(false);
        return () => {
            console.log('TaskList component is going to unmount...');
        };
    }, [tasks]);


    function completeTask(task) {
        console.log('Complete this Task:', task);
        const index = tasks.indexOf(task);
        const temTask = [...tasks];
        temTask[index].completed = !temTask[index].completed;
        //we update the state of the component and it will update the new list of task and it will update the
        // Iteration of the tasks in order to show the task updated
        setTasks(temTask);
    }

    function deleteTask(task) {
        console.log('Delete this Task:', task);
        const index = tasks.indexOf(task);
        const temTask = [...tasks];
        temTask.splice(index, 1);
        setTasks(temTask);
    }

    function addTask(task) {
        console.log('Add this Task:', task);
        const index = tasks.indexOf(task);
        const temTask = [...tasks];
        temTask.push(task);
        setTasks(temTask);
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    {/* card Header (title) */}
                    <div className='card-header p-3'>
                        <h5>Your Task:</h5>
                    </div>
                    {/* Card body (content) */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Descripcion</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* TODO: Iterar sobre una lista de taeras */}
                                {tasks.map((task, index) => {
                                    return (
                                        <TaskComponent
                                            key={index}
                                            task={task}
                                            complete={completeTask}
                                            remove={deleteTask}
                                        >
                                        </TaskComponent>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <TaskForm add={addTask}></TaskForm>
            {/* TODO: Aplicar in For/Map para renderizar una lista */}
            {/* <TaskComponent task={defaultTask}></TaskComponent> */}
        </div>
    );
};


export default TaskListComponent;
