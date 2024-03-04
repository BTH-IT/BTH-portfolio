const typed = new Typed(".auto-typed", {
  strings: ["Bien Thanh Hung", "Frontend Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
  smartBackspace: true,
  onComplete: function(self) {
    if (self.strings[self.sequenceIndex] === "Bien Thanh Hung") {
      self.el.innerHTML = '<span style="color: blue;">' + self.strings[self.sequenceIndex] + '</span>';
    } else if (self.strings[self.sequenceIndex] === "Frontend Developer") {
      self.el.innerHTML = '<span style="color: red;">' + self.strings[self.sequenceIndex] + '</span>';
    }
  },
  onStringTyped: function(index, self) {
    if (self.strings[index] === "Bien Thanh Hung") {
      self.el.innerHTML = '<span style="color: blue;">' + self.strings[index] + '</span>';
    } else if (self.strings[index] === "Frontend Developer") {
      self.el.innerHTML = '<span style="color: red;">' + self.strings[index] + '</span>';
    }
  }
});
