import {Fade} from 'react-reveal'

const Special = () => {
    return (
        <div class="special section container" id="special">
          <div class="special__container">
                <div class="special__b<ox">    
                <Fade Left delay={500}>
                    <h2 class="section__title">
                     Best coffees that make you <br />
                     happy and cheer you up!
                    </h2>
                </Fade>
                </div>
                
          <div class="special__category">
            <Fade bottom delay={800}>
              <div class="special__group">
              <div class="special__img__border">
                <img
                  src="./media/coffee-beans.png"
                  alt=""
                  class="special__img"
                />
              </div>
              <h3 class="special__title">Original Coffee</h3>
              <p class="special__description">
                We select the best beans coffee, for a true taste.
              </p>
              </div>
              <div class="special__group">
              <div class="special__img__border">
                <img
                  src="./media/hot-drink.png"
                  alt=""
                  class="special__img"
                />
              </div>
              <h3 class="special__title">Hot Coffee</h3>
              <p class="special__description">
                Enjoy your coffee with some hot with true taste.
              </p>
              </div>
              <div class="special__group">
              <div class="special__img__border">
                <img
                  src="./media/coffee-cup.png"
                  alt=""
                  class="special__img"
                />
              </div>
              <h3 class="special__title">Ice Coffee</h3>
              <p class="special__description">
                Enjoy your coffee with some ice with true taste.
              </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>

    )
}
export default Special