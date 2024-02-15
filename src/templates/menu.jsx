import "../assets/static/menu.css";
import { Over, Out } from "../assets/button-click";

function Menu() {
  var element = (
    <section>
      <ul class="pdt-list">
        <li>
          <a href="/amul/bulk">
            <div class="opt" id="bulk-item" ></div>
            <div class="name" id="bulk">
              AMUL BULK
            </div>
          </a>
        </li>
        <li>
          <a href="/amul/combo">
            <div class="opt" id="combo-item" ></div>
            <div class="name" id="combo">
              AMUL COMBO
            </div>
          </a>
        </li>
        <li>
          <a href="/amul/cone">
            <div class="opt" id="cone-item" ></div>
            <div class="name" id="cone">
              AMUL CONE
            </div>
          </a>
        </li>
        <li>
          <a href="/amul/cup">
            <div class="opt" id="cup-item" ></div>
            <div class="name" id="cup">
              AMUL CUP
            </div>
          </a>
        </li>
        <li>
          <a href="/amul/jumbo">
            <div class="opt" id="jumbo-item"></div>
            <div class="name" id="jumbo">
              AMUL JUMBO CUP
            </div>
          </a>
        </li>
        <li>
          <a href="/amul/stick">
            <div class="opt" id="stk-item"></div>
            <div class="name" id="stk">
              AMUL STICK
            </div>
          </a>
        </li>
        <li>
          <a href="/amul/tub">
            <div class="opt" id="tub-item"></div>
            <div id="tub" class="name">
              AMUL TUB
            </div>
          </a>
        </li>
        <li>
          <a href="/amul/kulfi">
            <div class="opt" id="kulfi-item"></div>
            <div id="kulfi" class="name">
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

// onMouseEnter={Over("bulk")}
// onMouseEnter={Over("kulfi")}
//             onMouseLeave={Out("kulfi")}
//             onMouseLeave={Out("bulk")}
// onMouseEnter={Over("tub")}
//             onMouseLeave={Out("tub")}
// onMouseEnter={Over("stk")}
//             onMouseLeave={Out("stk")}
// onMouseEnter={Over("jumbo")}
//             onMouseLeave={Out("jumbo")}
// onMouseEnter={Over("cup")}
//             onMouseLeave={Out("cup")}
// onMouseEnter={Over("cone")}
//             onMouseLeave={Out("cone")}
// onMouseEnter={Over("combo")}
//             onMouseLeave={Out("combo")}