// React
import { useForm } from "react-hook-form";
// MUI
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';
// axios
import axios from "axios";
// Sweet Alert
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
// CSS
import './Contacto.css';
// IMG
import Flecha_roja from "./img/flexcha roja.png"


export default function Contacto() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // Alerts
    const MySwal = withReactContent(Swal)
    const onSubmit = data => {
        console.log(data);

        MySwal.fire({
            didOpen: () => { Swal.showLoading() }
        })

        axios({
            method: 'post',
            url: 'https://api.sheetmonkey.io/form/uhSZdr9zCYZ5i7oKWXKtAC',
            data: data
        }).then(Response => {
            MySwal.fire({         // si ocurrio algun error muestro este mensaje
                title: <strong> Mensaje enviado </strong>,
                icon: 'success'
            })

            console.log(Response)
        }).catch(error => {
            MySwal.fire({         // si ocurrio algun error muestro este mensaje
                title: <strong> ${error} </strong>,
                icon: 'error'
            })
        })
    }

    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: '#EFEEEE',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#B2BAC2',
        },
        '& .MuiOutlinedInput-root': {
            color: '#EFEEEE',
            '& fieldset': {
                borderColor: '#EFEEEE',
            },
            '&:hover fieldset': {
                borderColor: '#B2BAC2',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#691624',
            },
        },
        '& label': {
            color: '#EFEEEE',
        },
        '& .MuiInput': {
            color: '#EFEEEE',
        },
    });
    return (
        <div id="contacto">
            <div className='title'>
                <img src={Flecha_roja} alt="" />
                <h2> Contacto </h2>
            </div>
            {/* <form action="https://api.sheetmonkey.io/form/7qNYbobVacMq9LqjLTY8mh" method="post"> */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <CssTextField
                    required
                    id="outlined-required"
                    label="Nombre y apellido"
                    name="Nombre y apellido"
                    {...register("Nombre")}
                />
                <CssTextField
                    required
                    type="email"
                    id="outlined-required"
                    label="Email"
                    name="Email"
                    {...register("Email")}
                />
                <CssTextField
                    required
                    id="outlined-multiline-flexible"
                    className='mensaje'
                    label="Mensaje"
                    name="Mensaje"
                    multiline
                    maxRows={4}
                    {...register("Mensaje")}
                />
                <input
                    type="hidden"
                    name="Created"
                    value="x-sheetmonkey-current-date-time"
                    {...register("Enviado_el")}
                />
                <button type="submit"> Enviar </button>
            </form>

        </div>
    )
}