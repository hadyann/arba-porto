import Link from "next/link"

const NavLink = ({href, title}) => {
    return (
        <Link href={href} className="text-gray-100 hover:text-orange-300">
            {title}
        </Link>
    )
}

export default NavLink