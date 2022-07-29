import React, { useEffect, useState } from 'react'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';
import FormTaskFormik from './FormTaskFormik';

export default function TaskList15() {

    const defaultTask1 = new Task('Example1', 'Description1', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Description 2', false, LEVELS.URGENT);
    const defaultTask3 = new Task('Example3', 'Description 3', false, LEVELS.BLOCKING);


    // Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);


    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified');
        // 1- usamos setTimeout para retarda la carga de los componententes
        setTimeout(()=> 
            setLoading(false)
            ,2000
        )
       
        return () => {
            console.log('TaskList component is going to unmount...')
        }
    }, [tasks])


    function completeTask(task){
        console.log('Complete this task:' , task);
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask[index].completed = !tempTask[index].completed;
        // we update the state of the componente and it will update 
        // the iteration of the task in orden to show the task updated
        setTasks(tempTask);
    }
    function deleteTask(task){
        console.log('Delete this task:' , task);
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.splice(index, 1);
        setTasks(tempTask)
    }
    function addTask(task){
        console.log('Delete this task:' , task);
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.push(task);
        setTasks(tempTask);
    }
    const Table = ()=>{
        return(
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Title</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Priority</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { tasks.map((task, index) => {
                        return (
                                <TaskComponent 
                                    key={index} 
                                    task={task}
                                    complete={completeTask}
                                    remove = {deleteTask}
                                >
                                </TaskComponent>
                            )
                        }
                    )}
                </tbody>
            </table>
        )
    }
    let tasksTable = <Table></Table>

    if(tasks.length > 0){
        tasksTable = <Table></Table>
      }else{
        tasksTable = (
        <div>
          <h3> There are no tasks to show</h3>
          <h4> Please create one </h4>
        </div>
        
        )
      }

    const loadingStyle = {
        color: 'grey',
        fontSize: '30px',
        fontWeight: 'bold'
    }
    return (
        <div>
            <div className='col-12'>
                <div className='card'>

                    {/* Card Header (title) */}

                    <div className='card-header p-3'>
                        <h5>
                            Your Tasks:
                        </h5>
                    </div>

                    {/* Card Body (content) */}

                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                    	 {loading ? (<p style={loadingStyle}>loading task....</p>):tasksTable}
                    </div>
                   
                   
                </div>
                <FormTaskFormik
                    add={addTask}
                    length={tasks.length}
                ></FormTaskFormik>
                {/* <TaskForm
                    add={addTask}
                    length={tasks.length}
                ></TaskForm> */}
            </div>
           
            {/* <TaskComponent task={defaultTask}></TaskComponent> */}
        </div>
    );
}
