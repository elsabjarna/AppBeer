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
      "prosent": "5.9% alc./vol.",
      "description": "Úlfur is an India Pale Ale dry hopped with specially selected American hops that give it a wonderfully fruity taste and aroma.",
      "images": ["http://www.borgbrugghus.is/media/nr3ulfur.png"],
    },
    {
      "name": "Nr.8 Surtur",
      "type": "Imperial Stout",
      "prosent": "12% alc./vol.",
      "description": "Surtur is a force to be reckoned with. Under the tanned creamy head, shades of fire roasted corn and burnt sugar blend mysteriously with darker tones of chocolate, strong coffee and licorice.",
      "images": ["http://www.borgbrugghus.is/media/nr8surtur.png"],
    },
    {
      "name": "Nr.C15 Liskodisko",
      "type": "India Pale Ale",
      "prosent": "6% alc./vol.",
      "description": "Trembling to the fresh rythm of El Dorado and Calypso hops, Liskodisko is juicy on the dancefloor, all dressed in peach and ready to blow your mind with stunning IPA moves.",
      "images": ["http://www.borgbrugghus.is/media/c15-liskodisko-web.png"],
    },
    {
      "name": "Nr.13 Myrkvi",
      "type": "Porter",
      "prosent": "6% alc./vol.",
      "description": "Myrkvi is an unfiltered full-bodied Porter Ale with a dark twist. It is seasoned with coffee from Huila in the southwest of Colombia, specially roasted by Reykjavík Roasters.",
      "images": ["http://www.borgbrugghus.is/media/nr13myrkvi.png"],
    },
    {
      "name": "Nr.16 Júdas",
      "type": "Quadrupel",
      "prosent": "10.5% alc./vol.",
      "description": "Our Easter beer is, needless to say, strong in spirit. This quadrupel has a mischievously malty palate of ripe fruit, plum and blackberry in addition to sneaky tones of rock candy and caramel.",
      "images": ["http://www.borgbrugghus.is/media/nr16judas.png"],
    },
    {
      "name": "Nr.22 Kvasir",
      "type": "Mead",
      "prosent": "9% alc./vol.",
      "description": "Carbonated, clear and brewed with orange blossom honey, the mead is unseasoned but with notes of mint and vanilla.",
      "images": ["http://www.borgbrugghus.is/media/nr22kvasir.png"],
    },
    {
      "name": "Icelandic White Ale",
      "type": "White Ale",
      "prosent": "5.0% alc./vol.",
      "description": "Classic witbier, including orange peel and coriander – all brewed with pure Icelandic water and a touch of oats that deliver a cool smoothness that is uniquely flavorful and refreshingly drinkable.",
      "images": ["https://einstokbeer.com/wp-content/uploads/2017/04/white-ale-blaut_clip.png"],
    },
    {
      "name": "Icelandic Arctic Pale Ale",
      "type": "Pale Ale",
      "prosent": "5.6% alc./vol.",
      "description": "Brewed 60 miles south of the Arctic Circle, we balance three kinds of hops with pure Icelandic water to create an ale unlike any other. It can only be described as an Arctic Pale Ale and it’s truly one of a kind.",
      "images": ["https://einstokbeer.com/wp-content/uploads/2017/04/Icelandic-Arctic-Pale-Ale.png"],
    },
    {
      "name": "Icelandic Arctic Berry Ale",
      "type": "Berry Ale",
      "prosent": "5.0% alc./vol.",
      "description": "In Iceland, Sumardagurinn fyrsti means the arrival of warmer temperatures. At Einstök, we celebrate with this limited-edition Ale, a refreshing witbier flavored with tasty bilberries, hand-picked near the Arctic Circle.",
      "images": ["https://einstokbeer.com/wp-content/uploads/2017/04/einstok-berry-1.png"],
    },
    {
      "name": "Icelandic Winter Ale",
      "type": "Winter Ale",
      "prosent": "8.0% alc./vol.",
      "description": "In Iceland, winter is not something we fear, it is something we embrace. We celebrate this with our super limited-edition Winter Ale, brewed with hand-cut and cured spruce tips. It is the perfect ale to inspire you to face.",
      "images": ["https://einstokbeer.com/wp-content/uploads/2017/04/WinterAle-2.png"],
    },
  ]
