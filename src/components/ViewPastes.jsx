import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useParams, useSearchParams } from 'react-router';
import './viewPaste.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToPaste, updateToPaste } from '../redux/pasteSlice';
import toast from 'react-hot-toast';


const ViewPastes = () => {

  const {id} = useParams();
  const allPastes = useSelector((state)=>state.paste.pastes);
  const paste = allPastes.filter((p)=>p._id === id)[0]

  return (
    <>
    <Navbar/>
    <div className="homeEle">
        <div className='input-title'>

            <input
            type="text"
            className='title-input1'
            placeholder="Enter Title"
            value={paste.title}
            disabled
            onChange={(e)=>settitle(e.target.value)}
            />

          

        </div>

        <div>
            <textarea 
            className='textarea'
            placeholder='Enter your paste here'
            value={paste.content}
            disabled
            onChange={(e)=> setvalue(e.target.value)}
            ></textarea>
        </div>

    </div>
    
  </>
  )
}

export default ViewPastes