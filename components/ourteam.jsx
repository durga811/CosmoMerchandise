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
    document.body.style.backgroundColor = "black";
  }
  return (
    <Fragment className="bg-black w-[100%]">
      <div className="container w-[100%] bg-black overflow-x-hidden" id='scroll-ourteam'>
        <div className='relative w-[100%] py-[5vw] flex justify-center items-center'>
          <h1 className='text-black text-2xl font-bold bg-white h-fit w-fit px-[2vw] py-[1vw] rounded-lg'>OUR TEAM</h1>
        </div>

        <div className="container w-[100%] flex flex-wrap justify-center items-center gap-y-7 gap-x-10" id='ourteam-body'>
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