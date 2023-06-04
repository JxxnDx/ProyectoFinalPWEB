import React from 'react'
import '../hojas-de-estilo/formulario.css'
import { useForm } from 'react-hook-form'; // lbreria para formularios

export const Formulario = () => {

    //const redirect = useNavigate();
    const {register, handleSubmit, watch} = useForm(); // registro, gestion de los datos

    const onSubmit = (data) =>{
        console.log(data)
    }// gardar la iinformacion en objetos

    const servicio = watch('servicio');

  return (
    <div className='container'>
        <h1>Formulario - Encuesta</h1>
        <form className='form' onSubmit={handleSubmit}>
            <div>
                <h4>Datos personales</h4>
                <label >Nombre:</label><br/>
                <input type='text'{...register('nombre')} name="nombre" size="25vmin" placeholder="nombre de pila"/> <br/>
                <label for="apellido">Apellido:</label><br/>
                <input type="text" {...register('apellido')} name="apellido" size="25vmin" placeholder="apellido"/><br/>
                <label for="fec_nac">Fecha de nacimiento:</label><br/>
                <input type="date" {...register('Fecha_nacimiento')} name="fec_nac" size="25vmin"/><br/>
            </div>

            <div>
                <h4>¿Dispone Ud. De acceso a Internet en su hogar?</h4>
                <label >Si</label>
                <input type='checkbox' {...register('servicio')} size="25vmin" ></input>
            </div>

            {servicio && (
                  <><div>
                      <h4>¿Cuál es el equipo que utiliza para conectarse a Internet en su hogar?</h4>
                      <select className="col-4" {...register('equipo') } size="25vmin" >
                          <option>Seleccione</option>
                          <option>Portatil</option>
                          <option>Ordenador (pc)</option>
                          <option>Tabletl</option>
                          <option>Telefono movil</option>
                          <option>Otro</option>
                      </select>
                  </div><div>
                          <h4>¿Con que frecuencia usa internet al dia?</h4>
                          <input type='radio' {...register('1')} /> 2-5 horas <br />
                          <input type='radio' {...register('2')} /> 6-8 horas <br />
                          <input type='radio' {...register('3')} /> 8-12 horas <br />
                          <input type='radio' {...register('4')} /> +12 horas <br />
                      </div><div>
                          <h4>¿Que compañia proveedora de internet utiliza?</h4>
                          <select className="col-4" {...register('compañia')} size="25vmin">
                              <option>Seleccione</option>
                              <option>Claro</option>
                              <option>Tigo (pc)</option>
                              <option>Movistar</option>
                              <option>Otro</option>
                          </select>
                      </div><div>
                          <h4>¿Esta satisfecho con su proveedor de internet?</h4>
                          <input type='radio' {...register('sa_si')} />Si<br />
                          <input type='radio' {...register('sa_no')} />No<br />
                      </div></>

            )}           

            <input type='submit' value='Enviar'></input>

        </form>
    </div>

  )
}