function Navbar() {
  return (
    <div className="bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center gap-4 p-[12px]">
            <img className="max-h-[40px] w-auto" src="assets/logo.svg" alt="coursebee logo" />
            <div className="flex gap-6 items-center justify-between">
                <button className="font-inter font-bold"> Log In </button>
                <button className="font-inter py-2 px-4 bg-secondary-700 rounded-lg"> Register </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar