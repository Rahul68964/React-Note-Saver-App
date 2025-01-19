import React, { useState } from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import './pastes.css'
import { removeFromPaste } from '../redux/pasteSlice'
import toast from 'react-hot-toast'
import { RWebShare } from "react-web-share";

const Pastes = () => {

    const pastes = useSelector((state) => state.paste.pastes)
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const filterData = pastes.filter(
        (paste) =>
            paste.title.toLowerCase().includes(searchTerm.toLowerCase())

    );

    function handleDelete(pasteId) {
        dispatch(removeFromPaste(pasteId))
    }
    return (
        <div>
            <Navbar />
            <div id='searchbar'>
                <input
                id='searchbar-real'
                    type="Search"
                    placeholder='Search your pastes'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className='cardContainer'>
                {
                    filterData.length > 0 ? filterData.map((paste) => {
                        return (
                            <div className='card' key={paste._id}>
                                <h2 className='font-of-data'>{paste.title}</h2><br />
                                <p className='font-of-data'> {paste.createdAt}</p><br />
                                <div className='button-container'>

                                    <button  className='buttons'>< a className='link-button' Id='edit-button' href={`/?pasteId=${paste._id}`}>  Edit  ✎

                                    </a></button>

                                    <button className='buttons'><a id='view-button' className='link-button' href={`pastes/${paste._id}`}>View  👁

                                    </a></button>

                                    <button className='buttons' onClick={() => handleDelete(paste._id)}>Delete 🗑


                                    </button>

                                    <button className='buttons' onClick={() => {
                                        navigator.clipboard.writeText(paste.content)
                                        toast.success("copied to clipboard")
                                    }}>Copy 🗎

                                    </button>

                                    <RWebShare
                                        data={{
                                            text: "Web Share - GfG",
                                            url: `http://localhost:5173/?pasteId=${paste._id}`,
                                            title: "GfG",
                                        }}
                                    >
                                        <button className='buttons'>Share🔗</button>
                                        
                                    </RWebShare>

                                </div>
                            </div>
                        )
                    }
                    ) : <p>No paste Found</p>
                }
            </div>
        </div>
    )
}

export default Pastes