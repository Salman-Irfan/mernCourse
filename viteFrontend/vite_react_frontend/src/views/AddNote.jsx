import axios from 'axios';
import React, { useState } from 'react'
import BASE_URL from '../constants/secretes/baseUrl';

const AddNote = () => {
    // title state
    // const [title, setTitle ] = useState("")
    // description state
    // const [description, setDescription ] = useState("")
    // making the object of form data
    const [note, setNote] = useState({
        title: "",
        description: "",
        tags: [],
        newTag: ""
    });
    // handle title change
    const handleTitleChange = (e) => {
        setNote({ ...note, title: e.target.value })
    }
    // handle description change
    const handleDescriptionChange = (e) => {
        setNote({ ...note, description: e.target.value })
    }
    // handleAddTagsChange
    const handleAddTagsChange = (e) => {
        setNote({ ...note, newTag: e.target.value });
    }
    // tags array 
    const handleAddTag = () => {
        if (note.newTag) {
            setNote({
                ...note,
                tags: [...note.tags, note.newTag],
                newTag: ""
            });
        }
    };  
    // handleSubmit
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        const addNoteFormData = {
            title: note.title,
            description: note.description,
            tags: note.tags,
        }
        // remeber, when working with api, use async await
        try {
            const response = await axios.post(`${BASE_URL}/notes`, addNoteFormData );
            // Handle the response here (e.g., display a success message)
            console.log("Note added successfully!");
            console.log("Server response:", response.data);
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <>
            <div className='container bg-dark text-white mt-4 pt-4 px-4 py-4'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        {/* title */}
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            placeholder="Title"
                            required
                            onChange={handleTitleChange}
                            value={note.title}
                        />
                    </div>
                    <div className="mb-3 input-group">
                        {/* description */}
                        <textarea
                            className="form-control "
                            id="description"
                            rows={3}
                            placeholder='Description'
                            required
                            onChange={handleDescriptionChange}
                            value={note.description}
                        />
                    </div>
                    {/* tags */}
                    <div className="mb-3">
                        {/* description */}
                        <input
                            type='text'
                            className="form-control"
                            id="tags" rows={3}
                            placeholder='Add Tags'
                            onChange={handleAddTagsChange}
                        />
                        <button className="btn btn-outline-primary" type="button" onClick={handleAddTag} >
                            Add Tag
                        </button>
                        {/* Display added tags */}
                        <div>
                            Tags:
                            <ul>
                                {note.tags.map((tag, index) => (
                                    <li key={index}>{tag}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* button */}
                    <button className='btn btn-primary form-control' type="submit">Submit</button>
                </form>
            </div>
        </>

    )
}

export default AddNote