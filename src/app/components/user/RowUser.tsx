import { User } from "@/core/model/User"
import Image from "next/image";

interface RowUserProps {
    user: User;
    onClick?: (user: User) => void;
}

export const RowUser = ({ user, onClick }: RowUserProps) => {
    return(
        <div className="flex p-4 bg-zinc-900 items-center gap-5 rounded-md cursor-pointer" onClick={() => onClick?.(user)}>
            <Image
                src={"https://gravatar.com/avatar/7d18548604320efde851dd91a152d609?s=400&d=robohash&r=x"}
                alt="Avatar"
                width={80}
                height={80}
                className="rounded-full"
            />
            <div className="flex flex-col">
                <span className="text-xl font-black">{user.name}</span>
                <span className="text-sm text-zinc-400">{user.email}</span>
            </div>
        </div>
    )
}