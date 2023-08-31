import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { AgentInterface } from '@/Interfaces/AgentInterface';

export default function Agents({ auth, agents }: PageProps<{ agents: any }>) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Agentes</h2>}
        >
            <div>
                <Slider {...settings}>
                    {agents.map((agent: AgentInterface, index: any) => (
                        <div key={index}>
                            <Link href={route('agente.single', { agentUuid: agent.uuid })} >
                                <div>
                                    <Card style={{ backgroundImage: `url('${agent.background}')`, backgroundBlendMode: 'difference', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} >
                                        <CardActionArea >
                                            <Typography gutterBottom variant="h5" component="div">
                                                <h1 className="text-center fs-25">{agent.displayName}</h1>
                                            </Typography>
                                            <CardMedia component="img" style={{ width: '40%', margin: 'auto' }} image={agent.fullPortraitV2} />
                                            <CardContent>
                                                <Typography variant="body2" color="text.secondary">
                                                    <h2 className='text-center'>{agent.description}</h2>
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </div>
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>
        </AuthenticatedLayout>
    );
}
