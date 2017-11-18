const person= {
  name: 'Tamas',
  age: 31,
  location: {
    city: 'London',
    temp: 11
  }
};

const {name: firstName = 'Anonymus', age } = person;
const {city, temp, area = 'Enfield'} = person.location;

console.log(`${firstName} is ${age}.`);
if (city && temp) {
  console.log(`It is ${temp} in ${city}, ${area}.`);
}




const address = ['Linwood Crescent', 'Enfiield', 'London', 'UK']

const [street, cityarea, city2] = address;
const [,,, country] = address;

console.log(`You are in ${street}, ${cityarea}, ${city2}, ${country}.`);