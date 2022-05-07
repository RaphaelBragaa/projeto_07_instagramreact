let ObjetosSidebar = [
  { usuario:"bad.vibes.memes",
    imagem:"assets/img/bad.vibes.memes.svg",
  },{
    usuario:"chibirdart",
    imagem:"assets/img/chibirdart.svg",
  },{
    usuario:"razoesparaacreditar",
    imagem:"assets/img/razoesparaacreditar.svg",
  },{
    usuario:"adorable_animals",
    imagem:"assets/img/adorable_animals.svg",
  },{
    usuario:"smallcutecats",
    imagem:"assets/img/smallcutecats.svg",
  }]

export default function Sidebar(){
    return(
      <div className="sidebar">
        <div className="usuario">
        <img src="assets/img/catanacomics.svg" />
        <div className="texto">
          <strong>catanacomics</strong>
          Catana
        </div>
      </div>
      <div className="sugestoes">
        <div className="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        {ObjetosSidebar.map((objeto) => {
          return (
            <Sidebars
              usuario={objeto.usuario}
              imagem={objeto.imagem}
            />
          );
        })}
        <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>
      <div className="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
      </div>
      </div>
    )
  }


 function Sidebars(props){
    return(
      <div>
        <div className="sugestao">
          <div className="usuario">
            <img src={props.imagem}/>
            <div className="texto">
              <div className="nome">{props.usuario}</div>
              <div className="razao">Segue você</div>
            </div>
          </div>
          <div className="seguir">Seguir</div>
        </div>
      </div>
    )
}