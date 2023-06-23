function filterByCategory(products){
    return (category)=>{
        let new_arr=products.filter((el)=>{
            if(el.category==category){
                return el;
            }
        })
        return new_arr;
    }
}
var Products=[
    {name:'shirt',category:'clothing'},
    {name:'pants',category:'clothing'},
    {name:'hat',category:'assessories'
    }
]
var clothingproducts=filterByCategory(products)('clothing');
console.log(clothingproducts)