import { Page } from '../../Components/Page'
import { Button } from '../../Components/Button'
import { useNavigate } from 'react-router-dom'

const MyClothes = () => {

  const navigate = useNavigate();

  return (
    <Page title="Mis prendas">

      <Button text="Agregar prenda" onPress={() => navigate("/add-clothing")} />

      <section>
        <p>Listado de prendas.....</p>
      </section>
    </Page>
  )
}

export default MyClothes;
