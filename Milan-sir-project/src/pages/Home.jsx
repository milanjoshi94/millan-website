import VerticalSlider from '../components/VerticalSlider'
import ExpertSection from '../components/ExpertSection'
import ModuleFaq from '../components/ModuleFaq'
import AboutMe from '../components/AboutMe'
import Pricing from '../components/Pricing'
import ProjectSlider from '../components/ProjectSlider'
import Testimonials from '../components/Testimonials'
import BuiltStories from '../components/BuiltStories'
import FAQs from '../components/FAQs'
import Note from '../components/Note'

function Home() {
    return (
        <>
            <section id="home">
                <VerticalSlider />
            </section>
            <ExpertSection />
            <Note />
            <ModuleFaq />
            <section id="about">
                <AboutMe />
            </section>
            <section id="pricing">
                <Pricing />
            </section>
            <section id="projects">
                <ProjectSlider />
            </section>
            <Testimonials />
            <BuiltStories />
            <FAQs />

        </>
    )
}

export default Home
