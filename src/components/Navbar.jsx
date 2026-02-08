import homeIcon from "../assets/home.svg";
import skillsIcon from "../assets/trophy.svg";
import prosIcon from "../assets/cube.svg";
import expIcon from "../assets/exp.svg";
import infoIcon from "../assets/sms.svg";

function Navbar(props) {
    return (
        <nav>
            <ul>
                <li>
                    <a href={props.home}>
                        <img src={homeIcon} alt="Home" />
                    </a>
                </li>

                <li>
                    <a href={props.skills}>
                        <img src={skillsIcon} alt="Skills" />
                    </a>
                </li>

                <li>
                    <a href={props.pros}>
                        <img src={prosIcon} alt="Projects" />
                    </a>
                </li>

                <li>
                    <a href={props.exp}>
                        <img src={expIcon} alt="Experiences" />
                    </a>
                </li>

                <li>
                    <a href={props.info}>
                        <img src={infoIcon} alt="Contact" />
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;