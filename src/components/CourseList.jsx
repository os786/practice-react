//Fragment- <>....</> lets us return cards wihout an extra wrapper <div>, so the cards stay direct children of Section's grid.
import CourseCard from "./CourseCard";
function CourseList(){
    return(
        <>
            <CourseCard
                title="React JS for Beginners"
                level="Beginner"
                duration="6 Weeks"
                price={0}
                isNew
            />

            <CourseCard
                title="JavaScript"
                level="Beginner"
                duration="4 Weeks"
                price={5000}
            />

            <CourseCard
                title="Data Base"
                level="Intermediate"
                duration="8 Weeks"
                price={6000}
                isNew
            />
        </>
    )
}
export default CourseList