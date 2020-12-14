import React from 'react'
import Task from './Task';

export interface taskObj {
    title: string
    done: boolean

}
export interface taskBoxProps {
    tasks: taskObj[]
}

const TaskContainer: React.FC<taskBoxProps> = ({ tasks }) => {

    return (
        <div>
            <div>
                {tasks.map((task) => {
                    return (
                        <div>
                            <Task title={task.title} done={task.done} />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default TaskContainer
