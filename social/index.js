var geoCacher = {
    name: "William",
    age: 65,
    countriesCachedIn: ["UK", "Ireland", "France"],
    cachesFound: 890,
    favouriteCache: {
        terrain: 5,
        difficulty: 3,
        location: "Germany",
        idCode: "RF0071"
    },
    addCache: function () {
        this.cachesFound++;
        console.log(this.name + " has found " + this.cachesFound + " caches so far!");
    },
    cachingFriends: [
        {
            name: "Anna",
            age: 47,
            countriesCachedIn: ["Uk", "Germany", "Austria", "Poland", "Slovakia"],
            cachesFound: 101,
            favouriteCache: {
                terrain: 2,
                difficulty: 5,
                location: "Poland",
                idCode: "YT8352"
            },
            addCache: function () {
                this.cachesFound++;
                console.log(this.name + " has found " + this.cachesFound + " caches so far!");
            },
        }, {
            name: "Lord Voldemort",
            age: 666,
            countriesCachedIn: ["Narnia", "Kalimdor", "Russia", "Asgard", "Hogsmeade"],
            cachesFOund: 13256,
            favouriteCache: {
                terrain: 1,
                difficulty: 1,
                location: "Russia",
                idCode: "OO1010"
            },
            addCache: function () {
                this.cachesFound++;
                console.log(this.name + " has found " + this.cachesFound + " caches so far!");
            },
            cachingFriends: [
                {
                    name: "Harry",
                    age: 22,
                    countriesCachedIn:["Uk", "Hogsmeade", "Ireland"],
                    cachesFound: 8,
                    favouriteCache: {
                        terrain: 4,
                        difficulty: 5,
                        location: "UK",
                        idCode: "HP4132"
                    },
                    addCache: function () {
                        this.cachesFound++;
                        console.log(this.name + " has found " + this.cachesFound + " caches so far!");
                    }
                }
            ]
        }
    ]
}

geoCacher.isMarried=true;
geoCacher.cachingFriends[1].favColor="red";
geoCacher.cachingFriends[0].countriesCachedIn.push("Romania","Estonia");


