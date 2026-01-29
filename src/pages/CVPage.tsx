function CVPage() {
  return (
    <div className="center-all">
      <h1 className="centered-text">Welcome (to my CV)!</h1>
      <p>
        You can see a full version of my CV <a href="/src/assets/cv.pdf">here</a>
        <br/>
        It summarises a lot of what is seen on this site in 2 pages. Included are:
      </p>

      <ul>
        <li><a href="/about/qualifications">A levels</a></li>
        <li><a href="/#skills">Skills</a></li>
        <li>A few select <a href="/projects">projects</a></li>
        <li><a href="/about/workexperience">Work experience</a></li>
        <li>Other <a href="/about/hobbies">hobbies</a></li>
      </ul>

      TODO: PAD OUT THE PAGE

    </div>
  )
}

export default CVPage