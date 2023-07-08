import { useEffect, useState } from "react";
import { Page } from "../../Components/Page";
import { WearItem } from "./Components/WearItem";
import { WearListContainer } from "./styles";
import { HTTP_METHODS, httpRequest } from "../../Utils/HttpRequest";

/*
const WEAR_LIST = [
  {
    _id: 1,
    image: 'https://hmcolombia.vtexassets.com/arquivos/ids/1833172-483-725/Camisa-le%C3%B1adora-de-algodon---Red-Checked---H-M-CO.jpg?v=637928777918300000',
    name: 'Camisa leñadora',
    target: '2 meses',
    gender: 'masculino'
  },
  {
    _id: 2,
    image: 'https://falabella.scene7.com/is/image/FalabellaCO/882606038_1?wid=1500&hei=1500&qlt=70',
    name: 'Pantalón corto',
    target: '2 meses',
    gender: 'masculino'
  },
  {
    _id: 3,
    image: 'https://hmcolombia.vtexassets.com/arquivos/ids/2531773/Vestido-estampado-en-algodon---Rosado-claro-Gatito---H-M-CO.jpg?v=638128275678370000',
    name: 'Vestido',
    target: '12 meses',
    gender: 'femenino'
  },
  {
    _id: 4,
    image: 'https://hmcolombia.vtexassets.com/arquivos/ids/2531773/Vestido-estampado-en-algodon---Rosado-claro-Gatito---H-M-CO.jpg?v=638128275678370000',
    name: 'Vestido',
    target: '12 meses',
    gender: 'femenino'
  },
  {
    _id: 5,
    image: 'https://hmcolombia.vtexassets.com/arquivos/ids/2531773/Vestido-estampado-en-algodon---Rosado-claro-Gatito---H-M-CO.jpg?v=638128275678370000',
    name: 'Vestido',
    target: '12 meses',
    gender: 'femenino'
  },
  {
    _id: 6,
    image: 'https://hmcolombia.vtexassets.com/arquivos/ids/2531773/Vestido-estampado-en-algodon---Rosado-claro-Gatito---H-M-CO.jpg?v=638128275678370000',
    name: 'Vestido',
    target: '12 meses',
    gender: 'femenino'
  }
];
*/


const Home = () => {

  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    requestClothes();
  }, []);

  const requestClothes = async () => {
    try {
      const response = await httpRequest({ method: HTTP_METHODS.GET, endpoint: '/clothes' });
      const data = response.data.clothes;
      setClothes(data);
    } catch (error) {
      //setClothes([]);
      console.log(error);
    }
  }

  return (
    <Page>
      <WearListContainer>
        {
          // {...item} desestruturación del objeto es igual a
          // image={item.image} name={name.item}
          //WEAR_LIST.map((item,key) => <WearItem key={key} {...item} />)
          clothes.map((item, key) => <WearItem key={key} {...item} /> )
        }
      </WearListContainer>
    </Page>
  )
}

export default Home;
