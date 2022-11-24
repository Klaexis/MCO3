# MCO2 | ART GALLERY
 Created By: <br>
 Aleck Jasper Lim <br>
 Jonathan Lin <br>
 Felipe Matteo Locsin <br>
<br>
**Art Gallery** is an E-commerce-inspired website where you have the capability to check out different Arts and able to add them to the cart at the same time delete them in case you do not want them. You are also required to register to be able to login to the browser to be a verified customer/user to buy different types of art. <br>

## Running the server locally
- Make sure **Node.js** and **MongoDB** are installed in the computer to make the server application functioning <br>
  - MongoDB: https://www.mongodb.com/try/download/community (For the localhost database)<br>
  - Node.js: https://nodejs.org/en/download/ (Take note that the node version must be an LTS version) <br>

### Now, to run the server: <br>
- It is advisable first to run **importArt.js(REQUIRED)**, **importArtist.js(REQUIRED)**, **importUser.js(OPTIONAL)**, **importCart(OPTIONAL)** to load the database and the server will be able to read (to run it go to command prompt/CLI inside where the import folders reside and do `node importArt.js` for example).  
- Afterwards, go to the main/root folder and click the DIR and go to command prompt and type in `node/nodemon Index.js` to be able to run the server. 
- Next, type in your browser localhost:3000 to connect to the server and start registering(if you did not run importUser.js) to create an account and be able to log-in, or just directly login with the sample user created by importUser.js. Then you are directed to the homepage and you are now able to check out the different art, your profile and your cart.

## Contents of MCO2
- [`Index.js`](/Index.js) is the main server application that is meant to be run
- [`Route.js`](/Route) contains the server responses of the client requests based on each specific path requested
- [`Database`](/Database) Contains the sample of the database and the model schema of each database
- [`Controller`](/Controller) Handles all the client requests, and the files are segregated in each own respectivce feature
- [`public`](/public) Contains the CSS stylesheets, Javascript codes, Images for user profile
- [`views`](/views) Contains all EJS files for viewing
