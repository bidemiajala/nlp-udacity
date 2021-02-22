const app = require('./app');
const port = 3000;

app.listen(port, function(){
    console.log(`SERVER LISTENING ON localhost:${port}`);
});
