import Image from 'next/image';
import React from 'react';
import Img1 from '../public/img/adoption/img1.png';

const Adoption = () => {
  return <section className='bg-adoption bg-cover bg-center bg-no-repeat min-h-[760px] py-8 flex'>
    <div className='container mx-auto flex flex-col lg:flex-row items-center justify-center gap-x-16'>
      <div className='flex-1 mb-6 lg:mb-0'>
        <Image src={Img1} width={542} height={560} alt='' />
      </div>
      <div className='flex-1 text-center text-cream max-w-md lg:text-left lg:max-w-none'>
        <h2 className='h2 mb-6 text-amber-300'>Makeing pet parenting easy for Everyone</h2>
        <p className='mb-6 text-justify '>Making pet parenting easy for everyone! At Pet-first, we strive to simplify the joys of pet ownership. Whether you're a seasoned pet enthusiast or a first-time pet parent, our comprehensive services and expert guidance ensure a seamless experience. </p>
        <ul className='mb-[38px] flex flex-col gap-y-4 lg:list-disc lg:pl-4'>
          <li>Adoption</li>
          <li>Frozen Raw</li>
          <li>Next Dat Delivery</li>
        </ul>
        <button className='btn btn-primary mx-auto lg:mx-0'>Explore</button>
      </div>
    </div>
  </section>;
};

export default Adoption;
