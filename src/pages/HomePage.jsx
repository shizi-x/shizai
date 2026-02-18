import About from '../layouts/About';
import Skills from '../layouts/Skills';
import Projects from '../layouts/Projects';
import Footer from '../layouts/Footer';

function HomePage() {
    return (
        <main className='pt-24 px-4'>
            <About />
            <Skills />
            <Footer />
        </main>
    )
}
export default HomePage;