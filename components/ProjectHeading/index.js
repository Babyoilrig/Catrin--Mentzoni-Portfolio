import React from 'react'
import css from './ProjectHeading.module.css'

export default function ProjectHeading() {
  return (
    <div class="grid gap-0 grid-cols-1 grid-rows-1 place-items-center content-center">
    <h2 id="projects-section" className={css.projectsTitle}>Projects</h2>
    <div className={css.projectUnderline}>
   </div>
   </div>

  )
}
