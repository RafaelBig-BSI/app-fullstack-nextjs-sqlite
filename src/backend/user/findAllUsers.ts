'use server'

import { UserRepository } from "./UserRepository";

// Caso de uso (funcionalidade)
export default async function findAllUsers(){
    return UserRepository.findAll()
}