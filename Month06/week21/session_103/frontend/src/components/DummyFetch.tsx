import { useEffect, useState } from 'react'

type Post = {
    id: number,
    title: string,
    body: string
}

export const DummyFetch = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/posts')

                if (!res.ok) {
                    throw new Error('Failed to fetch!');
                }

                const data = await res.json();
                setPosts(data.slice(0, 5));
            }
            catch (error) {
                setError((error as Error).message);
            }
            finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error.length > 0) return <p>{error}</p>;


    return (
        <ul>
            {
                posts.map(p => (
                    <li key={p.id}>
                        <h3>{p.title}</h3>
                        <p>{p.body.slice(0, 100)}...</p>
                    </li>
                ))
            }
        </ul>
    )
}
