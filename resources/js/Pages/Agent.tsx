import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { AgentInterface } from '@/Interfaces/AgentInterface';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Agent({auth, agent }: PageProps<{ agent: any }>) {
    return (
        <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Agentes</h2>}>
            <Head title="Agent" />
            <h1 className="text-center text-2xl text-white">{agent.displayName}</h1>
            <div className="grid grid-cols-2 gap-3 ">
                <img className="" src={agent.fullPortraitV2} alt={agent.displayName} />
                <div className="grid gap-y-4 grid-cols-1 ">
                    {agent.abilities.map((ability: AgentInterface) => (
                        <div key={ability.uuid}>
                            <div className="bg-red-500 rounded-full  w-fit ml-28">
                                <img className="w-20 " src={ability.displayIcon} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </AuthenticatedLayout>
    );
}
