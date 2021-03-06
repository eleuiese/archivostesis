const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/', (req, res) => {
	mysqlConnection.query('SELECT * FROM sensores', (err, 
	rows, fields) => {
		if(!err) {
			res.json(rows);
		} else {
			console.log(err);
		}
}) 

});

router.get('/:id', (req, res) => {

	const { id } = req.params;
	
	mysqlConnection.query('SELECT * FROM sensores WHERE id = ?', [id], (err,
	rows, fields) => {
	if(!err) {
                        res.json(rows[0]);
                } else {
                        console.log(err);
                }
	
});

});

router.post('/', (req, res) => {

        const { id, pm25, pm10, monoc, ozono, longi, lati, vel } = req.body;
	const query = `
		CALL Actualizar(?, ?, ?, ?, ?, ?, ?, ?);
	`;
        mysqlConnection.query(query, [id, pm25, pm10, monoc, ozono, longi, lati, vel], (err,
        rows, fields) => {
        if(!err) {
                        res.json({Status: 'Sensor guardado o modificado'});
                } else {
                        console.log(err);
                }

});

});

module.exports=router;
