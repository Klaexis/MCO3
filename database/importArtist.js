
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/ArtGallery");

const Artist = require('./Models/Artist');

async function run(){
    try{
        const bob_ross = await Artist.create({
            artistName: "Bob Ross",
            artistImage: "BOB_ROSS.jpg"
        });
        await bob_ross.save();
        console.log('created ' + bob_ross);
        
        const edvard = await Artist.create({
            artistName: "Edvard Munch",
            artistImage: "edvard.jpg"
        });
        await edvard.save();
        console.log('created ' + edvard);
        
        const leonardo = await Artist.create({
            artistName: "Leonardo da Vinci",
            artistImage: "Leonardo.jpg"
        });
        await leonardo.save();
        console.log('created ' + leonardo);
        
        const michelangelo = await Artist.create({
            artistName: "Michelangelo di Lodovico Buonarroti Simoni",
            artistImage: "michel.jpg"
        });
        await michelangelo.save();
        console.log('created ' + michelangelo);
        
        const vincent = await Artist.create({
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