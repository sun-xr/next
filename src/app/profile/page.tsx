"use client";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Profile() {
  const router = useRouter();
  const [data, setData] = useState<any>("noting");

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("logout success");
      router.push("/login");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };
  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data._id);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Profile</h1>
      <hr />
      <p>profile page123</p>
      <h2 className="padding rounded-md bg-gray-600">
        {data === "noting" ? "noting" : <Link href={`/profile/${data}`}>{data}</Link>}
      </h2>
      <hr />
      <button onClick={logout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        logout
      </button>
      <button
        onClick={getUserDetails}
        className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        getUserDetails
      </button>
    </div>
  );
}
