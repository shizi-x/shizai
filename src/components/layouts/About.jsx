import { MdDownload } from "react-icons/md";
import CircularText from "../CircularText";
import Socialmedia from "../Socialmedia";


function About() {
    return (
        <div className="h-screen">
            <div className="grid grid-cols-2 p-15">
                <div className="m-10">
                    <h1 className="text-6xl text-white/95 font-bold">The name is Zahàna !</h1>
                    <h3 className="text-2xl pl-4 pt-2 text-white/80 font-semibold">LFS operator from Madagascar</h3>
                    <p className="text-xl pt-2 text-white/50 pl-4 font-italic">A versatile engineer leveraging innovative technologies while advancing my expertise through a Master’s in Cybersecurity. </p>
                    <button id="resume" className="text-black/80 ml-3 mt-3 bg-blue-300/80 hover:bg-blue-400/70 px-3 py-1.5 rounded-xl flex items-center gap-2"><MdDownload className="size-5" />Resume</button>
                    <Socialmedia />
                </div>
                <div className="">
                    <CircularText
                        text="FullStack - DevSecOPS - ML/Data - "
                        onHover="speedUp"
                        spinDuration={40}
                        className="custom-class"
                    />
                </div>
            </div>
        </div>
    )
}

export default About;