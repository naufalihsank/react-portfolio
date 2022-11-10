import React from 'react'
import EmailIcon from '@mui/icons-material/Email'
import GithubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import '../../styles/home.css'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Naufal Ihsan Kusumayadhi</h2>
        <div className='prompt'>
          <p>
            A software developer with a passion for learning and creating
          </p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Frontend</h2>
            <span>HTML, CSS, VueJS, NuxtJS, TailwindCSS, Vuetify, Flutter</span>
          </li>
          <li className='item'>
            <h2>Backend</h2>
            <span>MySQL, Laravel</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>Javascript, Python, Dart, PHP</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
