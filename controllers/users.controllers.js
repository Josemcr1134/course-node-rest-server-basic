const { response, request } = require('express');

const getUsers = (req = request, res = response) => {
    const { q, name = 'No name', apikey } = req.query;
    res.json({
        ok: true,
        msg: 'API get - controller',
        q,
        name,
        apikey
    })
}
const postUsers = (req, res = response) => {
    const { nombre, edad, ciudad } = req.body;
    res.json({
        msg: 'post API - controller',
        nombre,
        edad,
        ciudad
    })
}

const putUsers = (req, res = response) => {
    const id = req.params.id;
    res.json({
        msg: 'API put - controller',
        id
    })
}

const deleteUsers = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'delete API - controller'
    })
}


module.exports = {
    getUsers,
    putUsers,
    postUsers,
    deleteUsers
}