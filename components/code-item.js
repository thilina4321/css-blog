import classes from './code-item.module.css'

const CodeItem = (props) => {
    const {name, description, outputImage, codeImage} = props
    return (
        <div className={classes.item}>
            <h1> {name} </h1>
            { outputImage && <img src={outputImage} alt={name} />}
            <h3> {description} </h3>
            
            <img src={codeImage} alt={name} />
        </div>
    )
}

export default CodeItem
