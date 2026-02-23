import type { ReactNode } from 'react';

interface SectionCardProps {
    title: string;
    children: ReactNode;
}

export default function SectionCard({ title, children }: SectionCardProps) {
    return (
        <section style={{ border: '1px solid #ddd', padding: 16, marginBottom: 16 }}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}