
// Object property shorthand

const name = 'Henry'
const userAge = 23

const user = {
    name,   // this is shorthand. Same as (name: name)
    age: userAge,
    location: 'Hong Kong'
}

// console.log(user)



// Object destructuring
// Goal: extract object properties to individual variable

const product = {
    label: 'Red notebook', 
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const { label: productLabel, stock, rating = 5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label, stock = 0 } = {}) => {
    console.log(type, label, stock)
}

transaction('order', product)