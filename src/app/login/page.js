import Image from "next/image";
import Link from "next/link";
import { FaAccessibleIcon, FaBackward, FaForward } from "react-icons/fa";




export const metadata = {
    title: 'Login | Trek Explore Travel',
    description: 'Log in to access your account on Trek Explore Travel. Enter your credentials to securely sign in and manage your account.',
};

const TrekExploreTravelIcon = () => (
    <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="30" cy="30" r="28" stroke="black" strokeWidth="4" fill="white" />
        <path
            d="M 15 45 L 30 25 L 45 45 Z"
            fill="sky"
        />
        <circle cx="40" cy="20" r="5" stroke="black" strokeWidth="2" fill="white" />
        <path
            d="M 25 40 L 35 30 L 45 40 L 35 35 Z"
            fill="black"
        />
        <line x1="20" y1="50" x2="40" y2="50" stroke="black" strokeWidth="2" />
    </svg>
);





const LogIn = () => {
    return (
        <div className="container mx-auto py-20">

            <div className=" font-semibold flex justify-between items-center p-4">
                <Link href='/' className="flex items-center gap-4" ><FaBackward /> <h3>Back to Home</h3></Link>
                <Link href='/signup' className="flex items-center gap-4"><h3>Create an Account</h3> <FaForward /> </Link>

            </div>
            {/* img optimize */}
            <div className="flex justify-center items-center text-center">
                <div className="mx-auto m-4">
                    <Image
                        src='/images/logo.webp'
                        alt='Odekha Banglar Khoje Logo'
                        placeholder="blur"
                        quality={100}
                        width={200}
                        height={200}
                        blurDataURL="data:image/webp;base64,..." // Replace with actual base64 string
                        className="mb-4 object-cover w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
                    />
                </div>
            </div>
            {/* img optimize */}


            <h2 className="text-xl font-semibold text-center">Log into Trek Explore Travel</h2>


            {/* Log section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-between items-center mx-auto mt-8 p-4 lg:w-3/4">

                <div className="">

                    {/* Email Input */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 mb-2">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="name@example.com"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-gray-500 bg-gray-100"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-600 mb-2 ">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Your Password"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-gray-500 bg-gray-100"
                        />
                    </div>

                    {/* Submit Button */}
                    <p
                        type="submit"
                        className="bg-sky-800 text-center text-white px-4 py-2 rounded hover:bg-sky-900 focus:outline-none focus:shadow-outline-blue"
                    >
                        Log In
                    </p>

                </div>


                {/* Or */}

                <div className="hidden lg:flex items-center justify-center flex-col mx-auto space-y-5">
                    <div className="border-l items-center justify-center border-gray-600 h-10"></div>
                    <div className="text-gray-500">OR</div>
                    <div className="border-l items-center justify-center border-gray-600 h-10"></div>
                </div>



                {/* Social Login Section */}
                <div className="space-y-3">
                    <div className="flex items-center border-gray-700 border rounded-md justify-between px-8 mx-auto md:px-15 lg:px-16 p-2">
                        <Image width={32} height={8} src="https://i.ibb.co/SKdhz0J/image.png" alt="Login Google" />
                        <p className="text-xs font-semibold">Sign In With Google</p>
                    </div>
                    <div className="flex items-center border-gray-700 border rounded-md justify-between px-8 mx-auto md:px-15 lg:px-16 p-2">
                        <Image width={32} height={8} src="https://i.ibb.co/9qXCrfs/image.png" alt="Login Google" />
                        <p className="text-xs font-semibold">Sign In With Facebook</p>
                    </div>
                    <div className="flex items-center border-gray-700 border rounded-md justify-between px-8 mx-auto md:px-15 lg:px-16 p-2">
                        <Image width={32} height={8} src="https://i.ibb.co/JnD2t8y/image.png" alt="Login Google" />
                        <p className="text-xs font-semibold">Sign In With Github</p>
                    </div>
                </div>





            </div>


            {/* Forgotten Password */}
            <Link href='/'> <p className="text-center mt-16  uppercase font-medium">Forgotten password?</p></Link>

            <div className="text-center mt-10 mb-10">
                <p>Secure Login with reCAPTCHA subject to Google</p>
                <Link href='/terms-conditions'>
                    <p>Terms & Privacy</p>
                </Link>
            </div>




        </div>
    );
};

export default LogIn;