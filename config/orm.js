var connection = require('./connection.js');

//  object that will store methods -. ALL is a connection query - (will collect all data from the table and the use a coll back to pass the result into the next file system 
//which will be contained in the models folder), CREATE, UPDATE
var orm = {
    all: function(tableInput, cb){
        connection.query('SELECT * FROM '+tableInput+';', function(err,
            result){
                if(err) throw err;
                cb(result)
            })

    },
    update: function(tableInput, condition, cb){
        connection.query('UPDATE '+tableInput+' SET devoured=true WHERE id='+condition+';', 
        function(err, result){
            if(err)throw err;
            cb(result);

        })

    },

    create: function(tableInput,val,cb){
        connection.query('INSERT INTO '+tableInput+"( burger_name) VALUES ('"+val+"');", 
        function(err,result){
            if(err)throw err;
            cb(result);

        })

    }
}

module.exports = orm;