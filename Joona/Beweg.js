"use strict";
var app = app || {};
app.topics = {
  de: ["Hallo depp", "Idioten"]
};
var shuffle = function(e) {
  for (var n = e.length, i = void 0, r = void 0; 0 !== n;) r = Math.floor(Math.random() * n), n -= 1, i = e[n], e[n] = e[r], e[r] = i;
  return e
};
app.topics.de = shuffle(app.topics.de), app.topics.en = shuffle(app.topics.en);
var app = app || {},
  meteorAppURL = app.guzz.io,
  campaign = "website",
  languages = {
    en: !0,
    de: !0
  },
  browserLanguage = navigator.language || navigator.userLanguage || "en",
  browserLanguageCode = browserLanguage.substring(0, 2),
  language = languages[browserLanguageCode] ? browserLanguageCode : "en";
$("html").attr("lang", language);
var Meteor = new Asteroid(meteorAppURL),
  showSpinner = function() {
    $("#emailInputGroup").hide(), $("#spinner").show()
  },
  showSuccess = function() {
    $("#spinner").hide(), $("#success").show()
  },
  showError = function() {
    $("#spinner").hide(), $("#error").show()
  },
  showInput = function() {
    $("#error").hide(), $("#emailInputGroup").show()
  },
  subscribeToNewsletter = function() {
    var e = $("#emailInput"),
      n = $.trim(e.val());
    if ("" !== n) {
      showSpinner();
      var i = Meteor.call("newsletter:subscribe", n, {
        campaign: campaign,
        language: language
      });
      i.result.then(function() {
        showSuccess()
      }).catch(function() {
        showError(), setTimeout(showInput, 5e3)
      }), fbq("track", "Lead")
    }
  },
  homeHookEvents = function() {
    $(".js-button-subscribe").on("click", subscribeToNewsletter)
  },
  startSubjectTyper = function() {
    $(".typing-container").typed({
      strings: app.topics[language],
      backDelay: 3e3,
      loop: !0
    })
  },
  initSubjectTyper = function() {
    if (app.topics) return void startSubjectTyper();
    var e = Meteor.call("subjects:getTitles", {
      limit: 200,
      shuffle: !0
    });
    e.result.then(function(e) {
      app.topics = {
        de: e,
        en: e
      }, startSubjectTyper()
    }).catch(function(e) {
      console.log("could not get subjects"), console.dir(e)
    })
  };
app.initHome = function() {
  homeHookEvents(), initSubjectTyper()
};
var getToken = function() {
    var e = "token=",
      n = location.search.indexOf(e);
    if (!(n < 0)) {
      var i = location.search.substring(n + e.length);
      return i
    }
  },
  verifySubscription = function() {
    var e = getToken(),
      n = Meteor.call("newsletter:verifyEmail", e);
    n.result.then(function() {
      showSuccess()
    }).catch(function() {
      showError()
    })
  };
app.initVerify = function() {
  showSpinner(), verifySubscription()
};
