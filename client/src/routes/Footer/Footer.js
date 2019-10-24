import React from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import styles from "./Footer.module.css"
import {
  FaGhost,
  FaCandyCane,
  FaDog,
  FaRegCopyright,
  FaFacebookSquare,
  FaYoutubeSquare,
  FaTwitterSquare,
  FaInstagram,
} from "react-icons/fa"

const Footer = props => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__title}>
        The values that hold us true and to account
      </p>
      <div className={styles.footer__values}>
        <div className={styles.footer__value}>
          <FaGhost className={styles.value__icon} />
          <span className={styles.value__title}>Simplicity</span>
          <span className={styles.value__description}>
            Things being made beautifully simple are at the heart of everything
            we do.
          </span>
        </div>
        <div className={styles.footer__value}>
          <FaCandyCane className={styles.value__icon} />
          <span className={styles.value__title}>Social Good</span>
          <span className={styles.value__description}>
            We believe in making things better for everyone, even if just by a
            little bit.
          </span>
        </div>
        <div className={styles.footer__value}>
          <FaDog className={styles.value__icon} />
          <span className={styles.value__title}>Trust</span>
          <span className={styles.value__description}>
            We work on the basis of creating trust which can only be nurtured
            through authenticity and transparency.
          </span>
        </div>
      </div>
      <div className={styles.footer__links}>
        <div className={styles.copyright}>
          <FaRegCopyright />
          <span className={styles.copyright__year}>2019</span>
        </div>
        <div className={styles.link__group}>
          <span className={styles.link__group__name}>Customers</span>
          <Link to="/buyer">Buyer</Link>
          <Link to="/supplier">Supplier</Link>
        </div>
        <div className={styles.link__group}>
          <span className={styles.link__group__name}>Company</span>
          <Link to="/about-us">About us</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/contact-us">Contact us</Link>
        </div>
        <div className={styles.link__group}>
          <span className={styles.link__group__name}>Further Information</span>
          <Link to="/terms-conditions">Terms & Conditions</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
        <div className={styles.link__group}>
          <span className={styles.link__group__name}>Follow us</span>
          <div className={styles.social__links}>
            <a href="https://www.facebook.com/" target="_blank">
              <FaFacebookSquare className={styles.social__icon} />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <FaYoutubeSquare className={styles.social__icon} />
            </a>
            <a href="https://www.twitter.com/" target="_blank">
              <FaTwitterSquare className={styles.social__icon} />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <FaInstagram className={styles.social__icon} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {}

export default Footer
