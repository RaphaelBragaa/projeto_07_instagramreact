export default function Feed(){
    return(
   <div>
  <div className="post">
    <div className="circulo-post">
      <img className="img-post" src="imagens/ze.png" />
      <div className="nome-post">ze_carioca</div>
    </div>
    <div className="prenche">
      <img className="foto" src="imagens/ze-carioca-selfie.jpg" />
    </div>
    <div className="icones-baixo">
      <ion-icon className="icon" name="heart-outline" />
      <ion-icon className="icon" name="chatbubble-outline" />
      <ion-icon className="icon" name="paper-plane-outline" />
    </div>
    <div className="curtidas">
      <img className="img-postb" src="imagens/rato.png" />
      <p>Curtida  por <b>rato_bob</b> e  <b>outras 101.523 pessoas</b></p>
    </div>
  </div>
  <div className="post">
    <div className="circulo-post">
      <img className="img-post2" src="imagens/CABEÇA.png" />
      <div className="nome-post">calango_cast</div>
    </div>
    <div className="prenche2">
      <img className="foto" src="imagens/tio-calango.png" />
    </div>
    <div className="icones-baixo">
      <ion-icon className="icon" name="heart-outline" />
      <ion-icon className="icon" name="chatbubble-outline" />
      <ion-icon className="icon" name="paper-plane-outline" />
    </div>
    <div className="curtidas">
      <img className="img-postb" src="imagens/mendigato.jpg" />
      <p>Curtida  por <b>mendi_gato</b> e  <b>outras 80.000 pessoas</b></p>
    </div>
    <br />
    <br />
  </div>
</div>

    )
}