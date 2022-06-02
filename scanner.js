let events = []

Object.defineProperty(document, 'cookie', {
    get: function() {
        console.log('cookie retrieve attempt');
        events.push("cookie:get")
        return "blocked by https://github.com/qaiik/frsafety"
    },
    set: function(val) {
        events.push("cookie:set")
        console.log('cookie set attempt', arguments);
        return "blocked by https://github.com/qaiik/frsafety"
    }
});

let e = document.head;

document.querySelector = function(s) {
  return e
}

document.querySelectorAll = function(sa) {
  return [e]
}

Object.defineProperty(e, 'innerHTML', {
    get: function() {
        console.log('text:get');
        events.push("text:get")
        return "blocked by https://github.com/qaiik/frsafety"
    },
    set: function(val) {
        events.push("text:set")
        console.log('text:set', arguments);
        return "blocked by https://github.com/qaiik/frsafety"
    }
});

Object.defineProperty(e, 'innerText', {
    get: function() {
        console.log('text:get');
        events.push("text:get")
        return "blocked by https://github.com/qaiik/frsafety"
    },
    set: function(val) {
        events.push("text:set")
        console.log('text:set', arguments);
        return "blocked by https://github.com/qaiik/frsafety"
    }
});

Object.defineProperty(e, 'textContent', {
    get: function() {
        console.log('text:get');
        events.push("text:get")
        return "blocked by https://github.com/qaiik/frsafety"
    },
    set: function(val) {
        events.push("text:set")
        console.log('text:set', arguments);
        return "blocked by https://github.com/qaiik/frsafety"
    }
});

Object.defineProperty(e, 'outerText', {
    get: function() {
        console.log('text:get');
        events.push("text:get")
        return "blocked by https://github.com/qaiik/frsafety"
    },
    set: function(val) {
        events.push("text:set")
        console.log('text:set', arguments);
        return "blocked by https://github.com/qaiik/frsafety"
    }
});

Object.defineProperty(e, 'outerHTML', {
    get: function() {
        console.log('text:get');
        events.push("text:get")
        return "blocked by https://github.com/qaiik/frsafety"
    },
    set: function(val) {
        events.push("text:set")
        console.log('text:set', arguments);
        return "blocked by https://github.com/qaiik/frsafety"
    }
});
