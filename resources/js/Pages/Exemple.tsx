import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Dashboard({ auth, lista }: PageProps<{ lista: Array<string>}>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Exemple page</h2>}
        >
            <Head title="Exemple page" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:text-gray-200  text-center dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        {lista.map((item, index) => {
                            return <p key={index}>{item}</p>;
                        })}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
