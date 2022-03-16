import React from "react";
import Link from "next/link";
import css from './ProjectSection.module.css'

export default function ProjectsSection1() {
  return (
    //   Grid for project section 1
    <div class="grid gap-4 grid-cols-1 md:grid-cols-6 grid-rows-1 place-items-center content-center border-solid border-2 border-black rounded-lg mb-12 mt-8">
    
      {/* Text box for project 1 */}
      <div class="col-span-3 content-center mx-40" className={css.proj1Left}>
      <div className={css.projectTextBox}>
        <h2 className={css.projectTitle}>This Website</h2>
        <h3 className={css.projectDescription}>This portfolio site was made with Next.js and tailwindcss. My aim was 
            to create a stylish and feminine personal site, which is easy 
            to use and responsive on mobile devices. It was a steep learning curve - in which I spent hours upon hours learning 
            about mobile-responsive containers and wrapping divs, but I am proud of the result :)</h3>
        <Link
          href="https://github.com/Babyoilrig/CatrinMentzoni-Portfolio"
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
          src="/images/mywebsite-sml.png"
        />
      </div>
      </div>
    </div>
  );
}
