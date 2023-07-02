import "./Footer.css"
import twitter from "../assets/twitter-icon.png"
import facebook from "../assets/facebook-icon.png"
import instagram from "../assets/instagram-icon.png"
import github from "../assets/github-icon.png"

function Footer() {
    return (
        <footer>
            <ul className="footer--socmed">
                <li><a href="https://twitter.com/ChaiWaiJin"><img src={ twitter } /></a></li>
                <li><a href="https://www.facebook.com/chai.waijin"><img src={ facebook } /></a></li>
                <li><a href="https://www.instagram.com/chaiwaijin/"><img src={ instagram } /></a></li>
                <li><a href="https://github.com/waijinchai"><img src={ github } /></a></li>
            </ul>
        </footer>
    )
}

export default Footer