


var peopleHorsaryd=[
    {
        Name:'Nils Erik',
        Age:54,
        Money:75603
    },
    {
        Name:'Britt Marie',
        Age:65,
        Money:365000
    },
    {
        Name:'Rolf',
        Age:55,
        Money:125000
    },
    {
        Name:'Birgitta',
        Age:54,
    },
    {
        Name:'Klas',
        Age:70,
        Money:54033
    }
]



DoIt();

function DoIt(){
    const newPerson={
        Name:'Ola',
        Age:45,
        Money:12354
    };

    const justNames=peopleHorsaryd.map(person=>person.Name).join(' ')

    // räknar totalsumman
    const reducer=(totVaue,currValue) => totVaue+currValue;
    const totMoney=peopleHorsaryd.filter(person=>person.Money).map(person=>person.Money?person.Money:0).reduce(reducer); // ta bort först de som saknar money

    // kollar om alla är pensionärer
    const IsRetired = (age)=>{
        return age>=69?true:false;
    }

    const AllRetired=peopleHorsaryd.filter(person=>person.Age).map(person=>person.Age).every(IsRetired)
    console.log(AllRetired)
}


// array.filter(el=> true/false)   returnerar elementet om 'true'  vid udnefined eller false skiter han i det

// reducer takes a function iwth totvalue and current value

// join slår ihop värdena till en sträng => peopleHorsaryd.map(person=>person.Name).join(' ') = 'Nils Erik Britt Marie Rolf Birgitta Klas'


// every kollar så allt är sant:   const AllRetired=peopleHorsaryd.filter(person=>person.Age).map(person=>person.Age).every(IsRetired)
