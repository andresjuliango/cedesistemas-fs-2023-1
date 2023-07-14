import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { HTTP_METHODS, httpRequest } from "../../Utils/HttpRequest";
import { WearDetailContainer } from "../WearDetail/styles";

const Order = () => {

  const [orders, setOrders] = useState({});
  const navigate = useNavigate();

  const {id} = useParams();

  useEffect( () => {
    async function getClothe() {
      try {
        const response = await httpRequest({
          method: HTTP_METHODS.GET,
          endpoint: '/clothes/detail/'+id
        });

        setOrders(response.data.clothe);
      } catch (error) {
        console.log(error);
      }
    }

    getClothe();
  },[]);

  return (
    <Page title="Pago">
      <WearDetailContainer>
        <a class="inicio" ><Link to='/'> Inicio</Link></a>
        <WearImageContainer>
            <img width="100px" src={orders.image} alt="" />
          </WearImageContainer>
          <WearDetailContent>
            <div><strong>Identificador Prenda:</strong> {orders._id}</div>
            <div><strong>Nombre:</strong> {orders.name}</div>
            <div><strong>Público Objetivo:</strong> {orders.target}</div>
            <div><strong>Género:</strong> {orders.gender}</div>
            <div><strong>Descripción:</strong> {orders.description}</div>
            <div><strong>Precio:</strong> {orders.price}</div>
          </WearDetailContent>
      </WearDetailContainer>
    </Page>
  )

}

export default Order;
