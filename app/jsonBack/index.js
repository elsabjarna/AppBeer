const app = require('express')()
const cors = require('cors');
const fetch = require('node-fetch')

app.use(cors());

app.get("/api", (req, res)=>{
    res.send(product);
})

app.listen(4000, ()=>{
    console.log("listening to port 4000")
});

const product = [


    {
      "name": "Nr.3 Úlfur",
      "type": "India Pale Ale",
      "prosent": "5.9%",
      "description": "Úlfur is an India Pale Ale dry hopped with specially selected American hops that give it a wonderfully fruity taste and aroma.",
      "images": ["http://www.borgbrugghus.is/media/nr3ulfur.png"],
    },
    {
      "name": "Nr.8 Surtur",
      "type": "Imperial Stout",
      "prosent": "12%.",
      "description": "Surtur is a force to be reckoned with. Under the tanned creamy head, shades of fire roasted corn and burnt sugar blend mysteriously with darker tones of chocolate, strong coffee and licorice.",
      "images": ["http://www.borgbrugghus.is/media/nr8surtur.png"],
    },
    {
      "name": "Nr.13 Myrkvi",
      "type": "Porter",
      "prosent": "6%",
      "description": "Myrkvi is an unfiltered full-bodied Porter Ale with a dark twist. It is seasoned with coffee from Huila in the southwest of Colombia, specially roasted by Reykjavík Roasters.",
      "images": ["http://www.borgbrugghus.is/media/nr13myrkvi.png"],
    },
    {
      "name": "Nr. C14 Borealis Baby",
      "type": "Neipa",
      "prosent": "7%",
      "description": "As asian folktales go, children conceived under the northern lights have a special advantage in life. In order to find out what would happen if we conceived a beautiful hazy IPA in these extraordinary conditions, we did a threesome with KEX Brewing and Lamplighter Brewing from Massachusetts. And yes. It is true.",
      "images": ["http://www.borgbrugghus.is/media/boralisbaby.png"],
    },
    {
      "name": "Nr.C15 Liskodisko",
      "type": "India Pale Ale",
      "prosent": "6%",
      "description": "Trembling to the fresh rythm of El Dorado and Calypso hops, Liskodisko is juicy on the dancefloor, all dressed in peach and ready to blow your mind with stunning IPA moves.",
      "images": ["http://www.borgbrugghus.is/media/c15-liskodisko-web.png"],
    },
    {
      "name": "Nr.16 Júdas",
      "type": "Quadrupel",
      "prosent": "10.5%",
      "description": "Our Easter beer is, needless to say, strong in spirit. This quadrupel has a mischievously malty palate of ripe fruit, plum and blackberry in addition to sneaky tones of rock candy and caramel.",
      "images": ["http://www.borgbrugghus.is/media/nr16judas.png"],
    },
    {
      "name": "Nr.22 Kvasir",
      "type": "Mead",
      "prosent": "9%",
      "description": "Carbonated, clear and brewed with orange blossom honey, the mead is unseasoned but with notes of mint and vanilla.",
      "images": ["http://www.borgbrugghus.is/media/nr22kvasir.png"],
    },
    {
      "name": "Nr. 37 Fjalar",
      "type": "Mead",
      "prosent": "9.6%",
      "description": "Carbonated, clear and unseasoned. The honey used is Danish rapeseed honey and a sophisticated palate may detect tones of mint and vanilla. Fjalar is oak matured giving the mead an earthy, wood character. Sweet yet dry.",
      "images": ["http://www.borgbrugghus.is/media/nr37fjalar.png"],
    },
    {
      "name": "Nr. 43 Ástríkur",
      "type": "Strong Golden",
      "prosent": "8.5%",
      "description": "Ástríkur is full of love, peaches, pears, apples and grapes. A gay remembrance of time well spent.",
      "images": ["http://www.borgbrugghus.is/media/astrikur.png"],
    },
    {
      "name": "Nr. 50 Úlfur Úlfur Úlfur",
      "type": "Triple IPA",
      "prosent": "11%",
      "description": "What happens when an IPA is made triple? It’s simple, really. More of everything. More hops, more barley, more beer. More bitter, more fierce, more force. This adventurous beast of a beer is a bit cloudy, brewed with Citra and El Dorado hops.",
      "images": ["http://www.borgbrugghus.is/media/nr50ulfurulfurulfurweb.png"],
    },

  ]
