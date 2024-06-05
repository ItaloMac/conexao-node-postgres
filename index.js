const express = require ('express')
const pool = require('./conexão')

const app = express()

app.use(express.json())

app.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        // const query = `select * from empresas where nome = $1 or nome = $2`
        // const params = ['Google', 'Facebook']
        const query = 'update empresas set site = $1 where id = $2'
        const params = ['wwww.cakewalk.com', 1]
        const resultado = await pool.query(query, params)
        //await pool.end()
        return res.json(resultado)
    } catch (error) {
        console.log(error.message)
    }
})



app.listen(3000)