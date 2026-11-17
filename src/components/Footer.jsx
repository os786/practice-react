//The simplest functional component- a function that returns JSX
//The year is calculated once, outside the component  (keeps the render)
const year = new Date().getFullYear();
function Footer(){
    return(
        <footer className="footer">
            <p>&copy; {year} Opportunities Software</p>
        </footer>
    )
}
export default Footer;