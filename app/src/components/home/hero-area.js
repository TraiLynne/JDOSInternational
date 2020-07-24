import React from 'react';

import { UncontrolledCarousel } from 'reactstrap';

import {
    HomeHero1,
    HomeHero2,
    HomeHero3
} from '../../assets';

const items = [
  {
    src: HomeHero1,
    altText: 'Durham County Justice Center',
    caption: 'Learn More',
    header: 'Durham County Justice Center',
    key: '1'
  },
  {
    src: HomeHero2,
    altText: 'Slide 2',
    key: '2'
  },
  {
    src: HomeHero3,
    altText: 'Slide 3',
    key: '3'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;

export const HomeHero = () => {
    return (
        <UncontrolledCarousel items={items} />
    )
}