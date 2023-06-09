import { Button } from "../../Components/Button";
import { Page } from "../../Components/Page"
import { FormContainer, FormControl } from "../../globalStyles";
import { useForm } from 'react-hook-form';
import { emailExpRegular } from '../../Constants';
import { phoneExpRegular } from "../../Constants";
import { useNavigate } from "react-router-dom";
import { httpRequest } from "../../Utils/HttpRequest";
import { ALERT_ICON, Alert } from "../../Components/Alert/Alert";

const Signup = () => {

  //Permite llevar el control y registro de los datos ingresados y errores si se presentan
  const { register, handleSubmit, formState: {errors} } = useForm();

  const navigate = useNavigate();

  //Que hacer con los datos del formulario
  const onSubmitRegister = (data) => {
    console.log('data',data);
    validateRegisterRequest(data);
  }

  const validateRegisterRequest = async (data) => {
    try {
      const response = await httpRequest ({
        endpoint: '/auth/signup',
        body: data
      });

      console.log(response);

      Alert({
        icon: ALERT_ICON.SUCCESS,
        title: 'Bienvenido',
        text: 'Registro Satisfactorio',
        callback: () => {
          navigate('/');
        }
      });

    } catch (error) {
      console.error(error);
      Alert({
        icon: ALERT_ICON.ERROR,
        title: 'Error',
        text: 'No fue posible registrarse'
      })
    }
  }

  return (
    <Page title="Registrar">
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmitRegister)} noValidate>
          <FormControl>
            <label>Nombre</label>
            <input type='text' {...register("name",
                { required: true, pattern: /^[A-Za-z]+/i}
            )} />
            {errors.name?.type === 'required' && <span>Campo requerido</span>}
            {errors.name?.type === 'pattern' && <span>Debes ingresar un nombre válido</span>}
          </FormControl>
          <FormControl>
            <label>Dirección</label>
            <input type='text' {...register("address",
              {required: true}
            )} />
             {errors.address?.type === 'required' && <span>Campo requerido</span>}
          </FormControl>
          <FormControl>
            <label>Teléfono</label>
            <input type='text' {...register("phone",
                { required: true, minLength: 10, maxLength: 10, pattern: phoneExpRegular}
            )} />
            {errors.phone?.type === 'required' && <span>Campo requerido</span>}
            {errors.phone?.type === 'minLength' && <span>Teléfono 10 caracteres</span>}
            {errors.phone?.type === 'maxLength' && <span>Teléfono 10 caracteres</span>}
            {errors.phone?.type === 'pattern' && <span>Debes ingresar un teléfono válido</span>}
          </FormControl>
          <FormControl>
            <label>Correo electrónico</label>
            <input type='text' {...register("email",
                { required: true, pattern: emailExpRegular }
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
          <Button text='Registrar' />
        </form>
      </FormContainer>
    </Page>

  )
};

export default Signup
