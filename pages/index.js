
import Head from 'next/head'
import Image from 'next/image'
import Ourteam from '../components/ourteam'
import Gallery from "../components/gallery/Gallery";
export default function Home() {
  return (
    // <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
    <Ourteam/>
     <Gallery />
  )
}

