import css from "./Statistics.module.css"
import PropTypes from "prop-types"

const Statistics = ({good,neutral,bad,total,positivePercentage}) => {
return (
    <div className={css.container}>
    <p className={css.text} >good:{good}</p>
    <p className={css.text} >neutral:{neutral}</p>
    <p className={css.text} >bad:{bad}</p>
    <p className={css.text}>Total:{total}</p>
     <p >Positive feedback:{positivePercentage}%</p> 
    </div>
)
}

export default Statistics;

Statistics.propTypes ={
    good:PropTypes.number.isRequired,
    neutral:PropTypes.number.isRequired,
    bad:PropTypes.number.isRequired,
    total:PropTypes.number.isRequired,
    positivePercentage:PropTypes.func.isRequired
}