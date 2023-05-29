import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage: "url(/img/footer.png)" }}>
        <div className="redes">
            <a href="https://github.com/emmanuel-vandyk">
                <img src="/img/github-footer.svg" alt="Logo Github" />
            </a>
            <a href="https://twitter.com/EmmaVanDick">
                <img src="/img/twitter-footer.svg" alt="Logo Twitter" />
            </a>
            <a href="https://www.linkedin.com/in/emmanuel-vandyk">
                <img src="/img/linkedin-footer.svg" alt="Logo Linkedin" />
            </a>
        </div>
        <img src="/img/Logo.png" alt="org" />
        <strong>Desarrollado por Emmanuel van Dyk</strong>
    </footer>
}

export default Footer;