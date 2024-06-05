const express = require ('express')
const pool = require('./conexão')

const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
    const {pagina,porPagina} = req.query
    //const { id } = req.params
    try {
        // const query = `select * from empresas where nome = $1 or nome = $2`
        // const params = ['Google', 'Facebook']
        // const query = 'update empresas set site = $1 where id = $2'
        // const params = ['wwww.cakewalk.com', 1]
        const query = 'select * from pessoas order by id asc limit $1 offset $2'
        const offset = (pagina - 1) * porPagina;
        const resultado = await pool.query(query, [porPagina,offset])
        //await pool.end()
        return res.json(resultado.rows)
    } catch (error) {
        console.log(error.message)
    }
})



app.listen(3000)