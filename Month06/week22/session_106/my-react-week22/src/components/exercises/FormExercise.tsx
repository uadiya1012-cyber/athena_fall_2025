import { useState } from 'react';
import type { FormEvent } from 'react';
import SectionCard from '../common/SectionCard';

interface FormState {
    name: string;
    email: string;
}

export default function FormExercise() {
    const [form, setForm] = useState<FormState>({ name: '', email: '' });
    const [error, setError] = useState<string>('');

    function onSubmit(e: FormEvent) {
        e.preventDefault();

        if (!form.name.trim() || !form.email.trim()) {
            setError('Мэдээллээ бүрэн бөглөнө үү.');
            return;
        }

        setError('');
        setForm({
            name: '',
            email: '',
        });
    }

    return (
        <SectionCard title="Exercise B: Controlled Form">
            <form onSubmit={onSubmit}>
                <input
                    placeholder="Name"
                    value={form.name}
                    onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
                />
                <input
                    placeholder="Email"
                    value={form.email}
                    onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))}
                />
                <button type="submit">Submit</button>
            </form>
            {error && <p style={{ color: 'crimson' }}>{error}</p>}
        </SectionCard>
    );
}