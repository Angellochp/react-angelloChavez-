import React from "react";
import { useForm } from "react-hook-form";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const FormComp = ({confirmPurchase, formVis, setFormVis}) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
    
      const onSubmit = (dataDelFormulario) => {
        confirmPurchase(dataDelFormulario)
      }; 

      const handleClose = () => {
        setFormVis(false);
      }
        
      return (
        <>
          <Modal show={formVis} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Checkout</Modal.Title>
            </Modal.Header>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Modal.Body>
                
                <input placeholder=" INGRESA NOMBRE"
                  {...register("nombre", {
                    required: true,
                    minLength: 1,
                  })}
                />
                {errors?.nombre?.type === "required" && <p>El campo nombre es requerido</p>}
                {errors?.nombre?.type === "minLength" && (
                  <p>El nombre debe superar los 2 caracteres</p>
                )}
                
                <input placeholder=" INGRESA CORREO" type='email' {...register("email", {minLength: 4, required: true})} />
                {errors?.email?.type === "minLength" && (
                  <p>El mail tiene que tener minimo 3 caracteres</p>
                )}
                {errors?.email?.type === "required" && <p>El campo email es requerido</p>}
                
                <input placeholder=" INGRESA TELÉFONO" type="number" {...register("phone", { min: 10, maxLength: 9, required: true })} />
                {errors?.phone?.type === "minLength" && (
                  <p>El teléfono debe tener 10 digitos</p>
                )}
                {errors?.phone?.type === "required" && <p>El campo teléfono es requerido</p>}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancelar
                </Button>
                <Button variant="primary" type ="submit">
                  Confirma Pedido
                </Button>
              </Modal.Footer>
            </form>
          </Modal>
        </>

      );
};

export default FormComp;