import { ReactNode } from 'react'
import { navListHeader, NavListHeaderType } from './NavList.static'
import { Link } from 'react-router-dom'

const NavList = () => {
    return (
        <div className="flex items-center gap-1">
            {navListHeader.map((item: NavListHeaderType, _): ReactNode => {
                return (
                    <Link
                        to={`/${item.path}`}
                        key={item.key}
                        className="flex flex-col items-center justify-center basis-0 min-w-24 cursor-pointer hover:bg-slate-800 rounded-md py-2 px-1 font-semibold text-gray-600"
                    >
                        {item.icon}
                        <p className="leading-3 mt-1">{item.label}</p>
                    </Link>
                )
            })}
        </div>
    )
}

export default NavList
