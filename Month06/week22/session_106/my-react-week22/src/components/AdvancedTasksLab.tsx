import { useEffect, useState } from 'react';
import { createTask, fetchTasksPaginated } from '../api/tasks';
import type { Task } from '../api/tasks';

export default function AdvancedTasksLab() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [page, setPage] = useState<number>(1);
    const [status, setStatus] = useState<'all' | Task['status']>('all');
    const [query, setQuery] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [totalCount, setTotalCount] = useState<number>(0);
    const [nextUrl, setNextUrl] = useState<string | null>(null);
    const [prevUrl, setPrevUrl] = useState<string | null>(null);

    const [newTitle, setNewTitle] = useState('');
    const [newStatus, setNewStatus] = useState<Task['status']>('todo');
    const [newPriority, setNewPriority] = useState(1);
    const [adding, setAdding] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        async function load() {
            try {
                setLoading(true);
                setError(null);

                const params = new URLSearchParams();
                params.set('page', String(page));
                if (status !== 'all') params.set('status', status);
                if (query.trim()) params.set('search', query.trim());

                const data = await fetchTasksPaginated(params.toString());
                setTasks(data.results);
                setTotalCount(data.count);
                setNextUrl(data.next);
                setPrevUrl(data.previous);
            } catch (err) {
                if ((err as Error).name !== 'AbortError') {
                    setError((err as Error).message);
                }
            } finally {
                setLoading(false);
            }
        }

        load();
        return () => controller.abort();
    }, [page, status, query]);

    useEffect(() => {
        document.title = `Tasks (${tasks.length})`;
    }, [tasks.length]);

    const handleAddTask = async (e: React.FormEvent) => {
        e.preventDefault();
        setAdding(true);

        try {
            const task = await createTask({
                title: newTitle,
                status: newStatus,
                priority: newPriority,
            });

            setTotalCount(prev => prev + 1);

            setTasks(prev => [task, ...prev]);

            setNewTitle('');
            setNewStatus('todo');
            setNewPriority(1);
        } catch (err) {
            alert(`Failed to add task: ${(err as Error).message}`);
        } finally {
            setAdding(false);
        }
    }

    return (
        <section>
            <h2>Advanced Tasks Lab</h2>
            <h2>Page: {page}</h2>

            <form onSubmit={handleAddTask}>
                <input
                    placeholder="Title"
                    value={newTitle}
                    onChange={e => setNewTitle(e.target.value)}
                    required
                />
                <select value={newStatus} onChange={e => setNewStatus(e.target.value as Task['status'])}>
                    <option value="todo">Todo</option>
                    <option value="in_progress">In Progress</option>
                    <option value="done">Done</option>
                </select>
                <input type="number" min={1} max={5} value={newPriority} onChange={e => setNewPriority(Number(e.target.value))} />
                <button type="submit" disabled={adding}>{adding ? 'Adding...' : 'Add Task'}</button>

            </form>

            <input
                placeholder="Search"
                value={query}
                onChange={e => setQuery(e.target.value)}
            />

            <select value={status} onChange={e => setStatus(e.target.value as 'all' | Task['status'])}>
                <option value="all">All</option>
                <option value="todo">Todo</option>
                <option value="in_progress">In Progress</option>
                <option value="done">Done</option>
            </select>

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}

            <ul>
                {tasks.map(task => (
                    <li key={task.id}>{task.title} - {task.status}</li>
                ))}
            </ul>

            <p>Total: {totalCount}</p>
            <button disabled={!prevUrl} onClick={() => setPage(prev => prev - 1)}>Previous</button>
            <button disabled={!nextUrl} onClick={() => setPage(prev => prev + 1)}>Next</button>
        </section>
    );
}