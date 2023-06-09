import { Page } from '../../Components/Page';
import { Button } from '../../Components/Button';
import { FormContainer, FormControl } from '../../globalStyles';
import { Link, useNavigate } from 'react-router-dom';
import { SignupContent } from './styles';
import { useForm } from 'react-hook-form';
import { emailExpRegular } from '../../Constants';
import { httpRequest } from '../../Utils/HttpRequest';
import { ALERT_ICON, Alert } from '../../Components/Alert/Alert';
import { setToken } from '../../Utils/TokenLocalStorage';

const Login = () => {

  //Permite llevar el control y registro de los datos ingresados y errores si se presentan
  const { register, handleSubmit, formState: {errors} } = useForm();

  const navigate = useNavigate();

  //Que hacer con los datos del formulario
  const onSubmitLogin = (data) => {
    validateUserRequest(data);
  }

  const validateUserRequest = async (data) => {
    try {
      const response = await httpRequest ({
        endpoint: '/auth/login',
        body: data
      });
      console.log(response);
      //Se obtiene el token que viene desde el response del login y se hace el set
      const {token} = response.data;
      setToken(token);
      Alert({
        icon: ALERT_ICON.SUCCESS,
        title: 'Bienvenido',
        text: 'Acceso valido',
        callback: () => {
          navigate('/');
        }
     });

      //Despues del mensaje se redirecciona al root del proyecto
      /*
      setTimeout(() => {
        navigate('/');
      },2000)
      */

    } catch (error) {
      console.error(error);
      Alert({
        icon: ALERT_ICON.ERROR,
        title: 'Error',
        text: 'Credenciales invalidas' });
    }
  }

  return (
    <Page title="Ingresar">
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmitLogin)} noValidate>
          <FormControl>
            <label>Correo electrónico</label>
            <input type='text' {...register("email",
                { required: true, pattern: emailExpRegular}
            )} />
            {errors.email?.type === 'required' && <span>Campo requerido</span>}
            {errors.email?.type === 'pattern' && <span>Debes ingresar un correo válido</span>}
          </FormControl>
          <FormControl>
            <label>Contraseña</label>
            <input type='password' {...register("password", {required: true, minLength: 7})} />
            {errors.password?.type === 'required' && <span>Campo requerido</span>}
            {errors.password?.type === 'minLength' && <span>Mínimo 7 caracteres</span>}
          </FormControl>
          <Button type="submit" text="Ingresar" />
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
