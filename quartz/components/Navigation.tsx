import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import navigationStyle from "./styles/navigation.scss"
import navigationScript from "./scripts/navigation.inline"
import Search from "./Search";
import Darkmode from "./Darkmode";


export default (() => {
  
function Navigation() {
  return(
  <div>
     <div id="navigation-desktop" >
      <nav id="NavBar-id">
          <ul>
            <li><a href="https://linksights.info/About" >About</a></li>
            <li><a href="https://linksights.info/Blog">Blog</a></li>
        </ul>
      </nav>
        <div id="logo" class="line-container">
          <a href="/">
          <svg height="100%" stroke-miterlimit="15" style="fill-rule:nonzero;stroke-width=1px !important;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;" version="1.1" viewBox="0 0 184.275 56.7" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:vectornator="http://vectornator.io" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs/>
          <g id="Layer-1" >
          <g  opacity="1"  >
          <path d="M9.50911 7.55726L9.50911 28.4258L22.1097 28.4258L22.1097 33L4.19272 33L4.19272 7.55726L9.50911 7.55726Z"/>
          <path d="M30.4467 14.1855L30.4467 33L25.4583 33L25.4583 14.1855L30.4467 14.1855ZM30.4467 7.40191L30.4467 11.9416L25.4583 11.9416L25.4583 7.40191L30.4467 7.40191Z"/>
          <path d="M50.4177 15.2557C51.649 16.2798 52.2647 17.9714 52.2647 20.3304L52.2647 33L47.2244 33L47.2244 21.5559C47.2244 20.5663 47.0921 19.8068 46.8274 19.2775C46.3441 18.3109 45.4235 17.8276 44.0657 17.8276C42.3971 17.8276 41.2521 18.5353 40.6307 19.9507C40.3085 20.6986 40.1474 21.6538 40.1474 22.816L40.1474 33L35.2453 33L35.2453 14.22L39.9921 14.22L39.9921 16.9645C40.625 15.9979 41.2234 15.3017 41.7872 14.8759C42.7999 14.1164 44.0829 13.7367 45.6364 13.7367C47.5812 13.7367 49.1749 14.243 50.4177 15.2557Z"/>
          <path d="M61.5856 21.3488L67.7133 14.2718L73.8064 14.2718L67.23 21.4696L74.0653 33L68.1275 33L63.6224 24.9564L61.5856 27.0795L61.5856 33L56.7525 33L56.7525 7.64356L61.5856 7.64356L61.5856 21.3488Z"/>
          <path d="M81.4703 17.9139C81.01 18.2476 80.7799 18.6388 80.7799 19.0876C80.7799 19.6515 81.0215 20.06 81.5048 20.3132C81.9881 20.5778 83.697 21.0324 86.6313 21.6768C88.5876 22.1371 90.0548 22.8333 91.0329 23.7654C91.9995 24.709 92.4828 25.8885 92.4828 27.3039C92.4828 29.1681 91.7895 30.6899 90.4029 31.8694C89.0162 33.0489 86.873 33.6387 83.9731 33.6387C81.0158 33.6387 78.8322 33.0144 77.4226 31.7658C76.0129 30.5173 75.3081 28.9264 75.3081 26.9932L80.2965 26.9932C80.4001 27.8677 80.6245 28.4891 80.9697 28.8574C81.5796 29.5133 82.7073 29.8412 84.3529 29.8412C85.3195 29.8412 86.0876 29.6974 86.6572 29.4097C87.2268 29.122 87.5117 28.6905 87.5117 28.1151C87.5117 27.5628 87.2815 27.1428 86.8212 26.8551C86.3609 26.5674 84.6521 26.0726 81.6947 25.3706C79.5658 24.8413 78.0641 24.1796 77.1896 23.3856C76.315 22.6031 75.8777 21.4754 75.8777 20.0025C75.8777 18.2648 76.5595 16.7718 77.9232 15.5232C79.2868 14.2747 81.2056 13.6504 83.6797 13.6504C86.0272 13.6504 87.9403 14.1193 89.419 15.0572C90.8977 15.995 91.7464 17.6147 91.965 19.9161L87.0456 19.9161C86.9766 19.2832 86.7982 18.7827 86.5105 18.4144C85.9697 17.747 85.0491 17.4133 83.7488 17.4133C82.6786 17.4133 81.9191 17.5802 81.4703 17.9139Z"/>
          <path d="M101.182 14.1855L101.182 33L96.1939 33L96.1939 14.1855L101.182 14.1855ZM101.182 7.40191L101.182 11.9416L96.1939 11.9416L96.1939 7.40191L101.182 7.40191Z"/>
          <path d="M145.253 19.1049C144.804 18.2303 143.953 17.793 142.698 17.793C141.398 17.793 140.411 18.2274 139.738 19.0962C139.065 19.9651 138.728 21.205 138.728 22.816L138.728 33L133.826 33L133.826 7.64356L138.728 7.64356L138.728 16.6366C139.442 15.5434 140.268 14.781 141.205 14.3495C142.143 13.9179 143.13 13.7022 144.166 13.7022C145.328 13.7022 146.384 13.9036 147.333 14.3063C148.282 14.7091 149.062 15.3247 149.672 16.1532C150.19 16.8552 150.506 17.5773 150.621 18.3195C150.736 19.0617 150.794 20.2729 150.794 21.9529L150.794 33L145.771 33L145.771 21.5559C145.771 20.5433 145.598 19.7263 145.253 19.1049Z"/>
          <path d="M161.237 29.2371C161.432 29.4327 162.031 29.5305 163.032 29.5305C163.182 29.5305 163.34 29.5277 163.507 29.5219C163.673 29.5162 163.837 29.5075 163.999 29.496L163.999 33.1726L161.668 33.2589C159.344 33.3395 157.756 32.9367 156.904 32.0506C156.352 31.4868 156.076 30.618 156.076 29.4442L156.076 17.8621L153.452 17.8621L153.452 14.3581L156.076 14.3581L156.076 9.11075L160.943 9.11075L160.943 14.3581L163.999 14.3581L163.999 17.8621L160.943 17.8621L160.943 27.8044C160.943 28.5754 161.041 29.053 161.237 29.2371Z"/>
          <path d="M172.163 17.9139C171.703 18.2476 171.473 18.6388 171.473 19.0876C171.473 19.6515 171.714 20.06 172.198 20.3132C172.681 20.5778 174.39 21.0324 177.324 21.6768C179.28 22.1371 180.748 22.8333 181.726 23.7654C182.692 24.709 183.176 25.8885 183.176 27.3039C183.176 29.1681 182.482 30.6899 181.096 31.8694C179.709 33.0489 177.566 33.6387 174.666 33.6387C171.708 33.6387 169.525 33.0144 168.115 31.7658C166.706 30.5173 166.001 28.9264 166.001 26.9932L170.989 26.9932C171.093 27.8677 171.317 28.4891 171.662 28.8574C172.272 29.5133 173.4 29.8412 175.046 29.8412C176.012 29.8412 176.78 29.6974 177.35 29.4097C177.92 29.122 178.204 28.6905 178.204 28.1151C178.204 27.5628 177.974 27.1428 177.514 26.8551C177.054 26.5674 175.345 26.0726 172.387 25.3706C170.259 24.8413 168.757 24.1796 167.882 23.3856C167.008 22.6031 166.57 21.4754 166.57 20.0025C166.57 18.2648 167.252 16.7718 168.616 15.5232C169.98 14.2747 171.898 13.6504 174.372 13.6504C176.72 13.6504 178.633 14.1193 180.112 15.0572C181.59 15.995 182.439 17.6147 182.658 19.9161L177.738 19.9161C177.669 19.2832 177.491 18.7827 177.203 18.4144C176.662 17.747 175.742 17.4133 174.441 17.4133C173.371 17.4133 172.612 17.5802 172.163 17.9139Z"/>
          </g>
          <path d="M110.162 33.453L112.528 35.0443L109.297 39.8467L106.932 38.2555L110.162 33.453Z" fill="#fe9101" fill-rule="nonzero" opacity="1" stroke="none" vectornator:layerName="path"/>
          <path d="M106.338 46.9917C105.635 48.037 104.217 48.3145 103.17 47.6117L101.909 46.7624C100.862 46.0583 100.585 44.641 101.289 43.5955L105.841 36.8314C106.545 35.7847 107.962 35.5073 109.007 36.2104L110.269 37.0595C111.315 37.7626 111.593 39.1823 110.889 40.2276L107.114 45.8383L106.338 46.9917Z" fill="#fe9101" fill-rule="nonzero" opacity="1" stroke="none" vectornator:layerName="path 1"/>
          <path d="M106.338 46.9917C105.635 48.037 104.217 48.3145 103.17 47.6117L101.909 46.7624C100.862 46.0583 100.585 44.641 101.289 43.5955L105.841 36.8314C106.545 35.7847 107.962 35.5073 109.007 36.2104L110.269 37.0595C111.315 37.7626 111.593 39.1823 110.889 40.2276L107.114 45.8383L106.338 46.9917Z" fill="#fe9101" fill-rule="nonzero" opacity="1" stroke="none" vectornator:layerName="path 2"/>
          <path d="M129.263 22.992C127.963 16.3469 121.523 12.0148 114.878 13.3152C108.233 14.6156 103.902 21.0553 105.202 27.7004C105.76 30.5505 107.263 32.9751 109.322 34.7124C109.797 35.1132 110.831 35.8018 110.831 35.8018C110.831 35.8018 116.449 37.9914 119.586 37.3775C126.231 36.0771 130.563 29.6371 129.263 22.992ZM107.427 27.265C106.367 21.8483 109.896 16.6004 115.313 15.5405C120.73 14.4805 125.977 18.0111 127.037 23.4277C128.097 28.8443 124.568 34.0922 119.151 35.1522C113.734 36.2122 108.487 32.6816 107.427 27.265Z" fill="#fe9101" fill-rule="nonzero" opacity="1" stroke="none" vectornator:layerName="path 3"/>
          <path d="M120.769 17.7471C120.603 17.8552 120.355 17.9045 120.355 18.1026L120.355 32.353C120.354 32.5209 120.586 32.5411 120.71 32.6493C124.067 31.0102 126.114 27.3994 125.361 23.5539C124.837 20.8743 123.034 18.8763 120.769 17.7471ZM115.081 22.2503C114.717 22.2503 114.429 22.5153 114.429 22.8429L114.429 32.353C114.429 32.6806 114.717 32.9456 115.081 32.9456L119.051 32.9456C119.414 32.9456 119.703 32.6806 119.703 32.353L119.703 22.8429C119.703 22.5153 119.414 22.2504 119.051 22.2503L115.081 22.2503ZM115.762 23.4354L118.399 23.4354L118.399 31.7605L115.762 31.7605L115.762 23.4354ZM109.156 27.0202C109.035 27.0202 109.046 27.1762 108.948 27.2276C109.579 29.7246 111.277 31.5947 113.451 32.6493C113.571 32.5417 113.777 32.5168 113.777 32.353L113.777 27.6128C113.777 27.2852 113.489 27.0202 113.126 27.0202L109.156 27.0202Z" fill="#fe9000" fill-rule="nonzero" opacity="1" stroke="none" vectornator:layerName="Curve 1"/>
          </g>
          </svg>          

          </a>
        </div>
    </div> 
    <div id="navigation-mobile" >
        <nav>
          {/* Credit: https://codepen.io/sorinbotirla/pen/QyoYgx */}
          <a href="/">Home</a>
          <a href="https://linksights.info/Blog">Blog</a>
          <a href="https://linksights.info/About">About</a>

        </nav>
      <div id="mobile-nav-toggler">
        <div class="navicon">
            <div></div>
        </div>
      </div>
    </div>
  </div>
  );
}

Navigation.css=navigationStyle
Navigation.afterDOMLoaded = navigationScript

return Navigation

}) satisfies QuartzComponentConstructor


