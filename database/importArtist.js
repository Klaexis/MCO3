
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/ArtGallery");

const Artist = require('./Models/Artist');

async function run(){
    try{
        const bob_ross = await Artist.create({
            artistID: "artist1",
            artistName: "Bob Ross",
            artistImage: "BOB_ROSS.jpg"
        });
        await bob_ross.save();
        console.log('created ' + bob_ross);
        
        const edvard = await Artist.create({
            artistID: "artist2",
            artistName: "Edvard Munch",
            artistImage: "edvard.jpg"
        });
        await edvard.save();
        console.log('created ' + edvard);
        
        const leonardo = await Artist.create({
            artistID: "artist3",
            artistName: "Leonardo da Vinci",
            artistImage: "Leonardo.jpg"
        });
        await leonardo.save();
        console.log('created ' + leonardo);
        
        const michelangelo = await Artist.create({
            artistID: "artist4",
            artistName: "Michelangelo di Lodovico Buonarroti Simoni",
            artistImage: "michel.jpg"
        });
        await michelangelo.save();
        console.log('created ' + michelangelo);
        
        const vincent = await Artist.create({
            artistID: "artist5",
            artistName: "Vincent van Gogh",
            artistImage: "vincent.jpg"
        });
        await vincent.save();
        console.log('created ' + vincent);
        
    }catch(e){
        console.log(e.message);
    }
}
run();