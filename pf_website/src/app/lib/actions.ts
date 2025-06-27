'use server';
 import { setNewEvent } from "../data/google-api";
import { redirect } from "next/navigation";
export async function createEvent(formData: FormData) {
  const rawFormData = {
    startDate : formData.get('startDate') as string,
    endDate: formData.get('endDate') as string,
    summary: formData.get('summary') as string,
    description: formData.get('description') as string,
    roomID: formData.get('roomID') as string
  };
  console.log(rawFormData);
  const date = new Date(rawFormData.endDate);
  date.setDate(date.getDate()+1);
  setNewEvent(rawFormData.startDate,date.toISOString().split('T')[0],rawFormData.summary,rawFormData.description,rawFormData.roomID);
  redirect('/reservation');
}