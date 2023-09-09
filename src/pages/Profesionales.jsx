import React from "react";
import { Outlet } from "react-router-dom";
import {Grid, Card, CardContent, Typography} from '@material-ui/core';
import Vivi from '../imgs/img-1.jpeg';
import Hidro1 from '../imgs/img-Hidro-1.jpeg';
import './Profesionales.css';


function ProfesionalCard({imgSrc, alt, name, title }) {

    return (
             <Card className='profesional-card'>
                <img src={imgSrc} alt={alt} />
                <CardContent>
                    <Typography variant="h6">{name}</Typography>
                </CardContent>
                <CardContent>
                    <Typography variant="h6">{title}</Typography>
                </CardContent>
                </Card>
    );
}

function Profesionales() {
    return (
        <div>
            <Grid container className="image-container-profesionales">
               <h1 className="h1-profesionales">Nuestros Profesionales</h1>
  
               {/* Tarjeta 1 */}
                <ProfesionalCard
                  imgSrc={Vivi}
                  alt="Vivi"
                  name="Viviana Cellutti MP 21864 ME 7371"
                  title="Medica Cirujana - Docente Universitaria"
                />
  
                {/* Tarjeta 2 */}
                <ProfesionalCard
                  imgSrc={Hidro1}
                  alt="imagen de la profesional"
                  name="Melisa Rolandi ENF MP 13937 NM 19"
                  title="Enfermera Profesional"
                />

                {/* Tarjeta 3 */}
                <ProfesionalCard
                  imgSrc={Vivi}
                  alt="Vivi"
                  name="Viviana Cellutti MP 21864 ME 7371"
                  title="Medica Cirujana - Docente Universitaria"
                />

                {/* Tarjeta 4 */}
                <ProfesionalCard
                  imgSrc={Vivi}
                  alt="Vivi"
                  name="Viviana Cellutti MP 21864 ME 7371"
                  title="Medica Cirujana - Docente Universitaria"
                />

                {/* Tarjeta 5 */}
                <ProfesionalCard
                  imgSrc={Vivi}
                  alt="Vivi"
                  name="Viviana Cellutti MP 21864 ME 7371"
                  title="Medica Cirujana - Docente Universitaria"
                />

                {/* Tarjeta 6 */}
                <ProfesionalCard
                  imgSrc={Vivi}
                  alt="Vivi"
                  name="Viviana Cellutti MP 21864 ME 7371"
                  title="Medica Cirujana - Docente Universitaria"
                />

                {/* Tarjeta 7 */}
                <ProfesionalCard
                  imgSrc={Vivi}
                  alt="Vivi"
                  name="Viviana Cellutti MP 21864 ME 7371"
                  title="Medica Cirujana - Docente Universitaria"
                />

                {/* Tarjeta 8 */}
                <ProfesionalCard
                  imgSrc={Vivi}
                  alt="Vivi"
                  name="Viviana Cellutti MP 21864 ME 7371"
                  title="Medica Cirujana - Docente Universitaria"
                />

                {/* Tarjeta 9 */}
                <ProfesionalCard
                  imgSrc={Vivi}
                  alt="Vivi"
                  name="Viviana Cellutti MP 21864 ME 7371"
                  title="Medica Cirujana - Docente Universitaria"
                />

                {/* Tarjeta 10 */}
                <ProfesionalCard
                  imgSrc={Vivi}
                  alt="Vivi"
                  name="Viviana Cellutti MP 21864 ME 7371"
                  title="Medica Cirujana - Docente Universitaria"
                />
          
            </Grid>
            <Outlet />
        </div>
    );
  }
  
  export default Profesionales;




//             <h1 className="h1-profesionales">Nuestros Profesionales</h1>
//             <img src={Vivi} alt='Vivi' /> 
//             <img src={Hidro1} alt='imagen de la profesional' /> 
           
//             <img src={Vivi} alt='Vivi' />
//             <img src={Vivi} alt='Vivi' /> 
//             <img src={Vivi} alt='Vivi' /> 
//             <img src={Vivi} alt='Vivi' /> 
//             <img src={Vivi} alt='Vivi' /> 
//             <img src={Vivi} alt='Vivi' /> 
//             <img src={Vivi} alt='Vivi' /> 
//             <img src={Vivi} alt='Vivi' /> 
//             <img src={Vivi} alt='Vivi' /> 
//             <img src={Vivi} alt='Vivi' />  
//             <img src={Vivi} alt='Vivi' /> 
//             </Grid>
//             <Outlet />
//         </div>
//         )
// }
// export default Profesionales;