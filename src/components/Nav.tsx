
function NavI() {
    const NavIts = ["About", "Articles", "Sign Up"]
    return (
        <>
        <ul>
            {NavIts.map((NavIt) => <li>{NavIt}</li>)}
        </ul>
        </>
    )
}

export default NavI