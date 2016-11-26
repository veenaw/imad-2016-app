var express = require('express');// create web server
var morgan = require('morgan'); // to help output logs of server
var path = require('path');
var Pool = require('pg').Pool;

var config ={
    user: 'veenaw',
    database: 'veenaw',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

var articles = {
     'article-one':{
        title: 'Article One! Veena Wagle',
        heading: 'Article one',
        date: 'Sep 5, 2016',
        content: `
                <p>
                This is a content.This is a content. This is a content.This is a content.This is a content. This is a content. This is a content.This is a content.This is a content.This is a content.
                This is a content.This is a content. This is a content.This is a content.This is a content. This is a content. This is a content.This is a content.This is a content.This is a content.
                </p>
                <p>
                This is a content.This is a content. This is a content.This is a content.This is a content. This is a content. This is a content.This is a content.This is a content.This is a content.
                This is a content.This is a content. This is a content.This is a content.This is a content. This is a content. This is a content.This is a content.This is a content.This is a content.
                </p>
                <p>
                This is a content.This is a content. This is a content.This is a content.This is a content. This is a content. This is a content.This is a content.This is a content.This is a content.
                This is a content.This is a content. This is a content.This is a content.This is a content. This is a content. This is a content.This is a content.This is a content.This is a content.
                </p>`
    },

    'article-two':{
        title: 'Article Two! Veena Wagle',
        heading: 'Article Two',
        date: 'Sep 6, 2016',
        content: `
                <p>
                This is a content for second article.
                </p>`
    },

    'article-three' : {
        title: 'Article Three! Veena Wagle',
        heading: 'Article Three',
        date: 'Sep 7, 2016',
        content: `
                <p>
                This is a content for third article.
                </p>
                `
}};

function createTemplate(data) {
    var title=data.title;
    var date= data.date;
    var heading=data.heading;
    var content =data.content;
var htmlTemplate=`
<html>
    <head>
        <title>
        
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet"/>
    </head>
    <body>
        <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3> 
                 ${heading}
            </h3>
            <div>
             ${date}
            </div>
            <div>
                ${content}
            </div>
        </div>
    </body>
</html>` 
return htmlTemplate;
}

var counter=0;
app.get('/counter', function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});

app.get('/', function (req, res) { // exectutes when ge request is made to '/'
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new Pool(config);

app.get('/test-db',function(req,res){
    pool.query('SELECT * from test', function(err,result){
        if(err){
            res.status(500).send(err.toString());
        }else
        {
            res.send(JSON.stringify(result));
        }
    });
});

app.get('/:articleName',function(req,res){
    var articleName = req.params.articleName; //  functinality of express framework
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {  // similar as 8
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {  // similar as 8
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {  // similar to 8
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
