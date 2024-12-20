import { ReactNode } from "react"
import { Menu } from "./Menu";

interface PageTemplateProps {
    children: ReactNode;
    className?: string;
}

export default function PageTemplate({ children, className }: PageTemplateProps){
    return(
        <div className="flex">
            <Menu />

            <main className={`flex-1 p-7 ${className ?? ""}`}>
                {children}
            </main>
        </div>
    )
}