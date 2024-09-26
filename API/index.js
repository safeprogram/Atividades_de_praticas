import express from 'express'

const app = express;

app.listen(3000, () => console.log('Server running'));

app.get('/skills', (req, res) => {
    res.send('Javascript and Node')
})