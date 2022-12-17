import React, { Fragment } from 'react'
import Modal from './ourteam/Modal'
import { Card } from './ourteam/Card'
import { useState } from 'react'
const Ourteam = () => {
  let ulStyle = {
    scrollWidth: "none",
    msOverflowStyle: "none",
  }
  const [showModal, setShowModal] = useState(false);
  if (typeof window === 'object') {
    // Check if document is finally loaded
    document.addEventListener("DOMContentLoaded", function () {
      alert('Finished loading')
    });
    if (showModal) {
      document.getElementById('scroll-ourteam').style.position = "fixed";
    }
    else {
      document.getElementById('scroll-ourteam').style.position = "relative";
    }
  }
  return (
    <Fragment className="bg-black">
      <div className="container w-[100%] bg-black overflow-x-hidden" id='scroll-ourteam'>
        <h1 className=' text-white text-2xl font-semibold relative w-[100%] py-[5vw] flex justify-center items-center'>OUR TEAM</h1>

        <div className="container w-[100%] flex flex-wrap justify-center items-center gap-y-4 gap-x-2" id='ourteam-body'>
          {/* <div className=''>
            <div onClick={() => { setShowModal(true) }} className="cursor-pointer h-36 w-60 rounded-t-2xl bg-zinc-800">
              <img src="https://source.unsplash.com/random/240x144/?team,project,office,professional,engineer" className='rounded-t-2xl' alt="No image found" />
            </div>
            <div onClick={() => { setShowModal(true) }} className="h-10 cursor-pointer bg-white mt-auto mb-0 rounded-b-2xl w-full text-center font-bold py-1.5 "> Team Name</div>
          </div> */}
          <Card setShowModal={setShowModal} />
          <Card setShowModal={setShowModal} />
          <Card setShowModal={setShowModal} />
          <Card setShowModal={setShowModal} />
          <Card setShowModal={setShowModal} />
          <Card setShowModal={setShowModal} />
          <Card setShowModal={setShowModal} />
          <Card setShowModal={setShowModal} />
          <Card setShowModal={setShowModal} />
          <Card setShowModal={setShowModal} />
          <Card setShowModal={setShowModal} />
          <Card setShowModal={setShowModal} />
          <Card setShowModal={setShowModal} />
          <Card setShowModal={setShowModal} />
          <Card setShowModal={setShowModal} />
          <Card setShowModal={setShowModal} />
          <Card setShowModal={setShowModal} />
        </div>
      </div>

      <Modal isVisible={showModal} onClose={() => { setShowModal(false) }}></Modal>


    </Fragment>
    // data-bs-toggle="modal" data-bs-target="#exampleModal"
  )
}

export default Ourteam