import { MdDownload } from "react-icons/md";
import CircularText from "../components/CircularText";
import Socialmedia from "../components/Socialmedia";
import Typewrite from "../components/Typewrite";
import useSmallScreen from "../hooks/useSmallScreens";

function About() {
    const isSmall = useSmallScreen();
    return (
        <div className="h-screen">
            <div className="h-1/2 grid grid-cols-2 p-15 xs:p-5 xs:m-0 xs:grid-cols-1">
                <div className="m-10 xs:m-0">
                    <h1 className="text-6xl xs:text-2xl text-white/95 font-bold">Name: 
                    <Typewrite
                        text={[" Zahàna"]}
                        typingSpeed={200}
                        pauseDuration={1000}
                        showCursor
                        cursorCharacter="|"
                        texts={[""]}
                        deletingSpeed={70}
                        variableSpeedEnabled={false}
                        variableSpeedMin={60}
                        variableSpeedMax={120}
                        cursorBlinkDuration={0.5}
                    />
                    </h1>
                    <h3 className="text-2xl xs:text-sm pt-2 text-white/80 font-semibold">LFS operator from Madagascar</h3>
                    <p className="text-xl xs:text-xs pt-2 text-white/50 font-italic">A versatile engineer leveraging innovative technologies while advancing my expertise through a Master in Cybersecurity. </p>
                    <button id="resume" className="text-black/80 xs:text-sm mt-3 bg-blue-300/80 hover:bg-blue-400/70 px-3 py-1.5 rounded-xl flex items-center gap-2"><MdDownload className="size-5" />Resume</button>
                    <Socialmedia />
                </div>
                <div className="xs:mt-15 xs:m-0 m-10">
                    <CircularText
                        text={
                                isSmall
                                ? "Fullstack - Secops - Data - " 
                                : "Fullstack - SecOPS - ML/Data - " 
                            }
                        onHover="speedUp"
                        spinDuration={20}
                        className="custom-class"
                    />
                </div>
            </div>
        </div>
    )
}

export default About;