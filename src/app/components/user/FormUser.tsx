import { User } from "@/core/model/User"
import { InputText } from "../shared/InputText";

interface FormUserProps {
    user: Partial<User>;
    onChange: (user: Partial<User>) => void;
    onSave: () => void;
    onCancel: () => void;
    onDelete: () => void;
}

export const FormUser = ({ user, onChange, onSave, onCancel, onDelete }: FormUserProps) => {
    return(
        <div className="flex flex-col gap-5">
            <InputText label="Nome" type="text" value={user.name ?? ""} onChange={(e) => onChange?.({...user, name: e.target.value})} />
            <InputText label="E-mail" type="email" value={user.email ?? ""} onChange={(e) => onChange?.({...user, email: e.target.value})} />
            <InputText label="Senha" type="password" value={user.password ?? ""} onChange={(e) => onChange?.({...user, password: e.target.value})} />
            <div className="flex justify-between">
                <div className="flex gap-5">
                    <button className="bg-blue-500 px-4 py-2 rounded-md" onClick={onSave}>Salvar</button>
                    <button className="bg-zinc-500 px-4 py-2 rounded-md" onClick={onCancel}>Cancelar</button>
                </div>

                <button className="bg-red-500 px-4 py-2 rounded-md" onClick={onDelete}>Excluir</button>
            </div>
        </div>
    )
}