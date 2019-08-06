import React from 'react'
import './Bio.css'

const Bio = () => (
  <div className="bio-container">
    <div className="bio-flex">
      <h1> </h1>
    </div>
    <div className="bio-flex" style={style}>
      <div>
        {/* <h2>title</h2> */}
        <hr />
        <div>
          <p>I attended Lamar University in Beaumont, Texas where I earned a 
            Bachelor of Fine Arts degree in Studio Art with a minor in Earth Science.
          </p>
        </div>
        <div>
          <p>After a year of exploring different artistic disciplines, 
            I chose Painting as my area of concentration. 
            During my second year I departed from painting representational 
            images in oil on canvas and began to experiment with abstraction and mixed media painting.
            With this new direction came a new process of building the works. 
            I was drawn to the process of producing the work itself. The act of making.
            At this time I wasn’t particularly concerned about <i>what</i> I was making, in terms of visual content,
            as much as <i>how</i> I was making. I put all of my focus on how I interacted with the 
            materials and the various ways I could manipulate them to create 
            varied visual dialogues. Over time I deveolped my own unique language and system of production. 
          </p>
        </div>
        <div>
          <p>In my Earth Science courses I found an interest in the field of 
            cartography and how humans use maps to make sense of the world,
            to place order on the chaos of nature, to tell a story about 
            a specific place in a specific time in history.
          </p>
        </div>
        <div>
          <p>Elements of cartography began finding their way into my paintings.
            Linear elements dominated the compositions, reminiscent of dynamic
            inner-city maps and topographic renderings. The surfaces became 
            highly textured, having many layers of paper, paint, cardboard and string.
            My process became became more physical, ripping and sanding away 
            exposing the colorful layers that lie beneath.
          </p>
        </div>
      </div>
    </div>
  </div>
)

const style = {
  display: 'block',
  margin: '0 auto',
  // fontFamily: 'Dosis',
  width: '70%'
}

export default Bio



// I attended Lamar University in Beaumont, Texas where I earned a 
// Bachelor of Fine Arts degree in Studio Art with a minor in Earth Science.

// After a year of exploring the different artistic disciplines, 
// I chose Painting as my area of concentration. 
// During my second year I departed from painting representational 
// images in oil on canvas and began to experiment with abstraction and combining different media. 
// I was drawn to the process of producing the work itself. The act of making.
//  I wasn’t as particularly concerned about what I was making, in terms of visual content,
  // as much as how I was making. I put all of my focus on how I interacted with the 
  // materials and the various ways I could manipulate them to create 
  // varied visual dialogues. Over time I deveolped my own unique language and system of production. 

// In my Earth Science courses I found an interest in the field of 
// cartography and how humans use maps to make sense of the world,
//  to place order on the chaos of nature, to tell a story about 
// a specific place in a specific time in history. 

// Elements of cartography began finding their way into my paintings.
//  Linear elements dominated the compositions, reminiscent of dynamic
//  inner-city maps and topographic renderings. The surfaces became 
// highly textured, having many layers of paper, paint, cardboard and string.
//  My process became became more physical, ripping and sanding away 
// exposing the colorful layers that lie beneath. 