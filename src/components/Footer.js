import {NavLink, Link} from "react-router-dom"
export const Footer = () => {
  return (
      <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to="/" className="hover:underline">Cinemate</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <NavLink to="/" className="hover:underline me-4 md:me-6">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies/popular" className="hover:underline me-4 md:me-6">Popular</NavLink>
          </li>
          <li>
            <NavLink to="/movies/top" className="hover:underline me-4 md:me-6">Top</NavLink>
          </li>
          <li>
            <NavLink to="/movies/upcoming" className="hover:underline">Upcoming</NavLink>
          </li>
        </ul>
      </footer>
  )
}
