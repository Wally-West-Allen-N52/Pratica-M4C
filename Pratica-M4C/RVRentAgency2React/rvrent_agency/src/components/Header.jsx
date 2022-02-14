import '../css/style.css';
import '../css/swiper-bundle.min.css'

export default function Header() {
    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="../view/Home.jsx" className="nav__logo">Home</a>
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">Destination</a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">Promotion</a>
                        </li>
                        <li className="nav__item">
                            <a href="#discover" className="nav__link">Contact us</a>
                        </li>
                    </ul>
                    <i className="ri-close-line nav__close" id="nav-close"></i>
                </div>

                <div className="nav__toggle" id="nav-toggle">
                    <i className="ri-function-line"></i>
                </div>
            </nav>
        </header>
    );
}