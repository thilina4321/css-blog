import CodeItem from './code-item'
import classes from './code-list.module.css'

const CodeList = (props) => {
    const {items} = props
    return (
        <div className={classes.item}>
            {items.map((item, index)=> <CodeItem key={index}
            name={item.name} description={item.description} outputImage={item.outputImage}
            codeImage={item.codeImage}
             /> )}
        </div>
    )
}

export default CodeList
