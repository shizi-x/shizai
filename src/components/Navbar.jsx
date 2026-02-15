import { IoMdHome, IoMdTrophy } from "react-icons/io";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { FaChartBar, FaCubes } from "react-icons/fa";

function Navbar(props) {
    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-md shadow-2xl rounded-xl z-20 px-3 py-0.7">
            <ul className="flex gap-7 p-4 justify-center">
                <li><a href={props.home}><IoMdHome size={38} /></a></li>
                <li><a href={props.pros}><FaCubes size={38} /></a></li>
                <li><a href={props.exp}><FaChartBar size={38} /></a></li>
                <li><a href={props.achievements}><IoMdTrophy size={38} /></a></li>
                <li><a href={props.info}><BsFillInfoSquareFill size={38} /></a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
