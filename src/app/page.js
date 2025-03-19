
import mongoose from "mongoose";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <>
    {console.log(mongoose) }
      <div className="flex justify-center flex-col items-center text-black h-[44vh] md:gap-0 gap-4">
        <div className="font-bold text-5xl flex justify-center items-center text-left">
          One chai please <span><Image src="/Acup.gif" width={80} height={0} alt="chai gif" /></span>
        </div>
        <p className="text-xl">
          Garam hai  Garam hai !!!
        </p>
        <div className="flex mt-4">    
          <Link href="/login">
            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Order Now</button>
            </Link>
          <Link href="/login">
          <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read more</button>
          </Link>
        </div>
      </div>
      <div className="bg-white h-1 opacity-20"> </div>
      <div className="container mx-auto py-10">
        <h2 className="font-bold text-center text-xl my-5">Buy your chai from dolly ki tapri</h2>
        <div className="flex gap-5 justify-around">
          <div className="item  space-y-1">
            <Image className="rounded-full p-2 bg-slate-600" src="/dolly.gif" width={100} height={100} alt="" />
            <p className="font-bold">Fund Yourself</p>
          </div>
          <div className="item space-y-1 ">
            <Image className="rounded-full p-2 bg-slate-600" src="/dolly-dolly-chai.gif" width={100} height={100} alt="" />
            <p className="font-bold">Fund Yourself</p>
          </div>
          <div className="item  space-y-1">
            <Image className="rounded-full p-2 bg-slate-600" src="/chaiwalla.gif" width={100} height={100} alt="" />
            <p className="font-bold">Fund Yourself</p>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-20"> </div>
      <div className="container mx-auto py-10">
        <h2 className="font-bold text-center text-xl my-4">Learn more About us</h2>
        <div className="flex gap-5 justify-around">
          <div className="item  space-y-1">
            <Image className="rounded-full p-2 bg-slate-600" src="/chaiwalla.gif" width={100} height={100} alt="" />
            <p className="font-bold">Fund Yourself</p>
          </div>
          <div className="item space-y-1 ">
            <Image className="rounded-full p-2 bg-slate-600" src="/coin.gif" width={100} height={100} alt="" />
            <p className="font-bold">Fund Yourself</p>
          </div>
          <div className="item  space-y-1">
            <Image className="rounded-full p-2 bg-slate-600" src="/gate.gif" width={100} height={100} alt="" />
            <p className="font-bold">Fund Yourself</p>
          </div>
        </div>
      </div>
    </>
  );
}
