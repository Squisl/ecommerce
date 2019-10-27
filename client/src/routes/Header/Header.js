import React from "react"
import {Link} from "react-router-dom"
import {FaShoppingBag, FaInfo, FaWpforms} from "react-icons/fa"
import {MdEventNote} from "react-icons/md"
import styles from "./Header.module.css"
import Logo from "../../assets/images/logo.png"
import HeaderLink from "../../components/HeaderLink/HeaderLink"
import Button from "../../components/Button"
import LoginModal from "../../components/LoginModal"
import RegisterModal from "../../components/RegisterModal"

const Header = ({toggleRegister, toggleLogin, modal, user, logout}) => {
  const conditional = () => {
    if (user.authenticated) {
      return (
        <>
          <Button label="Log out" onClick={logout} />
        </>
      )
    } else {
      return (
        <>
          <Button label="Log in" onClick={toggleLogin} />
          <Button label="Register" onClick={toggleRegister} />
          {modal.login && <LoginModal />}
          {modal.register && <RegisterModal />}
        </>
      )
    }
  }
  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <Link to="/" className={styles.logo__container}>
          <img src={Logo} alt="logo" className={styles.logo} />
        </Link>
        <nav className={styles.header__nav}>
          <HeaderLink path="/shop" label="Shop">
            <FaShoppingBag />
          </HeaderLink>
          <HeaderLink path="/blog" label="Blog">
            <MdEventNote />
          </HeaderLink>
          <HeaderLink path="/about" label="About">
            <FaInfo />
          </HeaderLink>
          <HeaderLink path="/contact" label="Contact">
            <FaWpforms />
          </HeaderLink>
        </nav>
      </div>
      <div className={styles.header__right}>{conditional()}</div>
    </header>
  )
}

export default Header
