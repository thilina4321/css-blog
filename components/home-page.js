import classes from './home-page.module.css'
import CodeList from './code-list'
import { getAllData, getFilteredData} from '../data/data'
import { useEffect, useRef, useState } from 'react'

const DisplayPage = () => {
    const [search, setSearch] = useState([])
    const searchRef = useRef()
    let items = getAllData()

    
    const inputHandler = ()=>{
        const inputWord = searchRef.current.value
        const filteredData = getFilteredData(inputWord)
        setSearch(filteredData)
    }

    useEffect(()=>{
        setSearch(items)
    }, [items])

    

    return (
        <div>
        <div className={classes.main}>
        <h1> Css Code Snippets </h1> 
        <input onChange={inputHandler} ref={searchRef} placeholder="Search" />
        </div>
            <CodeList items={search}/>
        </div>
    )
}

export default DisplayPage
