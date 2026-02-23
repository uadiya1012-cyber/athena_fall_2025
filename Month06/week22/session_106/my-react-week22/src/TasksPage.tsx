import { useEffect, useState } from "react";
import api from "./api";

type Task = {
    id: number;
    title: string;
    status: string;
    priority: number;
};

export const TasksPage = ({ onLogout }: { onLogout: () => void }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        api.get('tasks/').then(res => setTasks(res.data));
    }, []);

    return (
        <div>
            <h2>Tasks</h2>
            <button onClick={onLogout}>Logout</button>
            {
                tasks && tasks.map(task => {
                    return <div key={task.id}>
                        {task.title} - {task.status} - Priority: {task.priority}
                    </div>
                })
            }
        </div>
    )
}
