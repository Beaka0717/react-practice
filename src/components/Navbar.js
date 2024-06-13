import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'

const Navbar = ({authenticate}) => {
  const menuList = ['여성', 'Divided','남성', '신성아/유아', '아들', 'H&M Home', 'Sale', '지속가능' ]
  const navigate = useNavigate()
  const goToLogin = () => {
     navigate("/login")
    
  }
  const mainPage = () => {
    navigate("/")
  }
  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value
      navigate(`/?q=${keyword}`)
    }
  }

  return (
    <div className='innerBox'>
      <div>
        <div className='login-button' onClick={authenticate == false ? goToLogin : console.log("check")}>
        <FontAwesomeIcon icon={faUser} />
      <div className='loginTxt'>{authenticate == false ? "로그인" : "로그아웃"}</div>
        </div>
      
      </div>
      <div className='nav-section' onClick={mainPage}>
        <img width={100} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png'/>
      </div>
      <div className='menu-area'>
          <ul className='menu-list'>
            {menuList.map((menu) => (
              <li>{menu}</li>
            ))}
          </ul>
        
        <div className='searchBox'>
          <FontAwesomeIcon icon={faSearch}/>
          <input type='text' onKeyPress={(event)=>search(event)}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
