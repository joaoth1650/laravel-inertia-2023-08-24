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
import { MapInfoInterface } from '@/Interfaces/MapInterface';

export default function maps({ auth, maps }: PageProps<{ maps: any }>) {
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
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Mapas</h2>}
    >
        <div>
        <Slider {...settings}>
          {maps.map((map: MapInfoInterface, index: any) => (
            <div key={index}>
                <Link href={route('agente.single', { mapUuid: map.uuid })} >
              <div>
                <Card > 
                  <CardActionArea >
                    <CardMedia component="img" image={map.fullPortraitV2} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <h1 className="text-center fs-25">{map.displayName}</h1>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <h2 className='text-center'>{map.description}</h2>
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
