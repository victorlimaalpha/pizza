pizzaJson.map((item, index)=>{
    let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);
    //preeencher as informaçoes em pizza item

    document.querySelector('.pizza-area').append( pizzaItem );
});