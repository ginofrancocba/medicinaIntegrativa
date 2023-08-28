import React from "react";
import { Grid } from '@material-ui/core';
import Logo from '../imgs/Logo-Naoki.png';
import icon1 from '../imgs/icon1-facebook.png';
import icon2 from '../imgs/icon2-instagram.png';
import icon3 from '../imgs/icon3-whatsapp.png';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <Grid 
            container
            className='page-footer'>
                
                <Grid>
                    <a href="https://www.facebook.com/profile.php?id=" alt="Abrir facebook" target="_blank" ><img src={icon1} /></a>
                    <a href="https://instagram.com/" alt="Abrir instagram" target="_blank" ><img src={icon2} /></a>
                    <a href="https://api.whatsapp.com/Me contacto desde la web: info...?" alt="Abrir WhatsApp" target="_blank" ><img src={icon3} /></a> 
                </Grid>
                <Grid
                    container
                    className="footer" item xs={12}>
                    <p>Copyright© 2023 www..com</p>
                    <p>Todos los derechos reservados</p> 
                    <img src={Logo} alt='Logo Naoki' />
                </Grid>
            </Grid>
         </footer> 
    )
};

export default Footer;