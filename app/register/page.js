import RegistrationForm from "@/components/RegistrationForm"


export default function Register() {
    return (
        <main className="flex h-screen">
            <div className="w-1/3 flex justify-center items-center">
                <RegistrationForm />
            </div>
            <div className="w-2/3 bg-[#0f0f16] flex items-cetner justify-center">
                {/*Should use next image instead for lazy loading and stuff*/}
                <img
                    className="w-1/4 object-contain"
                    src="/login.png"
                    alt=""
                />
            </div>
        </main>
    )
}