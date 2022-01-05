import { createContext,useState,useEffect } from "react";
import {v4 as uuidv4} from 'uuid'
const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{
    const [feedback,setFeedback] = useState([])
    const [loading,setLoading] = useState(true)

    //load data from backend
    useEffect(()=>{
        fetchFeedback()
    },[])

    const fetchFeedback = async () =>{
        const res = await fetch('/feedback?_sort=id&order=desc')
        const data = await res.json()
        setFeedback(data)
        setLoading(false)
    }

    //add
    const addFeedback = async(newfeedback) =>{
        // newfeedback.id = uuidv4()
        const res = await fetch('feedback',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newfeedback)
        })

        const data = await res.json()
        setFeedback([data,...feedback])
        // setFeedback([newfeedback,...feedback])
    }

    //delete
    const deleteFeedback = async(id) =>{
        if(window.confirm('Are you sure ?')){
            await fetch(`feedback/${id}`,{
                method:'delete'
            })
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
    const updateFeedback = async(id,item) =>{

        const res = await fetch(`feedback/${id}`,{
            method:'put',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(item)
        })

        const data = await res.json()
        setFeedback(
            feedback.map(itm=>itm.id === id ? {...itm,...data} : itm)
            // feedback.map(itm=>itm.id === id ? {...itm,...item} : itm)
            
            )
    }


    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
        loading,

    }}>
        {children}

    </FeedbackContext.Provider>
}

export default FeedbackContext