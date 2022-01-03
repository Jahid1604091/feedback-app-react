import { createContext,useState } from "react";
import {v4 as uuidv4} from 'uuid'
const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{
    const [feedback,setFeedback] = useState([
       { id:1,
        rating:5,
        text:'feedback from context'
    }
    ])

    //add
    const addFeedback = (newfeedback) =>{
        newfeedback.id = uuidv4()
        setFeedback([newfeedback,...feedback])
    }

    //delete
    const deleteFeedback = (id) =>{
        if(window.confirm('Are you sure ?')){

            setFeedback(
                feedback.filter(item=>item.id!==id)
            )
        }
    }

    //edit
    const [feedbackEdit,setFeedbackEdit] = useState({
        item:{},
        edit:false
    })

    const editFeedback = (item)=>{
        setFeedbackEdit({
            item,
            edit:true
        })
    }

    //update feedback item
    const updateFeedback = (id,item) =>{
        setFeedback(
            feedback.map(itm=>itm.id === id ? {...itm,...item} : itm)
            
            )
    }


    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback

    }}>
        {children}

    </FeedbackContext.Provider>
}

export default FeedbackContext