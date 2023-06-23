import { useContext } from 'react';
import { Page } from '../../Components/Page'
import { Content } from '../../globalStyles';
import { UserContext } from '../../Contexts/UserContext';

const Profile = () => {

const {user} = useContext(UserContext);

  return (
    <Page title="Perfil">
      <Content>
        <h4>Nombre</h4>
        <p>{user.name}</p>
        <h4>Correo Electrónico</h4>
        <p>{user.email}</p>
        <h4>Dirección</h4>
        <p>{user.address}</p>
        <h4>Teléfono</h4>
        <p>{user.phone}</p>
      </Content>
    </Page>
  )
};

export default Profile;
