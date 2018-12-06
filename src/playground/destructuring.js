
// object destr


// const person = {
//     name:'Bljah',
//     age: 32,
//     location: {
//         city:'LJ',
//         temp:-3
//     }
// }

// const {difolt:dif = 'difolt primer',name, age} = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${name} je ${age} str pa še ${dif}`  );



// // if(person.location.city && person.location.temp){
// //     console.log(`v ${person.location.city} je ${person.location.temp} stopinj`  );
// // }

// const {city, temp: temperature} = person.location;
// if(city && temperature){
//     console.log(`v ${city} je ${temperature} stopinj`  );
// }



// const book = {
//     title: 'knjigaaa',
//     author:'Blj Vlj',
//     publisher: {
//         name: 'pubbb'
//     }
// };


// const {name:publisherName='samozaložba'} = book.publisher;

// console.log(publisherName);


//array destr

const address = ['ubu 84','LJ','SI','1000'];

//const [street, city, state, zip] = address;
const [, city, state='Zamurje'] = address;

//console.log(`Ti si v ${address[1]} ${address[2]}`)
console.log(`Ti si v ${city} ${state}`)

// const address = [];
// const [, , state='KR'] = address;

const item = ['coffee (hot)','2','2.5','2.75'];

const [itm, ,med] = item;
console.log(`Med ${itm} košta  ${med}`)
