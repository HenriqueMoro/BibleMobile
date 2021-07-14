import React,{createContext,useState, useEffect,useContext} from 'react'


interface ContextData {
    book:number ;
    chapter:number;
    
    getBook(index:number): Promise<void>;
    getChapter(index:number): Promise<void>;
    
}

const Context = createContext<ContextData>({} as ContextData);


export const Provider: React.FC = ({children}) =>{
    const [book, setBook] = useState<number>(Number)
    const [chapter, setChapter] = useState<number>(Number)
    
    
    
    
    
    async function getBook(index:number): Promise<void>{
       setBook(index)
       
     }

     async function getChapter(index:number): Promise<void>{
        setChapter(index)
     }
    
    
    return(
    <Context.Provider value={{book:book,chapter:chapter,getBook,getChapter}}>
        {children}
    </Context.Provider>
    )
}

export default Context;