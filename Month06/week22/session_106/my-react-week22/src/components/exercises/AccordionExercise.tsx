import { useState } from 'react';
import SectionCard from '../common/SectionCard';

const faqs = [
    { id: 1, q: 'What is state?', a: 'Component local memory.' },
    { id: 2, q: 'What is effect?', a: 'Sync with external systems.' },
    { id: 3, q: 'Why cleanup?', a: 'Prevent memory leaks.' },
];

export default function AccordionExercise() {
    const [openId, setOpenId] = useState<number | null>(null);

    return (
        <SectionCard title="Exercise D: Accordion">
            {faqs.map(item => (
                <article key={item.id}>
                    <button onClick={() => setOpenId(prev => (prev === item.id ? null : item.id))}>
                        {item.q}
                    </button>
                    {openId === item.id && (
                        <p
                            style={{
                                transition: 'all 0.3s ease',
                                opacity: openId === item.id ? 1 : 0,
                                transform: openId === item.id ? 'translateY(0)' : 'translateY(-10px)',
                            }}
                        >
                            {item.a}
                        </p>
                    )}
                </article>
            ))}


        </SectionCard>
    );

}