'use client'

import PageTemplate from "@/app/components/template/PageTemplate";
import { Title } from "@/app/components/template/Title";
import { FormUser } from "@/app/components/user/FormUser";
import { ListUsers } from "@/app/components/user/ListUsers";
import { useUsers } from "@/app/data/hooks/useUsers";
import { IconPlus, IconUser } from "@tabler/icons-react";

export default function PageUsers(){
    const { users, user, handleEditUser, handleOnSave, handleOnDelete } = useUsers()

    return(
        <PageTemplate className="flex flex-col gap-10">
            <Title icon={IconUser} title="Usuários" subtitle="Cadastro de usuários" />
                       
            {user ? (
                <FormUser
                    user={user}
                    onChange={handleEditUser}
                    onSave={handleOnSave}
                    onCancel={() => handleEditUser(null)}
                    onDelete={handleOnDelete}
                />
            ) : (
                <>
                    <div className="flex justify-end">
                        <button
                            className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-md"
                            onClick={() => handleEditUser({})}
                        >
                            <IconPlus />
                            <span>Novo Usuário</span>
                        </button>
                    </div>
                    <ListUsers users={users} onClick={handleEditUser} />
                </>
            )}
        </PageTemplate>
    )
}