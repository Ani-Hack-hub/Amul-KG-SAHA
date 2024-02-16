import "../../assets/static/bulk.css"

function Bulk(order){
      var element;
  //   var element =( <section className="bulk">
  //   <ul>
  //     <li>
  //       <div 
  //         id="bulk-van"
  //         className="bulk-item"
  //       ></div>
  //       <div id="bulk-van-cont" className="cont">AMUL BULK VANILLA 5L</div>
  //     </li>
  //     <li>
  //       <div
  //         id="bulk-straw"
  //         className="bulk-item"
  //       ></div>
  //       <div id="bulk-straw-cont" className="cont">AMUL BULK STRAWBERRY 5L</div>
  //     </li>
  //     <li>
  //       <div
  //         id="bulk-bs"
  //         className="bulk-item"
  //       ></div>
  //       <div id="bulk-bs-cont" className="cont">AMUL BULK BUTTER-SCOTCH 5L</div>
  //     </li>


  //     <li>
  //       <div
  //         id="bulk-choco"
  //         className="bulk-item"
  //       ></div>
  //       <div id="bulk-choco-cont" className="cont">AMUL BULK CHOCOLATE 5L</div>
  //     </li>
  //     <li>
  //       <div
  //         id="bulk-t-n-f"
  //         className="bulk-item"
  //       ></div>
  //       <div id="bulk-t-n-f-cont" className="cont">AMUL BULK TUTTI FRUITI 5L</div>
  //     </li>
  //     <li>
  //       <div
  //         id="bulk-gp"
  //         className="bulk-item"
  //       ></div>
  //       <div id="bulk-gp-cont" className="cont">AMUL BULK GREEN PISTA 5L</div>
  //     </li>
  //     <li>
  //       <div
  //         id="bulk-an"
  //         className="bulk-item"
  //       ></div>
  //       <div id="bulk-an-cont" className="cont">AMUL BULK AMERICAN NUTS 5L</div>
  //     </li>
  //     <li>
  //       <div
  //         id="bulk-rajbhoj"
  //         className="bulk-item"
  //       ></div>
  //       <div id="bulk-rajbhoj-cont" className="cont">AMUL BULK RAJ BHOJ 5L</div>
  //     </li>
  //     <li>
  //       <div
  //         id="bulk-bc"
  //         className="bulk-item"
  //       ></div>
  //       <div id="bulk-bc-cont" className="cont">AMUL BULK BLACK CURRENT 5L</div>
  //     </li>
  //     <li>
  //       <div
  //         id="bulk-kp"
  //         className="bulk-item"
  //       ></div>
  //       <div id="bulk-kp-cont" className="cont">AMUL BULK KESAR PISTA 5L</div>
  //     </li>
  //     <li>
  //       <div
  //         id="bulk-sc"
  //         className="bulk-item"
  //       ></div>
  //       <div className="cont" id="bulk-sc-cont">AMUL BULK SALTED CARAMEL 5L</div>
  //     </li>
  //     <li>
  //       <div
  //         id="bulk-cnc"
  //         className="bulk-item"
  //       ></div>
  //       <div id="bulk-cnc-cont" className="cont">
  //         AMUL BULK COOKIES N CREAM 5L
  //       </div>
  //     </li>
  //     <li>
  //       <div
  //         id="bulk-mango"
  //         className="bulk-item"
  //       ></div>
  //       <div id="bulk-mango-cont" className="cont">
  //         AMUL BULK ALHONSO MANGO 5L
  //       </div>
  //     </li>
  //     <li>
  //       <div
  //         id="bulk-shalimar"
  //         className="bulk-item"
  //       ></div>
  //       <div id="bulk-shalimar-cont" className="cont">AMUL BULK SHALIMAR 5L</div>
  //     </li>
  //     <li>
  //       <div
  //         id="bulk-kulfi"
  //         className="bulk-item"
  //       ></div>
  //       <div id="bulk-kulfi-cont" className="cont">
  //         AMUL BULK KULFI E KHAAS 5L
  //       </div>
  //     </li>
  //     <li>
  //       <div
  //         id="bulk-tc"
  //         className="bulk-item"
  //       ></div>
  //       <div id="bulk-tc-cont" className="cont">AMUL BULK TENDER COCONUT 5L</div>
  //     </li>
  //     <li>
  //       <div
  //         id="bulk-orange"
  //         className="bulk-item"
  //       ></div>
  //       <div id="bulk-orange-cont" className="cont">AMUL BULK ORANGE 5L</div>
  //     </li>
  //     <li>
  //       <div
  //         id="bulk-chip"
  //         className="bulk-item"
  //       ></div>
  //       <div id="bulk-chip-cont" className="cont">AMUL BULK CHOCO CHIP 5L</div>
  //     </li>
  //     <li>
  //       <div
  //         id="bulk-ra"
  //         className="bulk-item"
  //       ></div>
  //       <div id="bulk-ra-cont" className="cont">AMUL BULK ROASTED ALMOND 5L</div>
  //     </li>
  //     <li>
  //       <div
  //         id="bulk-ca"
  //         className="bulk-item"
  //       ></div>
  //       <div id="bulk-ca-cont" className="cont">AMUL BULK CREAMY ALMOND 5L</div>
  //     </li>
  //     <li>
  //       <div
  //         id="bulk-kaju"
  //         className="bulk-item"
  //       ></div>
  //       <div id="bulk-kaju-cont" className="cont">AMUL BULK KAJU DRAKSH 5L</div>
  //     </li>
  //     <li>
  //       <div
  //         id="bulk-anjir"
  //         className="bulk-item"
  //       ></div>
  //       <div id="bulk-anjir-cont" className="cont">AMUL BULK ANJIR 5L</div>
  //     </li>
  //     <li>
  //       <div
  //         id="bulk-afghan"
  //         className="bulk-item"
  //       ></div>
  //       <div id="bulk-afghan-cont" className="cont">
  //         AMUL BULK AFGHAN DRY FRUIT 5L
  //       </div>
  //     </li>
  //     <li>
  //       <div
  //         id="bulk-coffee"
  //         className="bulk-item"
  //       ></div>
  //       <div id="bulk-coffee-cont" className="cont">AMUL BULK COFFEE 5L</div>
  //     </li>
  //     <li>
  //       <div
  //         id="bulk-mdf"
  //         className="bulk-item"
  //       ></div>
  //       <div id="bulk-mdf-cont" className="cont">
  //         AMUL BULK MOROCCAN DRY FRUIT 5L
  //       </div>
  //     </li>
  //     <li>
  //       <div
  //         id="bulk-sscb"
  //         className="bulk-item"
  //       ></div>
  //       <div id="bulk-sscb-cont" className="cont">AMUL BULK SSCB 5L</div>
  //     </li>
  //     <li>
  //       <div
  //         id="bulk-pineapple"
  //         className="bulk-item"
  //       ></div>
  //       <div id="bulk-pineapple-cont" className="cont">
  //         AMUL BULK PINEAPPLE 5L
  //       </div>
  //     </li>
  //     <li>
  //       <div
  //         id="bulk-pan-nawabi"
  //         className="bulk-item"
  //       ></div>
  //       <div
  //         id="bulk-pan-nawabi-cont"
  //         className="cont"
  //       >
  //         AMUL BULK PAN NAWABI 5L
  //       </div>
  //     </li>
  //   </ul>
  // </section>)

  switch(order.MyProp){
    case 1:
      element = <section className="bulk">
         <ul>
           <li>
             <div 
               id="bulk-van"
               className="bulk-item"
             ></div>
             <div id="bulk-van-cont" className="cont">AMUL BULK VANILLA 5L</div>
           </li>
           <li>
             <div
               id="bulk-straw"
               className="bulk-item"
             ></div>
             <div id="bulk-straw-cont" className="cont">AMUL BULK STRAWBERRY 5L</div>
           </li>
           <li>
             <div
               id="bulk-bs"
               className="bulk-item"
             ></div>
             <div id="bulk-bs-cont" className="cont">AMUL BULK BUTTER-SCOTCH 5L</div>
           </li>


           <li>
             <div
               id="bulk-choco"
               className="bulk-item"
             ></div>
             <div id="bulk-choco-cont" className="cont">AMUL BULK CHOCOLATE 5L</div>
           </li>
           <li>
             <div
               id="bulk-t-n-f"
               className="bulk-item"
             ></div>
             <div id="bulk-t-n-f-cont" className="cont">AMUL BULK TUTTI FRUITI 5L</div>
           </li>
           <li>
             <div
               id="bulk-gp"
               className="bulk-item"
             ></div>
             <div id="bulk-gp-cont" className="cont">AMUL BULK GREEN PISTA 5L</div>
           </li>
           <li>
             <div
               id="bulk-an"
               className="bulk-item"
             ></div>
             <div id="bulk-an-cont" className="cont">AMUL BULK AMERICAN NUTS 5L</div>
           </li>
           <li>
             <div
               id="bulk-rajbhoj"
               className="bulk-item"
             ></div>
             <div id="bulk-rajbhoj-cont" className="cont">AMUL BULK RAJ BHOJ 5L</div>
           </li>
        </ul>
      </section>
      break;
    case 2:
      <section className="bulk">
         <ul>
         <li>
         <div
           id="bulk-bc"
           className="bulk-item"
         ></div>
         <div id="bulk-bc-cont" className="cont">AMUL BULK BLACK CURRENT 5L</div>
       </li>
       <li>
         <div
           id="bulk-kp"
           className="bulk-item"
         ></div>
         <div id="bulk-kp-cont" className="cont">AMUL BULK KESAR PISTA 5L</div>
       </li>
       <li>
         <div
           id="bulk-sc"
           className="bulk-item"
         ></div>
         <div className="cont" id="bulk-sc-cont">AMUL BULK SALTED CARAMEL 5L</div>
       </li>
       <li>
         <div
           id="bulk-cnc"
           className="bulk-item"
         ></div>
         <div id="bulk-cnc-cont" className="cont">
           AMUL BULK COOKIES N CREAM 5L
         </div>
       </li>
       <li>
         <div
           id="bulk-mango"
           className="bulk-item"
         ></div>
         <div id="bulk-mango-cont" className="cont">
           AMUL BULK ALHONSO MANGO 5L
         </div>
       </li>
       <li>
         <div
           id="bulk-shalimar"
           className="bulk-item"
         ></div>
         <div id="bulk-shalimar-cont" className="cont">AMUL BULK SHALIMAR 5L</div>
       </li>
       <li>
         <div
           id="bulk-kulfi"
           className="bulk-item"
         ></div>
         <div id="bulk-kulfi-cont" className="cont">
           AMUL BULK KULFI E KHAAS 5L
         </div>
       </li>
       <li>
         <div
           id="bulk-tc"
           className="bulk-item"
         ></div>
         <div id="bulk-tc-cont" className="cont">AMUL BULK TENDER COCONUT 5L</div>
       </li>
        </ul>
      </section>
      break;

    case 3:
      <section className="bulk">
         <ul>
         <li>
         <div
           id="bulk-orange"
           className="bulk-item"
         ></div>
         <div id="bulk-orange-cont" className="cont">AMUL BULK ORANGE 5L</div>
       </li>
       <li>
         <div
           id="bulk-chip"
           className="bulk-item"
         ></div>
         <div id="bulk-chip-cont" className="cont">AMUL BULK CHOCO CHIP 5L</div>
       </li>
       <li>
         <div
           id="bulk-ra"
           className="bulk-item"
         ></div>
         <div id="bulk-ra-cont" className="cont">AMUL BULK ROASTED ALMOND 5L</div>
       </li>
       <li>
         <div
           id="bulk-ca"
           className="bulk-item"
         ></div>
         <div id="bulk-ca-cont" className="cont">AMUL BULK CREAMY ALMOND 5L</div>
       </li>
       <li>
         <div
           id="bulk-kaju"
           className="bulk-item"
         ></div>
         <div id="bulk-kaju-cont" className="cont">AMUL BULK KAJU DRAKSH 5L</div>
       </li>
       <li>
         <div
           id="bulk-anjir"
           className="bulk-item"
         ></div>
         <div id="bulk-anjir-cont" className="cont">AMUL BULK ANJIR 5L</div>
       </li>
       <li>
         <div
           id="bulk-afghan"
           className="bulk-item"
         ></div>
         <div id="bulk-afghan-cont" className="cont">
           AMUL BULK AFGHAN DRY FRUIT 5L
         </div>
       </li>
       <li>
         <div
           id="bulk-coffee"
           className="bulk-item"
         ></div>
         <div id="bulk-coffee-cont" className="cont">AMUL BULK COFFEE 5L</div>
       </li>
       <li>
         <div
           id="bulk-mdf"
           className="bulk-item"
         ></div>
         <div id="bulk-mdf-cont" className="cont">
           AMUL BULK MOROCCAN DRY FRUIT 5L
         </div>
       </li>
       <li>
         <div
           id="bulk-sscb"
           className="bulk-item"
         ></div>
         <div id="bulk-sscb-cont" className="cont">AMUL BULK SSCB 5L</div>
       </li>
       <li>
         <div
           id="bulk-pineapple"
           className="bulk-item"
         ></div>
         <div id="bulk-pineapple-cont" className="cont">
           AMUL BULK PINEAPPLE 5L
         </div>
       </li>
       <li>
         <div
           id="bulk-pan-nawabi"
           className="bulk-item"
         ></div>
         <div
           id="bulk-pan-nawabi-cont"
           className="cont"
         >
           AMUL BULK PAN NAWABI 5L
         </div>
       </li>
        </ul>
      </section>
      break;
  }
  return element
}

export default Bulk