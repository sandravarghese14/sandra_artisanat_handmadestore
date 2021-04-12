const express = require('express');
const userRouter = express.Router();
const app =express();

app.use(express.static('./public'));

app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/user',userRouter)

app.get('/', function(req,res){
    res.render("index",
        {
    nav:[
        {link:'/aboutus',name:'About us'},
        {link:'/user',name:'User'},
        
        
        {link:'/admin',name:'Admin'}],
        title:'ARTISANAT'
    });
        

});





userRouter.get('/',function(req,res){
    res.render("user",
    {
        nav:[
            {link:'/aboutus',name:'About us'},
            {link:'/user',name:'User'},
            {link:'/admin',name:'Admin'}],
            title:'ARTISANAT'

    });
});



app.listen(5000);
