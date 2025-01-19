import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useSearchParams } from 'react-router';
import './Home.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToPaste, updateToPaste } from '../redux/pasteSlice';
import toast from 'react-hot-toast';

const Home = () => {

    const [title, settitle] = useState('');
    const [value, setvalue] = useState('');
    const [searchParams, setSearchparams] = useSearchParams();
    const pasteId = searchParams.get("pasteId")
    const dispatch = useDispatch();
    const allPastes = useSelector((state)=>state.paste.pastes);

    useEffect(() => {
      if(pasteId){
        const paste = allPastes.find((p)=>p._id===pasteId);
        settitle(paste.title);
        setvalue(paste.content);
      }
    }, [pasteId])
    

    function createPaste(){
        if(title && value){
            const paste = {
                title : title,
                content :value,
                _id : pasteId || Date.now().toString(36),
                createdAt : new Intl.DateTimeFormat('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                }).format(new Date(new Date().toISOString())),
            }

            if(pasteId){
                dispatch(updateToPaste(paste));
                
            }
            else{
                dispatch(addToPaste(paste));    
                toast.success("Paste created successfully!!")
            }

            
            //after creation and updation all inputs should be clear
            settitle('');
            setvalue('');
            setSearchparams({});
        }
        else{
            toast.error("Please fill all the fields!!")
        }
      


    }

  return (
  <>
    <Navbar/>
    <div className="homeEle">
        

        <div className='input-title'>

            <input 
            type="text"
            className='title-input'
            placeholder="Enter Title"
            value={title}
            onChange={(e)=>settitle(e.target.value)}
            />

            <button id='create-update-btn1' onClick={createPaste}> 
                {pasteId ? "Update Paste":"Create Paste"}
            </button>

        </div>

        <div>
            <textarea 
            className='textarea1'
            placeholder='Create your note here'
            value={value}
            onChange={(e)=> setvalue(e.target.value)}
            ></textarea>
        </div>

    </div>
    
  </>
  )
}

export default Home