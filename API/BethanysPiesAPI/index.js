// Bring in hte express server and create application
let express = require('express');
let app = express();
let pieRepo = require('./repos/pieRepo');
let errorHelper = require('./helpers/errorHelpers');
let cors = require('cors');

//Use the express Router object
let router = express.Router();

//Configure middleware to support JSON dta parsing in requests
app.use(express.json());

//Configure cors
app.use(cors());

//let pies = pieRepo.get();

//Create GET to return a list of all pies
router.get('/', function (req, res, next) {
    pieRepo.get(function (data) {
        res.status(200).json({
            "status":200,
            "statusText": "OK",
            "message": "All pies retrieved.",
            "data": data
        });
    }, function(err) {
        next(err);
    });
});

//Create GET/search?id=n&name=str to search for pies by 'id' and/or 'name'
router.get('/search', function (req, res, next){
    let searchObject = {
        "id": req.query.id,
        "name": req.query.name
    };

    pieRepo.search(searchObject, function(data) {
        res.status(200).json({
            "status":200,
            "statusText": "OK",
            "message": "All pies retrieved.",
            "data": data
        });
    }, function(err) {
        next(err);
    });
});


router.get('/:id', function (req, res, next){
    pieRepo.getById(req.params.id, function (data){
        if (data) {
            res.status(200).json({
                "status": 200,
                "statusText": "OK",
                "message": "Single pie retrieved.",
                "data":data
            });
        }
        else {
            res.status(404).send({
                "status":404,
                "statusText": "Not Found",
                "message": "This pie '" + req.params.id + "' could not be found.",
                "error": {
                    "code":"NOT_FOUND",
                    "message": "This pie '" + req.params.id + "' could not be found."
                }
            });
        }
    }, function(err) {
        next(err);
    });
});

router.post('/', function (req, res, next){
    pieRepo.insert(req.body, function(data){
        res.status(201).json({
            "status":201,
            "status Text": "Created",
            "message": "New pie added",
            "data": data
        });
    }, function(err){
        next(err);
    });
})

router.put('/:id', function(req, res, next){
    pieRepo.getById(req.params.id, function (data) {
        if (data) {
            //Attempt to update the data
            pieRepo.update(req.body, req.params.id, function (data){
                res.status(200).json ({
                    "status": 200,
                    "statusText": "OK",
                    "message" : "Pie '" + req.params.id + " ' updated.",
                    "data": data

                });
            });
        }
        else {
            res.status(404).json({
                "status":404,
                "statusText": "Not Found",
                "message":"The pie '" + req.params.id + "' could not be found.",
                "error": {
                    "code": "NOT_FOUND",
                    "message": "The pie "+ req.params.id + "' could not be found.",
                }
            });
        }
    }, function(err) {
        next(err);
    });
})

router.delete('/:id', function (req, res, next) {
    pieRepo.getById(req.params.id, function (data){
        if (data) {
            //Attempt to delete data
            pieRepo.delete(req.params.id, function (data){
                res.status(200).json({
                    "status": 200,
                    "statusText": "OK",
                    "message": "The pie '" +req.params.id + "' is deleted."
                });
            });
        }
        else{
            res.status(404).json({
                "status": 404,
                "statusText": "Not Found",
                "message": "The pie '" + req.params.id + "' could not locate",
                "error": {
                    "code": "NOT_FOUND",
                    "message": "The pie '" + req.params.id + "' could not locate",
                }
            });
        }
    }, function(err) {
        next(err);
    });
})

router.patch('/:id', function (req, res, next) {
    pieRepo.getById(req.params.id, function (data) {
        if (data) {
            // Attempt to update the data
            pieRepo.update(req.body, req.params.id, function(data){
                res.status(200).json({
                    "status":200,
                    "statusText": "OK",
                    "message": "The pie '" + req.params.id + "' is patched",
                    "data": data
                });
            });
        }
        else {
            res.status(404).send({
                "status":404,
                "statusText": "Not Found",
                "message": "The pie '" + req.params.id + "' could not be found.",
                "error": {
                    "code" : "NOT_FOUND",
                    "message" : "The pie '" + req.params.id + "' could not be found."  
                }
            });
        }
    }, function(err) {
        next(err);
    });
})

//Configure router so all routes are prefixed with /api/v1
app.use('/api/', router);

//Configure exception logger to console
app.use(errorHelper.logErrorsToConsole);
//Configure Exception logger to file
app.use(errorHelper.logErrorsToFile);
//Configure client error handler
app.use(errorHelper.clientErrorHandler);
//Configure catch-all exception middleware last
app.use(errorHelper.errorHandler);

/*
function errorBuilder(err) {
    return {
        "status":500,
        "statusText": "internal Server Error",
        "message": err.message,
        "error": {
            "errno":err.errno,
            "call": err.syscall,
            "code": "INTERNAL_SERVER_ERROR",
            "message":err.message
        }
    };
}

//Configure exception logger
app.use(function(err, req, res, next){
    console.log(errorBuilder(err));
    next(err);
});

app.use(function(err, req, res, next){
    res.status(500).json(errorBuilder(err));
});

//This was used on its own, replaced with above after the function errorBuilder was created
app.use(function(err, req, res, next) {
    res.status(500).json({
        "status": 500,
        "statusText": "Internal Server Error",
        "message": err.message,
        "error": {
            "code": "INTERNAL_SERVER_ERROR",
            "message": err.message
        }
    });
});
*/
//Create server to listen on port 5000
var server = app.listen(5000, function(){
    console.log('Node Server is running on http://localhost:5000..');
});