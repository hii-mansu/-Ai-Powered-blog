import { EyeClosed, Mail } from "lucide-react";

export default function AdminAuth() {
    return (
        <form className="flex h-screen w-full flex-col items-center mx-auto justify-center max-w-96">
            <h2 className="text-4xl font-medium text-violet-600">Sign in</h2>
            <p className="mt-3 text-sm text-violet-500/90">Welcome back! Please sign in to continue</p>
            <div className="flex h-12 w-full mt-10 items-center gap-2 overflow-hidden rounded-full border border-violet-300 bg-transparent pl-5 focus-within:border-gray-300">
                <Mail size={15} color="blue" />
                <input
                    placeholder="Email id"
                    className="h-full w-full bg-transparent text-sm placeholder-gray-400 outline-none"
                    required=""
                    type="email"
                />
            </div>
            <div className="mt-6 flex h-12 w-full items-center gap-2 overflow-hidden rounded-full border border-violet-300 bg-transparent pl-5 focus-within:border-gray-300">
                <EyeClosed size={15} color="blue" />
                <input
                    placeholder="Password"
                    className="h-full w-full bg-transparent text-sm placeholder-gray-400 outline-none"
                    required=""
                    type="password"
                />
            </div>
            <button type="submit" className="mt-8 h-11 w-full cursor-pointer rounded-full bg-linear-to-b from-violet-700 to-gray-400 text-white transition hover:from-gray-400 hover:to-violet-700" >
                Login
            </button>
        </form>
    );
};