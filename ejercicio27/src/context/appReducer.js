
export default function appReducer(state, action){
    // console.log(state, action )

    switch (action.type) {
        case 'ADD_TASK':
            return {                
                tasks: [...state.tasks, action.payload]
           }
        case 'DELETE_TASK':{
            return {
                tasks: state.tasks.filter(task => task.id !==action.payload)
            }
        } 
       case 'UPDATE_TASK': {
        const updateTask = action.payload;
        console.log(action.payload)
        const updateTasks= state.tasks.map(task =>{
            if(task.id === updateTask.id){
                task.title = updateTask.title;
                task.description = updateTask.description; 
            }
            return task;
        })
        
        return {
            tasks:updateTasks
        }
        
       }    
       default:
            return state;   
    }

}