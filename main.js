let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#670097;"> Desarrollo de proyectos tecnológicos y contenido STEAM </span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
