import { useState } from "react"
import LoginForm from "../Login/LoginForm"
import Link from "next/link"
import DarkModeButton from "./DarkModeButton"

function Navbar() {
  const [showLoginForm, setShowLoginForm] = useState(false)
  return (
    <>
      <div className="bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center gap-4 p-[12px]">
          <Link href="/">
            <img className="max-h-[40px] w-auto" src="assets/logo.svg" alt="coursebee logo" />
          </Link>
          <div className="flex gap-6 items-center justify-between">
            <DarkModeButton/>
            <button className="font-inter font-bold" onClick={() => setShowLoginForm(true)}> Log In </button>
            <button className="font-inter py-2 px-4 bg-secondary-700 rounded-lg"> Register </button>
          </div>
        </div>
      </div>
      <LoginForm open={showLoginForm} setOpen={setShowLoginForm} />
    </>
  )
}

export default Navbar