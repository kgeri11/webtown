import { Image } from 'react-bootstrap'
import style from './masonry.module.scss'

const Masonry = () => {
  /**
   * Megjegyzés:
   * -képek méretezésénél/felbontásánál nem ez tűnik a legoptimálisabbnak, de így object-fittel ez volt a legközelebb
   */
  return (
    <div className="container py-5">
      <div className="py-3">
        <h1>Masonry</h1>
      </div>
      <div className="row px-3 justify-content-sm-start justify-content-xl-center column-gap-2 ">
        <div className="d-flex px-0 gap-2 gap-lg-2 flex-column col-sm-5 col-md-4 col-lg-3 col-xl-2 pb-2 pb-xl-0">
          <Image rounded className={[style.img, style.l, 'object-fit-cover'].join(' ')} src="/010.jpg" alt="xy" />
          <Image rounded className={[style.img, style.m, 'object-fit-cover'].join(' ')} src="/005.jpg" alt="xy" />
          <Image rounded className={[style.img, 'flex-grow-1 object-fit-cover'].join(' ')} src="/008.jpg" alt="xy" />
        </div>
        <div className="d-flex px-0 gap-2 flex-column col-sm-5 col-md-4 col-lg-3 col-xl-2 pb-2 pb-xl-0">
          <Image rounded className={[style.img, style.l, 'object-fit-cover'].join(' ')} src="/007.jpg" alt="xy" />
          <Image rounded className={[style.img, style.m, 'object-fit-cover'].join(' ')} src="/002.jpg" alt="xy" />
          <Image rounded className={[style.img, style.s, 'object-fit-cover'].join(' ')} src="/006.jpg" alt="xy" />
          <Image rounded className={[style.img, 'flex-grow-1 object-fit-cover'].join(' ')} src="/009.jpg" alt="xy" />
        </div>
        <div className="d-flex px-0 gap-2 flex-column col-sm-5 col-md-4 col-lg-3 col-xl-2 pb-2 pb-xl-0">
          <Image rounded className={[style.img, style.s, 'object-fit-cover'].join(' ')} src="/002.jpg" alt="xy" />
          <Image rounded className={[style.img, style.s, 'object-fit-cover'].join(' ')} src="/006.jpg" alt="xy" />
          <Image rounded className={[style.img, style.l, 'object-fit-cover'].join(' ')} src="/007.jpg" alt="xy" />
          <Image rounded className={[style.img, style.m, 'object-fit-cover'].join(' ')} src="/005.jpg" alt="xy" />
          <Image rounded className={[style.img, 'flex-grow-1 object-fit-cover'].join(' ')} src="/002.jpg" alt="xy" />
        </div>
        <div className="d-flex px-0 gap-2 flex-column col-sm-5 col-md-4 col-lg-3 col-xl-2 pb-2 pb-xl-0">
          <Image rounded className={[style.img, style.s, 'object-fit-cover'].join(' ')} src="/003.jpg" alt="xy" />
          <Image rounded className={[style.img, style.m, 'object-fit-cover'].join(' ')} src="/001.jpg" alt="xy" />
          <Image rounded className={[style.img, style.s, 'object-fit-cover'].join(' ')} src="/004.jpg" alt="xy" />
          <Image rounded className={[style.img, style.m, 'object-fit-cover'].join(' ')} src="/007.jpg" alt="xy" />
          <Image rounded className={[style.img, 'flex-grow-1 object-fit-cover'].join(' ')} src="/004.jpg" alt="xy" />
        </div>
        <div className="d-flex px-0 gap-2 flex-column col-sm-5 col-md-4 col-lg-3 col-xl-2">
          <Image rounded className={[style.l, 'object-fit-cover'].join(' ')} src="/010.jpg" alt="xy" />
          <Image rounded className={[style.s, 'object-fit-cover'].join(' ')} src="/003.jpg" alt="xy" />
          <Image rounded className={[style.m, 'object-fit-cover'].join(' ')} src="/002.jpg" alt="xy" />
          <Image rounded className="flex-grow-1 object-fit-cover" src="/001.jpg" alt="xy" />
        </div>
      </div>
    </div>
  )
}

export default Masonry
