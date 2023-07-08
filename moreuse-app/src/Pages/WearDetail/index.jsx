import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../Components/Button';
import {Page} from '../../Components/Page';
import { WearDetailContainer, WearDetailContent, WearImageContainer } from './styles';
import { HTTP_METHODS, httpRequest } from '../../Utils/HttpRequest';
import React, {useEffect, useState} from 'react';


const WearDetail = () => {

  const [clothes, setClothes] = useState({});
  const navigate = useNavigate();


  //Nos entrega el id para la url, usamos params
  const {id} = useParams();

  useEffect( () => {

    async function getClothe(){

      try {

        const response = await httpRequest({
          method: HTTP_METHODS.GET,
          endpoint: '/clothes/detail/'+id
        });

       setClothes(response.data);

      } catch (error) {
        console.log(error);
      }

    }

    getClothe();

  },[]);

  const onBuy = () =>{

  }

  return (
    <Page>
      <section>
        <WearDetailContainer>
          <a class="inicio" ><Link to='/'> Inicio</Link></a>

          <WearImageContainer>
            <img width="100px" src={clothes.image} alt="" />
          </WearImageContainer>
          <WearDetailContent>
            <div><strong>Identificador Prenda:</strong> {clothes._id}</div>
            <div><strong>Nombre:</strong> {clothes.name}</div>
            <div><strong>Público Objetivo:</strong> {clothes.target}</div>
            <div><strong>Género:</strong> {clothes.gender}</div>
            <div><strong>Descripción:</strong> {clothes.description}</div>
            <div><strong>Precio:</strong> {clothes.price}</div>
          </WearDetailContent>
        </WearDetailContainer>
        <Button text="Comprar" type="button" onPress={onBuy}></Button>
      </section>
    </Page>
  )

  /*
  return (
    <Page>
      <WearDetailContainer>
        <WearImageContainer>
          <img src="https://hmcolombia.vtexassets.com/arquivos/ids/1833172-483-725/Camisa-le%C3%B1adora-de-algodon---Red-Checked---H-M-CO.jpg?v=637928777918300000" />
        </WearImageContainer>
        <WearDetailContent>
          <h5>Referencia: {id}</h5>
          <h3>Camisa Leñadora</h3>
          <h4>2 meses / Masculino</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt perferendis laudantium quod tenetur voluptatibus molestiae odit explicabo! Nesciunt id quod reprehenderit. Veritatis unde quaerat nobis, voluptates nostrum accusamus vitae? Necessitatibus!
          </p>
        </WearDetailContent>
      </WearDetailContainer>
      <Button text="Comprar" />
    </Page>
  )
  */
}

export default WearDetail;
