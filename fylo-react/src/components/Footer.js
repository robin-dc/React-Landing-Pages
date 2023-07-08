export default function Footer(){
    return (
        <footer>
            <div className="footer">
                <img className="logo" src="../images/logo.svg" alt=""/>
                <div className="footwrap">
                    <div className="foots">
                    <div className="location">
                        <img src="../images/icon-location.svg" alt=""/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua</p>
                    </div>
                    </div>
                    <div className="foots">
                    <div className="contact">
                        <img src="../images/icon-phone.svg" alt=""/>
                        <p>+1-543-123-4567</p>
                    </div>
                    <div className="contact">
                        <img src="../images/icon-email.svg" alt=""/>
                        <p>example@fylo.com</p>
                    </div>
                    </div>
                    <div className="foots">
                    <ul>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Jobs</a></li>
                        <li><a href="/">Press</a></li>
                        <li><a href="/">Blog</a></li>
                    </ul>
                    </div>
                    <div className="foots">
                    <ul>
                        <li><a href="/">Contact Us</a></li>
                        <li><a href="/">Terms</a></li>
                        <li><a href="/">Privacy</a></li>
                    </ul>
                    </div>
                    <div className="foots">
                    <ul>
                        <li><a href="/"><img src="images/whitefb.png" alt=""/></a></li>
                        <li><a href="/"><img src="images/whitein.png" alt=""/></a></li>
                        <li><a href="/"><img src="images/whitegithub.png" alt=""/></a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
