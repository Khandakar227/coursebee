import Image from "next/image";
import FacebookIcon from "./icons/FacebookIcon";
import InstagramIcon from "./icons/InstagramIcon";
import TwitterIcon from "./icons/TwitterIcon";

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white py-14">
        <div className="max-w-6xl mx-auto grid items-start justify-between gap-4 grid-cols-3">
            
            <div className="font-inter">
                <img className="max-h-[40px] w-auto mb-5" src="assets/logo.svg" alt="coursebee logo" />
                <p className="mb-4 max-w-[280px] text-sm tracking-wide leading-6">Molestie accumsan aenean et feugiat erat quis mollis ut. Laoreet donec tempus enim bibendum fringilla urna integer. Varius nam tinciduconsequat nulla urna, ullamcorper nec.</p>
                <small className="text-xs">Coursebee © 2022</small>
            </div>

            <div className="font-inter">
                <h4 className="font-semibold pb-5">Greentech Apps Foundation</h4>
                <div className="grid grid-cols-2 gap-4 justify-between">
                    <li className="list-none">Home</li>
                    <li className="list-none">Help & Support</li>
                    <li className="list-none">Courses</li>
                    <li className="list-none">Privacy Policy</li>
                    <li className="list-none">Discover</li>
                    <li className="list-none">Team</li>
                    <li className="list-none">Cookie Policy</li>
                    <li className="list-none">Terms & Condition</li>
                </div>
            </div>

            <div className="font-inter">
                <h4 className="font-semibold pb-5 leading-6"> Follow US </h4>
                <div className="flex flex-wrap gap-4">
                    <button> <FacebookIcon/> </button>
                    <button> <InstagramIcon/> </button>
                    <button> <TwitterIcon/> </button>
                </div>
            </div>
        </div>
    </footer>
  )
}
