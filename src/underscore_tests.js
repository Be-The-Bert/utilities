/*jshint eqnull:true, expr:true*/

var _ = { };

(function() {

  /**
   * COLLECTIONS
   * ===========
   *
   * In this section, we'll have a look at functions that operate on collections
   * of values; in JavaScript, a 'collection' is something that can contain a
   * number of values--either an array or an object.
   */

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  _.first = function(array, n) {
    if (n === undefined || n === 0) {
      return array[0];
    }
    var answerArr = [];
    n -= 1;
    if (n > array.length - 1){
      return array;
    }
    for (let i = 0; i <= n; i++) {
      answerArr.push(array[i]);
    }
    return answerArr;
    // return var newArr = [array[n]];
  };

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  _.last = function(array, n) {
    var answerArr = [];
    if (n === 0) {
      return answerArr;
    }
    if (n === undefined) {
      return array[array.length - 1];
    } 
    if (n >= array.length) {
      return array;
    }
    for (let i = n - 1; i < array.length; i++) {
      answerArr.push(array[i]);
    }
    return answerArr;
  };

  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  _.each = function(collection, iterator) {
    if (collection.constructor === Array) {
      for (let i = 0; i < collection.length; i++){
        iterator(collection[i], i, collection);
      }
    } else {
      for (let j in collection) {
        iterator(collection[j], j, collection);
      }
    }
  };

  // Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array.
  _.indexOf = function(array, target){
      return array.indexOf(target); 
  };

  // Return all elements of an array that pass a truth test ('iterator' function argument)
  _.filter = function(collection, iterator) {
    var answer = collection.filter(iterator);
    return answer;
  };

  // Return all elements of an array that don't pass a truth test (the 'iterator' function argument)
  _.reject = function(collection, iterator) {
    var passing = collection.filter(iterator);
    for (let i = 0; i < passing.length; i++) {
      var index = collection.indexOf(passing[i]);
      collection.splice(index, 1);
    }
    return collection;
  };

  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    array.sort();
    var newArr = [array[0]];
    for (let i = 1; i < array.length; i++) {
      if (array[i] !== array[i - 1]) {
        newArr.push(array[i]);
      }
    }
    return newArr;
  };


  // Return the results of applying an iterator to each element.
  _.map = function(array, iterator) {
    return array.map(iterator);
  };

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages
  _.pluck = function(array, propertyName) {
    var propertyArr = [];
    for (let i =  0; i < array.length; i++) {
      propertyArr.push(array[i][propertyName]);
    }
    return propertyArr;
  };

  // Calls the method named by methodName on each value in the list.
  _.invoke = function(list, methodName, args) {
    for (let i = 0; i < list.length; i++) {
     list[i].sort();
   }
    return list;
  };

  // Reduces an array or object to a single value by repetitively calling
  // iterator(previousValue, item) for each item. previousValue should be
  // the return value of the previous iterator call.
  _.reduce = function(collection, iterator, initialValue) {
    if (initialValue === undefined) {
      initialValue = 0;
    }
    var previousValue = initialValue;
    for (let i = 0; i < collection.length; i++){
      previousValue = iterator(previousValue, collection[i]);
    }
    return previousValue;
  };

  // Determine if the array or object contains a given value (using `===`).
  _.contains = function(collection, target) {
    var answer = false;
    for (let i = 0; i < collection.length; i++) {
      if (collection[i] === target) {
        answer = true;
      }
    }
    for (var j in collection) {
        if (collection[j] === target) {
          answer = true;
        }
    }
    return answer;
  };


  // Determine whether all of the elements match a truth test.
  _.every = function(collection, iterator) {
    var answer = false;
    if (iterator === undefined) {
      return true;
    }
    var compare = collection.filter(iterator);
    if (compare.length === collection.length) {
      answer = true;
    }
    return answer;
  };

  // Determine whether any of the elements pass a truth test. If no iterator is
  // provided, provide a default one
  _.some = function(collection, iterator) {
    var answer = true;
    if (iterator === undefined) {
      iterator = function(a) {return !!a;};
    }
    var compare = []
    compare = collection.filter(iterator);
    if (compare.length === 0) {
      answer = false;
    }
    return answer;
  };


  /**
   * OBJECTS
   * =======
   *
   * In this section, we'll look at a couple of helpers for merging objects.
   */

  // Extend a given object with all the properties of the passed in
  // object(s).
  _.extend = function(obj) {
    // var answer = {};
    // for (let i in obj) {
    //   keys.push(i);
    // }
  };

  // Like extend, but doesn't ever overwrite a key that already
  // exists in obj
  _.defaults = function(obj) {
  };


  /**
   * FUNCTIONS
   * =========
   */

  // Return a function that can be called at most one time. Subsequent calls
  // should return the previously returned value.
  _.once = function(func) {
    var executed = false;
    return function() {
      if (!executed) {
        executed = true;
        func();
      }
    }
  };

  // Memoize an expensive function by storing its results. You may assume
  // that the function takes only one argument and that it is a primitive.
  //
  // Memoize should return a function that when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.
  _.memoize = function(func) {
    var cache = {};
    return function() {
      var key = JSON.stringify(arguments);
      if(cache[key]) {
        return cache[key];
      }
      else {
        var val = func.apply(this, arguments);
        cache[key] = val;
        return val;
      }
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  //
  // The arguments for the original function are passed after the wait
  // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
  // call someFunction('a', 'b') after 500ms
  _.delay = function(func, wait, args) {
    
  };



  // Shuffle an array.
  _.shuffle = function(array) {
  };

  // Sort the object's values by a criterion produced by an iterator.
  // If iterator is a string, sort objects by that property with the name
  // of that string. For example, _.sortBy(people, 'name') should sort
  // an array of people by their name.
  _.sortBy = function(collection, iterator) {
  };

  // Zip together two or more arrays with elements of the same index
  // going together.
  //
  // Example:
  // _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
  _.zip = function() {

  };

  // Takes a multidimensional array and converts it to a one-dimensional array.
  // The new array should contain all elements of the multidimensional array.
  _.flatten = function(nestedArray, result) {
  };

  // Takes an arbitrary number of arrays and produces an array that contains
  // every item shared between all the passed-in arrays.
  _.intersection = function() {}
    var args = arguments.toArray;
  //   for (let i = 0; i < args.length; i++)
  //     for (let j = 0; j < args[i].length; j++) {
  //       if (args[i] === args)
  //     }
  // };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
  };

}).call(this);
