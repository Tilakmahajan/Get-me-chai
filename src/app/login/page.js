"use client";
import React, { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session) {
            router.push("/dashboard"); // Fixed typo in route name
        }
    }, [session, router]);

    return (
        <div className="py-5 container m-auto">
            <h1 className="text-3xl font-bold text-center pt-5">Login/Sign up</h1>

            <div className="flex flex-col gap-2 min-h-screen items-center p-10">
                <button
                    onClick={() => signIn("google")}
                    className="flex items-center w-64 bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200"
                >
                    <svg className="h-6 w-6 mr-2" viewBox="-0.5 0 48 48" version="1.1">
                        <g fill="none">
                            <g transform="translate(-401.000000, -860.000000)">
                                <g transform="translate(401.000000, 860.000000)">
                                    <path d="..." fill="#FBBC05" />
                                    <path d="..." fill="#EB4335" />
                                    <path d="..." fill="#34A853" />
                                    <path d="..." fill="#4285F4" />
                                </g>
                            </g>
                        </g>
                    </svg>
                    <span>Continue with Google</span>
                </button>

                <button
                    onClick={() => signIn("linkedin")}
                    className="flex items-center w-64 bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200"
                >
                    <span>Continue with LinkedIn</span>
                </button>

                <button
                    onClick={() => signIn("x")}
                    className="flex items-center w-64 bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200"
                >
                    <span>Continue with Twitter</span>
                </button>

                <button
                    onClick={() => signIn("facebook")}
                    className="flex items-center w-64 bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200"
                >
                    <span>Continue with Facebook</span>
                </button>

                <button
                    onClick={() => signIn("github")}
                    className="flex items-center w-64 bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200"
                >
                    <span>Continue with GitHub</span>
                </button>
            </div>
        </div>
    );
};

export default Login;
