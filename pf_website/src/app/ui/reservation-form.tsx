'use client'
import { createEvent } from "../lib/actions";
import Calendar from "react-calendar";
import { useEffect, useState, useRef } from "react";
import 'react-calendar/dist/Calendar.css'
import Popup from "reactjs-popup";
import Link from "next/link";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type FormProps = {
    id: string;
};

export default function ReservationForm({ id }: FormProps) {
    const [disabledDates, setDiabledDates] = useState(new Set());
    const [value, onChange] = useState<Value>(null);
    const isFirstRender = useRef(true);
    const getStartDate = () => {
        if (Array.isArray(value) && value[0] !== null) {
            const date = new Date(value[0]);
            date.setDate(value[0].getDate() + 1);
            return date.toISOString().split('T')[0];
        }
        return new Date().toISOString().split('T')[0];
    }
    // const getEndDate= ()=>{
    //     if(Array.isArray(value) && value[1] !== null){
    //         const date=new Date;
    //         date.setDate(value[1].getDate());
    //         return date.toISOString().split('T')[0];
    //     }
    //     return new Date().toISOString().split('T')[0];
    // }
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            //return;
        }
        async function getDisabledDates() {
            const res = await fetch(`http://localhost:3001/api/data?roomID=${id}`);
            const data = await res.json();
            const datesToDisable = new Set();
            data.forEach((event: { startDate: string, endDate: string }) => {
                let startDate = new Date(event.startDate);
                let endDate = new Date(event.endDate);
                console.log(event);
                while (startDate.getTime() != endDate.getTime()) {
                    datesToDisable.add(startDate.toISOString().split('T')[0]);
                    startDate.setDate(startDate.getDate() + 1);
                }
            });
            setDiabledDates(datesToDisable);
        }
        getDisabledDates();
    }, [id]);

    return (
        <div>
            <Popup trigger={<button className="bg-white px-2 py-1.25 rounded-lg hover:bg-sky-100"> Zarezerwuj</button>}
                contentStyle={{
                    width: '40vw',
                    height: '70vh',
                    padding: '2rem',
                    borderRadius: '1rem',

                }}
                overlayStyle={{
                    background: "rgba(0, 0, 0, 0.3)",
                    backdropFilter: "blur(5px)",
                    WebkitBackdropFilter: "blur(5px)",
                }}
                position="center center"
                modal={true}>
                <form className="flex flex-col items-center justify-center bg-sky-100 p-5 rounded-lg" action={createEvent}>
                    <div>
                        <label htmlFor="email">email</label>
                    </div>
                    <div>
                        <input className="bg-white rounded" type="email" name="summary" />
                    </div>
                    <input type="hidden" name="description" value={id}></input>
                    <input type="hidden" name="roomID" value={id}></input>
                    <div className="flex flex-col items-center">
                        <Calendar
                            locale="pl-PL"
                            tileDisabled={({ date }) => {
                                return disabledDates.has(date.toISOString().split('T')[0])
                            }}
                            maxDate={new Date("2025-10-01")}
                            minDate={new Date("2025-07-01")}
                            onChange={onChange} value={value}
                            selectRange={true} />
                        <label> DATA PRZYJAZDU </label>
                        <input className="text-center" type="text" name="startDate" value={getStartDate()} readOnly></input>
                        <label> DATA WYJAZDU </label>
                        <input className="text-center" type="text" name="endDate" value={Array.isArray(value) && value[1] !== null ? value[1].toISOString().split('T')[0] : new Date().toISOString().split('T')[0]} readOnly></input>

                    </div>
                    <div>
                        <button className="bg-blue-600 rounded px-2 py-1 hover:bg-blue-400 hover:text-black text-sky-100" type="submit">Wyślij</button>
                    </div>
                </form>
            </Popup>

        </div>
    )
}