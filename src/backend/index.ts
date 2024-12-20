import saveUser from "./user/saveUser"
import findAllUsers from "./user/findAllUsers"
import deleteUser from "./user/deleteUser"

// Padrão Façade (fachada: a partir de um único ponto é possível acessar as funcionalidades do backend)
export default class Backend {
    //Exportar funções para serem acessadas no frontend
    static readonly users = {
        save: saveUser,
        findAll: findAllUsers,
        delete: deleteUser,
    }
}