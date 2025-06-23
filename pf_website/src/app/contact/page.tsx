import ContactForm from "../ui/utils/contact-form";
import ContactInfo from "../ui/utils/contact-info";
export default function ContactPage(){
    return (<>
    <div className="flex flex-row justify-evenly py-20">
        <ContactInfo/>
        <ContactForm/>
    </div>
</>);
}