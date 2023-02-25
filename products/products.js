"use strict";

class Product {
    constructor(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
}

function numericOperation(num, operation) {
    if (!operation[0].localeCompare(">")) {
        if (!operation[1].localeCompare("=")) {
            console.log(num, operation.slice(0, 2),operation.slice(2));
            return num >= operation.slice(2);
        }
        return num > operation.slice(1);
    }
    if (!operation[0].localeCompare("<")) {
        if (!operation[1].localeCompare("=")) {
            return num <= operation.slice(2);
        }
        return num < operation.slice(1);
    }
    if (!operation[0].localeCompare("=")) {
        return num == operation.slice(1);
    }

    return false;
}

function stringOperation(str, operation, operand) {

    switch (operation) {
        case "contains":
            return str.includes(operand);

        case "starts":
            return str.startsWith(operand);

        case "ends":
            return str.endsWith(operand);
    }
    return false;
}

function queryHandler(query_list, product) {
    let queryResults = [];

    for (let query of query_list) {
        query = query.split("-");
        let objVariable = query[0];

        if ( !objVariable.localeCompare("name") || !objVariable.localeCompare("description") ) {
            queryResults.push(stringOperation(product[objVariable], query[1], query[2]));
        }

        if ( !objVariable.localeCompare("price") || !objVariable.localeCompare("quantity") ) {
            queryResults.push(numericOperation(product[objVariable], query[1]));
        }
    }

    return !queryResults.includes(false);
}

function getProducts(query, list_products) {
    let suitable_products = [];
    query = query.split("&");

    for (let product of list_products) {
        if (queryHandler(query, product)) {
            suitable_products.push(product);
        }
    }

    return suitable_products;
}

let products = [
    new Product("fdapfkvc", 2, 10, "fkodpsfkabc"),
    new Product("cda", 2, 6, "cda"),
    new Product("fdert", 1, 6, "erewabc"),
    new Product("fdrere", 2, 5, "fdsfew"),
    new Product("rewrwe", 2, 5, "tytry"),
    new Product("iouio", 2, 8, "abc"),
    new Product("rewrewfdrer", 2, 6, "abc"),
    new Product("rerwfdrer", 2, 1, "cabc")
];

let query = "name-contains-fd&price-=2&quantity->5&description-ends-abc";
console.log( "Первый запрос:", getProducts(query, products) );

query = "name-starts-fd&quantity-=5";
console.log( "Второй запрос:", getProducts(query, products) );
