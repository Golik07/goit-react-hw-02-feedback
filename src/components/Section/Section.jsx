import css from "./Section.module.css"
import PropTypes from "prop-types"

const Section = ({title,children}) => {
return (

    <div className={css.statistic_hero}>
        <p className={css.text}>{title}</p>
        {children}
    </div>
)
}

export default  Section;

Section.propTypes={
    title:PropTypes.string.isRequired,
    children:PropTypes.node.isRequired
}

