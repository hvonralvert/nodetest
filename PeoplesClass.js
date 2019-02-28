exports.PeoplesClass = class {
    /* class is exported */

    constructor(People) {
        this.People = People;
    }


    getActive() {
        return this.People.filter(person => {
            return person.Active;
        })
    }

    
    RemoveNonWanted() {
        return this.People = this.People.filter(person => {
            return person.Active
        })
    }


    getAllPeople() {
        /*alla måste returnera this som är chainade. Sista funktionen returnerar objektet*/
        return this.People;
    }


    GetPeople(){
        return this.People;
    }

    filterName(name) {
        this.People = this.People.filter(el => el.key.includes(name.toLowerCase()))
        return this;
    }

    filterActive(active) {
        this.People = this.People.filter(el => el.Active === active);
        return this;
    }
}


exports.PeoplesClass2 = class {
    /* class is exported */

    constructor(People) {
        this.People = People;
    }


    getActive() {
        return this.People.filter(person => {
            return person.Active;
        })
    }

    
    RemoveNonWanted() {
        return this.People = this.People.filter(person => {
            return person.Active
        })
    }


    getAllPeople() {
        /*alla måste returnera this som är chainade. Sista funktionen returnerar objektet*/
        return this.People;
    }


    GetPeople(){
        return this.People;
    }

    filterName(name) {
        this.People = this.People.filter(el => el.key.includes(name.toLowerCase()))
        return this;
    }

    filterActive(active) {
        this.People = this.People.filter(el => el.Active === active);
        return this;
    }
}
