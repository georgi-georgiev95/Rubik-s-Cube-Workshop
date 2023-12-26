const uniqid = require('uniqid');
const cubes = [
    {
        id: 'am3qgn0lqmciut6',
        name: 'My Cube',
        description: "A test Rubik's Cube",
        imageUrl: 'https://cdn.shopify.com/s/files/1/0270/0342/0758/files/cubes12_480x480.jpg?v=1609227223',
        difficultyLevel: 4
    },
    {
        id: 'am3qgn0lqmcifs0',
        name: 'Rubik Classic',
        description: "A second test Rubik's Cube",
        imageUrl: 'https://shop.spinmaster.com/cdn/shop/products/o3rmamdfu2kartbxpul9.jpg?v=1694453034',
        difficultyLevel: 3
    }
];

exports.getAll = () => cubes.slice();

exports.getOne = (cubeId) => cubes.find(x => x.id == cubeId);

exports.create = (cubeData) => {
    const newCube = {
        id: uniqid(),
        ...cubeData,
    }

    cubes.push(newCube);

    return newCube;
}