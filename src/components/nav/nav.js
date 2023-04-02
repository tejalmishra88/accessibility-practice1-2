import './nav.css'

function Nav() {
  return (
    <div>
      <a href="#maincontent" className="skip-link">
        Skip navigation
      </a>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
      <main id="maincontent">
        <h1>Welcome</h1>
        <p>
          This is the first post on this new website! To meet us, read our{' '}
          <a href="/about">about us</a> page.
        </p>
        <h2>Find out more</h2>
        <p>
          If you want to find out more about how to use this, take a look at the{' '}
          <a href="/instructions">instructions</a>.
        </p>
      </main>
    </div>
  )
}

export default Nav
