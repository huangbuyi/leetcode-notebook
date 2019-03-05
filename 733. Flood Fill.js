/* 
递归 DFS
*/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  var color = image[sr][sc]
  if (color === newColor) return image
  image[sr][sc] = newColor
  if (sr > 0 && image[sr - 1][sc] === color) floodFill(image, sr - 1, sc, newColor)
  if (sc > 0 && image[sr][sc - 1] === color) floodFill(image, sr, sc - 1, newColor)
  if (sr < image.length - 1 && image[sr + 1][sc] === color) floodFill(image, sr + 1, sc, newColor)
  if (sc < image[0].length - 1 && image[sr][sc + 1] === color) floodFill(image, sr, sc + 1, newColor)
  return image
};

