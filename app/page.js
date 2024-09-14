import Image from "next/image";
import LogoutButton from "@/components/LogoutButton"
import CreatePostForm from "@/components/CreatePostForm"

export default function Home() {
  return (
    <main
      className="bg-black flex flex-col justify-center items-center space-y-8 h-screen"
    >
      <h1
        className="text-white text-center text-2xl font-bold uppercase"
      >
        You have logged in!
      </h1>
      <CreatePostForm />
      <img
        src="/treasure.png"
        alt="treasure chest illustration"
        className="w-1/4 object-contain"
      />
      <LogoutButton />
    </main>
  )
}