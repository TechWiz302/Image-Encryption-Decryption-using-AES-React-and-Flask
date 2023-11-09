import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import upload2 from "../../assets/images/upload-pana.png"
import UploadIcon from '@mui/icons-material/Upload';
// import "./Encryption.css"

function Decryption() {

    const [fileName, setFileName] = useState('No file chosen');

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setFileName(e.target.files[0].name);
        } else {
            setFileName('No file chosen');
        }
    };

    return (
        <>
            <div className="heroSection">
                <Navbar />
                <div className="heroSection-area section_padding">
                    <div className="heroSection_content w-50">
                        <div className="title">
                            <h1>Upload Your Image Here <span>For Decryption</span></h1>
                        </div>
                        <div className="upload-button">
                            <label htmlFor="inputImg" className="input-img">
                                <UploadIcon sx={{ fontSize: 35 }}/>
                                <span className='p-3'>{fileName}</span>
                                <input
                                    type="file"
                                    name="inputImg"
                                    id="inputImg"
                                    onChange={handleFileChange}
                                />
                            </label>
                        </div>

                        <div className="pass">
                            <input type="password" name="inputPass" id="" placeholder='Enter your password' required/>
                        </div>

                        <div className="submit-btn">
                            <button type="submit">Submit</button>
                        </div>

                    </div>
                    <div className="heroSection_image w-50">
                        <img src={upload2} alt="heroSectionImage" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Decryption