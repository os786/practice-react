//child component of Header
function NavMenu(){
    return(
        <nav aria-label="Main menu">
            <ul className="nav">
                <li><a href="#courses">Courses</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
    )
}
export default NavMenu