function throttle(func, delay) {
    let timer = null;
  
    return function() {
      if (timer === null) {
        timer = setTimeout(() => {
          func();
          timer = null;
        }, delay);
      }
    };
  }

const handleClick = () => {
    console.log('Button clicked!');
  };
  
  const throttledClickHandler = throttle(handleClick, 1000);
// console.log(throttledClickHandler());
throttledClickHandler();
