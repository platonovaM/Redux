const addproduct = (obj)=>{
    return{
        type: "ADD",
        payload: obj
    }
}
const delProduct=(name)=>{
    return{
        type: "DEL",
        payload: name
    }
}
const updProduct=(obj)=>{
    return{
        type: "UPD",
        payload: obj
    }
}
export{addproduct,delProduct, updProduct}