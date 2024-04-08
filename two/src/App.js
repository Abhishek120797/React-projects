import "bootstrap/dist/css/bootstrap.min.css";

import Cards from "./components/Cards";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="d-flex gap-4 justify-content-center pt-5">
        <Cards
          title="Javascript"
          src="https://images.pexels.com/photos/5474295/pexels-photo-5474295.jpeg?auto=compress&cs=tinysrgb&w=600"
          prag="Some quick example text to build on the card title and make up the
        bulk of the card's content.Some quick example text to build on the card title and make up the
        bulk of the card's content."
        />
        <Cards
          title="ReactJS"
          src="https://images.pexels.com/photos/5474295/pexels-photo-5474295.jpeg?auto=compress&cs=tinysrgb&w=600"
          prag="Some quick example text to build on the card title and make up the
        bulk of the card's content.Some quick example text to build on the card title and make up the
        bulk of the card's content."
        />
        <Cards
          title="NodeJS and Express"
          src="https://images.pexels.com/photos/5474295/pexels-photo-5474295.jpeg?auto=compress&cs=tinysrgb&w=600"
          prag="Some quick example text to build on the card title and make up the
        bulk of the card's content.Some quick example text to build on the card title and make up the
        bulk of the card's content."
        />
      </div>
    </>
  );
}

export default App;
