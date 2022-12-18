import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import picture from '../assets/images/img1.jpeg'

export default function homeSection() {
  return (
    <div className='bg-black w-full min-h-screen'>
    <section  className='page max-w-7xl mx-auto pb-24'>
       
       <div className='mainHead w-2/6 h-20 bg-white mx-auto rounded-none flex mt-0 px-2 items-center justify-between space-x-1'>
       <div className='logobox bg-black w-24 h-5/6 '></div>
       <div className='nameofevent text-black font-bold font-sans text-4xl'> COSMOPOLITIAN</div>
       </div>
        
        <div className='tag bg-black mx-auto w-2/6 h-8 '>
          <div className='text-white font-poppins text-3xl flex items-stretch  justify-center'>THE MULTI ETHNIC FEST</div>
        </div>
        
      <div className='first-section grid grid-cols-1 md:grid-cols-3 pt-20 px-10 items-center '>
        <div className='image  col-span-1'  >
          <Image src={picture} alt='picture' width={400}  height={350} className='rounded-md' />
        </div>
        <div className='data col-span-2 mx-12 ' >
          <div className='px-4 py-2 flex justify-center text-xl text-black rounded-md bg-slate-200 w-36 font-semibold mb-2'>
            A B O U T
          </div>
          <div className='text-white text-justify'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, facilis, aspernatur eos animi reiciendis obcaecati dolores minus corporis quidem ipsum modi! Perspiciatis recusandae vel error sapiente expedita dolor distinctio sint Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cumque exercitationem sunt repellendus minus quasi distinctio temporibus eum nostrum, harum nesciunt reiciendis debitis tempora, laudantium nemo recusandae quos dolorem aliquam Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repellendus iste aspernatur, nulla sit maxime esse est ex recusandae quidem. Maiores veniam atque voluptas itaque fugit quibusdam quis culpa id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, tempora? Consequuntur veniam, ex natus enim nobis pariatur, illo eum obcaecati aspernatur alias inventore quo praesentium velit possimus sequi repellat corporis!</p></div>
          </div>
      </div>

      <div className='second-section grid md:grid-cols-3 py-0 px-10  mt-16'>
      
        <div className='data col-span-2 flex-col mx-12' >
        <div className='px-4 py-2 flex justify-center text-xl text-black rounded-md bg-slate-200 w-36 font-semibold mb-2'>
            A B O U T
          </div>
          <div className='text-white text-justify pt-2 pb-0 mb-0 '><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, facilis, aspernatur eos animi reiciendis obcaecati dolores minus corporis quidem ipsum modi! Perspiciatis recusandae vel error sapiente expedita dolor distinctio sint Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cumque exercitationem sunt repellendus minus quasi distinctio temporibus eum nostrum, harum nesciunt reiciendis debitis tempora, laudantium nemo recusandae quos dolorem aliquam Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia ab magni explicabo, molestiae natus vel delectus perspiciatis! Vero corrupti temporibus ea amet quas explicabo, in sed maxime similique iste dolorem! Lorem ipsum dolor sit amet consectetur, adipisicing elit.lorem istinctio temporibae quos dolorem aliquam Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia ab magni explicabo</p></div>
          <div className='px-4 py-2 flex justify-center text-xl text-black rounded-md bg-slate-200 w-36 font-semibold mb-2 ml-auto'>
            D E T A I L S
          </div>
        </div>
        <div className='image mx-auto '  >
          <Image src={picture} alt='picture' width={400}  height={350} className='rounded-md'  />
        </div>       
      </div>
      
    </section>
    </div>
  )
}

 