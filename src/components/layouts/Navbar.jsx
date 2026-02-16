import { IoMdHome, IoMdTrophy } from "react-icons/io";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { FaChartBar, FaCubes } from "react-icons/fa";

function Navbar() {
    const dock = [
        { id: "home", route: "/home", icon: IoMdHome },
        { id: "pros", route: "/projects", icon: FaCubes },
        { id: "exp", route: "/experiences", icon: FaChartBar },
        { id: "achi", route: "/achievements", icon: IoMdTrophy },
        { id: "contact", route: "/contact", icon: BsFillInfoSquareFill },
    ];

    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md shadow-2xl rounded-xl z-20">
            <ul className="flex gap-7 px-3 py-1 justify-center">
                {dock.map((item) => {
                const Icon = item.icon; 
                return (
                <li
                    key={item.id}
                    className="p-2 rounded-xl hover:scale-110 hover:bg-black/10 transition">
                    <a href={item.route}>
                        <Icon className="size-7 text-black/80" />
                    </a>
                </li>
                );
                })}
            </ul>
        </nav>
    );
}

export default Navbar;
