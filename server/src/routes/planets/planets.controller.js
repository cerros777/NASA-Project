const { getAllPlanets } = require('../../modules/planet.modules')

function httpGetAllPlanets(req, res){
    return res.status(200).json(getAllPlanets());
}

module.exports = {
    httpGetAllPlanets,
}