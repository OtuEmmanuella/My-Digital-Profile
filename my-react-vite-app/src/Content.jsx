import React from "react"

export default function Content() {
  return (
    <section className="container">
      <section className="content-wrapper">
        <div className="profile-intro">
          <h1 className="name">Emmanuella Otu</h1>
          <h3 className="subtitle">Frontend Developer</h3>
        </div>
        <div className="icons-container">
          <a
            href="mailto:otumanuella@gmail.com"
            target="_blank"
            className="social-media-links"
          >
            <img
              src="public/images/email.png"
              alt="An Email Icon"
              className="social-media-image-one"
            />
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/emmanuella-otu-6694b6260"
            target="_blank"
            className="social-media-links"
          >
            <img
              src="public/images/linkedin.png"
              alt="LinkedIn Icon"
              className="social-media-image-one"
            />
            LinkedIn
          </a>
        </div>
      </section>
      <section className="profile-main">
        <h2 className="about">About</h2>
        <p className="info">
          I am a passionate frontend developer with a love for problem-solving.
          I thrive on challenges and embrace every opportunity to learn and
          grow. My resilient nature fuels my enthusiasm for creating elegant
          solutions to complex problems. I'm dedicated to crafting user-friendly
          interfaces and continuously expanding my skills in the ever-evolving
          world of web development.
        </p>
        <h2>Interests</h2>
        <p className="info">
          Exploring life through various passions, I'm an avid reader and a
          professional chef who embraces the art of culinary creation. As an
          entrepreneur, I'm driven by innovation and growth. My love for travel
          and gastronomy fuels my curiosity for diverse cultures and flavors.
          I'm equally passionate about crafting delectable dishes and enjoying
          them. Music resonates deeply with me, and I find inspiration in its
          melodies. As a healthy nutrition enthusiast and biochemist, I'm
          fascinated by the science of nourishing our bodies. Writing is my
          creative outlet, and fashion is my canvas for self-expression. Life is
          a vibrant tapestry, and I relish every thread.
        </p>
      </section>
    </section>
  )
}
