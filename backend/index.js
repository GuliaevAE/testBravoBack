const express = require('express');
const cors = require('cors');
const useRouter = require('./routes/user.routes');
const documentRouter = require('./routes/document.routes')

const PORT = process.env.PORT || 8080

const app = express()



app.use(cors())




app.use(express.json())




app.use('/api', useRouter)
app.use('/api', documentRouter)


app.listen(PORT, ()=>console.log(`серв запущен! Port: ${PORT}`))