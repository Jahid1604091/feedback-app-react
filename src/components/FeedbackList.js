import { motion, AnimatePresence } from "framer-motion"
import { useContext } from "react"
import FeedbackContext from "../context/feedback_context"
import Loading from './Loading'

import FeedbackItem from "./FeedbackItem"

function FeedbackList() {

    const {feedback,loading} = useContext(FeedbackContext)

    if (!loading && (!feedback || feedback.length === 0)) {
        return <p>No feedback yet</p>
    }

    return loading ? <Loading/> : 
   
     (
        <div className="feedback-list">
            <AnimatePresence>

                {
                    feedback.map((item) =>
                        <motion.div 
                        key={item.id}
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}
                        >

                            <FeedbackItem key={item.id} item={item}>

                            </FeedbackItem>
                        </motion.div>

                    )
                }
            </AnimatePresence>
        </div>
    )
}

export default FeedbackList
