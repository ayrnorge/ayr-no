import fluid from "./fluid"

/*
 * fluid font size implementation in css-in-js
 *
 * @param minVm (min view port when font size will be set to @minSize)
 * @param maxVm (max view port when font size will be set to @maxSize)
 * @param minSize (min font size)
 * @param maxSize (max font size)
 * @return {*|*}
 */

export default (minVm, maxVm, minSize, maxSize) =>
  fluid("font-size", minVm, maxVm, minSize, maxSize)
