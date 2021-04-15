import CodeItem from './code-item'

const CodeList = (props) => {
    const {items} = props
    return (
        <div>
            {items.map((item, index)=> <CodeItem key={index}
            name={item.name} description={item.description} outputImage={item.outputImage}
            codeImage={item.codeImage}
             /> )}
        </div>
    )
}

export default CodeList
