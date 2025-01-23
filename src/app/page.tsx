"use client"

import Link from "next/link";
import {useState } from "react";

export default function Home() {

const [numb,setNumb] = useState(0)

const numbHandler = () => {
  setNumb(numb +1)
}
  console.log("App is starting...");
  return (
    <div>
     Hellowwww worrrrlllllddd!!!
     <Link href="/hello">
     <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-950 transition">
      Hallo
     </button>
     </Link>
     <button onClick={() => numbHandler()} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-950 transition">
      tambah
     </button>
      {numb}
    </div>
  );
}
