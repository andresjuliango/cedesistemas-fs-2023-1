import { Page } from "../../Components/Page"
import { TARGETS, GENDERS } from "../../Constants";
import { FormContainer, FormControl } from "../../globalStyles";
import { Button } from '../../Components/Button';
import { useForm } from 'react-hook-form'

const AddClothing = () => {

  //Permite llevar el control y registro de los datos ingresados y errores si se presentan
  const { register, handleSubmit, formState: {errors} } = useForm();

  //Que hacer con los datos del formulario
  const onSubmitAddClothing = (data) => {
    console.log('data',data);
  }

  return (
    <Page title="Nueva Prenda">
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmitAddClothing)} noValidate>
          <FormControl>
              <label>Imagen</label>
              <input type='url' {...register("image",
                  { required: true}
              )} />
              {errors.image?.type === 'required' && <span>Campo requerido</span>}
          </FormControl>
          <FormControl>
              <label>Nombre de la prenda</label>
              <input type='text' {...register("title",
                  { required: true}
              )} />
              {errors.title?.type === 'required' && <span>Campo requerido</span>}
          </FormControl>
          <FormControl>
            <label>Público objetivo</label>
            <select {...register("target")}>
              {
                TARGETS.map( (item, key) => <option key={key} value={item}>{item}</option> )
              }
            </select>
          </FormControl>
          <FormControl>
            <label>Género</label>
            <select {...register("gender")}>
              {
                GENDERS.map( (item, key) => <option key={key} value={item.id}>{item.title}</option> )
              }
            </select>
          </FormControl>
          <FormControl>
            <label>Descripción</label>
            <textarea {...register("description", { required: true })}></textarea>
            {errors.description?.type === 'required' && <span>Campo requerido</span>}
          </FormControl>
          <Button type="submit" text="Guardar" />
        </form>
      </FormContainer>
    </Page>
  )
}

export default AddClothing;
