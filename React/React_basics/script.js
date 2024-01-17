const rootElement = document.querySelector(".root");

const navBar = (
  <div className="header">
    <h1>HOME</h1>
    <h2>ABOUT US</h2>
  </div>
);

const main = (
  <div>
    <h1>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit sequi
      corrupti, tempore suscipit at aut.
    </h1>
  </div>
);

const footer = (
  <div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
);

const App = (
  <div>
    {navBar}
    {main}
    {footer}
  </div>
);

ReactDOM.render(App, rootElement);
