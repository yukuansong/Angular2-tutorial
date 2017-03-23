var config = require('./config.json');
var _=require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
// var mongo = require('mongoskin');
// var db = mongo.db(config.connectionString, { native_parser: true});
// db.bind('users');
import MyUsers from '../models/users.model'

var service = {};

service.authenticate = authenticate;
service.getAll = getAll;
service.getById = getById;
service.create = create;
service.update = update;
service.delete = _delete;

module.exports = service;


function authenticate(username, password) {
    var deferred = Q.defer();

    MyUsers.findOne({ username:username}, function(err, user){
        if(err) deferred.reject(err.name + ': ' + err.message);

        if(user && bcrypt.compareSync(password, user.hash)) {
            //authentication successful
            deferred.resolve({
                _id: user._id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                token: jwt.sign({sub: user._id}, config.secret)
            })
        } else {
            // authentication failed
            deferred.resolve();
        }
    });
    return deferred.promise;
}

function getAll(){
    var deferred = Q.defer();

    MyUsers.find(function(err, users) {
        if(err) deferred.reject(err.name + ': ' + err.message);

        // return users (without hased passwords)
        users = _.map(users, function(user){
            return _.omit(user, 'hash');
        });
        deferred.resolve(users);
    })

    return deferred.promise;
}

function getById(_id) {
    var deferred = Q.defer();

    MyUsers.findById(_id, function(err, user){
        if(err) deferred.reject(err.name + ': ' + err.message);

        if(user){
            // return user (without hashed password)
            deferred.resolve(_.omit(user, 'hash'));
        } else {
            // user not found
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function create(userParam) {
    var deferred = Q.defer();

console.log("===========" + userParam);
    // validation
    MyUsers.findOne({username: userParam.username}, function(err, user){
        if(err) deferred.reject(err.name + ': ' + err.message);

        if(user){
            // username already exists
            deferred.reject('Username "` + userParam.username + `" is already taken');
        } else {
            createUser();
        }
    });

    function createUser(){
        // set user object to userParam without the cleartext password
        var user = _.omit(userParam, ['password', '_id']);

console.log("-------- = "+userParam._id+ "  "+userParam.firstName);
        // add hashed password to user object
        user.hash = bcrypt.hashSync(userParam.password, 10);

console.log(Object.keys(userParam));
console.log(Object.keys(user));
console.log(user.firstName);
console.log(user.lastName);
console.log(user.username);
console.log(user.hash);
console.log("================ ="+user.hash);
        MyUsers.create(
            user, function(err, doc) {
                console.log("-------------------------"+err);
                if(err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }
    return deferred.promise;
}

function update(_id, userParam) {
    var deferred = Q.defer();

    // validation
    MyUsers.findById(_id, function(err, user){
        if (err) deferred.reject(err.name + ': ' + err.message);

        if(user.username !== userParam.username) {
            // username has changed so check if the new username is already taken
            db.users.findOne({username: userParam.username},
            function(err, user){
                if(err) deferred.reject(err.name + ': ' + err.message);

                if(user) {
                    // username already exists
                    deferred.reject('Username "` + req.body.username + `" is already taken')
                } else {
                    updateUser();
                }
            });
        } else {
            updateUser();
        }
    });

    // internal function
    function updateUser() {
        // fields to update
        var set = {
            firstName: userParam.firstName,
            lastName: userParam.lastName,
            username: userParam.username,
        };

        // update password if it was entered
        if(userParam.password) {
            set.hash = bcrypt.hashSync(userParam.password, 10);
        }

        MyUsers.update( { _id: mongo.helper.toObjectID(_id)},
        {$set: set},
        function(err, doc){
            if(err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });
    }

    return deferred.promise;
}

function _delete(_id) {
    var deferred = Q.defer();

    MyUsers.remove({ _id},
                    function(err) {
                        console.log("=======err = "+err);
                        if(err) deferred.reject(err.name + ': ' + err.message);

                        deferred.resolve();
                    });
    return deferred.promise;
}