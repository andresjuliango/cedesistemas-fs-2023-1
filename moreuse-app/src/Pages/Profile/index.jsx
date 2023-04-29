import { Page } from '../../Components/Page'
import { Content } from '../../globalStyles';

const Profile = () => {
  return (
    <Page title="Perfil">
      <Content>
        <h4>Nombre</h4>
        <p>Juan</p>
        <h4>Correo Electrónico</h4>
        <p>juan@gmail.com</p>
        <h4>Dirección</h4>
        <p>Marinilla</p>
        <h4>Teléfono</h4>
        <p>11111</p>
      </Content>
    </Page>
  )
};

export default Profile;
