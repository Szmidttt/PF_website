import ContactForm from "../ui/utils/contact-form";
export default function ContactPage(){
    return (<>
    <div className="flex flex-row justify-evenly py-20">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2298.635261957234!2d18.18136437672948!3d54.82152447275377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fdcac56eb70dbf%3A0x2ab82e285a63bc9c!2sWczasowa%2061%2C%2084-105%20Karwie%C5%84skie%20B%C5%82oto%20Drugie!5e0!3m2!1sen!2spl!4v1751289672063!5m2!1sen!2spl" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <ContactForm/>
    </div>
</>);
}