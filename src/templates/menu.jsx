import "../assets/static/menu.css";

function Menu() {
  var element = (
    <section>
      <ul className="pdt-list">
        <li>
          <a href="/amul/bulk">
            <div className="opt" id="bulk-item" ></div>
            <div className="name" id="bulk">
              AMUL BULK
            </div>
          </a>
        </li>
        <li>
          <a href="/amul/combo">
            <div className="opt" id="combo-item" ></div>
            <div className="name" id="combo">
              AMUL COMBO
            </div>
          </a>
        </li>
        <li>
          <a href="/amul/cone">
            <div className="opt" id="cone-item" ></div>
            <div className="name" id="cone">
              AMUL CONE
            </div>
          </a>
        </li>
        <li>
          <a href="/amul/cup">
            <div className="opt" id="cup-item" ></div>
            <div className="name" id="cup">
              AMUL CUP
            </div>
          </a>
        </li>
        <li>
          <a href="/amul/jumbo">
            <div className="opt" id="jumbo-item"></div>
            <div className="name" id="jumbo">
              AMUL JUMBO CUP
            </div>
          </a>
        </li>
        <li>
          <a href="/amul/stick">
            <div className="opt" id="stk-item"></div>
            <div className="name" id="stk">
              AMUL STICK
            </div>
          </a>
        </li>
        <li>
          <a href="/amul/tub">
            <div className="opt" id="tub-item"></div>
            <div id="tub" className="name">
              AMUL TUB
            </div>
          </a>
        </li>
        <li>
          <a href="/amul/kulfi">
            <div className="opt" id="kulfi-item"></div>
            <div id="kulfi" className="name">
              AMUL KULFI
            </div>
          </a>
        </li>
      </ul>
    </section>
  );

  return element;
}
export default Menu;