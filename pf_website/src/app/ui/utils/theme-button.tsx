'use client'
import { MoonIcon,SunIcon } from "@heroicons/react/24/outline"
import { useState,useEffect } from "react"
export default function ThemeButton(){
    const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);
    return (
        <button onClick={() => setIsDark(!isDark)}>
            {isDark ? <div><SunIcon/>Light</div> : <div><MoonIcon/>Dark</div>} Mode
        </button>
    );
}