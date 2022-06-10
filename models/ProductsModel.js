let products = [
    {"id":"1", "type":"jersey", "name":"Team Liquid '22 Jersey", "price":60}
];

const all = () =>{
    return products
}

const find = (id) => {
    return products.find(p=>p.id === id)
}

const create = (product) =>{
    let id;
    if (products.length === 0) {
        id = "1";
    } else {id=Number(products[products.length-1].id)+1+"";}
    products = [...products, {id, ...product}];
    return products[products.length-1];
}


const update = (id, product) =>{
    products = products.map(p=>{
        return (p.id===id) ? product : p
    })
    return products
}

const remove = (id) =>{
    products = products.filter(p=>p.id!==id)
    return products
}

module.exports = {all, find, create, update, remove}