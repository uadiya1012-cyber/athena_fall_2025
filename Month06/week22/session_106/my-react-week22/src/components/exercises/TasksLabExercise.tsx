import { useEffect, useState } from 'react';
import SectionCard from '../common/SectionCard';
import { fetchTasks } from '../../api/tasks';
import type { Task } from '../../types/task';

export default function TasksLabExercise() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [status, setStatus] = useState<'all' | Task['status']>('all');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [query, setQuery] = useState<string>('');

    useEffect(() => {
        let canceled = false;

        async function load() {
            try {
                setLoading(true);
                setError(null);

                const paramsArray: string[] = [];

                if (status !== 'all') {
                    paramsArray.push(`status=${status}`);
                }

                if (query.trim()) {
                    paramsArray.push(`search=${query}`);
                }

                const params = paramsArray.join('&');

                const data = await fetchTasks(params);

                if (!canceled) setTasks(data);
            } catch (err) {
                if (!canceled) setError((err as Error).message);
            } finally {
                if (!canceled) setLoading(false);
            }
        }

        load();

        return () => {
            canceled = true;
        };
    }, [status, query]);

    return (
        <SectionCard title="Exercise E: Tasks Lab (useEffect + API)">
            <select value={status} onChange={e => setStatus(e.target.value as 'all' | Task['status'])}>
                <option value="all">All</option>
                <option value="todo">Todo</option>
                <option value="in_progress">In Progress</option>
                <option value="done">Done</option>
            </select>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'crimson' }}>Error: {error}</p>}

            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.title} - {task.status} - p{task.priority}
                    </li>
                ))}
                <input
                    placeholder="Search task..."
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
            </ul>
        </SectionCard>
    );
}