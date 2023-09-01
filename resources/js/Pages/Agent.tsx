import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { AgentInterface } from '@/Interfaces/AgentInterface';

export default function Agent({ agent }: PageProps<{ agent: any }>) {
    return (
        <>
            <Head title="Agent" />
            <h1 className="text-center text-2xl ">{agent.displayName}</h1>
            <div className="grid grid-cols-3 gap-3 mt-40">
                <div className="flex gap-7 justify-center">
                    <div className="">
                        <img className="rounded-full" src={agent.killfeedPortrait} alt="" />
                    </div>
                    <div className=""></div>
                    <div className="">
                        <img className="rounded-full" src={agent.displayIconSmall} alt="" />
                    </div>
                </div>

                <img className="" src={agent.fullPortraitV2} alt={agent.displayName} />
                <div className="grid gap-y-4 grid-cols-1 ">
                    
                {agent.abilities.map((ability: AgentInterface) => (
                    <div key={ability.uuid}>
                        <div className="bg-red-500 rounded-full w-32 ml-28">
                            <div className="">
                                <img className="" src={ability.displayIcon} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </>
    );
}
