
import { getConnection } from "../database/database.js";

const createUser = async (req, res) => {
    try{
        const {numero_id, nombre, edad, correo, ciudad} = req.body;
        const data = {numero_id, nombre, edad, correo, ciudad}
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO usuarios SET ?", [data]);
        res.json({message: "Usuario, creado"});
    } catch (error) {
        console.log(error);
    }
};

const getUsers = async (req, res) => {
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM usuarios");
        res.json(result[0]);
    } catch (error) {
        console.log(error);
    }
};

const deleteUser = async (req, res) => {
    try{
        const { id } = req.params;
        const connection = await getConnection();
        const reult = await connection.query("DELETE FROM usuarios WHERE id = ?", [id]);
        res.json({message: "Usuario eliminado"});
    } catch (error) {
        console.log(error);
    }
};

export const methodsUsers = {
    createUser,
    getUsers,
    deleteUser
}
