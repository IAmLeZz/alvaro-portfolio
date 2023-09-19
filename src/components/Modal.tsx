import Image from 'next/image';
import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './Modal.css'

export const Modal = ({ imageUrl, onClose }: { imageUrl: string, onClose: () => void }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <Image src={imageUrl} alt="Selected Image" width={1920} height={1080} />
                <button onClick={onClose} className='text-gray-200 bg-gray-700 flex items-center justify-center m-auto w-fit font-semibold border-2 rounded-md border-gray-500 p-2 my-5 hover:bg-gray-800 transition-all'>
                    Cerrar<AiOutlineCloseCircle style={{ marginLeft: '2px' }} />
                </button>
            </div>
            <div className="modal-overlay" onClick={onClose}></div>
        </div>
    );
};

