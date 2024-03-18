function Headbar() {
  var element = (
    <>
      <section className="headbar">
        <div className="logo">
          <div className="kg_saha_logo"></div>
        </div>
        <div>
          <ul className="menubar">
          <li className="nav_item">
            <a href="/">HOME</a>
          </li>
          <li className="nav_item">
            <a href="/amul/menu">PRODUCTS</a>
          </li>
          <li className="nav_item">
            <a href="">CONTACT</a>
          </li>
          <li className="nav_item">
            <a href="/about">ABOUT</a>
          </li>
          </ul>
        </div>
      </section>
    </>
  );
  return element;
}

export default Headbar;
