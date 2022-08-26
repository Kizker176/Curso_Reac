import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import '../../styles/task.scss';


const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);
    //Estado del componente
    /* const [tasks, setTasks] = useState([defaultTask]);
    const [loading, setLoading] = useState(true); */

    //control del ciclo de vida del componente
    /* useEffect(() => {
        console('Task State ghas been modified');
        setLoading(false);
        return () => {
            console('TaskList component is going to unmount...');
        };
    }, [tasks]); */


    /* const changeCompleted = (id) => {
        console.log('TODO: Cambia estado de una tarea')
    } */

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
                                <TaskComponent task={defaultTask}></TaskComponent>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* TODO: Aplicar in For/Map para renderizar una lista */}
            {/* <TaskComponent task={defaultTask}></TaskComponent> */}
        </div>
    );
};


export default TaskListComponent;
