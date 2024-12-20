import { User } from "@/core/model/User";
import { PrismaClient } from "@prisma/client";

export class UserRepository {
    private static db: PrismaClient = new PrismaClient()

    static async findAll(): Promise<User[]> {
        return await this.db.user.findMany()
    }

    static async save(user: User): Promise<User> {
        // Busca o registro no BD, se existir ele atualiza se não é criado o registro
        return await this.db.user.upsert({
            where: {id: user.id},
            update: user,
            create: user,
        }) 
    }

    static async findById(id: string): Promise<User> {
        const user = await this.db.user.findUnique({ where: { id } })
        return user as User
    }

    static async deleteById(id: string): Promise<void> {
        await this.db.user.delete({ where: { id } })
    }
}