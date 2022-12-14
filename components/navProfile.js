import React from 'react';
import Link from 'next/link';
import {logout} from '../utils/auth';

class NavProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLogout() {
    logout();
  }

  render() {
    let items;
    let avatarUrl = this.props.userProfile
      ? this.props.userProfile.avatar
      : '/avatar.png';

    if (this.props.isAuthenticated) {
      items = (
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img src={avatarUrl} height="42" className="avatar" />
          </a>
          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="navbarDropdown"
          >
            <Link href="/dashboard">
              <a className="dropdown-item">Dashboard</a>
            </Link>
            <Link href="/profile">
              <a className="dropdown-item">Your Profile</a>
            </Link>
            <a className="dropdown-item" href="#" onClick={this.handleLogout}>
              Log out
            </a>
          </div>
        </li>
      );
    } else {
      items = (
        <>
          <li className="navitem d-flex">
            <Link href="/signup">
              <a className="btn">Create host location account</a>
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/login">
              <button className="btn-primary">Sign in</button>
            </Link>
          </li>
        </>
      );
    }

    return (
      <ul className="navbar-nav flex-row">
        {items}
        <style jsx>{`
          :global(.avatar) {
            width: 44px;
            object-fit: cover;
            height: 44px;
            margin-right: 4px;
          }

          :global(.dropdown-menu) {
            position: absolute !important;
            z-index: 10000;
          }
        `}</style>
      </ul>
    );
  }
}
export default NavProfile;
