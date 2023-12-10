import React from 'react';

const openWhatsApp = () => {
    const phoneNumber = '923324713797'; // Replace with your phone number

    // Open WhatsApp link in a new window
    const whatsappWindow = window.open(`https://wa.me/${phoneNumber}`, '_blank');

    // Check if the window was opened successfully
    if (whatsappWindow) {
        // Display a dialogue box
        const confirmation = window.confirm('Do you want to open WhatsApp?');

        // Close the window if the user cancels
        if (!confirmation) {
            whatsappWindow.close();
        }
    } else {
        // Handle if the window failed to open
        alert('Failed to open WhatsApp. Please make sure pop-ups are allowed for this site.');
    }
};
export default openWhatsApp