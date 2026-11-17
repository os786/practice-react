//child component of header
function Logo(){
    const academy = 'Opportunities Software'
    return(
        <a className="logo" href="/">
            {/*Expression inside an attribute src and alt are dynamic*/}
            <img src="/favicon.svg" alt={`${academy} logo`} width="32" height="32" />
            <span>{academy}</span>
        </a>
    )
}
export default Logo