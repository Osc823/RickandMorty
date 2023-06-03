const URL = 'https://rickandmortyapi.com/api/character';
const axios = require('axios');

const getCharById = async (req, res) => {

    try {
        const { id } = req.params;
        const {data} = await axios(`${URL}/${id}`);

        let character = {
            id: data.id,
            name: data.name,
            species: data.species,
            origin: data.origin,
            image: data.image,
            gender: data.gender,
            status: data.status
        };

        return character.name 
        ? res.status(200).json(character)
        : res.status(404).send('Not found');
        
    } catch (error) {
        res.status(500).send(error.message);
    }
        
}



module.exports = {
    getCharById
};