import classes from './code-item.module.css'

const CodeItem = (props) => {
    const {name, description, outputImage, codeImage} = props
    return (
        <div className={classes.item}>
            <h1> {name} </h1>            
        </div>
    )
}

export default CodeItem
