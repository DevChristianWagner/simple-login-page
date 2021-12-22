import React from 'react';
import "./App.css"
import wallpaper from './assets/wallpaper.svg'
import google from './assets/google.svg'

function App() {
  return (
    <div className="App">
      <main>
        <img src={wallpaper} alt="Imagem de um Website" draggable="false"/>

        <div className="login">
          <h2>Bem vindo de volta</h2>
          <h1>Faça login na sua conta</h1>

          <form>
            <div className="inputs">
              <p>E-mail</p>
              <input type="email" placeholder="Seu email"/>
              
              <p>Senha</p>
              <input type="password" placeholder="Sua senha"/>
            </div>

            <div className="block">
              <div className="rem-check">
                <input type="checkbox" />
                <p>Lembre de mim.</p>
            </div>

                <a href="https://localhost:3000/">Esqueceu a sua senha?</a>
              </div>

            
            <button>Entrar</button>
            <button className="login-button"><img src={google} alt="" />Ou faça login com o Google</button>


            <div className="register">
              <p>Não tem uma conta? <a href="https://localhost:3000/">Cadastre-se!</a></p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
