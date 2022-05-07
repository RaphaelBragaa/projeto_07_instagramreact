




export default function Stories() { 
    
    const nomeStories = ["calango_cast ",
                         "ze_carioca ",
                         "batatao ",
                         "skylab ",
                         "rato_bob ",
                         "monkey.d ",
                         "mendi_gato "
    ]
    const imgStories = [
                    "imagens/CABEÇA.png",
                     "imagens/ze.png",
                    "imagens/batata.png",
                    "imagens/rogerio-skylab.jpg",
                    "imagens/rato.png",
                    "imagens/luffy.jpg",
                     "imagens/mendigato.jpg"
                    ]
     const ComponentesnomeStories = nomeStories.map(nomeStorie => <span>{nomeStorie}</span>)
    const componentesimgStories = imgStories.map
    (imgStorie =>  <div classname="circulo"><img classname="img-stories" src="{imgStorie}" /><img classname="rodela" src="imagens/stories_background.png" />
  <div classname="nome-stories">bob</div></div>

)
    
   
   //{nomeStories.map({nomeStorie}}

 
    return (
        <div>
       <div className="caixa-stories">
  <img className="seta" src="icones/seta.svg" />
  {componentesimgStories}
    </div>
    </div>
    
  )
}