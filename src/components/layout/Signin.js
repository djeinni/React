import React, {useState} from 'react';

const Signin = () => {

const [valSaisie, setValSaisie] = useState("");
const [password, setPassword] = useState("");

  return (
        <div className={'leftNavContainer'}>
        <h1>Login</h1>
        <input name="firstNAMe"
        onChange={(e) => {
          setValSaisie(e.target.value)
        }}
        placeholder="Enter your username"/>
        <br/>
        {valSaisie}<br/>
        <input type="password"
        onChange={(p) => {
          setPassword(p.target.value)
        }}
        placeholder="Enter your password"/>
        <br/>
        <br/>
        <button type="button" disabled={!valSaisie || !password} onClick={() => setValSaisie("Le firstname est : " +valSaisie)}>Connexion</button>
        </div>
  );
};

export default Signin;
