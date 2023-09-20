import React from "react"

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        <a
          href="https://www.linkedin.com/in/emmanuella-otu-6694b6260"
          target="_blank"
          className="footer-links"
        >
          <img
            src="public/images/linkedin.png"
            alt="LinkedIn Icon"
            className="social-media-image-two"
          />
        </a>
        <a
          href="https://twitter.com/ellaKhing"
          target="_blank"
          className="footer-links"
        >
          <img
            src="public/images/twitter.png"
            alt="Twitter Icon"
            className="social-media-image-two"
          />
        </a>
        <a
          href="https://github.com/OtuEmmanuella"
          target="_blank"
          className="footer-links"
        >
          <img
            src="public/images/github.png"
            alt="Github Icon"
            className="social-media-image-two"
          />
        </a>
      </div>
    </footer>
  )
}
