import { Page } from '../../Components/Page';
import { Button } from '../../Components/Button';
import { FormContainer, FormControl } from '../../globalStyles';
import { Link } from 'react-router-dom';
import { SignupContent } from './styles';

const Login = () => {

  return (
    <Page title="Ingresar">
      <FormContainer>
        <form>
          <FormControl>
            <label>Correo electrónico</label>
            <input type='email' />
          </FormControl>
          <FormControl>
            <label>Contraseña</label>
            <input type='password' />
          </FormControl>
          <Button text="Ingresar" />
        </form>
      </FormContainer>

      <SignupContent>
        <p>
          ¿Aún no tienes una cuenta?
        </p>
        <Link to="/signup">Regístrarme</Link>
      </SignupContent>
    </Page>
  )
}

export default Login;
