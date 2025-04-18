import React from "react";
import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex w-full h-screen items-center justify-center overflow-hidden">
            {/* right side */}
            <div className="w-1/2 h-full flex items-center justify-center">
                {children}
            </div>

            {/* left side */}
            <div className="hidden md:flex w-1/2 h-full relative">
                <Image
                    src="https://media.istockphoto.com/id/496710286/photo/young-nurse-portrait-in-hospital.jpg?s=2048x2048&w=is&k=20&c=20Acnbr5nFFG6goQO8G9-tVYFMegfpX4m4YdLtmmkt0="
                    alt="Background Image"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute top-0 w-full h-full bg-black/50 z-10 flex flex-col items-center justify-center">
                    <h1 className="text-3xl 2xl:text-5xl font-bold text-white">Health Connect</h1>
                    <p className="text-1xl text-white">Welcome to Health Connect</p>
                </div>
            </div>
        </div>
    );
}

export default AuthLayout;