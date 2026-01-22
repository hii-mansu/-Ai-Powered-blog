import { EyeClosed, Mail } from "lucide-react";
import { useState } from "react";
import { useSiteContext } from "../../../contexts/SiteContext";
import axios from "axios";

export default function AdminAuth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setToken } = useSiteContext();

  const onSubmit = async(e) => {
    e.preventDefault();
    if(!email || !password){
        return console.log("All feilds are required.");
    }
    try {
        const {data} = await axios.post('/api/admin/auth',{
            email,
            password
        });
        if(data.success){ 
            setToken(data.token);
            localStorage.setItem('token',data.token);
            axios.defaults.headers.common['Authorization'] = `${data.token}`;
            console.log("LoggedIn");
        }
    } catch (error) {
        console.log(error.message)
    }
  };

  return (
    <form className="flex h-screen w-full flex-col items-center mx-auto justify-center max-w-96">
      <h2 className="text-4xl font-medium text-violet-600">Sign in</h2>
      <p className="mt-3 text-sm text-violet-500/90">
        Welcome back! Please sign in to continue
      </p>
      <div className="flex h-12 w-full mt-10 items-center gap-2 overflow-hidden rounded-full border border-violet-300 bg-transparent pl-5 focus-within:border-gray-300">
        <Mail size={15} color="blue" />
        <input
          placeholder="Email id"
          className="h-full w-full bg-transparent text-sm placeholder-gray-400 outline-none"
          required="true"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
      </div>
      <div className="mt-6 flex h-12 w-full items-center gap-2 overflow-hidden rounded-full border border-violet-300 bg-transparent pl-5 focus-within:border-gray-300">
        <EyeClosed size={15} color="blue" />
        <input
          placeholder="Password"
          className="h-full w-full bg-transparent text-sm placeholder-gray-400 outline-none"
          required="true"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </div>
      <button
        type="submit"
        onClick={onSubmit}
        className="mt-8 h-11 w-full cursor-pointer rounded-full bg-linear-to-b from-violet-700 to-gray-400 text-white transition hover:from-gray-400 hover:to-violet-700"
      >
        Login
      </button>
    </form>
  );
}
