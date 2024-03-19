import "../assets/static/index.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Index() {
  const {text} = useTypewriter({
    words: ['AMUL', 'GOLDEN DELIGHTS'],
    loop: {},
    typeSpeed:100
  });

  var element;
  element = (
    <>
      <h1>LOOKING FOR </h1>
      <span>
        {text}
        </span>
      <span>
        <Cursor></Cursor>
      </span>
    </>
  );
  return element;
}
export default Index;
