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

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(500, 620, 200, 20, "silver");
    createPlatform(900, 450, 80, 20, "silver");
    createPlatform(850, 580, 100, 20, "white");
    createPlatform(550, 400, 120, 20, "black");
    createPlatform(300, 300, 20, 20, "yellow");
    createPlatform(1100, 320, 50, 20, "black");
    createPlatform(1230, 320, 10, 20, "yellow");
    createPlatform(290, 130, 10, 20, "black");
  




    // TODO 3 - Create Collectables
    createCollectable("steve", 600, 600, 0.5, 0.7);
    createCollectable("steve", 850, 450, 0.5, 0.7);
    createCollectable("steve", 290, 130, 0.5, 0.7);
    createCollectable("steve", 1100, 280, 0.5, 0.7);
    createCollectable("steve", 1230, 290, 0.5, 0.7);




    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 500);
createCannon("right", 300, 3000);
createCannon("top", 500, 700);
createCannon("top", 700, 650);
createCannon("right", 700, 700);
createCannon("top", 1370, 0.01);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
