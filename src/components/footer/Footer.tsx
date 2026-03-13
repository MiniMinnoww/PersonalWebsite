import "../../styles/footer.scss"

function Footer() {
  const linkedInLink = "https://uk.linkedin.com/in/msalmon06"
  const uniLink = "https://sheffield.ac.uk/"
  const githubLink = "https://github.com/MiniMinnoww"
  return (
    <footer>
      <a className="footer-link" href={linkedInLink}>LinkedIn</a>
      <a className="footer-link" href={githubLink}>GitHub</a>
      <a className="footer-link" href={uniLink}>University</a>
    </footer>
  )
}

export default Footer