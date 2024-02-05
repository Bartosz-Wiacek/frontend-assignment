'use client'
import dynamic from "next/dynamic";

const FormContextProvider = dynamic(() => import("./form-context").then((mod) => mod.FormContextProvider), {
    ssr: false
})

const FormInterface= dynamic(() => import("./form-interface"), {
    ssr: false
})

export const Form = () => {
    return (
        <FormContextProvider>
            <FormInterface/>
        </FormContextProvider>
    )
}