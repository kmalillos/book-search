// Google Books API Axios Call - returns info to googlebooks MongoDB
// require Books Model

const db = require("../models/Books"); 
const axios = require("axios");

modules.exports = {
    
    findAll: function(req, res) {
        axios.get(URL, { query })
            .then(results => {
                // db.create(results)
            })
            .catch(err);
    }

}