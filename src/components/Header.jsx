export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
                <div className="container">
                    <a href="index.html" className="navbar-brand">
                        <span className="text-warning">PARROT</span> BOOKS
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navmenu"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navmenu">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Books
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Blog
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <a href="#">
                            <i className="bi bi-basket-fill ps-3"></i>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}
