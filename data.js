exports.PeopleData = [{
        Name: 'Hej',
        key: 'hej',
        Order: 1,
        Active: true
    },
    {
        Name: 'Karin',
        key: 'karin',
        Order: 2,
        Active: true
    },
    {
        Name: 'Mats',
        key: 'mats',
        Order: 3,
        Active: true
    },
    {
        Name: 'Jonas',
        key: 'jonas',
        Order: 4,
        Active: false
    },
    {
        Name: 'kristina',
        key: 'kristina',
        Order: 5,
        Active: true
    },
]

people = [{
    Name: 'Little Data',
    Active: true,
    key: 'littledata'
}]


exports.WriteHello = () => {
    console.log('hello');

    this.Data.map(el => {
        console.log(el)
    })
}


exports.getPeople = function (active) {
    // return this.PeopleData.filter(el => {
    //     return el.Active === active ? true : false;
    // });
    return filterPeople(active);
}


filterPeople = (active) => {
    // export values and functions are called with 'this.'
    // rest is jsut called
    return this.PeopleData.filter(el => {
        return el.Active === active ? true : false;
    });
}