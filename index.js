const jokes = [
    "Why do programmers prefer dark mode? Because the light attracts bugs!",
   "Why do Java developers wear glasses? Because they don't see sharp",
    "How many programmers does it take to change a light bulb? None. It's a hardware problem!"
  ];
  let jokeIndex = 0;
  
  function allowClick(){
  
     let heading=document.querySelector("#joke-text");
     heading.classList.remove("hidden");
      new Typewriter('#joke-text', {
          strings: [jokes[jokeIndex]],
          autoStart: true,
          cursor:"",
          delay:30,
        }); 
        jokeIndex = (jokeIndex + 1) % jokes.length;
  }
  let buttonElement=document.querySelector("#special-button");
  buttonElement.addEventListener("click", allowClick);
  