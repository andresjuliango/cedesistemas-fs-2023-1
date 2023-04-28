import { Button } from "../../Components/Button";
import { Page } from "../../Components/Page"
import { FormContainer, FormControl } from "../../globalStyles";
import { useForm } from 'react-hook-form';


const Signup = () => {

//Permite llevar el control y registro de los datos ingresados y errores si se presentan
const { register, handleSubmit, formState: {errors} } = useForm();

//Que hacer con los datos del formulario
const onSubmitLogin = (data) => {
  console.log('data',data);
}

  return (
    <Page title="Registrar">
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmitLogin)} noValidate>
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
            <input type='text' {...register("phoneNumber",
                { required: true, minLength: 10, maxLength: 10, pattern: /"^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"/gmi}
            )} />
            {errors.phoneNumber?.type === 'required' && <span>Campo requerido</span>}
            {errors.phoneNumber?.type === 'minLength' && <span>Teléfono 10 caracteres</span>}
            {errors.phoneNumber?.type === 'maxLength' && <span>Teléfono 10 caracteres</span>}
          </FormControl>
          <FormControl>
            <label>Correo electrónico</label>
            <input type='text' {...register("emailAddress",
                { required: true, pattern: /^[A-Za-z]+[A-Za-z0-9_\.]*@[A-Za-z0-9]+\.[A-Za-z0-9]+/i}
            )} />
            {errors.emailAddress?.type === 'required' && <span>Campo requerido</span>}
            {errors.emailAddress?.type === 'pattern' && <span>Debes ingresar un correo válido</span>}
          </FormControl>
          <FormControl>
            <label>Contraseña</label>
            <input type='password' {...register("password", {required: true, minLength: 8})} />
            {errors.password?.type === 'required' && <span>Campo requerido</span>}
            {errors.password?.type === 'minLength' && <span>Mínimo 8 caracteres</span>}
          </FormControl>
          <Button text='Registrar' />
        </form>
      </FormContainer>
    </Page>

  )
};

export default Signup
