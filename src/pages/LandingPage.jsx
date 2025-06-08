import { AboutMe } from "../components/about/AboutMe"
import { Contact } from "../components/contact/Contact"
import { Study } from "../components/education/Study"
import { Hero } from "../components/hero/Hero"
import { Projects } from "../components/projects/Projects"
import { MySkills } from "../components/skills/MySkills"

export const LandingPage = ()=>{
    return(
        <div className="container mx-auto">
            <Hero />
            <MySkills />
            <Projects />
            <Study />
            <AboutMe />
            <Contact />
        </div>
    )
}