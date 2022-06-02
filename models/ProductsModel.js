let products = [
    {"id":"1", "type":"jersey", "name":"Team Liquid '22 Jersey"}
];

const all = () =>{
    return products
}

const find = (id) => {
    return products.find(p=>p.id === id)
}

const create = (product) =>{
    products = [...products, product];
    return products;
}


const update = (id, product) =>{
    products = products.map(p=>{
        return (p.id===id) ? product : p
    })
    return products
}

const remove = (id) =>{
    products = products.filter(p=>p.id!==id)
}

module.exports = {all, find, create, update, remove}