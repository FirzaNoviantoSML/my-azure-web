import Link from "next/link";

export default function Home() {

  console.log("App is starting...");
  return (
    <div>
     Hellowwww worrrrlllllddd!!!
     <Link href="/hello">
     <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-950 transition">
      Hallo
     </button>
     </Link>

    </div>
  );
}
