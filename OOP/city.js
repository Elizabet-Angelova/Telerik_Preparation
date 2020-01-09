 function solve (name, area, population, country, postcode){
     class City {
        constructor(name, area, population, country, postcode){
            this.name = name
            this.area = area
            this.population = population
            this.country = country
            this.postcode = postcode
        }
        show(name, area, population, country, postcode){
            console.log('name -> ' + this.name)
            console.log('area -> ' + this.area)
            console.log('population -> ' + this.population)
            console.log('country -> ' + this.country)
            console.log('postCode -> ' + this.postcode)

        }
    }
    
let city1 = new City(name, area, population, country, postcode)
city1.show()
    }
