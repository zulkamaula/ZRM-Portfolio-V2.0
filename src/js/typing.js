const app = document.getElementById('word');

const typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2000)
  .typeString('Zulkariski Mauladi')
  .pauseFor(3000)
  .deleteChars(13)
  .typeString(' Maula')
  .pauseFor(1000)
  .deleteChars(10)
  .typeString('Born on July 09 1998')
  .pauseFor(2500)
  .start();
