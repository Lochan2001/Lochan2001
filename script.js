// To run this effect in loop set 'loop' to true
const instance = new Typewriter("#typewriter", {
    loop: true,
});
instance
    .pauseFor(500)
    .typeString("Hi There!")
    .deleteAll()
    .typeString("I am Lochan.")
    .pauseFor(500)
    .deleteChars(1)
    .typeString(",<br>A Software Developer.")
    .pauseFor(500)
    .deleteAll()
    .typeString("Check Out My Work, <br>Right Here @Lochan2001!")
    .deleteAll()
    .typeString("Thanks!")
    .pauseFor(500)
    .deleteAll()
    .start();
