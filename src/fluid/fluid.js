export const unit = value => value.replace(/(^\d+)(.+$)/i, '$1');

/*
fluid smooth (font size, margin, height, width etc.) implementation in css-in-js
    @param property (css property)
    @param minVm (min view port when font size will be set to @minSize)
    @param maxVm (max view port when font size will be set to @maxSize)
    @param minSize (min font size)
    @param maxSize (max font size)
    @return {*|*} 
*/


export default (property, minVm, maxVm, minSize, maxSize) => `
  ${property}: ${minSize};
  
  @media screen and (min-width: ${minVm}) {
    ${property}: calc( ${minSize} + (${unit(maxSize)} - ${unit(minSize)}) * (100vw - ${minVm}) / (${unit(maxVm)} - ${unit(minVm)}) );
  }
  
  @media screen and (min-width: ${maxVm}) {
    ${property}: ${maxSize};
  }
`;
