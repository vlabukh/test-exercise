import favourite from '../../assets/icons/favourite.png'
import notification from '../../assets/icons/notification.png'
import deleteIcon from '../../assets/icons/delete.png'
import filter1 from '../../assets/icons/filter1.png'
import filter2 from '../../assets/icons/filter2.png'

export const Wrapper = (src, width, height, alt) => {
  return <img src={src} width={width} height={height} alt={alt}/>
}

export const FavouriteIcon = ({width = 32, height = 32}) => {
  return Wrapper(favourite, width, height, 'favourite')
}

export const NotificationIcon = ({width = 32, height = 32}) => {
  return Wrapper(notification, width, height, 'notification')
}

export const DeleteIcon = ({width = 32, height = 32}) => {
  return Wrapper(deleteIcon, width, height, 'delete')
}

export const Filter1Icon = ({width = 32, height = 32}) => {
  return Wrapper(filter1, width, height, 'filter')
}

export const Filter2Icon = ({width = 32, height = 32}) => {
  return Wrapper(filter2, width, height, 'filter')
}

//это другое - svg
export const SearchIcon = ({width = 24, height = 24}) => {
  return (
    <svg width={width} height={height} viewBox='0 0 350 350' xmlns='http://www.w3.org/2000/svg'>
      <g>
        <title>background</title>
        <rect fill='none' id='canvas_background' height='352' width='352' y='-1' x='-1' />
        <g display='none' overflow='visible' y='0' x='0' height='100%' width='100%' id='canvasGrid'>
          <rect fill='url(#gridpattern)' strokeWidth='0' y='0' x='0' height='100%' width='100%' />
        </g>
      </g>
      <g>
        <title>Layer 1</title>
        <ellipse ry='150' rx='150' id='svg_9' cy='175' cx='175' strokeOpacity='null' strokeWidth='30' stroke='#bebebe' fill='none' />
        <line strokeLinecap='null' strokeLinejoin='null' id='svg_10' y2='281.58488' x2='281.34098' y1='342.80488' x1='342.56098' strokeOpacity='null' strokeWidth='40' stroke='#bebebe' fill='none' />
        <line strokeLinecap='null' strokeLinejoin='null' id='svg_11' y2='255.76135' x2='355.29689' y1='256.1331' x1='355.29689' strokeOpacity='null' strokeWidth='40' stroke='#bebebe' fill='none' />
      </g>
    </svg>
  )
}