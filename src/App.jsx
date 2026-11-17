//App is the Root component. It is the parent of everything on the screen.

import CourseList from "./components/CourseList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Section from "./components/Section";

//It only composes(arranges) other components it holds every little logic.
function App(){
  return(
  //Fragment- returns many siblings withouy adding an extra div
    <>
      <Header/>
        <main>
          <Welcome/>
          {/* Composition- section wraps whatever we place between its tags */}
          <Section id="courses" title="Popular Courses">
            <CourseList/>
          </Section>

          <Section id="about" title="Why Opportunities Software ?">
            <p>
              Short lessons, Real Projects and mentor session whenever you need.
              You learn by building, not by watching.
            </p>
          </Section>        
        </main>

        <Footer/>
    </>
  )
}
export default App