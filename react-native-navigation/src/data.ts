import { Product } from './types';

export const PRODUCTS: Product[] = [
  { id: '1', 
  name: 'Half Life 2', 
  price: 15.00, 
  color: '#FF6B6B', 
  image: require('../assets/hf2.jpg') 
  },

  { id: '2', 
  name: 'Terraria', 
  price: 2.00, 
  color: '#4ECDC4', 
  image: require('../assets/tr.jpg') 
  },

  { id: '3', 
  name: 'Baldurs Gate 3', 
  price: 55.00, 
  color: '#45B7D1', 
  image: require('../assets/bg3.png') 
  },

  { id: '4', 
  name: 'Risk Of Rain 2', 
  price: 13.00, 
  color: '#96CEB4', 
  image: require('../assets/ror2.png') 
  },

  { id: '5', 
  name: 'Persona 5: Royale', 
  price: 60.00, 
  color: '#FFEEAD', 
  image: require('../assets/p5r.png') 
  },
  
  { id: '6', 
  name: 'Rimworld', 
  price: 15.00, 
  color: '#D4A5A5',
  image: require('../assets/rim.png')  
  },
  
];
