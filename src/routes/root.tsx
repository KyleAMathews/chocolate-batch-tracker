import {
  Outlet,
  useSearchParams,
  useNavigate,
  NavLink,
  Link,
} from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Root() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <nav className="flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 lg:gap-6">
          <Link
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
            to="/"
          >
            <CandyIcon className="w-6 h-6 hidden md:block" />
            <span className="sr-only">ChocoBatch</span>
          </Link>
          <Link to="/" className="font-bold">
            Chocolate
          </Link>
        </nav>
        <div className="flex justify-end items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          put user management here
        </div>
      </header>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <Outlet />
      </main>
    </div>
  )
}

function CandyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z" />
      <path d="M14 6.5v10" />
      <path d="M10 7.5v10" />
      <path d="m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1" />
      <path d="m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1" />
    </svg>
  )
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
