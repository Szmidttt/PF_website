import {useForm} from "react-hook-form"
import Form from 'next/form'
export default function ContactForm() {
    return <Form action="string" className="bg-blue-500 p-4 rounded-lg w-1/3 text-sky-100">
        <div className="w-full flex flex-col">
            <div>
                <label>
                    Imie i Nazwisko
                </label>
            </div>
            <div className="bg-white">
                <input />


            </div>
            <div>
                <label>
                    Adres email
                </label>
            </div>
            <div className="bg-white">
                <input />


            </div>
            <div>
                <label>
                    Temat
                </label>
            </div>
            <div className="bg-white">
                <input />


            </div>
            <div>
                <label>
                    Treść wiadomości
                </label>
            </div>
            <div className="bg-white">
                <input />


            </div>
        </div>
    </Form>
}