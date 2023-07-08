export default function Footer(){
    return(
        <footer id="footer">
        <div className="wrapper">
          <div className="foots">
            <div className="foot-logo">
              <div className="logo"></div>
              <p>easybank</p>
            </div>
            <ul>
              <li><a href="/"><img src="../assets/images/icon-facebook.svg" alt=""/></a></li>
              <li><a href="/"><img src="../assets/images/icon-youtube.svg" alt=""/></a></li>
              <li><a href="/"><img src="../assets/images/icon-twitter.svg" alt=""/></a></li>
              <li><a href="/"><img src="../assets/images/icon-pinterest.svg" alt=""/></a></li>
              <li><a href="/"><img src="../assets/images/icon-instagram.svg" alt=""/></a></li>
            </ul>
          </div>
          <div className="foots">
            <ul>
              <li><a href="#section2">About Us</a></li>
              <li><a href="#footer">Contact</a></li>
              <li><a href="#section3">Blog</a></li>
            </ul>
          </div>

          <div className="foots">
            <ul>
              <li><a href="#section1">Careers</a></li>
              <li><a href="#section2">Support</a></li>
              <li><a href="#footer">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="foots">
            <ul>
              <a className="btn" href="#section1">Request Invite</a>
              <p>© Easybank. All Rights Reserved</p>
            </ul>
          </div>
        </div>
      </footer>
    )
}
