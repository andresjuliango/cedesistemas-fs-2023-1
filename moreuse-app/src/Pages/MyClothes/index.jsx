import { Page } from '../../Components/Page'
import { Button } from '../../Components/Button'
import { useNavigate } from 'react-router-dom'
import React ,{ useEffect, useState } from "react";
import { HTTP_METHODS, httpRequest } from '../../Utils/HttpRequest';
import { WearListContainer } from '../Home/styles';

const MyClothes = () => {

  const [clothes, setClothes] = useState({});
  const navigate = useNavigate();

  useEffect( () => {

    async function getClothes() {
      try {
        const response = await httpRequest({
          method: HTTP_METHODS.GET,
          endpoint: '/clothes/getMyStuff'
        })

        setClothes(response.data.clothes)
      } catch (error) {
        console.log(error);
      }
    }

    getClothes();

  },[]);

  const onAddClothe = () => {
    navigate("/add-clothing")
  }

  return (
    <Page title="Mis prendas">

      <Button text="Agregar prenda" onPress={onAddClothe} />

      <WearListContainer>
        {
          clothes.map((item, key) => <WearItem key={key} {...item} /> )
        }
      </WearListContainer>
    </Page>
  )
}

export default MyClothes;
