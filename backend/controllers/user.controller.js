const db = require('../db');
class UserController{
    async createUser(req,res){
        const {name} = req.body
        const newPerson = await db.query('INSERT INTO person (name) values ($1) RETURNING *',[name])
        
        res.json(newPerson.rows[0])
    }
    async getUser(req,res){
        const user = await db.query('SELECT * FROM person')
        res.json(user.rows)
    }
    async deleteUser(req,res){
        const id = req.params.id
        const user = await db.query('DELETE FROM person where id = $1', [id])
        res.json(user.rows[0])
    }
}



module.exports = new UserController()