const Header = props => (
    <header id="header">


    <div className="logo">
        <a href="/index"><strong>Talk</strong> with Us</a>
    </div>

    <nav id="nav">
        <ul>
            <li className="current"><a href="/index">Home</a></li>

            <li><a href="/watch">Watch Live</a></li>
            <li><a href="/about">About Us</a></li>
            <li>
                <a href="#" className="icon fa-angle-down">Dropdown</a>
                <ul>
                    <li><a href="#">Option One</a></li>
                    <li><a href="#">Option Two</a></li>
                    <li><a href="#">Option Three</a></li>
                </ul>
            </li>
        </ul>
    </nav>

</header>
)

export default Header