module.exports = function vonNeumann(range, dimensions) {
  range = range || 1
  dimensions = dimensions || 2

  var size = range * 2 + 1
  var iterations = Math.pow(size, dimensions)
  var center = (iterations - 1) / 2
  var neighbors = []
  for (var i = 0; i < iterations; i++) {
    if (i !== center) {
      var neighbor = new Array(dimensions)
      var distance = 0
      var remaining = i
      for (var d = 0; d < dimensions; d++) {
        var remainder = remaining % Math.pow(size, d + 1)
        var value = remainder / Math.pow(size, d) - range
        neighbor[d] = value
        distance += Math.abs(value)
        remaining -= remainder
      }
      if (distance <= range) {
        neighbors.push(neighbor)
      }
    }
  }

  return neighbors
}
