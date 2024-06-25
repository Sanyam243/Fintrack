import { SignIn } from "@clerk/nextjs";
import Image from "next/image";


export default function Page() {

    return (
        <section class="bg-white">
        <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section class=" lg:relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              class="absolute inset-0 h-full w-full object-cover opacity-80"
            />
      
            <div class="hidden lg:relative lg:block lg:p-12">
            
              <span className="flex gap-2">
              <h2 class="mt-5 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to Fintrack 
              </h2>
              <Image src={'./logo.svg'}
              className="mt-2"
               width={50}
                height={50}
               />
              </span>
             
      
              <p class="mt-4 leading-relaxed text-white/90">
                Be wise, use Fintrack and make your money rise
              </p>
            </div>
          </section>
      
          <main
            class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
          >
            <div class="max-w-xl lg:max-w-3xl">
              
              <SignIn/>
            </div>
          </main>
        </div>
      </section>);
}