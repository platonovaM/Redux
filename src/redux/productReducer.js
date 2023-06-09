const initialState=
[
    {name:"Огурец", price: 200},
    {name:"Капуста", price: 70}
]

const productReducer = (state=initialState, action)=>{
    switch(action.type){
        case "ADD":
            const test=state.filter(el=>el.name.toLocaleLowerCase()===action.payload.name.toLocaleLowerCase());
            return test.length>0? state: [...state, action.payload];
        case "DEL":
            return state.filter(el=>el.name!==action.payload)
        case "UPD":
            const check=state.filter(el=>el.name.toLocaleLowerCase()===action.payload.data.name.toLocaleLowerCase());
            if (check.length>0){
                return state;
            } else{
            return state.map(el=>{
                return el.name===action.payload.product?
                action.payload.data: el
            })
        }
    }
    return state;
}
export default productReducer;