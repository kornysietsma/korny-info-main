(function() {
  var KornyMain, demunge;
  demunge = function(str) {
    var l;
    l = str.length;
    return str[1] + str[0] + str.slice(2, l - 3 + 1) + str[l - 1] + str[l - 2];
  };
  KornyMain = function() {
    setTimeout(function() {
      return $(".munged").each(function() {
        var el;
        el = $(this);
        return el.html(demunge(el.attr("data-munged")));
      });
    });
    return this;
  };
  $(function() {
    return (window.KornyMain = {
      App: KornyMain,
      the_app: new KornyMain()
    });
  });
}).call(this);
