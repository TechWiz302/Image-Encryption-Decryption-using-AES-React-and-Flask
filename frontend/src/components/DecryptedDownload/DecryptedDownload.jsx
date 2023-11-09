import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import download from "../../assets/images/download-img.png"
import DownloadIcon from '@mui/icons-material/Download';

function DecryptedDownload() {

    const handleDownload = async () => {
        try {
            const response = await fetch("https://api-aes.onrender.com/decImage", {
                method: 'GET',
                mode: 'cors',
            });
            const blob = await response.blob();
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'decrypted.png');
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        } catch (error) {
            console.error('Error occurred during download:', error);
        }
    };


    return (
        <>
            <div className="heroSection">
                <Navbar />
                <div className="heroSection-area section_padding">
                    <div className="heroSection_content w-50">
                        <div className="title">
                            <h1>Download Your Decrypted Image</h1>
                        </div>

                        <div className="download-btn">
                            
                            <button type="button" onClick={handleDownload}><DownloadIcon sx={{ fontSize: 35 }} />Download Your Image</button>
                        </div>

                        <div className="decryption-btn">
                            <a href="/encryption">Encryption</a>
                        </div>

                    </div>
                    <div className="heroSection_image w-50">
                        <img src={download} alt="heroSectionImage" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DecryptedDownload