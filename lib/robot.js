'use strict';

class Robot {
  orient(currentDirection){
    if (currentDirection == 'north' || currentDirection == 'east' || currentDirection == 'south' || currentDirection == 'west') {
      this.bearing = currentDirection
    } else {
      throw new Error('Invalid Robot Bearing')
    }
  }

  at(x, y) {
    this.x = x,
    this.y = y,
    this.coordinates = [this.x, this.y]
  }

  advance() {
    if (this.bearing == 'north') {
      this.y = this.y + 1
      this.coordinates = [this.x, this.y]
    } else if (this.bearing == 'east') {
      this.x = this.x + 1
      this.coordinates = [this.x, this.y]
    } else if (this.bearing == 'south') {
      this.y = this.y - 1
      this.coordinates = [this.x, this.y]
    } else if (this.bearing == 'west') {
      this.x = this.x - 1
      this.coordinates = [this.x, this.y]
    }
  }

  instructions(directions) {
    var routes = []
    var directionsArray = Array.from(directions)
    directionsArray.forEach(function(letter){
      console.log(this)
      if (letter == 'R') {
        routes.push("turnRight")
      } else if (letter == 'L') {
        routes.push("turnLeft")
      } else if (letter == 'A') {
        routes.push("advance")
      }
    }.bind(this))
    return routes
  }

  place(object) {
    this.x = object.x,
    this.y = object.y,
    this.orient(object.direction)
  }

  evaluate(directions) {
    var doThis = this.instructions(directions)
    doThis.forEach(function(move){
      if (move == 'turnRight') {
        this.turnRight()
      } else if (move == 'turnLeft') {
        this.turnLeft()
      } else if (move == 'advance') {
        this.advance()
      }
    }.bind(this))
    return this.coordinates
  }

  turnRight() {
    if (this.bearing == 'north') {
      this.bearing = 'east'
    } else if (this.bearing == 'east') {
      this.bearing = 'south'
    } else if (this.bearing == 'south') {
      this.bearing = 'west'
    } else if (this.bearing == 'west') {
      this.bearing = 'north'
    }
  }

  turnLeft() {
    if (this.bearing == 'north') {
      this.bearing = 'west'
    } else if (this.bearing == 'west') {
      this.bearing = 'south'
    } else if (this.bearing == 'south') {
      this.bearing = 'east'
    } else if (this.bearing == 'east') {
      this.bearing = 'north'
    }
  }  
}
