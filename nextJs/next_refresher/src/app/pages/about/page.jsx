"use client"
import axios from 'axios'
import React, { useState } from 'react'

const page = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    // functions
    // title change
    const handleTitlteChange = (e) => {
        setTitle(e.target.value)
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }
    const handleNoteFormData = async(e) => {
        e.preventDefault()
        const noteFormData = {
            title, 
            description
        }
        console.log(noteFormData)
        try {
            const response = await axios.post("http://localhost:5000/api/v1/notes", noteFormData)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div>thisn is about page</div>

            <form onSubmit={handleNoteFormData} >
                <input 
                    type="text" 
                    name="title" 
                    id="title" 
                    placeholder='title' 
                    onChange={handleTitlteChange}
                    />
                <br />
                <input 
                    type="text" 
                    name="description" 
                    id="description" 
                    placeholder='description' 
                    onChange={handleDescriptionChange}
                    />
                <br />
                <br />
                <button className='' type='submit'>Submit</button>
            </form>
        </>

    )
}

export default page