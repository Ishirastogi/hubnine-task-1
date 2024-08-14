// src/components/Card.js
import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Card = ({ card }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const truncatedText = card.text.length > 30 ? card.text.substring(0, 30) + '...' : card.text;

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Draggable defaultPosition={{ x: card.x, y: card.y }}>
      <ResizableBox width={200} height={100} minConstraints={[150, 50]} maxConstraints={[400, 300]}>
        <div className="bg-white p-4 shadow-md rounded relative">
          <p>{truncatedText}</p>
          <button
            onClick={openModal}
            className="mt-2 bg-blue-500 text-white px-2 py-1 rounded text-sm"
          >
            Show More
          </button>

          {/* Modal */}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Detailed Text"
            className="bg-white rounded p-6 max-w-md mx-auto mt-20"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <h2 className="text-xl mb-4">Detailed Text</h2>
            <p>{card.text}</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </Modal>
        </div>
      </ResizableBox>
    </Draggable>
  );
};

export default Card;
