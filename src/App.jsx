import Axios from "axios";
import Cookies from "js-cookie";

import { useState } from "react";

export default function App () {

  const [cookie, setCookie] = useState("");
  const [cookieResponse, setCookieResponse] = useState("");

  const axios = Axios.create({
    baseURL: "https://ebony-jumpy-spinosaurus.glitch.me",
    withCredentials: true

  });

  const fazerRequisicao = async () => {
    await axios.get("/");
    setCookie(Cookies.get("teste"));
  }

  const enviarCookie = async () => {
    Cookies.set("cookie_para_api", "blablabla");
    const response = await axios.post("/");

    setCookieResponse(response.data);
  }
  
  const apagarCookie = () => {
    Cookies.remove("teste");
    Cookies.remove("cookie_para_api");
    Cookies.remove("token");

    setCookie("");
    setCookieResponse("");
  }

  return (
    <div>
      <p>{ cookie }</p>
      <input type="button" onClick={ fazerRequisicao } value="Requisicao" />
      <input type="button" onClick={ enviarCookie } value="Enviar cookie" />
      <input type="button" onClick={ apagarCookie } value="Apagar" />
      <p>{ cookieResponse }</p>
    </div>
  )
}
