const db = require('../db');

class DocumentController {
    async createDocument(req, res) {
        const { title, userId } = req.body

        if (userId === null) {
            return res.json("Неправильно введены данные")
        }


        const exist = await db.query('SELECT EXISTS (SELECT * FROM document WHERE title = ($1) AND user_id=($2))', [title, userId])
        if (!exist.rows[0].exists) {

            console.log('exist', exist.rows[0].exists)
            const newDoc = await db.query('INSERT INTO document (title, user_id) values ($1, $2) RETURNING *', [title, userId])
            res.json('Заявка отправлена')

        } else {
            res.json("Вы уже отправляли заявку на этот документ, она уже была учтена")
        }


    }
    async getDocument(req, res) {
        const doc = await db.query('SELECT * FROM document')
        res.json(doc.rows)

    }
    
}

module.exports = new DocumentController()