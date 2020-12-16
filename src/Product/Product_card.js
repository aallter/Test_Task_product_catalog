import React from 'react';
import card from './product_card.module.css';

let Card_product = () => {
  return(
    <div className={card.cardProd}>
      <img src="https://s.office-mix.com.ua/img/catalog/bloknot-na-spirali-3d-plastik-a5-80-ark-forest-biryuzoviy.jpg" className={card.img}/>
      <h2>Notebook</h2>
      <p className={card.infoProd}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis nunc sem, a elementum lacus blandit sit amet. Quisque blandit eros sed odio rhoncus, eget laoreet diam ultricies.</p>
      <h3>$43,25</h3><span>$33,25</span>
      <br/>
      <span className={card.days}>9 days</span>
      <br/>
      <a href=""><button> Edit </button></a>
      <a href=""><button> Delete </button></a>
    </div>
  );
};

export default Card_product;