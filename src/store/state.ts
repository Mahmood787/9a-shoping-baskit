import {ProductItem} from '../global'
import yellow from './public/yellow-tshirt.png'
import blue from './public/blue-tshirt.png'
import red from './public/red-tshirt.png'
const initailState:ProductItem []=[
    {
        id: '123',
        title: 'Blue t-shirt',
        description: 'No fancy sizing charts here, one t-shirt size to rule them all',
        imageUrl: blue,
        price: 399
    },
    {
        id: '124',
        title: 'White trouser',
        description: 'Fancey sizing with fancy fitting',
        imageUrl: red,
        price: 500
    },
    {
        id: '456',
        title: 'Yellow t-shirt',
        description:
          'This unique t-shirt is guaranteed to fit nobody, not even new born babies',
        imageUrl: yellow,
        price: 499
      },
]
export {initailState}