import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

const merch = () => {
    return (


        <section>
            <div class="bg-[#670f2f] ">
                <div class="relative max-w-screen-xl px-4 py-20 mx-auto">
                    <div class="grid items-start grid-cols-1 gap-8 md:grid-cols-2">

                        <div class="grid grid-start-1 col-end-2 ">
                            <div className='image mx-auto '  >
                                <img src="https://i.ibb.co/TkpX3Gg/hoodie-6014291-4980179-1.png" alt='picture'
                                    className="object-cover w-full aspect-square rounded-xl"
                                />
                            </div>
                        </div>


                        <div class="sticky top-0">
                            <div class="flex justify-between mt-8">
                                <div class="max-w-[35ch]">
                                    <h1 class="text-4xl">
                                        <p class="text-white">COSMOPOLITIAN BONUS HOODIE</p>
                                    </h1>
                                </div>
                            </div>


                            <div class="pt-6 pb-4 prose max-w-none">
                                <p class="text-white">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                                    nam sapiente nobis ea veritatis error consequatur nisi
                                    exercitationem iure laudantium culpa, animi temporibus non! Maxime
                                    et quisquam amet. A, deserunt!
                                </p>
                            </div>


                            <form class="mt-4">
                                <fieldset class="mt-2">

                                    <div class="flow-root">
                                        <div class="-m-0.5 flex flex-wrap">
                                            <label for="size_xs" class="cursor-pointer p-0.5">
                                                <input
                                                    type="radio"
                                                    name="size"
                                                    id="size_xs"
                                                    class="sr-only peer"
                                                />

                                                <span
                                                    class="inline-flex items-center justify-center w-20 h-12 text-S font-bold border rounded group bg-[#d9d9d9] hover:bg-[#f993b8]"
                                                >
                                                    S
                                                </span>
                                            </label>

                                            <label for="size_s" class="cursor-pointer p-0.5">
                                                <input
                                                    type="radio"
                                                    name="size"
                                                    id="size_s"
                                                    class="sr-only peer"
                                                />

                                                <span
                                                    class="inline-flex items-center justify-center w-20 h-12 text-S font-bold border rounded group bg-[#d9d9d9] hover:bg-[#f993b8]"
                                                >
                                                    M
                                                </span>
                                            </label>

                                            <label for="size_m" class="cursor-pointer p-0.5">
                                                <input
                                                    type="radio"
                                                    name="size"
                                                    id="size_m"
                                                    class="sr-only peer"
                                                />

                                                <span
                                                    class="inline-flex items-center justify-center w-20 h-12 text-S font-bold border rounded group bg-[#d9d9d9] hover:bg-[#f993b8]"
                                                >
                                                    L
                                                </span>
                                            </label>

                                            <label for="size_l" class="cursor-pointer p-0.5">
                                                <input
                                                    type="radio"
                                                    name="size"
                                                    id="size_l"
                                                    class="sr-only peer"
                                                />

                                                <span
                                                    class="inline-flex items-center justify-center w-20 h-12 text-S font-bold border rounded group bg-[#d9d9d9] hover:bg-[#f993b8]"
                                                >
                                                    XL
                                                </span>
                                            </label>

                                            <label for="size_xl" class="cursor-pointer p-0.5">
                                                <input
                                                    type="radio"
                                                    name="size"
                                                    id="size_xl"
                                                    class="sr-only peer"
                                                />

                                                <span
                                                    class="inline-flex items-center justify-center w-20 h-12 text-S font-bold border rounded group bg-[#d9d9d9] hover:bg-[#f993b8]"
                                                >
                                                    XXL
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>

                                <div class="pt-10 pb-2 prose max-w-none">
                                    <h1 class="text-4xl font-bold text-white">Rs. 499</h1>
                                </div>



                                <div class="pt-6 pb-4 flex space-x-4 mb-6 text-sm font-medium">
                                    <div class="flex-auto flex space-x-4">
                                        <button class=" h-10 px-12 font-semibold rounded-md bg-[#d9d9d9] text-black" type="submit">
                                            Buy now
                                        </button>

                                    </div>
                                </div>


                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default merch