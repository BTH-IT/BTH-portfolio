const typed = new Typed(".auto-typed", {
  strings: ["Bien Thanh Hung", "Frontend Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
  smartBackspace: true,
  onStringTyped: function(index, self) {
    if (self.strings[index] === "Bien Thanh Hung") {
      self.el.innerHTML = '<span style="color: blue;">' + self.strings[index] + '</span>';
    } else if (self.strings[index] === "Frontend Developer") {
      self.el.innerHTML = '<span style="color: red;">' + self.strings[index] + '</span>';
    }
  }
});
