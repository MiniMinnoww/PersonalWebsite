import "../styles/custom.scss"

interface SubtleLinkProps {
  href: string,
  text: string
}
function SubtleLink({href, text}: SubtleLinkProps) {
  return (
    <a className="subtle-link" target="_blank" href={href}><b>{text}</b></a>
  )
}

export default SubtleLink