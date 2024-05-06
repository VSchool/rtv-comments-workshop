import { useState } from 'react';


function CommentForm() {

    const [formData, setFormData] = useState({
        commentText: ''
    })

    function handleChange(e){
        const {name, value} = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
        setFormData({commentText: ''})
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input 
            placeholder='Comment'
            name='commentText'
            value={formData.commentText}
            onChange={handleChange}
            />
            <button>Leave Comment</button>
        </form>
     );
}

export default CommentForm;