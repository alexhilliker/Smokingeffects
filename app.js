const express = require('express'); 
const chalk = require('chalk');
const path = require('path');
const morgan = require('morgan')
const debug= require(`debug`)(`app`);  
const { default: mongoose } = require('mongoose');
const db = mongoose.connection;
const app = express(); 
const feedRoutes = require('./src/routes/feed');
const cors = require('cors');
const port = process.env.PORT || PORT;
const Post = require('./src/models/post')

app.use(morgan('tiny'));
app.use(express.json());
app.use('/', feedRoutes); 
app.use(cors());
mongoose
    .connect(  'mongodb+srv://alexhilliker:jtlOY70gNBBRbNUb@cluster1.9z9nikw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1'
    )
    .catch(err => console.log('err', err)) 
db.on('error',console.error.bind(console,'connection error:')); 
db.once('open', function()
{
    console.log('Connected to MongoDB'); 
});

app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));

app.get('/', function(req, res){
    res.render('index',
    {
        title: 'Smoking and its effects',
    });
}); 

app.get('/post',  function(req, res){
    res.render('post',
    {
        title: 'Submit your story about smoking',
    });
}); 

app.get('/posts',  function(req, res){
    res.render('posts',
    {
        title: 'Here, all the stories submitted are listed',
    });
}); 
app.listen(port, function(){
    debug(`Listening on port ${chalk.green(port)}`);
});







