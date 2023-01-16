import "bootstrap/dist/css/bootstrap.min.css";
import "../src/style.css";
import Shop from "./components/Shop/Shop";
function App() {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <Shop />
        </div>
      </div>
    </>
  );
}

export default App;
