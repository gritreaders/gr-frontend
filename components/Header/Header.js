import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './header.module.scss'
import Avatar from '../Avatar/Avatar'
import SingInSingUp from '../SingInSingUp/SingInSingUp'

const Header = () => {
  const user = localStorage.getItem('user')

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src="/images/grit-readers.png" alt="Logo" width={50} height={50} />
        <div>{user ? <Avatar /> : <SingInSingUp />}</div>
      </div>
    </header>
  )
}

export default Header
