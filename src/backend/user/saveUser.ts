'use server'

import { User } from "@/core/model/User";
import { Id } from "@/core/utils/id";
import { UserRepository } from "./UserRepository";

// Caso de uso (funcionalidade)
export default async function saveUser(user: Partial<User>){
    const newUser = {
        ...user,
        id: user.id ?? Id.newId, //retorna o ID do usuario ou cria um novo
    }

    return UserRepository.save(newUser as User)
}