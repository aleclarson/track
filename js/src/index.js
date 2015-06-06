(function() {
  var Tracker, mergeValue, track;

  Tracker = function() {
    var tracker;
    tracker = function(data) {
      var key, results, value;
      if (data == null) {
        data = typeof track.getData === "function" ? track.getData() : void 0;
      }
      if ((data instanceof Array) && !(data instanceof Object)) {
        return mergeValue(tracker.data, "_", data);
      } else {
        results = [];
        for (key in data) {
          value = data[key];
          results.push(mergeValue(tracker.data, key, value));
        }
        return results;
      }
    };
    tracker.data = {};
    tracker.getData = null;
    return tracker;
  };

  track = module.exports = Tracker();

  track.Tracker = Tracker;

  mergeValue = function(obj, key, value) {
    if (obj[key] == null) {
      obj[key] = [];
    }
    if (value instanceof Array) {
      return obj[key] = obj[key].concat(value);
    } else {
      return obj[key].push(value);
    }
  };

}).call(this);

//# sourceMappingURL=map/index.js.map
