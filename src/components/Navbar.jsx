function Navbar(props) {
    return (
            <nav>
                <ul>
                    <li><a href={props.home} title="Home">{props.homeIcon}</a></li>
                    <li><a href={props.skills} title="Skills">{props.skillsIcon}</a></li>
                    <li><a href={props.pros} title="Project">{props.prosIcon}</a></li>
                    <li><a href={props.exp} title="Experience">{props.expIcon}</a></li>
                    <li><a href={props.info} title="Contact">{props.infoIcon}</a></li>
                </ul>
            </nav>
    )
}

export default Navbar;