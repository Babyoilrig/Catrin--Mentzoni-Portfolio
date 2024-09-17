import React from 'react'
import css from './IntroPage1.module.css'
import Link from "next/link"

export default function IntroPage1() {
  return (
    <div class="grid gap-4 grid-cols-1 grid-rows-1 place-items-center content-center mb-12 mt-8 w-screen">
    <img src="/images/cat-intro-page1.png"/>
    

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
