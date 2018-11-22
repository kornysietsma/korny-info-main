
# not really obfuscation - just enough to stop automated stuff: swap first 2 and last 2 chars
demunge = (str) ->
  l = str.length
  str[1] + str[0] + str[2..l - 3] + str[l - 1] + str[l - 2]

class KornyMain
  constructor: ->
    setTimeout ->
      $(".munged").each ->
        el = $(this)
        el.html(demunge(el.attr("data-munged")))

$( ->
  # expose a namespace for external use
  window.KornyMain =
    App: KornyMain
    the_app: new KornyMain
)
