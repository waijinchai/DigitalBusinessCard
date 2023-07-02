import "./Info.css"
import photo from "../assets/photo.jpg"
import email from "../assets/mail.png"
import linkedin from "../assets/linkedin.png"

function Info() {
    return (
        <div>
            <img src={ photo } className="info--photo" />
            <div className="info">
                <h1 className="info--name">Chai Wai Jin</h1>
                <section className="info--position">Computer Science Student</section>
                <section className="info--website">
                    <a href="https://github.com/waijinchai">Visit my GitHub!</a>
                </section>
            </div>
            <div className="socmed">
                <button className="email">  
                    <a><img src={email} />Email</a>
                </button>
                <button className="linkedin">
                    <a href="https://www.linkedin.com/in/waijinchai/"><img src={ linkedin } />LinkedIn</a>
                </button>
            </div>
        </div>
    )
}

export default Info