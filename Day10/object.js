let ob={
    1:'uday',
    2:'shiva',
    3:'manohar'
}
console.log(ob[1]);
let names={
    'name1': 'uday',
    'name2': 'shiva',
    'name3':'manohar'
};
console.log(names);
console.log(names.name1);
console.log(Object.keys(names));
console.log(Object.values(names));
console.log(Object.entries(names));
const {name1,name2}=names;
console.log(name1,name2);
const {name1:a,name2:b}=names;
console.log(a,b);
let u={
    name:'uday',
     age:21,
     
};
let v={
    age:24,
    sex:'male',
    lang:'eng'
};
let uv={...u,...v};
console.log(uv);
let copyu={...u};
console.log(copyu);
let updatedu={...u,class:'A'};
console.log(updatedu);