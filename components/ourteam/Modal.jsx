import React from 'react'
// import altImg from '../../public/altimage.png';
const Modal = ({ onClose, isVisible }) => {
  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === 'ourTeamPopup') onClose();
  }
  let b = "<";
  return (
    <section className="popup fixed z-10 inset-0 bg-black  bg-opacity-25 backdrop-blur-sm flex justify-center h-[100%] items-center"
        id="ourTeamPopup"  onClick={handleClose} onTouchEnd={handleClose}>
        <div className=' flex items-center bg-transparent h-fit'>
            <div className="bg-neutral-800 rounded-xl overflow-hidden container">
                <div className='h-[5vh] w-auto relative rounded-t-xl bg-white align-middle justify-center flex items-center'>
                    <h1 className=' text-center text-black font-bold font-xl bg-transparent min-w-[1]'>Team Name</h1>
                </div>
                <div className='w-[90vw] md:w-[70vw] h-[70vh] bg-neutral-800 text-white flex flex-wrap relative rounded-b-xl py-[2.5vw] overflow-y-scroll'>
                    <div className='w-[100%] bg-neutral-800 flex flex-col items-center h-fit relative rounded-l-xl'>
                            <img className="image-container h-[20vw] w-[20vw] bg-black rounded-full" src="" alt="Put your Image is here" />
                            <br/>
                        <p className="h-fit bg-neutral-800"> Team name </p>
                    </div>
                    <div className=' w-min-[50%] relative text-neutral-400 bg-neutral-800 pt-[1vw]'>
                        <div className='flex flex-wrap gap-10 bg-neutral-800'>
                            <div
                                className='bg-neutral-800 text-xs text-justify w-[100%] px-[7%] overflow-y-auto ourteam-modal-description'>
                                DESCRIPTION Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo itaque
                                provident,
                                accusamus earum est exercitationem aliquid explicabo, enim, qui quos sequi corporis quia
                                deserunt ex tempore aut non unde autem! Lorem ipsum dolor, sit amet consectetur
                                adipisicing
                                elit. Necessitatibus qui fuga ducimus blanditiis illo? Lorem ipsum dolor sit amet
                                consectetur adipisicing elit.
                            </div>
                            <div
                                className='bg-neutral-800 text-xs text-justify w-[100%] px-[7%] max-h-full overflow-y-auto ourteam-modal-description'>
                                <p className='bg-neutral-800 text-white text-base'>List of Members</p><br />
                                DESCRIPTION Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quidem, quod
                                inventore necessitatibus nemo quia. Nihil voluptate consectetur similique magnam eos,
                                dolor
                                minus exercitationem doloremque illo velit fugiat ipsa placeat! Lorem ipsum dolor, sit
                                amet
                                consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Voluptate sit inventore corrupti, aliquam labore quasi impedit ipsum eveniet sequi!
                                Laudantium soluta blanditiis deserunt?
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Modal