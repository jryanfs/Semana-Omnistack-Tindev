const express = require('express');
const routes = express.Router();
const devController =  require('./controllers/DevControllers');
const likeController = require('./controllers/LikeController');
const dislikesController = require('./controllers/DislikeController');


routes.get('/devs',devController.listAll);

routes.post('/devs', devController.store);

routes.post('/devs/:devId/dislikes',dislikesController.store);
routes.post('/devs/:devId/likes',likeController.store);




module.exports =  routes;

