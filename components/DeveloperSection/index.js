import React from "react";
import Link from "next/link";
import css from './DeveloperSection.module.css'

export default function DeveloperSection() {
  return (
    //   Grid for developer section
    <div class="grid gap-0 grid-cols-1 md:grid-cols-6 grid-rows-1 place-items-center content-center border-solid border-2 border-black rounded-lg mb-12 mt-8">

      {/* Developer section div 1 */}
      <div class="col-span-3 place-items-center content-center bg-[#fdc435] border-r-2 border-black" >
      <h2 class="text-center font-roboto text-4xl font-bold">Becoming a Full Stack Engineer</h2>
      <br/>
      <p class="text-center font-roboto text-xl">
        I attended the School of Code’s 16 week bootcamp, between 15th November 2021 - 11th March 2022, 
        and taking part in the course has completely changed my life!</p>
        <br/>
        <p class="text-center font-roboto text-xl">During the bootcamp I have learnt skills and technologies that have taken me from a coding novice to a full 
        stack software engineer - some of these are detailed in the next section. I have also learnt how to work effectively as the part of an agile team, 
        including reflecting on my personality traits, listening ability, communication style, and mindset. I have also learnt about concepts such as UX/UI, dev ops 
        and project management. </p>
        <br/>

        <p class="text-center font-roboto text-xl">I enjoy building the front end of applications using frameworks like React, styling them to look attractive, and then hooking up the 
        ‘back-end’ logic to make dynamic apps. Moreover though,  I enjoy doing this as part of a team!
        </p>
        <br/>
      </div>
    
    {/* Developer section div 2 */}
    <div class="col-span-3 place-items-center content-center">
    
    <h1 class="text-center font-roboto text-4xl font-bold">Skills</h1>
    <br/>
    <ul class="text-left font-roboto text-xl font-bold">
<li>Front end: JavaScript, HTML, CSS </li>
<li>Frameworks and libraries: React, React Native, Next.js </li>
<li>Back end: Node, Express, PostgreSQL, Firebase </li>
<li>Services: Netlify, Heroku </li>
<li>Tools: Git, Docker </li>
<li>Testing and test-driven development </li>
<br></br>
<h3 class="text-center font-roboto text-3xl font-bold">And soft skills, such as: </h3>

<li>Agile methodology </li>
<li>Solo and pair programming </li>
<li>Creative problem solving, both independently and within a larger team </li>
<li>Working, learning, and collaborating remotely </li>
</ul>
</div>
    </div>
  );
}