//welcome shows- JS expressions, attributes, className, style and conditions.
import { Button } from "./ui"
function Welcome(){
    //Plain javascript values we will use inside jsx
    const academy = 'Opportunities Software'
    const studentName = 'Seema'
    const isLoggedIn = true 
    const enrolledCouses = 3
    const accentStyle = {color: '#2d5ae2', fontWeight:700} //style takes an OBJECT
    
    return(
        <section className="hero">
            {/* 1. Expression in text */}
            <h1>Welcome to {academy}</h1>

            {/* 2. Conditional rendering with a ternary if/else */}
            {isLoggedIn ?(
                <p>
                    Welcome back, <span style={accentStyle}>{studentName}</span>
                    You are enrolled in {enrolledCouses} courses.
                </p>
            ):(
                <p>Please log in to see your courses.</p>
            )}

            {/* 3. Any express works- maths, method calls, ternaries*/}
            <p>
                Next batch starts in {10+5} days. Your name has{' '}
                {studentName.length} letters({studentName.toUpperCase()}).
            </p>

            {/* attributes- htmlFor (not for), self -closing input */}
            <div className="search">
                <label htmlFor="course-search">Search Courses</label>
                <input id="course-search" type="text" placeholder="type a course name"/>

                <Button label="Browse Courses"></Button>
            </div>
        </section>
    )
}
export default Welcome