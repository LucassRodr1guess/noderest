module.exports = (app) =>{
    app.get('/', (req,res)=>{
        //res.send("Home")
        res.render('teste.ejs')
    })
}