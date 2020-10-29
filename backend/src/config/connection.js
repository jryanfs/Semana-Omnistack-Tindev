const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://ryan:ryan@cluster0.h3yc2.mongodb.net/omnistack8?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology: true
});