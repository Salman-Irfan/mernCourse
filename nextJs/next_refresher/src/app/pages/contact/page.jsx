"use client"
import React, { useState } from 'react';

const Page = () => {
    const [showModal, setShowModal] = useState(false);

    const handleWhatsAppClick = () => {
        // Show your custom dialogue box or modal
        setShowModal(true);
    };

    const closeModal = () => {
        // Close the dialogue box or modal
        setShowModal(false);
    };

    return (
        <>
            <div>this is contact page</div>
            <div>
                <a href="https://wa.me/923324713797" onClick={handleWhatsAppClick} target='_blank' >
                    WhatsApp
                </a>
            </div>
            <iframe src="https://www.wikipedia.org/" frameborder="0"></iframe>
            <iframe src="https://api.whatsapp.com/send/?phone=923324713797&text&type=phone_number&app_absent=0"  frameborder="0"></iframe>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>
                            &times;
                        </span>
                        {/* Add your content for the dialogue box here */}
                        <p>This is the WhatsApp dialogue box content.</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Page;
