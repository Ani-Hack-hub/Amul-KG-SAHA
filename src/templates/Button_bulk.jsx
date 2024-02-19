import "bootstrap/dist/css/bootstrap.css";
import "../assets/static/buttons.css";

function Button() {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <div className="tri" id="triangle-1" >
            <a className="page-link" id="link-1" href="/amul/bulk-1">
              1
            </a>
          </div>
        </li>
        <li className="page-item">
          <div className="tri" id="triangle-2">
            <a className="page-link" id="link-2" href="/amul/bulk-2">
              2
            </a>
          </div>
        </li>
        <li className="page-item">
          <div className="tri" id="triangle-3">
            <a className="page-link" id="link-3" href="/amul/bulk-3">
              3
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Button;
