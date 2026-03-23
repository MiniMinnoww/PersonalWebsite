import "../../styles/footer.scss"

function Footer() {
  const linkedInLink = "https://uk.linkedin.com/in/msalmon06"
  const uniLink = "https://sheffield.ac.uk/"
  const githubLink = "https://github.com/MiniMinnoww"
  return (
    <footer>
      <a className="footer-link" href={linkedInLink} target="_blank">LinkedIn</a>
      <a className="footer-link" href={githubLink} target="_blank">GitHub</a>
      <a className="footer-link" href={uniLink} target="_blank">University</a>
    </footer>
  )
}

export default Footer