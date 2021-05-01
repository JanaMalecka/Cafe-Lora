import './style.css';

/* export const Layer = (props) => {
  return `
  <div class="layer">
    <div class="layer__color"
         style="background-color: ${props.color}"
          ></div>
    <div class="layer__label">${props.label}</div>
          </div>`;
}; */

export const Layer = (layers) => {
  return `
  <div class="layer">
    <div class="layer__color"
         style="background-color: ${layers.color}"
          ></div>
    <div class="layer__label">${layers.label}</div>
          </div>`;
};
