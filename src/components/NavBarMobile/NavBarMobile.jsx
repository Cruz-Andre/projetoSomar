import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import menuOpen from './assets/menuOpen.svg'
import menuClose from './assets/menuClose.svg'

import styles from './styles/NavBarMobile.module.css'

export const NavBarMobile = () => {
  const [menu, setMenu] = useState(false)
  const [menuIconOpenClose, setMenuIconOpenClose] = useState(menuOpen)
  const [menuStyle, setMenuStyle] = useState(styles.menuContainerClose)

  const toggleMenu = () => {
    setMenu(!menu)
    if (!menu) {
      setMenuIconOpenClose(menuClose)
      setMenuStyle(styles.menuContainerOpen)

    } else {
      setMenuIconOpenClose(menuOpen)
      setMenuStyle(styles.menuContainerClose)
    }
  }

  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  useEffect(() => {
    if (menu) {
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target) && 
            buttonRef.current && !buttonRef.current.contains(event.target)) {
          setMenu(false)
          setMenuIconOpenClose(menuOpen)
          setMenuStyle(styles.menuContainerClose)
        }
      };
      
      document.addEventListener('click', handleClickOutside);
      
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }
  }, [menu]);


  return (
    <nav className={menuStyle}  >
      <div className={styles.menuIcon} onClick={toggleMenu} ref={buttonRef} >
        <Image src={menuIconOpenClose} alt='menu hamburquer' />
      </div>
      {
        menu &&
        <div className={styles.menuListaContainer}>
          <div className={styles.menuListaDiv}>
            <ul className={styles.menuLista} ref={menuRef}>
              <li><Link href='/' className={styles.link}>Home</Link></li>
              <li><Link href='/' className={styles.link}>Conheça nossos projetos</Link></li>
              <li><Link href='/' className={styles.link}>Sobre o programa</Link></li>
              <li><Link href='/' className={styles.link}>Contatos</Link></li>
            </ul>
          </div>
        </div>
      }
    </nav>
  )
}