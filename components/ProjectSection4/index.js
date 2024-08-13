import React from "react";
import Link from "next/link";
import css from './ProjectSection4.module.css'

export default function ProjectsSection4() {
  return (
    //   Grid for project section 4
    <div class="grid gap-0 grid-cols-1 md:grid-cols-6 grid-rows-1 place-items-center content-center border-solid border-2 border-black rounded-lg mb-12 mt-8 pb-[150px] pt-[50px] pl-5 pr-5">
    
      {/* Text box for project 4 */}
      <div class="col-span-3 content-center place-items-center md:mx-40" className={css.proj1Left}>
      <div className={css.projectTextBox}>
        <h2 className={css.projectTitle}>Music Sales App</h2>
        <h3 className={css.projectDescription}>I worked as part of a team of 6 to create the Tribe mobile app, as part of our month long final project at the School of Code. This app assists with family organisation, and allows parents to assign chores to their children and other family members. We are building the project using React Native and Firebase. So far, as well as learning a new flavour of React, I have researched and implemented a testing environment and written tests, created a stacknavigator component and researched how to deploy and host apps via the Expo app store, amongst many other things.</h3>
        <Link
          href="https://github.com/Babyoilrig/musicSalesApp"
          passHref
        >
          <button className={css.projectButton}>View Project</button>
        </Link>
      </div>
      </div>
      {/* Image box for project4 */}
      <div class="col-span-3 content-center place-items-center md:mx-40" >
      <div className={css.projectImageBox}>
        <img
          className={css.musicSalesAppImage}
          src="/images/music-sales-app-image.png"
        />
      </div>
      </div>
    </div>
  );
}
