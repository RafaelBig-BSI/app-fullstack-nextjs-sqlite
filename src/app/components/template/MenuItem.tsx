import Link from "next/link"
import { ElementType } from "react";

interface MenuItemProps {
    icon: ElementType;
    text: string;
    url: string;
}

export const MenuItem = ({ icon: Icon, text, url }: MenuItemProps) => {
    return(
        <Link href={url} className="flex gap-2 px-2 py-2 hover:bg-black">
            <Icon className="text-zinc-200" size={24} stroke={1} />
            <span className="text-zinc-200">{text}</span>
        </Link>
    )
}