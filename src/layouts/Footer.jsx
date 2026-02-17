import Logo from '../assets/Z-blue.svg';

function Footer() {
    return (
        <footer className="absolute left-0 w-full xs:text-[10px] lg:text-xs items-center justify-center pt-0 px-5 py-3 flex bg-gray-800 text-white">
            <img
                src={Logo}
                alt="Logo Z"
                className="size-6 xs:size-4"  
            />
            © {new Date().getFullYear()} Zahàna. All rights reserved.
        </footer>
    )
}
export default Footer;