import React from 'react'
import logo from '../images/logo.svg'
import iconMan from '../images/icon-man.svg'
export default function Header() {
  return (
    <div className='container'>
        <div>
            <img src={logo} alt="#" />
            <span>Главная</span>
            <span>О проекте</span>
        </div>
        <div>
            <input type="search" name="" id="" />
            <img src={iconMan} alt="#" />
        </div>
    </div>
  )
}
