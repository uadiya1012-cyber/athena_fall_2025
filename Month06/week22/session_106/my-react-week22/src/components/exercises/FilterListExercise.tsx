import { useState } from 'react';
import SectionCard from '../common/SectionCard';

const students = ['Ariun', 'Bilguun', 'Namuun', 'Temuulen', 'Saruul'];

export default function FilterListExercise() {
    const [query, setQuery] = useState<string>('');

    const filtered = students.filter(name =>
        name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <SectionCard title="Exercise C: Filterable List">
            <input
                placeholder="Search student"
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <ul>
                {filtered.map(name => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
        </SectionCard>
    );
}