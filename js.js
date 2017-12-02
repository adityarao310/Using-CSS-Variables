function update() {
  const suffix = this.dataset.sizing || "";
  // console.log(suffix)
  // console.log(this.value);
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

const inputs = document.querySelectorAll(".controls input");
// console.log(inputs);
inputs.forEach(input => input.addEventListener('change', update));
inputs.forEach(input => input.addEventListener('mousemove', update));
