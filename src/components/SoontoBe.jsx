import { FaRegClock } from "react-icons/fa";

function SoontoBe() {
    return (
        <div className="h-screen">
            <div className="flex flex-col m-10 mt-30 text-center">
                <FaRegClock className="md:size-20 xs:size-15 flex text-white items-center justify-center mx-auto mb-5"/>
                <h1 className="xs:text-2xl md:text-4xl lg:text-6xl text-white font-bold">Coming Soon ...</h1>
                <p className="md:mt-10 xs:mt-5 xs:text-sm md:text-lg text-white/80">This feature is currently in development and will be available soon. Stay tuned for insightful content!</p>
            </div>
        </div>
    )
}

export default SoontoBe;