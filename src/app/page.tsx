'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import art5 from '../../public/Images/art5.jpg';
import art1 from '../../public/Images/art1.jpg';
import art2 from '../../public/Images/art2.jpg';
import art3 from '../../public/Images/art3.jpg';
import art4 from '../../public/Images/art4.jpg';
import art6 from '../../public/Images/art6.jpg';
import art7 from '../../public/Images/art7.jpg';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function Home() {
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', function () {
      gsap.registerPlugin(ScrollTrigger);

      const contentHolderHeight =
        (document.querySelector('.content-holder') as HTMLElement)
          ?.offsetHeight || 0;

      const imgHolderHeight = window.innerHeight;
      const additonalScrollHeight = window.innerHeight;

      const totalBodyHeight =
        contentHolderHeight * imgHolderHeight * additonalScrollHeight;
      document.body.style.height = `${totalBodyHeight}px`;

      ScrollTrigger.create({
        trigger: '.website-content',
        start: '-0.1% top',
        end: 'bottom bottom',
        onEnter: () => {
          gsap.set('.website-content', {
            position: 'absolute',
            top: '195px',
          });
        },
        onLeave: () => {
          gsap.set('.website-content', {
            position: 'fixed',
            top: '0',
          });
        },
      });
      gsap.to('.header .letters:first-child', {
        x: () => -innerWidth * 3,
        scale: 10,
        ease: 'power2.inOut',
        scrollTrigger: {
          start: 'top top',
          end: '+= 200%',
          scrub: 1,
        },
      });

      gsap.to('.header .letters:last-child', {
        x: () => innerWidth * 3,
        scale: 10,
        ease: 'power2.inOut',
        scrollTrigger: {
          start: 'top top',
          end: '+= 200%',
          scrub: 1,
        },
      });
    });
  }, []);
  return (
    <div>
      <div className='logo fixed top-0 right-0 w-[1.5rem] h-[1.5rem] bg-red-200 m-[2em] rounded-full z-[1000]'></div>
      <div className='header transform -translate-y-[50%] -translate-x-[50%] customFont fixed top-[50%] left-[50%] z-[100] flex w-full'>
        <div className='letters flex-1 flex uppercase '>
          <div>a</div>
          <div>r</div>
          <div>t</div>
          <div>w</div>
        </div>
        <div className='letters flex-1 flex uppercase'>
          <div>o</div>
          <div>r</div>
          <div>k</div>
          <div>s</div>
        </div>
      </div>

      <div className='website-content fixed top-0 w-full min-h-[100vh]'>
        <div className='img-holder transform rotate-[30deg] relative top-0 w-[100%] h-[100vh] bg-white '>
          <Image
            src={art1}
            alt='Website image'
            priority
            // className='object-contain'
          />
        </div>
        <div className='content-holder relative top-[-5px] w-full bg-[#000] text-white p-[1em]'>
          <div className='row mx-[2em] my-[1em] '>
            <h1 className='text-[5rem] font-normal uppercase tracking-[-0.02em]'>
              History
            </h1>
          </div>

          <div className='row mx-[2em] my-[1em]'>
            <div className='img w-[200px] h-[275px]'>
              <Image src={art1} alt='History1' priority />
            </div>
          </div>

          <div className='row mx-[2em] my-[1em]'>
            <div className='img w-[200px] h-[275px]'>
              <Image src={art2} alt='History2' priority />
            </div>
          </div>
          <div className='row mx-[2em] my-[1em]'>
            <div className='img w-[200px] h-[275px]'>
              <Image src={art3} alt='History3' priority />
            </div>
          </div>
          <div className='row mx-[2em] my-[1em]'>
            <div className='img w-[200px] h-[275px]'>
              <Image src={art4} alt='History4' priority />
            </div>
          </div>
          <div className='row mx-[2em] my-[1em]'>
            <div className='img w-[200px] h-[275px]'>
              <Image src={art6} alt='History5' priority />
            </div>
          </div>
          <div className='row mx-[2em] my-[1em]'>
            <div className='img w-[200px] h-[275px]'>
              <Image src={art7} alt='History6' priority />
            </div>
          </div>

          <div className='row mx-[2em] my-[1em]'>
            <p className='text-lg font-normal leading-[1.5rem] w-[50%]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              nam suscipit aliquam iste, corrupti voluptate in nostrum cumque
              accusantium ex!
            </p>
          </div>

          <div className='row mx-[2em] my-[1em]'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              nam suscipit aliquam iste, corrupti voluptate in nostrum cumque
              accusantium ex!
            </p>
          </div>
          <div className='row mx-[2em] my-[1em]'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              nam suscipit aliquam iste, corrupti voluptate in nostrum cumque
              accusantium ex!
            </p>
          </div>
          <div className='row mx-[2em] my-[1em]'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              nam suscipit aliquam iste, corrupti voluptate in nostrum cumque
              accusantium ex!
            </p>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
