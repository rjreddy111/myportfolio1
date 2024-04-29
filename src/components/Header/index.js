// Write your JS code here
// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="main-bg-container">
    <div className="blog-container">
      <div className="wave-style">
        <Link to ="/">
        <h1 className='myName'>Rahul Reddy</h1>
        </Link>
      </div>

      <ul className="components-style">
        <li>
          <Link className="active-link" to="/">
            Home
          </Link>
        </li>
        
        <li>
          <Link className="active-link" to="/about">
            About{' '}
          </Link>
        </li>
        <li>
          <Link className="active-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Header