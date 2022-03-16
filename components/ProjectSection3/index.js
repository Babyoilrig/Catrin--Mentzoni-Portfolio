import React from "react";
import Link from "next/link";
import css from './ProjectSection3.module.css'

export default function ProjectsSection3() {
  return (
    //   Grid for project section 1
    <div class="grid gap-4 grid-cols-1 md:grid-cols-6 grid-rows-1 place-items-center content-center border-solid border-2 border-black rounded-lg mb-12 mt-8">
    
      {/* Text box for project 1 */}
      <div class="col-span-3 content-center mx-40" className={css.proj1Left}>
      <div className={css.projectTextBox}>
        <h2 className={css.projectTitle}>Tribe App</h2>
        <h3 className={css.projectDescription}>I am currently working as part of a team of 6 to create the Tribe mobile app, as part of our month long final project. This app assists with family organisation, and allows parents to assign chores to their children and other family members. We are building the project using React Native and Firebase. So far, as well as learning a new flavour of React, I have researched and implemented a testing environment and written tests, created a stacknavigator component and researched how to deploy and host apps via the Expo app store, amongst many other things.</h3>
        <Link
          href="https://github.com/SchoolOfCode/final-project-repo-node-of-ingenuity-room-17"
          passHref
        >
          <button className={css.projectButton}>View Project</button>
        </Link>
      </div>
      </div>
      {/* Image box for project1 */}
      <div class="col-span-3 place-items-center" >
      <div className={css.projectImageBox}>
        <img
          className={css.bootcamperAppImage}
          src="/images/tribeApp-sml.png"
        />
      </div>
      </div>
    </div>
  );
}
