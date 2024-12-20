import { useEffect, useState } from "react"
import { User } from "@/core/model/User"
import Backend from "@/backend"

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([])
    const [user, setUser] = useState<Partial<User> | null>(null)

    const handleOnSave = async () => {
        if(!user) return

        await Backend.users.save(user)
        const result = await Backend.users.findAll()
        setUsers(result)
        setUser(null)
    }

    const handleOnDelete = async () => {
        if(!user || !user.id) return

        await Backend.users.delete(user.id!)
        const result = await Backend.users.findAll()
        setUsers(result)
        setUser(null)
    }

    useEffect(() => {
        Backend.users.findAll().then(setUsers)
    }, [])

    return {
        users,
        user,
        handleOnSave,
        handleOnDelete,
        handleOnCancel: () => setUser(null),
        handleEditUser: (user: Partial<User | null>) => setUser(user),
    }
}