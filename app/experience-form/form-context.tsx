import {useForm, UseFormReturn} from "react-hook-form";
import {createContext, FC, PropsWithChildren, useContext} from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import { schema, TExperience } from '@/app/experience-form/schema'

interface FormContextValues {
    form: UseFormReturn<TExperience>;
    onSubmit: () => void;
}

//Open for extension; Single Responsibility
const FormContext = createContext<FormContextValues | null>(null)

const FormContextProvider: FC<PropsWithChildren> = ({children}) => {

    const form = useForm<TExperience>({
        resolver: zodResolver(schema),
        defaultValues: {
            companyName: "",
            positionTitle: "",
            employmentType: "full-time",
            location: "on-site",
            startDate: new Date(),
            industry: "",
            description: "",
        },
    });

    // 3. Define a submit handler.
    function onSubmit() {
        if (localStorage.getItem("form") === null)
        {
            localStorage.setItem("form", JSON.stringify([form.getValues()]));
        }
        else
        {
            const forms = JSON.parse(localStorage.getItem("form") || "[]");
            forms.push(form.getValues());
            localStorage.setItem("form", JSON.stringify(forms));
        }
    }

    return (
        <FormContext.Provider value={{form, onSubmit}}>
            {children}
        </FormContext.Provider>
    );
}


//Helper hook for accessing the form context
const useFormContext = () => {
    const context = useContext(FormContext);

    if (!context) {
        throw new Error("useFormContext must be used within a FormContextProvider");
    }

    return context;
}

export {FormContextProvider, useFormContext};