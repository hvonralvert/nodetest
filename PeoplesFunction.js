exports.PeoplesFunct = function (People){
    this.People = People;
}

this.PeoplesFunct.prototype.getActive = () => {
    return this.People.filter(person => {
        return person.Active;
    })
}

this.PeoplesFunct.prototype.GetPeople = () => {
    return this.People;
}

this.PeoplesFunct.prototype.filterName = (name) => {
    this.People = this.People.filter(el => el.key.includes(name.toLowerCase()))
    return this;
}

this.PeoplesFunct.prototype.filterActive = (active) => {
    this.People = this.People.filter(el => el.Active === active);
    return this;
}
