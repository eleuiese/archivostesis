const express = require ('express');
const app = express();

//Settings
app.set('port',8000);

//Middlewares
app.use(express.json());


//Routes
app.use(require('./routes/sensores'));


//Staring Server
app.listen(app.get('port'), () => {
	console.log('Server on port', app.get('port'));
});

