//A Reusable componet - written once and used many times with different data

import { Badge } from "./ui"

//({title, level, ....}) are "props" - a preview here.
function CourseCard({title, level, duration,  price, isNew}){
    //Conditional rendering 1: early return 
    if(!title){
        return null
    }
    return(
        //Template literal in className- card + level name in lowecase
        <article className={`card ${level.toLowerCase()}`}>
            {/*conditional rendering && shows the badge only when isNew is true */}
            {isNew && <Badge text="New"/>}
            <h3>{title}</h3>
            <p className="meta">
                {level} &middot; {duration}
            </p>
            {/*conditional rendering- ternary decides the price text */}
            <p className="price">
                {price === 0 ? 'Free' : `\u20B9${price}`}
            </p>
        </article>
    )
}
export default CourseCard