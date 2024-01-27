function demunge(str) {
  var l;
  l = str.length;
  return str[1] + str[0] + str.slice(2, l - 3 + 1) + str[l - 1] + str[l - 2];
}

document
  .querySelectorAll(".munged")
  .forEach((el) => (el.innerHTML = demunge(el.getAttribute("data-munged"))));
