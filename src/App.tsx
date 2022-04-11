import { useState } from "react";
import { MyCard } from "./components/MyCard";
import { Course } from "./interfaces/Interfaces";
import { myData } from "./utils/data";

export const App = () => { 
  const [cart, setCart] = useState<Course[]>([]);
  
  const addCart = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, course:Course) => {
    e.preventDefault();
    setCart([ ...cart, course ]);
  };

  const emptyCart = () => setCart([]);
  const deleteElement = ( id: number ) => {
    const result = cart.filter(course => course.id !== id);  
    setCart( result );
  }

  return (
    <div>
      <header id="header" className="header">
        <div className="container">
          <div className="row">
            <div className="four columns">
              <img src="img/logo.jpg" id="logo" />
            </div>
            <div className="two columns u-pull-right">
              <ul>
                <li className="submenu">
                  <img src="img/cart.png" id="img-carrito" alt='image' />
                  <div id="carrito">
                    <table id="lista-carrito" className="u-full-width">
                      <thead>
                        <tr>
                          <th>Imagen</th>
                          <th>Nombre</th>
                          <th>Precio</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          cart.map(({ image, name, profesor, price, reducedPrice, id }, index ) => {
                            return(
                              <tr key={ id * index } >
                                <td>
                                  <img src={`img/${ image }` } alt="" width={ 100 } /> 
                                </td>
                                <td>
                                  { name }
                                </td>
                                <td>
                                  { reducedPrice }
                                </td>
                                <td>
                                  <a onClick={() => deleteElement(id) } href="#" className="borrar-curso">x</a>
                                </td>
                              </tr>
                              
                            )
                          })
                        }
                      </tbody>
                    </table>
                    
                    <a
                      onClick={ emptyCart }
                      href="#"
                      id="vaciar-carrito"
                      className="button u-full-width"
                    >
                      Vaciar Carrito
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div id="hero">
        <div className="container">
          <div className="row">
            <div className="six columns">
              <div className="contenido-hero">
                <h2>Aprende algo nuevo</h2>
                <p>Todos los cursos a $15</p>
                <form
                  action="#"
                  id="busqueda"
                  method="post"
                  className="formulario"
                >
                  <input
                    className="u-full-width"
                    type="text"
                    placeholder="¿Que te gustaría Aprender?"
                    id="buscador"
                  />
                  <input
                    type="submit"
                    id="submit-buscador"
                    className="submit-buscador"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="barra">
        <div className="container">
          <div className="row">
            <div className="four columns icono icono1">
              <p>
                20,000 Cursos en línea <br />
                Explora los temas más recientes
              </p>
            </div>
            <div className="four columns icono icono2">
              <p>
                Instructores Expertos <br />
                Aprende con distintos estilos
              </p>
            </div>
            <div className="four columns icono icono3">
              <p>
                Acceso de por vida <br />
                Aprende a tu ritmo
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="lista-cursos" className="container">
        <h1 id="encabezado" className="encabezado">
          Cursos En Línea
        </h1>
        {myData.map(( element, index ) => {
          return (
            <div className="row" key={ index }>
              {element.map(({ id, image, name, profesor, price, reducedPrice, inCart }) => {
                return(
                  <MyCard
                    key={ id }
                    id={ id }
                    image={ image }
                    name={ name }
                    profesor={ profesor }
                    price={ price }
                    reducedPrice={ reducedPrice }
                    addCart={ addCart }
                    cart={ cart }
                  />
                )
              })}          
            </div>
          );
        })}

      </div>

      <footer id="footer" className="footer">
        <div className="container">
          <div className="row">
            <div className="four columns">
              <nav id="principal" className="menu">
                <a className="enlace" href="#">
                  Para tu Negocio
                </a>
                <a className="enlace" href="#">
                  Conviertete en Instructor
                </a>
                <a className="enlace" href="#">
                  Aplicaciones Móviles
                </a>
                <a className="enlace" href="#">
                  Soporte
                </a>
                <a className="enlace" href="#">
                  Temas
                </a>
              </nav>
            </div>
            <div className="four columns">
              <nav id="secundaria" className="menu">
                <a className="enlace" href="#">
                  ¿Quienes Somos?
                </a>
                <a className="enlace" href="#">
                  Empleo
                </a>
                <a className="enlace" href="#">
                  Blog
                </a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
