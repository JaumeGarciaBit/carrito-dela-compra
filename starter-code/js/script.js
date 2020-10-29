let m_submitButton = document.getElementById("addButton");
let m_deleteButton = document.getElementById("removeButton");

//Read JSON file
let m_products = [];
let m_productDATA = "../data/products.json";
let m_promise = fetch(m_productDATA);
m_promise.then(response => response.json())
        .then(data =>
        {            
            data.forEach(e =>
                {
                    m_products.push(e);
                })
                m_deleteButton.addEventListener('click', removeProductForm);
                m_submitButton.addEventListener('click', addProductForm);

                listStock();
        })


let m_shoppingList = [];
let m_stockContainer = document.getElementsByClassName("stockList")[0];

function listStock()
{
    m_stockContainer.innerHTML = "";
    for (let i = 0; i < m_products.length; i++) {
        const l_element = m_products[i];
        writeProduct(l_element);
        
    }
}

function writeProduct(product)
{
    let l_result =
    `<li><p>${product._id}</p> <p>${product.name}</p> <p>${product.category}</p> <p id="qty${product._id}">${product.quantity}</p></li>`

    m_stockContainer.innerHTML += l_result;
}

function demandProduct(product, quantity)
{
    if(quantity === undefined || quantity == 0)
        quantity = Math.floor(Math.random()*30+1);

    product.quantity += quantity;
    
    return product;
}

function loadStock(product)
{
    if(!m_products.includes(product))
    {
        m_products.push(product);
        writeProduct(product);
    }
    else
    {
        let l_element = document.getElementById("qty"+product._id);
        l_element.textContent = product.quantity;
    }
}

const addProductForm =() =>
{
    let l_name = document.forms["productForm"]["fname"].value;
    let l_category = document.forms["productForm"]["fcategory"].value;
    let l_index = m_products.length;
    let l_id = "5ced8cb95006e39827170z" + Math.floor(Math.random()*1000);;     
    let l_quantity = Math.floor(Math.random()*30)+1;

    let l_element = 
    {
        _id: l_id,
        index: l_index,
        name: l_name,
        category: l_category,
        quantity: l_quantity,
    }

    loadStock(l_element)
    return false;
};

const removeProductForm = ()=>
{
    let l_index = document.forms["RemoveForm"]["findex"].value;

    m_products.splice(l_index, 1);
    console.log(m_products);
};

function orderProduct()
{
    //TODO: Ordenar productos por stock
}

