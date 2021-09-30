import React, {useEffect, useState} from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const README = 'https://raw.githubusercontent.com/JerkyTreats/flow-test/master/README.md'
const DEFAULT_README_STATE = "**Loading...**"


const Readme = () => {
    const [readme, setReadme] = useState(DEFAULT_README_STATE);
    
    useEffect(async () => {
        const res = await fetch(README)
        const data = await res.text()
        setReadme(data)
    }, [])
      
    return (
        <div>
            <ReactMarkdown remarkPlugins={[[remarkGfm, {singleTilde: false}]]}>{ readme }</ReactMarkdown> 
        </div>
    )
}

export default Readme
