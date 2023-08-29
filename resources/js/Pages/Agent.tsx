import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Agent({ agent }: PageProps<{ agent: any}>) {
    return (
        <>
            <Head title="Agent" />
                <h1 className="text-center fs-25">{agent.displayName}</h1>
                <img src={agent.fullPortraitV2} alt="" />

        </>
    );
}
