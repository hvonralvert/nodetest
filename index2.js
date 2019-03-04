var Data = require('./data');

var ClassPeoples = require('./PeoplesClass');
var functPeople = require('./PeoplesFunction');

var horseFunct = require('./horse');


function Horse(name, size, owner) {
    this.Name = name;
    this.Size = size;
    this.Owner = owner;
}

PeoplesGlobal=new ClassPeoples.PeoplesClass(Data.PeopleData);

RunData(PeoplesGlobal);

function RunData() {

    var horses=[
       new Horse('Chaddde',true,'Jasmine'),
       new Horse('Blixten',false,'Annelie')
    ];

    var aHorse = new Horse('Siza', false, 'Carina');
    console.log(horseFunct.HelloHorse(aHorse.Name))
    

    var Peoples = new ClassPeoples.PeoplesClass(Data.PeopleData);
    console.log(Peoples.filterName('Mats').filterActive(true).GetPeople())
    console.log(new ClassPeoples.PeoplesClass(Data.PeopleData).filterName('KRistina').filterActive(true).GetPeople())

    console.log('---------------horses----------');
    console.log(horses)

    // call backs
    callie('henrik', res => {
        console.log('res')
        console.log(res)
    }, namie => {
        console.log('namie')
        console.log(namie)
    })

    console.log('testar global class');
    console.log(this.PeoplesGlobal.GetPeople())
}


function callie(name, callback, callback2) {
    console.log('insiden callie')
    callback('hej');
    callback2(name);
}


function testAsync() {
    console.log('----test async----');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var d = 0;
            for (var i = 0; i < 10000000000; i++) {
                d += i;
            };
            console.log('async function completed')
            console.log(d);
        }, 400);
        resolve(true);
    });
}
