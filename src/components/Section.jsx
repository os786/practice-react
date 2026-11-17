//Composition- section doesnt know what goes inside it.
//Whatever is wrtitten between <Section>......</Section> arrives as children
function Section({id,  title, children}){
    return(
        <section className="section" id={id}>
            <h2>{title}</h2>
            <div className="section-body">{children}</div>
        </section>
    )
}
export default Section