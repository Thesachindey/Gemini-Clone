import React, { createContext, useContext, useState } from 'react'
import run from '../config/gemini';

export const Context = createContext();


const ContextProvider = (props) => {

    const [input, setInput] = useState();
    const [recentPrompt, setRecentPrompt] = useState();
    const [prevPrompt, setPrevPrompt] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayPara=(index,nextWord)=>{
setTimeout(() => {
    setResultData(prev=>prev+nextWord)
}, 20*index);
    }


    const onSent = async (prompt) => {
        setResultData("")
        setLoading(true)
        setRecentPrompt(input)
        setShowResult(true)
        setPrevPrompt(prev=>[...prev,input])
       const response = await run(input)
       let responseArrey=response.split("**");
       let newResponse;
       for(let i=0;i<responseArrey.length;i++){
           if(i==0||i%2 !==1){
               newResponse+=responseArrey[i];

           }
           else{
            newResponse+="<b>"+responseArrey[i]+"</b>";
           }
       }

       let newResponse2=newResponse.split("*").join("</br>");

       let newResponseArray=newResponse2.split("");
        for(let i=0; i<newResponseArray.length;i++){
            const nextWord=newResponseArray[i];
            delayPara(i,nextWord+"");
        }
       
       setLoading(false)
       setInput("")
    //    setPrevPrompt([...prevPrompt, prompt])

    }

    const Contextvalue = {
        prevPrompt,
        setPrevPrompt,
        recentPrompt,
        setRecentPrompt,
        input,
        setInput,
        showResult,
        setShowResult,
        loading,
        setLoading,
        resultData,
        setResultData,
        onSent,


    }


    return (
        <Context.Provider value={Contextvalue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider

// 1:35