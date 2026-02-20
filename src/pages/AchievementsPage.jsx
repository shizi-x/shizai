import SoontoBe from "../components/SoontoBe";
import Footer from "../layouts/Footer";
import Backend from "../assets/Certifications/Backend/Meta Back-End.png"
import APIs from "../assets/Certifications/Backend/APIs.png"
import Bcap from "../assets/Certifications/Backend/Back-End Capstone.png"
import Python from "../assets/Certifications/Backend/Programming with Python.png"
import Django from "../assets/Certifications/Backend/Django Web Framework.png"
import Db from "../assets/Certifications/Backend/Introduction to Databases.png"
import Backintro from "../assets/Certifications/Backend/Introduction to Back-End.png"
import Fullstack from "../assets/Certifications/Backend/The Full Stack.png"
import Version from "../assets/Certifications/Backend/Version Control.png"
import Frontend from "../assets/Certifications/Frontend/Meta Front-End.png"
import Fcap from "../assets/Certifications/Frontend/Front-End Capstone.png"
import AdvancedR from "../assets/Certifications/Frontend/Advanced React.png"
import Reactbase from "../assets/Certifications/Frontend/React Basics.png"
import HC from "../assets/Certifications/Frontend/HTML CSS in depth.png"
import Frontintro from "../assets/Certifications/Frontend/Introduction to Front-end.png"
import Uxui from "../assets/Certifications/Frontend/UX-UI Design.png" 
import Codinginterv from "../assets/Certifications/Frontend/Coding Interview Preparation.png"
import Js from "../assets/Certifications/Frontend/Programming with JS.png"

function AchievementsPage() {
    const certif = [
        { id: "meta-back", name: "Meta Back-End", img: Backend },
        { id: "backintro", name: "Introduction to Back-End", img: Backintro },
        { id: "python", name: "Programming with Python", img: Python },
        { id: "version", name: "Version Control", img: Version },
        { id: "databases", name: "Introduction to Databases", img: Db },
        { id: "django", name: "Django Web Framework", img: Django },
        { id: "apis", name: "APIs", img: APIs },
        { id: "fullstack", name: "The Full Stack", img: Fullstack },
        { id: "bcap", name: "Back-End Capstone", img: Bcap },
        { id: "meta-front", name: "Meta Front-End", img: Frontend },
        { id: "frontintro", name: "Introduction to Front-End", img: Frontintro },
        { id:"js", name:"Programming with Javascript", img: Js },
        { id: "hc", name: "HTML and CSS in-depth", img: HC },
        { id: "react", name: "React Basics", img: Reactbase },
        { id: "advanced", name: "Advanced React", img: AdvancedR },
        { id: "uxui", name: "Principles of UX/UI Design", img: Uxui },
        { id: "fcap", name: "Front-End Capstone", img: Fcap },
        { id: "coding", name: "Coding Interview Preparation", img: Codinginterv },        
    ]
return (
    <>
        <div className="min-h-screen pt-24 px-4 m-10">
            <h1 className="text-center text-white/95 text-6xl font-semibold">Achievements</h1>
            <p className="text-white/80 text-center m-7">
                A catalogue of my fulfillments, highlighting commitment and marking my learning achievements.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {certif.map(crt => (
                    <div
                        key={crt.id}
                        className="bg-black/70 rounded-xl p-3 shadow-lg hover:bg-white/10 border border-transparent hover:border-white/10 hover:scale-103 transition-transform"
                    >
                        <p className="text-center text-white/90 mb-2">
                            {crt.name}
                        </p>

                        <img
                            src={crt.img}
                            alt={crt.name}
                            className="w-full h-60 object-cover rounded-xl"
                        />
                    </div>
                ))}
            </div>
        </div>

        <Footer />
    </>
);
}
export default AchievementsPage;