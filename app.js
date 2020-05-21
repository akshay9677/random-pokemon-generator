const express = require("express");
const https = require("https")
const bodyParser = require("body-parser");
const ejs = require("ejs");
const fetch = require('node-fetch');
const app = express();

// const Pokedex = require("pokedex.js");
// const pokedex = new Pokedex("en");



app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

  
 


app.get("/",function(req,res){
  

    function consultPokemon(){
        let id = Math.round(Math.random() * 150);
      var url = "https://pokeapi.co/api/v2/pokemon/"+id;
      fetch(url)
    .then(function(response){
        response.json()
    .then(function(pokemon){
        genPoke(pokemon);
    })
    })
  
    }
  
    function genPoke(pokemon){

     
        const name = pokemon.name;
        const img = pokemon.sprites.front_default;
        res.render("index",{pokemon: name,pokeImg:img})
       
        
    }
     
    consultPokemon();

   
   
})

  

app.listen(3000,function(){
  console.log("server started")
  
})
