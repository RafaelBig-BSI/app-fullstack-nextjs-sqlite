import { ElementType } from "react";

interface TitleProps {
    title: string;
    subtitle: string;
    icon: ElementType;
}

export const Title = ({ title, subtitle, icon: Icon }: TitleProps) => {
    return(
        <div className="flex gap-2">
            <Icon size={55} stroke={1} />
            <div className="flex flex-col">
                <h1 className="text-2xl font-black">{title}</h1>
                <h2 className="text-zinc-400">{subtitle}</h2>
            </div>
        </div>
    )
}