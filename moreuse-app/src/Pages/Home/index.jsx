import { Page } from '../../Components/Page';
import { WearItem } from './Components/WearItem';
import { WearListContainer } from './styles';

const WEAR_LIST = [
  {
    image: 'https://hmcolombia.vtexassets.com/arquivos/ids/1833172-483-725/Camisa-le%C3%B1adora-de-algodon---Red-Checked---H-M-CO.jpg?v=637928777918300000',
    name: 'Camisa leñadora',
    target: '2 meses',
    gender: 'masculino'
  },
  {
    image: 'https://falabella.scene7.com/is/image/FalabellaCO/882606038_1?wid=1500&hei=1500&qlt=70',
    name: 'Pantalón corto',
    target: '2 meses',
    gender: 'masculino'
  },
  {
    image: 'https://hmcolombia.vtexassets.com/arquivos/ids/2531773/Vestido-estampado-en-algodon---Rosado-claro-Gatito---H-M-CO.jpg?v=638128275678370000',
    name: 'Vestido',
    target: '12 meses',
    gender: 'femenino'
  },
  {
    image: 'https://hmcolombia.vtexassets.com/arquivos/ids/2531773/Vestido-estampado-en-algodon---Rosado-claro-Gatito---H-M-CO.jpg?v=638128275678370000',
    name: 'Vestido',
    target: '12 meses',
    gender: 'femenino'
  },
  {
    image: 'https://hmcolombia.vtexassets.com/arquivos/ids/2531773/Vestido-estampado-en-algodon---Rosado-claro-Gatito---H-M-CO.jpg?v=638128275678370000',
    name: 'Vestido',
    target: '12 meses',
    gender: 'femenino'
  },
  {
    image: 'https://hmcolombia.vtexassets.com/arquivos/ids/2531773/Vestido-estampado-en-algodon---Rosado-claro-Gatito---H-M-CO.jpg?v=638128275678370000',
    name: 'Vestido',
    target: '12 meses',
    gender: 'femenino'
  }
];

const Home = () => {
  return (
    <Page>
      <h1>Home Page</h1>
      <WearListContainer>
        {
          // {...item} desestruturación del objeto es igual a
          // image={item.image} name={name.item}
          WEAR_LIST.map((item,key) => <WearItem key={key} {...item} />)
        }
      </WearListContainer>
    </Page>
  )
}

export default Home;
