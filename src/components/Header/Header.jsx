import Image from 'next/image'
import loginIcon from './assets/loginIcon.svg'
import { NavBarMobile } from '../NavBarMobile/NavBarMobile'

import styles from './styles/Header.module.css'



export const Header = () => {
  return (
    <header className={styles.header}>
      <NavBarMobile />
      <Image src='/logo.svg' className={styles.logo} width={40} height={48} alt='logo projeto somar' priority />
      <Image src={loginIcon} className={styles.logo} width={40} height={48} alt='Icone Login' />
    </header>
  )
}