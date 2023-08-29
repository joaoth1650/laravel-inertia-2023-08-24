import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Agents({ agents }: PageProps<{ agents: any }>) {

    return (
        <>
            <Head title="lista de agentes" />
            <div  className="grid grid-cols-2">
            {agents.map((agent: any, index: any) => {
                return <div key={index}>
                    <div className="bg-[url(${agent.background})]">
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={agent.fullPortraitV2}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        <h1 className="text-center fs-25">{agent.displayName}</h1>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </div>
            })}
        </div>
        </>
    );
}
