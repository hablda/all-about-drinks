import React from 'react';
import AppStyled from './App.styled';

function App() {
  return (
    <AppStyled>
      <header>
        <img
          src="https://via.placeholder.com/150/FFFFFF/444444/?text=LOGO"
          alt="All about drinks Logo"
          title="All about drinks Logo"
        />
        <h1>All about drinks</h1>
        <ul>
          <li>Products</li>
          <li>Contact</li>
          <li>About this website</li>
        </ul>
      </header>
      <section>
        <h3>Products</h3>
        <div>
          <img
            src="https://via.placeholder.com/400/DDDDDD/333333/?text=PRODUKT"
            alt="Irgendwas"
            title="Irgendwas"
          />
          <p>Article No.: 696969</p>
          <h2>Irgendein Kaffee</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
            suscipit autem explicabo eum, repudiandae praesentium alias earum
            non quia reiciendis maiores molestiae deleniti doloremque. Quasi
            ullam fuga expedita id dignissimos?
          </p>
          <p>
            Preis <span>69.99$</span>
          </p>
        </div>
      </section>
    </AppStyled>
  );
}

export default App;
