const Footer = () => {
    return (
        <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Coffee<span>.</span>co</h1>
        <p className="footer__description">
          The best place to drink coffee <br />
          and be more productive.
        </p>

        <div className="footer__content grid">
          <div className="footer__data">
            <h2 className="footer__subtitle">Address</h2>
            <p className="footer__information">
            107/1 ถนนระแกง ตำบลช้างคลาน <br />
             อำเภอเมืองเชียงใหม่ เชียงใหม่ 50100
            </p>
          </div>
          <div className="footer__data">
            <h2 className="footer__subtitle">Contact</h2>
            <p className="footer__information">
              083-568-2662 <br />
              AdayInChiangMaiView@gmail.com
            </p>
          </div>
          <div className="footer__data">
            <h2 className="footer__subtitle">Working hour</h2>
            <p className="footer__information">
              Monday - Sunday <br />
              9AM - 17PM
            </p>
          </div>

        </div>

        <div className="footer__group">
          <ul className="footer__social">
            <a href="#facebook" target="_blank" className="footer__social-link">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#instagram" target="_blank" className="footer__social-link">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#tiktok" target="_blank" className="footer__social-link">
              <i className="bx bxl-tiktok"></i>
            </a>
          </ul>

          <span className="footer__copy"> &#169; Sanaki. All rights reserved </span>
        </div>
      </div>
    </footer>
    )
}
export default Footer