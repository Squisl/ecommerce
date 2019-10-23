import React from "react"
import {Link} from "react-router-dom"
import styles from "./Header.module.css"
import Logo from "../../assets/images/logo.png"
import HeaderLink from "../HeaderLink/HeaderLink"

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo__container}>
        <img src={Logo} alt="logo" className={styles.logo} />
      </Link>
      <nav className={styles.header__nav}>
        <HeaderLink exact={true} path="/" label="Home" />
        <HeaderLink path="/shop" label="Shop" />
        <HeaderLink path="/blog" label="Blog" />
        <HeaderLink path="/about" label="About" />
        <HeaderLink path="/contact" label="Contact" />
      </nav>
    </header>
  )
}

export default Header
