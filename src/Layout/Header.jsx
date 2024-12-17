import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header id="masthead" className="site-header">
            <div className="container">
                <div className="site-branding">
                    <Link to="/">
                        <a

                            className="custom-logo-link"
                            rel="home"
                            aria-current="page"
                        >
                            <img
                                width="173"
                                height="38"
                                src="https://www.ewigo.com/wp-content/uploads/2021/08/logo.png"
                                className="custom-logo"
                                alt="EWIGO"
                                decoding="async"
                            />
                        </a>
                    </Link>
                </div>
                <div className="navigation-block">
                    <nav id="site-navigation" className="main-navigation">
                        <ul id="primary-menu" className="menu">
                            <li>
                                <Link to="/Vendre">
                                    Vendre
                                </Link>
                            </li>
                            <li>
                                <Link to="/Acheter" >
                                    <a >Acheter</a>
                                </Link>
                            </li>
                            <li>
                                <Link to="/Services" >
                                    <a >Services</a>
                                </Link>
                            </li>
                            <li>
                                <Link to="/Franchise" >
                                    <a >
                                        Franchise
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link to="/FaQ" >
                                    <a >FaQ</a>
                                </Link>
                            </li>
                            <li>
                                <Link to="/Actualite" >
                                    <a >Actualites</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header