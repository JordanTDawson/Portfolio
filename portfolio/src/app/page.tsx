'use client';
import React, { useEffect, useRef } from 'react';
import Credentials from './credentials/page';
import Intro from './intro/page';
import Skills from './skills/page';
import Projects from './projects/page';
import Testimonial from './testimonials/page';
import { useScrollContext } from './contexts/ScrollContext';

export default function Home() {

  const { setCurrentSection } = useScrollContext();

  const sectionRefs = {
    intro: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    testimonial: useRef(null),
    credentials: useRef(null),
  };

  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setCurrentSection(`${entry.target.id}`)
      }
    });
  };

  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.5, // Percentage of the target element that needs to be visible
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    for (const sectionRef of Object.values(sectionRefs)) {
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
    }

    return () => {
      for (const sectionRef of Object.values(sectionRefs)) {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      }
    };
  }, []);

  return (
    <div className='md:ml-[150px] md:p-4'>
      <section className='relative flex flex-col justify-center items-center min-h-screen' ref={sectionRefs.intro}>
        <Intro />
      </section>
      <section className='relative flex flex-col justify-center items-center min-h-screen' id='skills' ref={sectionRefs.skills}>
        <Skills />
      </section>
      <section className='relative flex flex-col justify-center items-center min-h-screen' id='projects' ref={sectionRefs.projects}>
        <Projects />
      </section>
      <section className='relative flex flex-col justify-center items-center min-h-screen' id='testimonial' ref={sectionRefs.testimonial}>
        <Testimonial />
      </section>
      <section className='relative flex flex-col justify-center items-center min-h-screen' id='credentials' ref={sectionRefs.credentials}>
        <Credentials />
        <div className='block w-[100%] md:hidden flex justify-center relative bottom-0 left-0 right-0 p-2'>
          <a className='border-2 border-white rounded-lg text-xl p-2 hover:text-yellow-500 hover:scale-105 transform transition-transform' href='#'>
            Go to Top
          </a>
        </div>
      </section>
    </div>
  );
}
