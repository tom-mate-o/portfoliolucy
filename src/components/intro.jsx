import React from 'react'

export default function Intro() {
  return (
    <>
    <img src={process.env.PUBLIC_URL + '/assets/lucy_avatar.jpg'} alt="avatar" className="avatar"/>
    <a href="#intro" data-scroll-to>

      <h1>HI, I'M LUCY!</h1>

    </a>

    <p>
      I'm a Ocean Scientist and PhD Candidate at NIOZ in the Netherlands.
    </p>
    
    </>
  )
}
