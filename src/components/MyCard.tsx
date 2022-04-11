import { Course } from "../interfaces/Interfaces"


export const MyCard = (course: Course) => {
  const { id, image, name, profesor, price, reducedPrice, addCart, cart } = course;
  let isInCart = false 
  // cart.forEach(element => {
  //   if (element.id === id){
  //     isInCart= true;
  //   }

  // })
  isInCart = cart.some(course => course.id === id);
  return (
    <div className="four columns">
        <div className="card">
            <img src={`img/${ image }` } className="imagen-curso u-full-width"/>
            <div className="info-card">
                <h4>{ name }</h4>
                <p>{ profesor }</p>
                <img src="img/estrellas.png"/>
                <p className="precio">${ price }  <span className="u-pull-right ">${ reducedPrice}</span></p>
                <a 
                  onClick={(e) => addCart(e, course)} 
                  href="#" 
                  className="u-full-width button-primary button input agregar-carrito disabled" data-id="1"
                  //className={ isInCart&& 'disabled'}
                  id={ isInCart? 'disabled': undefined }
                >
                    { isInCart? 'Esta en el carrito' : 'Agregar Al Carrito' }
                    
                </a>
            </div>
        </div> 
        {/* <!--.card--> */}
    </div>
  )
}
