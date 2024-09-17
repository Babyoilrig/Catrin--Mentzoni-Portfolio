import React from 'react'
import css from './IntroPhotoSectionNew.module.css'
import Link from "next/link"

export default function IntroPhotoSectionNew() {
  return (
    <div class="grid gap-4 grid-cols-1 grid-rows-1 place-items-center content-center mb-12 mt-8 w-screen">
    {/* Main container */}
    <div className={css.mainIntroContainer}>
    <div className={css.introTextSection}>
    {/* //Left Section - Heading */}
    <div className={css.introTextSectionTop}>
      <h1 className={css.fullstackHeading}>Fullstack Software Engineer</h1>
      <h2 className={css.nameHeading}>Hello, my name is</h2>
      <h2 className={css.nameHeading}>Catrin Mentzoni</h2>
      </div>
      {/* //Right Section */}
      <div className={css.introTextSectionBottom}>
      <div className={css.textSection}>
      <p>I am an enthusiastic and friendly individual with excellent communication and listening skills, who thrives when working as part of a team. I love learning new things, and I also love a challenge! I previously worked as a primary school teacher for ten years, but learned to code as part of the School of Code's Bootcamp 10 cohort - and I love it!</p>
      </div>
      </div>
      
      </div>
      <div className={css.imageSection}>
      <img className={css.catImage} src="/Images/cat-big.png"></img>
      </div>
    </div>
    

      

        <div class="grid gap-4 grid-cols-2 grid-rows-1 place-items-center content-center mb-12 mt-8">
          <Link href="/about" passHref>
            <button className={css.firstButton}>About me</button>
          </Link>
          <Link href="#projects-section" passHref>
            <button className={css.secondButton}>Projects</button>
          </Link>
          </div>
        </div>
  )
}