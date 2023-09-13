$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    createPlatform(50, 655, 400, 20); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    
    createPlatform(10, 520, 50, 10); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen

    createPlatform(200, 400, 50, 20); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen

    createPlatform(500, 350, 50, 20); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen

    createPlatform(800, 350, 50, 20); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen

    createPlatform(1000, 350, 90, 20); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen

    createPlatform(1200, 250, 90, 50); // short but wide platform located 500 pixels from the left of the screen and 300 pixels from the top of the screen
    

    createCollectable("steve", 500, 300, 20, 0.5); // creates a "steve" collectible at the coordinates (500, 300), falling with a high gravity of 20, and bouncing with 50% bounce
    createCollectable("grace", 800, 300); // creates a "grace" collectible at the coordinates (500, 300), falling with default gravity and bouncing with default bounce %
    createCollectable("steve", 1350, 600, 20, 0.5); // creates a "steve" collectible at the coordinates (500, 300), falling with a high gravity of 20, and bouncing with 50% bounce
    createCollectable("grace", 1200, 200); // creates a "grace" collectible at the coordinates (500, 300), falling with default gravity and bouncing with default bounce %

    createCannon("left", 600, 1000); // cannon on left wall, 600px down, shooting once per second
    createCannon("left", 650, 1000); // cannon on left wall, 600px down, shooting once per second
    createCannon("left", 300, 1000); // cannon on left wall, 600px down, shooting once per second
    createCannon("left", 250, 1000); // cannon on left wall, 600px down, shooting once per second



    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
