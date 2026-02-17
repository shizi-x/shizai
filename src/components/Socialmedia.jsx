import { FaGithub, FaYoutube, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Socialmedia() {
    return (
        <>
            <div className="flex items-center gap-4 pt-4">
                <a href="https://github.com/shizi-x"><FaGithub className="size-6 text-black/70 hover:text-black/80 hover:scale-110" /></a>
                <a href="https://youtube.com"><FaYoutube className="size-7 text-black/70 hover:text-black/80 hover:scale-110" /></a>
                <a href="https://linkedin.com/in/fitiazahana"><FaLinkedin className="size-6 text-black/70 hover:text-black/80 hover:scale-110" /></a>
                <a href="mailto:fitiazahana@yahoo.com"><IoIosMail className="size-7 text-black/70 hover:text-black/80 hover:scale-110" /></a>
                <a href="tel:+261342578855"><FaPhoneAlt className="size-5 text-black/70 hover:text-black/80 hover:scale-110" /></a>
            </div>
        </>
    )
}

export default Socialmedia;