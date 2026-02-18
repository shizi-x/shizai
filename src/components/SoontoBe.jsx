import { FaRegClock } from "react-icons/fa";

function SoontoBe() {
    return (
        <div className="h-screen">
            <div className="flex flex-col m-10 mt-30 text-center">
                <FaRegClock className="size-20 flex text-white items-center justify-center mx-auto mb-5"/>
                <h1 className="text-6xl text-white font-bold">Coming Soon ...</h1>
                <p className="mt-10 text-white/80">This feature is currently in development and will be available soon. Stay tuned for insightful content!</p>
            </div>
        </div>
    )
}

export default SoontoBe;