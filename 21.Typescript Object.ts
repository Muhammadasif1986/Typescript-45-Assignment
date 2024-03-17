// let person_name='Akber';
// let person_arr:(string|number|boolean)[] =  ['taha',12, true,];
// let Man = ['Asif',37,true];

interface bio_data {
    Name : String,
    age : Number,
    Nationality : string,
    student : boolean
}

let  data:bio_data = {
    Name : 'Abid',
    age : 40,
    Nationality : 'pakistan',
    student : true,

}


console.log(data);

interface motor_bike {
    name: string,
    cc : number,
    model : number,
    register : boolean,

}

let bike:motor_bike = {
    name : 'honda',
    cc : 70,
    model : 2020,
    register : true,
}

console.log(bike);

