
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/ArtGallery");

const Art = require('./Models/Art');

async function run(){
    try{
        const creation_of_adam = await Art.create({
            artID: "art1",
            artName: "Creation of Adam",
            artistName: "Michelangelo di Lodovico Buonarroti Simoni",
            artImage: "creation_of_adam.jpg",
            cost: 440
        });
        await creation_of_adam.save();
        console.log('created ' + creation_of_adam);
        
        const last_supper = await Art.create({
            artID: "art2",
            artName: "Last Supper",
            artistName: "Leonardo da Vinci",
            artImage: "last_supper.jpg",
            cost: 500
        });
        await last_supper.save();
        console.log('created ' + last_supper);

        const mona_lisa = await Art.create({
            artID: "art3",
            artName: "Mona Lisa",
            artistName: "Leonardo da Vinci",
            artImage: "mona_lisa.jpg",
            cost: 500
        });
        await mona_lisa.save();
        console.log('created ' + mona_lisa);

        const scream = await Art.create({
            artID: "art4",
            artName: "Scream",
            artistName: "Edvard Munch",
            artImage: "scream.jpg",
            cost: 475
        });
        await scream.save();
        console.log('created ' + scream);

        const starry_night = await Art.create({
            artID: "art5",
            artName: "Starry Night",
            artistName: "Vincent van Gogh",
            artImage: "starry_night.jpg",
            cost: 450
        });
        await starry_night.save();
        console.log('created ' + starry_night);

        const mountain_retreat = await Art.create({
            artID: "art6",
            artName: "Mountain Retreat",
            artistName: "Bob Ross",
            artImage: "mountain_retreat.jpg",
            cost: 999
        });
        await mountain_retreat.save();
        console.log('created ' + mountain_retreat);
        
    }catch(e){
        console.log(e.message);
    }
}
run();