import {styled, keyframes, css} from "@mui/material";

const variables = {
    background_color: '#000',
    secondary_color: '#fff',
    shadow_color: 'rgba(0,0,0, 0.075)',
    item_count: 10,
    border_radius: '12%',
    multiplier: 0.75,
    time: 4.2,
    delta: 0.045,
    rotation: 380
}

const spin = keyframes`
  0% {
    -webkit-transform: rotateZ(0deg) translate(-50px, 0);
    -moz-transform: rotateZ(0deg) translate(-50px, 0);
    -o-transform: rotateZ(0deg) translate(-50px, 0);
    transform: rotateZ(0deg) translate(-50px, 0);
  }
  100% {
    -webkit-transform: rotateZ(${variables.rotation}deg) translate(-50px, -80px);
    -moz-transform: rotateZ(${variables.rotation}deg) translate(-50px, -80px);
    -o-transform: rotateZ(${variables.rotation}deg) translate(-50px, -80px);
    transform: rotateZ(${variables.rotation}deg) translate(-50px, -80px);
  }
`


export const Wrapper = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;

  ${planeAnimation()}
`;
const glow = keyframes`
  0% {
    color: #fff
  }
  100% {
    color: #000
  }
`
export const Title = styled('div')`
  font-size: 2rem;
  margin-bottom: -2rem;
  animation: ${glow} ${variables.time / 3}s ease-in-out alternate infinite;
`;

export const Plane = styled('div')`
  display: block;
  height: 0;
  width: 0;
  overflow: visible;
  transform-origin: 0% 0%;
  transform: rotateZ(0deg) translate(-50px, 0);
  -webkit-animation: ${spin} ${variables.time}s ease-in-out alternate infinite;
  -moz-animation: ${spin} ${variables.time}s ease-in-out alternate infinite;
  -o-animation: ${spin} ${variables.time}s ease-in-out alternate infinite;
  animation: ${spin} ${variables.time}s ease-in-out alternate infinite;

  &:nth-of-type(odd) .triangle {
    background-color: ${variables.secondary_color};
  }

  &:nth-of-type(even) .triangle {
    background-color: ${variables.background_color};
  }
`;

export const Triangle = styled('div')`
  position: absolute;
  border-top-right-radius: ${variables.border_radius};
  transform-origin: -50% 50%;
  transform: rotateZ(-60deg) skewX(-30deg) scale(1, 0.866);

  &:before,
  &:after {
    content: "";
    position: absolute;
    background-color: inherit;
    border-top-right-radius: ${variables.border_radius};
  }

  &:before {
    box-shadow: -6px -5px 10px 3px ${variables.shadow_color};
    -webkit-transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707) translate(0, -50%);
    -moz-transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707) translate(0, -50%);
    -ms-transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707) translate(0, -50%);
    -o-transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707) translate(0, -50%);
    transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707) translate(0, -50%);
  }

  &:after {
    box-shadow: 14px -1px 10px -6px ${variables.shadow_color};
    -webkit-transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%);
    -moz-transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%);
    -ms-transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%);
    -o-transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%);
    transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%);
  }
`;


function planeAnimation() {
    let str = ''

    for (let i = 1; i < variables.item_count; i++) {
        const size = `${i * variables.multiplier}em`;

        str += `
        .plane:nth-of-type(${i}) {
            z-index: ${variables.item_count - i};
            animation-delay: ${i * variables.delta}s;
            
            & .triangle,
            & .triangle:before,
            & .triangle:after {
                width: ${size};
                height: ${size};
            }            
        }      
        `;
    }

    return str;
}
