
Tracker = ->

  tracker = (data) ->
    data ?= track.getData?()
    
    if (data instanceof Array) and not (data instanceof Object)
      mergeValue tracker.data, "_", data
    
    else
      mergeValue tracker.data, key, value for key, value of data

  tracker.data = {}

  tracker.getData = null

  tracker

track = module.exports = Tracker()

track.Tracker = Tracker

mergeValue = (obj, key, value) ->
  obj[key] ?= []
  
  if value instanceof Array
    obj[key] = obj[key].concat value
  
  else
    obj[key].push value
