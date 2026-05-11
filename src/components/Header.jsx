import { NavLink } from "react-router-dom"




export default function Header() {


    const links = [
        { name: "HOME", path: "/" },
        { name: "SNACK 1", path: "/snack1" },
        { name: "SNACK 2", path: "/snack2" },
        { name: "SNACK 3", path: "/snack3" },
    ]



    return (
        <header>
            <div className="div-link">
                {links.map((l) => (
                    <NavLink to={l.path}>{l.name}</NavLink>
                ))}
            </div>
        </header>
    )
}