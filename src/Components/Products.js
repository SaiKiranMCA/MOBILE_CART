import React from 'react';
import JsonData from '../Data/JsonData.json';
import { useDispatch } from 'react-redux';
import { decrementcart, incrementcart } from '../Redux/Reducer/CartReducer';

const Products = () => {
    const dispatch = useDispatch();
  return (
    <div>
      <div className='container'>
        <div className='row'>
            {JsonData.products.map(product =>
                <div className='col' key={product.id}>
                    <div className='card m-3' style={{"width":"18rem","height":"25rem","textAlign":"center"}}>
                        <img className='card-image-top' alt='Mobiles' src={product.src} style={{"width":"15rem","height":"15rem"}} />
                        <p className='card-title'>{product.name} | ${product.price}</p>
                    <div className='card-body'>
                        <button className='btn btn-primary m1-auto'
                        onClick={()=> dispatch(incrementcart({
                            productName:product.name,
                            productPrice:product.price
                        }))}>Add</button> &nbsp;
                        <button className='btn btn-primary m1-auto'
                        onClick={()=> dispatch(decrementcart({
                          productName:product.name,
                          productPrice:product.price
                      }))}>Remove</button>
                    </div>    
                    </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default Products;
