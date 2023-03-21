import { Container } from "react-bootstrap";
import Logo from '../assets/logo.jpg'
import imagen1 from '../assets/imagen1.jpg'
import imagen2 from '../assets/imagen2.jpg'
import imagen3 from '../assets/imagen3.jpg'
import imagen4 from '../assets/imagen4.jpg'
import imagen5 from '../assets/imagen5.jpg'

export default function HomePage () {
  return (
    <Container>
      <img src={Logo} className="logo"></img>
      <div style={{background: 'white', marginTop: '50px', marginBottom: '30px'}}>
        <div className="ContainerImagenes">
          <img src={imagen1} style={{width: '520px', height:'400px', margin:'20px'}}></img>
          <img src={imagen3} style={{width: '520px', height:'400px', margin:'20px'}}></img>
        </div>
        <div className="ContainerImagenes">
          <img src={imagen2} style={{width: '210px', height:'400px', margin:'20px'}}></img>
          <img src={imagen4} style={{width: '510px', height:'400px', margin:'0px'}}></img>
          <img src={imagen5} style={{width: '260px', height:'400px'}}></img>

         
        </div>
      </div>
    </Container>
  )
}