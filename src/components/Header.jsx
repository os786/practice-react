import Logo from "./Logo";
import NavMenu from "./NavMenu";

function Header(){
    return(
        <header className="header">
            <Logo/>
            <NavMenu/>
        </header>
    )
}
export default Header