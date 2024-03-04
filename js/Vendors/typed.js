const typed = new Typed(".auto-typed", {
  strings: ["Bien Thanh Hung", "Frontend Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
  smartBackspace: true,
  onStringTyped: function(index, self) {
    if (index === 0) {
      self.el.innerHTML = '<span style="color: blue;">' + self.strings[index] + '</span>';
    } else if (index === 1) {
      self.el.innerHTML = '<span style="color: red;">' + self.strings[index] + '</span>';
    }
  }
});
