import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Navbar() {
  return (
   
<header>
<img src="logo.png" width="80" height="84"/>
   <pre className="logo_font"> <h2>  MATHUR SABHA Jaipur</h2></pre>
<div class="bx bx-menu" id="menu-icon"></div>

<ul className="navbar">
  <li> <Link to="/" className="site-title">
        Home
      </Link></li>
  <li><CustomLink to="/about">Holi Milan 2022</CustomLink></li>
  <li><CustomLink to="/gallery">Gallery</CustomLink></li>
 
  <li><CustomLink to="/contact">Agm 2022</CustomLink></li>
</ul>
</header>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}