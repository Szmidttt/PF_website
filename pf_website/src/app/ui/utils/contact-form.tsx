export default function ContactForm() {
    return <form className="bg-blue-300 p-4 rounded-lg w-1/3">
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
    </form>
}