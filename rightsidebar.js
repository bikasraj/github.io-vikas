document.addEventListener("DOMContentLoaded", function() {
  var toc = document.getElementById("toc");
  var headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

  headings.forEach(function(heading) {
    var listItem = document.createElement("li");
    var link = document.createElement("a");
    link.textContent = heading.textContent;
    link.setAttribute("href", "#" + heading.id);
    listItem.appendChild(link);
    toc.appendChild(listItem);
  });
});
