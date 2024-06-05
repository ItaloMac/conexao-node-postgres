const express = require ('express')
const pool = require('./conexão')

const app = express()

app.use(express.json())

app.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const resultado = await pool.query(`select * from empresas where id = ${id}`)
        //await pool.end()
        return res.json(resultado)
    } catch (error) {
        console.log(error.message)
    }
})



app.listen(3000)