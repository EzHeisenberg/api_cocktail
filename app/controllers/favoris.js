'use strict';
module.exports = (db) => {
    const Favoris = db.favoris;

    return{
        addFavoris: async (req, res) => {
            const idDrinks = req.body.idDrinks
            const nameDrinks = req.body.nameDrinks
            try {
                const favorisId = await Favoris.findOne({ where: { idDrinks: idDrinks } });
                if (favorisId === null){
                    let favoris = await Favoris.create({idDrinks: idDrinks, nameDrinks: nameDrinks})
                    console.log('add new favoris')
                    return res.send(favoris);
                    return res.status(200);
                }else {
                    return res.status(200).send("Déjà ajouté");
                }
            }catch (err) {
                return res.status(500).send(err.message);
            }
        },


        allFavoris: async (req, res) =>{
            try {
                const favoris = await Favoris.findAll();
                return res.status(200).json(favoris);
            } catch (error) {
                return res.status(500).send(error.message);
            }
        },

        deleteFavoris: async (req, res) => {
            const idDrinks = req.body.idDrinks
            try{
                const favorisDelete = await Favoris.findOne({ where: { idDrinks: idDrinks } });
                if (favorisDelete === null){
                    return res.status(404).send("Not Found");
                }else {
                    await favorisDelete.destroy()
                    console.log('deleted id : ' + idDrinks)
                    return res.status(200).json(favorisDelete);
                }
            }catch (err){
                return res.status(500).send(err.message);
            }
        }

    }
}