import React from "react";
import Link from "next/link";
import css from './IntroSection2New.module.css'

export default function IntroSection2New() {
  return (
    <div>
        {/* <div class="grid gap-4 grid-cols-1 grid-rows-1 place-items-center content-center mb-12 mt-8 w-screen"> */}
        {/* <div className={css.introContainer}> */}
        <div>
            <div className={css.introContainer}>
                <div className={css.introLeft}>
                    {/* <div className={css.headingContainer}> */}
                    <h1 className={css.heading}>About me</h1>
                    {/* </div> */}
            
                </div>
                        <div className={css.introRight}>
                            <img className= {css.catPic}src="/images/cat-big.png"/>
                        </div>  
                
            </div>
        </div>
    </div>
  )
}
