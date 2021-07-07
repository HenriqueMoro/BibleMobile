import React,{createContext,useState, useEffect,useContext} from 'react'


interface ContextData {
    chapter:number | null;
    
    
    getChapter(index:number): Promise<void>;
    
}

const Context = createContext<ContextData>({} as ContextData);

export const Provider: React.FC = ({children}) =>{
    const [chapter, setChapter] = useState<number | null>(null)
    
    
    
    
    
    async function getChapter(index:number): Promise<void>{
       setChapter(index)
       
     }
    
    
    return(
    <Context.Provider value={{chapter:chapter,getChapter}}>
        {children}
    </Context.Provider>
    )
}

export default Context;