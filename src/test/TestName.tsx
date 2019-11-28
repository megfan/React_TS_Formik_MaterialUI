import React, { useState, useEffect, useRef } from 'react'

//we can combine two intefraces
interface Data{
    date: number;
    auth: boolean;
}

// sign "?" suggests isn't not required!!!

interface Props {
    name: string;
    ok?: boolean;
    phone?: number;
    handleSth?: (somePapametr: string) => string;
    obj?: {
        firstName: string,
        lastName: string
    };
    //adding another interface as a specific object type
    data: Data;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

//one of methods defining
// const Test: React.FC<{name: string}> = () => {....  

// =({data, name}) passing props to functional component

const TestName: React.FC<Props> = ({data, name}) => {

//we can tell what kind of state in useState should be
//we can pass types or interaces

//in these case it can be number or null
    const [count, setCount] = useState<number | null>(5);
    //now if we by mistake put string into setCount() there will be an Error
    useEffect(() => {
        setCount(88)
    },[]);


//in this case it should be an specific object with key:name and value: string
    const [person, setPerson] = useState<{ name: string }>({name: "Alabama"});
    useEffect(() => {
        setPerson({name: 'Barabara'})
    },[]);

    //we should defined type for ref
    const inputRef = useRef<HTMLInputElement>(null);

    

        return <div>
            <h1>Hello!</h1>
            <input 
            type="text" 
            ref={inputRef}
            // onChange={handleChange()}
            />
            
            </div>;
}

export default TestName;