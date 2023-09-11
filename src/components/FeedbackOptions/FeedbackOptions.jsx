import css from "./FeedbackOptions.module.css"
import PropTypes from "prop-types"

const FeedbackOptions = ({options,onLeaveFeedback}) => {
   return (
    <div >
        {options.map(option => (
     <button 
      onClick={()=>{onLeaveFeedback(option)}}
      className={css.button} 
      type="button" 
      key={option} >{option}
     </button>
    ))}
    </div>
    
   )
}

FeedbackOptions.propTypes = {
   options: PropTypes.array.isRequired,
   onLeaveFeedback: PropTypes.func.isRequired,
}


export default FeedbackOptions;
