import React from 'react';
import Title from './Title';
import { services } from '../data';
import SingleService from './SingleService';

const Services = () => {
  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle='services' />
      <div className='section-center services-center'>
        {services.map((service) => {
          return <SingleService key={service.id} {...service} />;
        })}
      </div>
    </section>
  );
};

export default Services;
