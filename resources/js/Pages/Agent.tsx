import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Agent({ agent }: PageProps<{ agent: any}>) {
    return (
        <>
            <Head title="Agent" />
                <h1>{agent.displayName}</h1>

        </>
    );
}
