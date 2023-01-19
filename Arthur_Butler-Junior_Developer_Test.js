//Question 1: JS object structure design
const categoriesObj={
    category1:{
        categoryProducts:[
            {
                productName:"product1",
                price:19.99,
                descpription:"example",
                productImgURL:"product1.jpg",
                subCategory:"subCategory1"
            },
            {
                productName:"product2",
                price:39.99,
                descpription:"example",
                productImgURL:"product2.jpg",
                subCategory:"subCategory1"
            }
        ],
        categoryUsers:["username1","username2","username3"]
    },
    category2:{
        categoryProducts:[
            {
                productName:"product3",
                price:39.99,
                descpription:"example",
                productImgURL:"product3.jpg",
                subCategory:"none"
            },
            {
                productName:"product4",
                price:99.99,
                descpription:"example",
                productImgURL:"product4.jpg",
                subCategory:"none"
            }
        ],
        categoryUsers:["username4","username5","username6"]
    } 
}

console.log(categoriesObj);

//Question 2: JS function
function userCategory(categoriesObj){
    var userArr=[];
    //sorts through the categories
    for (let i in categoriesObj) {
        //creates object for each user contained in each category object 
        for (let x in categoriesObj[i].categoryUsers) {
            const user = new Object();
            user.username = categoriesObj[i].categoryUsers[x];
            //adds array of visible product names to each user object
            let products = [];
            for (let y in categoriesObj[i].categoryProducts) {
                products.push(categoriesObj[i].categoryProducts[y].productName);
            }
            user.products = products;
            userArr.push(user);
        }
    }
   return userArr;
} 

console.log(userCategory(categoriesObj));