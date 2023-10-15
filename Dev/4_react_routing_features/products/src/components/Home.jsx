import React, { useEffect, useState } from 'react'

function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState(null);
    function handleInput(e) {
        setSearchTerm(e.target.value);
    }
    function handleSubmit(e) {
        setSearchTerm('');
    }
    useEffect(() =>{
        // https://fakestoreapi.com/products
        (async function() {
            const responseData = await fetch('https://fakestoreapi.com/products');
            const prodData = await responseData.json();
            setProducts(prodData);
        })();
        
        
    },[])
    // Create copy search term that is filtered .
    let filteredArr = products;
    if (searchTerm != '') {
        filteredArr = filteredArr.filter((product) => {
            let loweerSearchTerm = searchTerm.toLocaleLowerCase();
            let lowerTitle = product.title.toLowerCase();
            return lowerTitle.includes(loweerSearchTerm);
        })
    }    
  return (
    <>
    <header className='navBar'>
        <input className='search_input' type='text' value={searchTerm} onChange={handleInput}></input>
    </header>
    <div className='mainWrapper'>
        {filteredArr == null ? <h3>Loading...</h3>: <>
            
           {
            filteredArr.map((item, index) => { 
                return (
                    <div className='product' key={index}>
                        <img src={item.image} alt='' className='product_image'></img>
                        <div className='product_meta'>
                            <p className='product_title'>{item.title}</p>
                            <p className='product_price'>$ {item.price}</p>
                        </div>
                    </div>
                )
            })
           } 
        </>}
    </div>
    </>
  )
}

export default Home