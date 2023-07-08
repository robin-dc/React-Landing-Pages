import { useRef, useState } from "react"

export default function Navbar(){
  const menu = useRef()
  // const [isOpen, setIsOpen] = useState(false)

  const handleBurger = (e) => {
    e.currentTarget.classList.toggle('is-active')
    menu.current.classList.toggle('active')
    // setIsOpen(!isOpen)
  }
    return (
        <nav>
            <div className="wrapper">
              <div className="logo">
                <img src="../assets/images/logo.svg" alt=""/>
              </div>
              <div className="navs" ref={menu}>
                <ul>
                  <li><a href="#section1">Home</a></li>
                  <li><a href="#section2">About</a></li>
                  <li><a href="#section3">Blog</a></li>
                  <li><a href="#footer">Contact</a></li>
                  <li><a href="#section2">Careers</a></li>
                </ul>
                <a className="btn" href="#footer">Request Invite</a>
              </div>
              <div className="navigator" onClick={handleBurger}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            </div>
          </nav>
    )
}
