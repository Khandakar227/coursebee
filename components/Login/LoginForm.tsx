import Image from "next/image";
import { Dispatch, MouseEvent, SetStateAction } from "react";

export default function LoginForm({ open, setOpen }: {
    open: boolean, setOpen: Dispatch<SetStateAction<boolean>>
}) {

    const close = (e: MouseEvent<HTMLElement>) => {
        const name = (e.target as HTMLElement).dataset?.name
        if (name == 'login-container') setOpen(false)
    }
    return (
        <section
            data-name="login-container"
            className={`w-screen h-screen grid place-items-center fixed top-0 left-0 bg-neutral-900 bg-opacity-40 transition-all ${open ? "z-10" : "-z-10"}`}
            onClick={close}>
            <div className="max-w-md bg-white rounded-xl p-10">
                <div className="w-full pb-10"><Image className="mx-auto" src="/assets/favicon.png" alt="Coursebee" width={144} height={48} /></div>
                <form>
                    <label className="w-full p-1 font-inter text-sm font-medium"> Email </label>
                    <input placeholder="Enter your email" className="p-3 rounded-lg w-full border border-neutral-300 mb-4 font-inter" name="email" type="email" required />
                    <label className="w-full p-1 font-inter text-sm font-medium"> Password </label>
                    <input placeholder="Enter your email" className="p-3 rounded-lg w-full border border-neutral-300 mb-6 font-inter" name="password" type="password" required />
                    <button className="w-full py-2 text-center rounded-lg font-inter bg-secondary-700 text-white"> Login </button>
                </form>
                <p className="text-center font-inter text-sm pt-10 pb-4 text-neutral-700">or</p>

                <button className="w-full flex items-center gap-4 px-4 py-3 rounded-lg bg-secondary-500 text-white my-4">
                    <Image src="/assets/login/facebook_logo.png" alt="Facebook logo" width={24} height={24} />
                    <span className="font-inter leading-6"> Continue with facebook </span>
                </button>

                <button className="w-full flex items-center gap-4 px-4 py-3 border rounded-lg border-neutral-500">
                    <Image src="/assets/login/google_logo.png" alt="Google logo" width={24} height={24} />
                    <span className="font-inter leading-6"> Continue with google </span>
                </button>
                <p className="font-inter pt-10"> New to Coursebee? <button className="text-secondary-500 font-bold"> Create Account </button> </p>
            </div>
        </section>
    )
}
