import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  function Footer({ displayClass }: QuartzComponentProps) {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>

        <hr />

        <ul class="more-info-link"> 
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
             
              
            </li>
          ))}
        </ul>

        {/* <p>
          Created with <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a>, © Deborah Djon {year}
        </p> */}
        
        
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
