'use client'
import { useForm } from "react-hook-form"

import Form from 'next/form'
export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    return <Form action="string" onSubmit={handleSubmit((data) => console.log(data))} className="bg-blue-500 p-4 rounded-lg w-1/3 text-sky-100">
        <div className="w-full flex flex-col">
            <div>
                <label>
                    Imie i Nazwisko
                </label>
            </div>
            <div className="bg-white text-black rounded">
                <input className="w-full h-full" {...register("imie_i_nazwisko", { required: true })} />
                {errors.imie_i_nazwisko && <p className="font-bold text-red-500 bg-blue-500">pole wymagane</p>}
            </div>
            <div>
                <label>
                    Adres email
                </label>
            </div>
            <div className="bg-white text-black rounded">
                <input className="w-full h-full" type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                {errors.email && <p className="font-bold text-red-500 bg-blue-500">pole wymagane</p>}
            </div>
            <div>
                <label>
                    Temat
                </label>
            </div>
            <div className="bg-white text-black rounded">
                <input className="w-full h-full" {...register('temat', { required: true })} />
                {errors.temat && <p className="font-bold text-red-500 bg-blue-500">pole wymagane</p>}
            </div>
            <div>
                <label>
                    Treść wiadomości
                </label>
            </div>
            <div className="bg-white text-black h-16 rounded">
                <input className="w-full h-full" {...register('tresc', { required: true })} />
                {errors.tresc && <p className="font-bold text-red-500 bg-blue-500">pole wymagane</p>}
            </div>
            <div className="p-6"></div>
            <div className="flex justify-center">
                <button className="px-4 py-2 shadow-md hover:shadow-lg border bg-sky-100 text-blue-600 p-1 rounded hover:border-sky-100 hover:bg-blue-600 hover:text-sky-100  hover:cursor-pointer transform motion-safe:hover:scale-102 transition duration-150 ease-in-out active:bg-sky-100 active:text-blue-600 motion-safe:active:scale-101" type="submit">Wyślij</button>
            </div>
        </div>
    </Form>
}