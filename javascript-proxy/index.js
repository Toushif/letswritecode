let bears = { grizzly: true }

let grizzlyCount = 0

const proxyBears = new Proxy(bears, {
  get: function (target, prop, receiver) {
    if (prop === 'grizzly') grizzlyCount++
    return Reflect.get(target, prop, receiver) //instead of returning target[prop] we can use Reflect like this
    // return target[prop]
  },
  set: function (target, prop, value, receiver) {
    if (['grizzly', 'brown', 'polar'].indexOf(prop) === -1) {
      throw new Error('THAT IS TOTALLY NOT A BEAR!')
    }
    return Reflect.set(target, prop, value, receiver)
    // target[prop] = value
  },
  deleteProperty: function (target, prop) {
    console.log(`You have deleted ${prop}`)
    delete target[prop]
  }
})

//proxyBears.aardvark = true
proxyBears.polar = true
proxyBears.brown = false
//delete proxyBears.polar
//console.log(proxyBears.polar)
console.log(bears)

proxyBears.grizzly
proxyBears.grizzly
proxyBears.grizzly
proxyBears.grizzly
console.log(grizzlyCount)

function growl() {
  return 'grrr'
}
const loudGrowl = new Proxy(growl, {
  apply: function (target, thisArg, args) {
    return target().toUpperCase() + '!!!'
  }
})

console.log(loudGrowl())











