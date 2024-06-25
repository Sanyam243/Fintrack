import React from 'react'
import {useUser,UserButton} from "@clerk/nextjs"
import Image from 'next/image'
function Hero  ()  {
  const {user,isSignedIn}=useUser;
  return (
    <section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex ">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
       Spend Smarter
        <strong className="font-extrabold text-primary sm:block"> Live Better </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
      Be wise, use Fintrack and make your money rise
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-blue-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary focus:outline-none focus:ring active:bg-primary sm:w-auto"
          href={isSignedIn?'/dashboard':'/sign-in'}
        >
          Get Started
        </a>

        <Image
         src={"/bg.png"}
        width={500}
        height={500}
        />

        

       
      </div>
    </div>
  </div>
</section>



  )
}

export default Hero
