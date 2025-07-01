import { google } from "googleapis";


export async function addCalendar(){
    const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY!),
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });

  const calendar = await google.calendar({
    version: "v3",
    auth: auth,
  });
  let calendarId = process.env.GOOGLE_CALENDAR_ID_STUDIO!;
  const createResponse = await calendar.calendarList.insert({requestBody :{
    id: calendarId
  }});

  console.log("Event created:", createResponse);
}

export async function setNewEvent(
  startDate: string,
  endDate: string,
  summary: string,
  description: string,
  roomID: string
) {
  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY!),
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });

  const calendar = await google.calendar({
    version: "v3",
    auth: auth,
  });

  let calendarId;
  switch (roomID) {
    case "standard":
      calendarId = process.env.GOOGLE_CALENDAR_ID_STANDARD!;
      break;
    case "deluxe":
      calendarId = process.env.GOOGLE_CALENDAR_ID_DELUXE!;
      break;
    case "studio":
      calendarId = process.env.GOOGLE_CALENDAR_ID_STUDIO!;
      break;
    default:
      console.log("sth went wrong");
      break;
  }
  const event = {
    summary: summary,
    description: description,
    start: {
      date: startDate,
      timeZone: "Europe/Warsaw",
    },
    end: {
      date: endDate,
      timeZone: "Europe/Warsaw",
    },
  };

  const createResponse = await calendar.events.insert({
    calendarId,
    requestBody: event,
  });

  console.log("Event created:", createResponse.data.htmlLink);
}

export async function getEmptyDates(roomID : string){
    const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY!),
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });

  const calendar = await google.calendar({
    version: "v3",
    auth: auth,
  });
  let calendarId;
  switch (roomID) {
    case "standard":
      calendarId = process.env.GOOGLE_CALENDAR_ID_STANDARD!;
      break;
    case "deluxe":
      calendarId = process.env.GOOGLE_CALENDAR_ID_DELUXE!;
      break;
    case "studio":
      calendarId = process.env.GOOGLE_CALENDAR_ID_STUDIO!;
      break;
    default:
      console.log("sth went wrong");
      break;
  }
  const createResponse = await calendar.events.list({
    calendarId: calendarId,
    timeMin : new Date().toISOString()
  });
  const events = createResponse.data.items;

  return events?.map((event)=>({
    startDate: event.start?.date,
    endDate: event.end?.date
  }));
}