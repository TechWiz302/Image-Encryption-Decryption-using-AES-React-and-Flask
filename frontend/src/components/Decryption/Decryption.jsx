import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import upload2 from "../../assets/images/upload-pana.png";
import UploadIcon from '@mui/icons-material/Upload';

function Decryption() {
    const [fileName, setFileName] = useState(null);
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setFileName(e.target.files[0]);
        } else {
            setFileName(null);
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', fileName);
        formData.append('key', password);

        try {
            const response = await fetch("http://127.0.0.1:5000/decrypted_download", {
                method: 'POST',
                body: formData,
                mode: 'cors',
            });
            const data = await response.json();
            console.log(data);

            navigate('/decrypted_download')

        } catch (error) {
            console.error('Error occurred during encryption:', error);
        }
    };

    return (
        <>
            <div className="heroSection">
                <Navbar />
                <div className="heroSection-area section_padding">
                    <div className="heroSection_content w-50">
                        <form onSubmit={handleFormSubmit}>
                            <div className="title">
                                <h1>Upload Your Image Here <span>For Decryption</span></h1>
                            </div>
                            <div className="upload-button">
                                <label htmlFor="inputImg" className="input-img">
                                    <UploadIcon sx={{ fontSize: 35 }} />
                                    <span className='p-3'>{fileName ? fileName.name : 'No file chosen'}</span>
                                    <input
                                        type="file"
                                        name="inputImg"
                                        id="inputImg"
                                        onChange={handleFileChange}
                                    />
                                </label>
                            </div>

                            <div className="pass">
                                <input
                                    type="password"
                                    name="inputPass"
                                    id=""
                                    placeholder='Enter your password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="submit-btn">
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="heroSection_image w-50">
                        <img src={upload2} alt="heroSectionImage" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Decryption;
