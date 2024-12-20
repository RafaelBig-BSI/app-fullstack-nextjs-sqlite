import { RowUser } from "./RowUser"
import { User } from "@/core/model/User"

interface ListUsersProps {
    users: User[],
    onClick?: (user: User) => void;
}

export const ListUsers = ({ users, onClick }: ListUsersProps) => {
    return(
        <div className="flex flex-col gap-4">
            {users.map((user) => (
                <RowUser key={user.id} user={user} onClick={onClick} />
            ))}
        </div>
    )
}