import {createContext, useState} from "react";

export const FormContext = createContext({});

export default function FormProvider({children }){
    const [form, setForm] = useState({form:''});
    const [habitos, setHabitos] = useState(null);
    const [feito, setFeito] = useState(0);


    return (
        <FormContext.Provider value={{form, setForm, habitos, setHabitos, feito, setFeito}}>
            {children}
        </FormContext.Provider>
    )
}
