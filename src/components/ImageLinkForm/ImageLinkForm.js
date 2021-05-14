import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onInputChange2, onButtonSubmit }) => {
  return (
    <div>
      <p className='f1'>
        {'Feeling hungry?'}
      </p>
      <p className='f3'>
        {'Please enter your area and type of food you are looking for'}
      </p>
      <div className='center'>
        <div className='form pa4 br3 shadow-5'>
          <input  className='f4 pa2 w-50' 
                  type='text'
                  placeholder='city or area'
                  onChange={onInputChange}/>
          <input className='f4 pa2 w-80'
                 type='text'
                 placeholder='type of cuisine, restaurant name or street name'
                 onChange={onInputChange2}/>  
          <button
            className='w-28 grow f4 link ph3 pv2 dib white bg-light-red'
            onClick={onButtonSubmit}
          >Search</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;