const express = require('express');
const app = express();
const port = process.env.PORT || '3000';
const web=require('./routes/web')

// Set template engine
app.set('view engine','ejs')


// static files serving by midleware
app.use(express.static('public'))
//loading routes
app.use('/',web) 

app.listen(port, () => {
    console.log(`Server is responding at http://localhost:${port}`)
})