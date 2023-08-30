const express = require('express');
const app = express()
const porta=process.env.porta

app.get('/',(req,res)=>{
 res.send('Seja Bem-Vindo');

})
app.get('/',(req,res)=>{
    res.json({portal:'Novas Informacoes usando agora o express como framework'});
   
   })

app.listen(porta || 3000,()=>{console.log('Servidor rodando')});