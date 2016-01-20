var DataService = function() {

    this.initialize = function() {
        // No Initialization required
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

    this.findById = function(id) {
        var deferred = $.Deferred();
        var place = null;
        var l = places.length;
        for (var i=0; i < l; i++) {
            if (places[i].id === id) {
                place = places[i];
                break;
            }
        }
        deferred.resolve(place);
        return deferred.promise();
    }

    this.findByName = function(searchKey) {
        var deferred = $.Deferred();
        var results = places.filter(function(element) {
            return element.name.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        deferred.resolve(results);
        return deferred.promise();
    }

    this.findAll = function() {
        var deferred = $.Deferred();
        deferred.resolve(places);
        return deferred.promise();
    }

    var places = [
        {   "id": 1,
            "name": "The Rijksmuseum",
            "category": "Attraction",
            "location": "Museumstraat 1, 1071 XX Amsterdam",
            "latitude":  52.359997600000000000,
            "longitude":  4.885218799999961400,
            "rating": 5,
            "pic": "rijksmuseum.jpg",
            "description": [
                "The Rijksmuseum is a museum dedicated to arts and history in Amsterdam. The museum has 8,000 objects of art and history on display from their total collection of 1 million objects from the years 1200–2000."
            ],
            "reviews": [
                "Not to be missed!",
                "I absolutely love the Rijks. There are beautiful Vermeers, Van Goghs, and of course you can't forget the Rembrandts, especially the Night's Watch. Must see for art lovers!",
                "The Rijks Museum is absolutely gorgeous and probably one of the best experiences in Amsterdam."
            ],
            hours: "9:00am - 5:00pm daily",
            website: "https://www.rijksmuseum.nl/"
        },
        {   "id": 2,
            "name": "Anne Frank House",
            "category": "Historical",
            "location": "Prinsengracht 267, 1016 GV Amsterdam",
            "latitude": 52.375237700000000000,
            "longitude": 4.883945199999971000,

            "rating": 5,
            "pic": "annefrank.jpg",
            "description": [
                "The Anne Frank House (Anne Frank Huis) is a historic house and biographical museum dedicated to Jewish wartime diarist Anne Frank."
            ],
            "reviews": [
                "Very informative and loads of history!",
                "Totally worthwhile but one suggestion - order your tickets online and walk right in. People were waiting in line for hours which is so unnecessary.",
                "Sobering, moving experience..."
            ],
            hours: "9:00am - 7:00pm daily",
            website: "http://www.annefrank.org/en/Museum/"
        },
        {   "id": 3,
            "name": "De Pijp",
            "category": "Neighborhood/Area",
            "location": "1073 De Pijp, Netherlands",
            "latitude": 52.349555900000000000,
            "longitude": 4.895923300000049500,

            "rating": 4,
            "pic": "de-pijp.jpg",
            "description": [
                "Concierge.com calls this neighborhood Amsterdam's Quartier Latin for its 19th-century architecture and its collision of different cultures. Ethnic restaurants and eclectic shops reign supreme in this district. "
            ],
            "reviews": [
                "De Pijp has a bit of everything - parks, museums, markets, and the regular part of the city that isn't catering to the tourists.",
                "My favorite neighborhood in Amsterdam is “De Pijp,” which translates to “The Pipe.",
                "My favorite hangout is the Pilsvogel, located on the corner of the square. It features a great outdoor seating area making it a great people watching spot."
            ],
            hours: "24 hours",
            website: "http://www.iamsterdam.com/en/visiting/areas/amsterdam-neighbourhoods/zuid/de-pijp"
        },

        {   "id": 4,
            "name": "Van Gogh Museum",
            "category": "Museums",
            "location": "Paulus Potterstraat 7, 1071 CX Amsterdam",
            "latitude": 52.35841590000000000,
            "longitude": 4.881075600000031000,
            "rating": 5,
            "pic": "van-gogh.jpg",
            "description": [
                "The Van Gogh Museum holds a collection of paintings, prints, etchings and correspondence by the famed Vincent Van Gogh, who cut off his own ear and committed suicide at the rise of his success. Actually, only one of Van Gogh's paintings ever sold during his lifetime, though now his work goes for millions."
            ],
            "reviews": [
                "Let me warn everyone that I am not a huge fan of art museums, but I am a fan of Van Gogh and I wanted to learn about his craziness (and see some of his work). This museum was perfect for what I was looking for.",
                "Be warned if you bring a back pack or large bag they'll make you check it so try to avoid doing that.",
                "This museum is a must-see in amsterdam - but also a must is pre-buying tickets. Even better if you can buy timed tickets."
            ],
            hours: "9:00am - 6:00pm daily ",
            website: "http://www.vangoghmuseum.nl/"
        },
        {   "id": 5,
            "name": "Vondelpark",
            "category": "Parks and Gardens",
            "location": "Vondelpark 1, 1071 Amsterdam",
            "latitude": 52.3579946000000000000,
            "longitude": 4.868648399999984000,
            "rating": 4,
            "pic": "vondelpark.jpg",
            "description": [
                "Vondelpark is the favorite leafy retreat of just about everyone. It's the place where sun is worshipped, joints are smoked, beer is quaffed, picnics are luxuriated over, bands are grooved to, dogs are walked, balls are kicked, lanes are biked and jogged."
            ],
            "reviews": [
                "This park is beautiful and shouldn't be missed on a sunny day.",
                "There is an open air theatre where is music and shows every weekend during the summer.",
                "As if strolling through Vondelpark on a summer afternoon weren't rich enough, wild parrots suddenly alit from a big, leafy tree."
            ],
            hours: "24 hours",
            website: "http://www.hetvondelpark.net/"
        },
        {   "id": 6,
            "name": "Leidseplein",
            "category": "Neighborhood/Area",
            "location": "Leidseplein 1-35, 1017 PR Amsterdam",
            "latitude": 52.364571600000000000,
            "longitude": 4.882571299999995000,
            "rating": 3,
            "pic": "leidseplein.jpg",
            "description": [
                "The center of Amsterdam's entertainment scene, you'll find nightclubs, movie theaters, concert venues, casinos and of course some coffee shops in this neighborhood located southwest of the city center."
            ],
            "reviews": [
                "It's easy to get here and is one of the tram and bus stops. Walking in this area whether during the day or at night is quite safe.",
                "During the day this place is filled with shoppers, people watchers, performers, and just all kinds of life from all over the world.",
                "Lots of bars, cafés, shops and restaurants. There are hotels in this area so, it's quite touristy. There's also a big casino that's popular amongst tourists."
            ],
            hours: "24 hours",
            website: "http://www.amsterdam.info/leidseplein/"
        },
        {   "id": 7,
            "name": "Artis Zoo",
            "category": "Zoos and Aquariums",
            "location": "Plantage Kerklaan 38-40, 1018 CZ Amsterdam",
            "latitude": 52.366000300000000000,
            "longitude": 4.91653210000004000,
            "rating": 3,
            "pic": "artis-zoo.jpg",
            "description": [
                "Visitors traveling with children in tow might want to make some space in their itinerary for the zoo. There are gorillas, leopards, penguins and 1,400 other species as well as an aquarium, an insectarium, a butterfly garden and planetarium."
            ],
            "reviews": [
                "The best part was the abundance of young animals! Young monkeys, giraffes, goats, birds and baboons. Much more active and engaged than the zoos in North America.",
                "Great zoo, but extra $3 euro for a map on top of the hefty entrance ticket?",
                "I saw dead baby mice about to be fed to reptiles. You ain't never gonna see that at the Bronx Zoo, yo.",
            ],
            hours: "9:00am - 6:00pm",
            website: "http://www.artis.nl/en/artis-royal-zoo/"
        },
        {   "id": 8,
            "name": "Albert Cuypmarkt",
            "category": "Shopping",
            "location": "Albert Cuypstraat 67 HS, Amsterdam",
            "latitude": 52.355900000000000,
            "longitude": 4.89520800000013000,
            "rating": 3,
            "pic": "albert-cuyp-markt.jpg",
            "description": [
                "Named for a Dutch artist, the Albert Cuypmarkt is a large street market that carries everything from fresh foods to clothing and other odds and ends. Lonely Planet calls it the place to experience the 'real' Amsterdam at its multicultural best."
            ],
            "reviews": [
                "The market is a great size, lots of options but not so big that you get overwhelmed. In addition to clothes, housewares and jewelry, there are great fruits/vegetables, flowers, and other food.",
                "They have everything from food, jeans, socks, underwear, flowers, knic knacks, cheese, leggings, baked goods, jewelry! I got a brand new pair of jeans here for 10 euro.",
                "My favorite street in Amsterdam!"
            ],
            hours: "9:00am - 5:00pm, closed Sunday",
            website: "http://www.albertcuypmarkt.nl/"
        },

        {   "id": 9,
            "name": "Heineken Experience",
            "category": "Tours/Brewery",
            "location": "Stadhouderskade 78, 1072 AE Amsterdam",
            "latitude": 52.357831300000010000,
            "longitude": 4.891824899999960500,
            "rating": 4,
            "pic": "heineken-exp.jpg",
            "description": [
                "The Heineken Experience, which takes place in the old Heineken Brouwerij (Heineken Brewery), is a must-do for fans of the fermented beverage. And according to its website, the Heineken Experience will dip visitors chin deep into the popular beer. Among the attractions housed in the century-old factory are a virtual-reality ride, a history of the Heineken family and a free beer tasting."
            ],
            "reviews": [
                "My favorite part was being able to personalize a bottle with my name on it (6 euro).",
                "To make the most out of the self guided tour, download the app for your Android or Apple device.  The tour includes a bunch of Heineken's history which includes family stories, previous beer bottles, and past logos.  There are also workers along the way that explain the beer making process.",
                "The district is not what one would think or as a matter of fact that big. Ironically, there's a church right beside it."
            ],
            hours: "11:00 - 7:30pm (8:30pm Fri-Sun)",
            website: "http://www.heinekenexperience.com/"
        },
        {   "id": 10,
            "name": "Red Light District",
            "category": "Neighborhood/Area",
            "location": "Oudezijds Voorburgwal 10, Amsterdam",
            "latitude": 52.373416700000000000,
            "longitude": 4.898055600000021000,
            "rating": 2,
            "pic": "red-light.jpg",
            "description": [
                "The Red Light District seems almost synonymous with Amsterdam. As WCities.com says it is proof of Amsterdam's liberality and social tolerance and merits a quick tour.",
            ],
            "reviews": [
                "Fun taking a walk through the area during the day its beautiful to see the shops and canals.",
                "It's MUST visit place when you are visiting Amsterdam, just have to see it for yourself to see what all the fuss is about. The area is crowded with tourists but everyone seems to be peaceful.",
                "The district is not what one would think or as a matter of fact that big. Ironically, there's a church right beside it."
            ],
            hours: "24 hours",
            website: "http://www.amsterdam.info/red-light-district/"
        },
     ];

}