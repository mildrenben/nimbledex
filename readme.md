Nimbledex is an open source, experimental, minimal Pokedex.

http://Nimbledex.com

- Node
- Express
- React
- Redis
- Nginx

It pulls data from [Pokeapi V2](http://pokeapi.co/) API and stores it in Redis. Rather than use Redis for storing session states and all the simple things it's usually used for I was experimenting with how it could be used for data that barely ever changes. I'm probably not the first person to do this but I thought it was a cool idea.

In the end, this system is only really used in the local dev environment as Nginx is configured to cache each page as it is generated and expire it after 30 days.

Nginx only runs on the Ubuntu server, for development it is not needed.

## Usage

- `git clone` the repo
- `npm i`
- install Redis and run it with `redis-server`
- `gulp` to compile the scss and other utilities
- `nodemon express.js` to run

Pretty simple set up. You will also have to import the redis dump. Use `utility.js` to load in the data from Pokeapi, I'll explain how that works further down.

## Contributing

All contributions welcome here. I made this for the community and hope that we can build it into the best dex as a community together.

Before beginning a big feature, please contact me on [Twitter](https://twitter.com/mildrenben) or here on Github just to discuss the best ways to do things and implement the feature :)

Please see the [issues on GitHub](https://github.com/mildrenben/nimbledex/issues) before you submit a pull request or raise an issue, someone else might have beat you to it.

To contribute to this repository:

- Fork the project to your own GitHub profile

- Download the project using git clone

- Create a new branch with a descriptive name:

- `git checkout -b my_new_branch`

- Write some code, fix something, and add a test to prove that it works. **No pull request will be accepted without tests passing, or without new tests if new features are added.**

- Commit your code and push it to GitHub

- Open a new pull request and describe the changes you have made.

We'll accept your changes after review.

## Explanation

### Utility.js

Utility.js is the file I use to scrape the data from Pokeapi. I will outright say that this file is a mess. I hope to go back and tidy it up at some point, but prioritised getting this out the door before fixing this file up. I was testing & learning new ES6 things and Promises whilst writing different parts of this file so it's a cluster of different styles unfortunately.

That said, here's the order in which things are run:

- `getData()` - gets all the main data for a Pokemon. Typing, name, Id number etc.
- `getOther()` - Pokeapi doesn't store everything in it's main `/pokemon` endpoint, so you have to make a second request to `pokemon-species` to get the rest. Things like evolution chain, capture rate, hatch counter etc. I called this other data, hence the func name.
- `getTypeData()` - gets the damage effectiveness of each type and stores them in Redis.
- `getAllMoves()` - gets every move and needed data associated with that move and stores in Redis. Move names are stored with a `_` underscore at the start.
- `updateAllTypes()` - for each Mon in Redis this func finds it's types, grabs those types from Redis (previously stored by `getTypeData()`), does a diff on the effectiveness between each type and generates a damage chart.
- `getMovesForAllMons()` - for each Mon in Redis this func finds the moves for that Mon. Pokeapi gives us access to the name of each move the Mon learns, the level it learns it at and the learn method, so we store this in Redis.
- `updateAllMachines()` - for each TM/HM in the game this func gets the TM or HM number, then finds the corresponding move already in Redis and updates that with it's machine number.
- `updateAllMoves()` - finally, this func pieces together `getAllMoves()`, `getMovesForAllMons()` and `updateAllMachines()`. It runs through each Mon's moves, finds each one of those moves in Redis and takes that data and applies it to itself.

This long, convoluted method was intended to make use of Redis in a way I haven't tried before. There a timeouts littered throughout the file and they're needed as Pokeapi will begin rejecting your calls if you hammer them too quickly. I would be eternally grateful if somebody cleared this up.

### Views

The `.jsx` files and the `.scss` are coupled in directory structure within the `views` dir. At the top level of this dir you have all the base level `.scss` files and a `.jsx` file for each page.

### Lookups

I wanted to not manage any data on my side, but found it best to have 2 lookup files.

- `pokemonNumbers.js` - houses Pokemon names with their corresponding id number. Used for typeahead and express when checking the slug.
- `tmHmNumbers.js` - I actually had a script written that scraped Pokeapi for the machine numbers, but there were some incorrect data from Pokeapi and also [some missing data](https://github.com/PokeAPI/pokeapi/issues/196) so decided to make my own.

### Modified Data

#### Wurmple
Unfortunately, the Wurmple evolution line is unique, annoying and [is bugged in Pokeapi](https://github.com/PokeAPI/pokeapi/issues/163). As such, you need to manually add in the following code to overwrite the `evol` key for each Mon in the Wurmple line (265 - 269):

```
"evol": [
        {
            "id": "265"
        },
        {
            "id": "266",
            "other": {
                "min_level": 7
            },
            "multi": true,
            "trigger": "level-up"
        },
        {
            "id": "267",
            "other": {
                "min_level": 10
            },
            "multi2": true,
            "trigger": "level-up"
        },
        {
            "id": "268",
            "other": {
                "min_level": 7
            },
            "multi": true,
            "trigger": "level-up"
        },
        {
            "id": "269",
            "other": {
                "min_level": 10
            },
            "multi2": true,
            "trigger": "level-up"
        }
    ]
```

#### Munchlax

Munchlax learns whirlpool in get 4 by machine, but whirlpool is no longer a machine in latest gen. It gets added to his machine move list without a machine causing React to fail. I have removed the data for whirlpool from the move list. Munchlax has the same issue with work-up move.

Ideally, there should be a check in utility.js to see if the machine is learned this gen and document it in Redis.
