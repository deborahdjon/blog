import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/tile.scss"
import { version } from "../../package.json"

interface Options {
    details:[
        string, string, string, string, string
    ]
    
}

export default ((opts?: Options) => {
  function Tile({ displayClass }: QuartzComponentProps) {
    const details = opts?.details ?? []
    return (

       <div class="tiles">
          {
            Object.entries(details).map(([key, [title, imagePath, imageAlt, description, link]]) => (
                <div class="card info-card" >
                <a href={link}>
                    <img src={imagePath} class="card-img-top" alt={imageAlt} />
                    <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                    </div>
                </a>
                </div>
            ))
          }
        </div>
    )
  }

  Tile.css = style
  return Tile
}) satisfies QuartzComponentConstructor
