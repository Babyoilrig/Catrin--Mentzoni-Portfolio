import React from "react";
import Link from "next/link";
import css from './ProjectSection2.module.css'

export default function ProjectsSection2() {
  return (
    //   Grid for project section 2
    <div class="grid gap-0 grid-cols-1 md:grid-cols-6 grid-rows-1 place-items-center content-center border-solid border-2 border-black rounded-lg mb-12 mt-8">
    
      
      {/* Image box for project2 */}
      <div class="col-span-3 place-items-center content-center md:mx-40" >
      <div className={css.projectImageBox}>
        <img
          className={css.bootcamperAppImage}
          src="/images/bootcamper-app.png"
        />
      </div>
      </div>
    
    {/* Text box for project 2 */}
    <div class="col-span-3 content-center place-items-center md:mx-40" className={css.proj1Left}>
    <div className={css.projectTextBox}>
      <h2 className={css.projectTitle}>Bootcamper App</h2>
      <h3 className={css.projectDescription}>This is a social media app for School of Code bootcampers. Since our cohort consisted of over one hundred and eighty students, it was difficult for bootcampers to get to know their peers. I built this app during our week 9 project, working as part of a team of four. The app was created using a React front end, and a Postgres database. I enjoyed working with my team on this project. I created the high-fidelity wireframes, built React components and styled them using CSS. I also worked with a partner to deploy the front end, amongst many other things.</h3>
      <Link
        href="https://github.com/SchoolOfCode/national-project-week-farc-incorporated"
        passHref
      >
        <button className={css.projectButton}>View Project</button>
      </Link>
    </div>
    </div>
    </div>
  );
}