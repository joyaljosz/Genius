document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.count');
    const speed = 200; // Speed of the counting animation (milliseconds)
  
    counters.forEach(counter => {
      const target = +counter.innerText; // Convert the counter's inner text to a number
      const updateCount = () => {
        const count = +counter.innerText;
        const increment = target / speed;
  
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };
  
      updateCount();
    });
  });
  