"use strict";
/*
File name: game.ts
Author's name: Tamanna Yasmin Jitu
StudentID: 300924009
Date: August 19, 2020
Program description: This file is used for rolling two dice
*/
let Game = (function () {
    // variable declarations
    let canvas = document.getElementsByTagName('canvas')[0];
    let stage;
    let assets;
    let diceBackground;
    let leftDiceValue;
    let leftDice;
    let rightDice;
    let rightDiceValue;
    let totalValue;
    let rollButton;
    let assetManifest = [
        { id: "1", src: "./Assets/images/1.png" },
        { id: "2", src: "./Assets/images/2.png" },
        { id: "3", src: "./Assets/images/3.png" },
        { id: "4", src: "./Assets/images/4.png" },
        { id: "5", src: "./Assets/images/5.png" },
        { id: "6", src: "./Assets/images/6.png" },
        { id: "backButton", src: "./Assets/images/startButton.png" },
        { id: "background", src: "./Assets/images/background.png" },
        { id: "blank", src: "./Assets/images/blank.png" },
        { id: "button", src: "./Assets/images/button.png" },
        { id: "nextButton", src: "./Assets/images/nextButton.png" },
        { id: "placeholder", src: "./Assets/images/placeholder.png" },
        { id: "resetButton", src: "./Assets/images/resetButton.png" },
        { id: "rollButton", src: "./Assets/images/rollButton.png" },
        { id: "startButton", src: "./Assets/images/startButton.png" },
        { id: "startOverButton", src: "./Assets/images/startOverButton.png" }
    ];
    function Preload() {
        console.log(`%c Preload Function`, "color: grey; font-size: 14px; font-weight: bold;");
        assets = new createjs.LoadQueue(); // asset container 
        assets.installPlugin(createjs.Sound); // supports sound preloading
        assets.loadManifest(assetManifest);
        assets.on("complete", Start);
    }
    /**
     * This method initializes the CreateJS (EaselJS) Library
     * It sets the framerate to 60 FPS and sets up the main Game Loop (Update)
     */
    function Start() {
        console.log(`%c Start Function`, "color: grey; font-size: 14px; font-weight: bold;");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = Config.Game.FPS;
        createjs.Ticker.on('tick', Update);
        stage.enableMouseOver(20);
        Config.Game.ASSETS = assets; // make a reference to the assets in the global config
        Main();
    }
    /**
     * This function is triggered every frame (16ms)
     * The stage is then erased and redrawn
     */
    function Update() {
        stage.update();
    }
    /**
     * This is the main function of the Game (where all the fun happens)
     *
     */
    function Main() {
        console.log(`%c Main Function`, "color: grey; font-size: 14px; font-weight: bold;");
        diceBackground = new Core.GameObject("background", Config.Game.CENTER_X, Config.Game.CENTER_Y, true);
        stage.addChild(diceBackground);
        leftDice = new UIObjects.Button("blank", Config.Game.CENTER_X - 200, Config.Game.CENTER_Y - 100, true);
        stage.addChild(leftDice);
        leftDiceValue = new UIObjects.Label("0", "40px", "Consolas", "#FFFF00", Config.Game.CENTER_X - 200, Config.Game.CENTER_Y + 40, true);
        stage.addChild(leftDiceValue);
        rightDice = new UIObjects.Button("blank", Config.Game.CENTER_X + 200, Config.Game.CENTER_Y - 100, true);
        stage.addChild(rightDice);
        rightDiceValue = new UIObjects.Label("0", "40px", "Consolas", "#FFFF00", Config.Game.CENTER_X + 200, Config.Game.CENTER_Y + 40, true);
        stage.addChild(rightDiceValue);
        rollButton = new UIObjects.Button("rollButton", Config.Game.CENTER_X, Config.Game.CENTER_Y + 170, true);
        stage.addChild(rollButton);
        totalValue = new UIObjects.Label("Total", "40px", "Consolas", "#00FF33", Config.Game.CENTER_X, Config.Game.CENTER_Y + 100, true);
        stage.addChild(totalValue);
        rollButton.on("click", () => {
            console.log("example button clicked");
            let leftrandomnumber = Math.floor(Util.Mathf.RandomRange(1, 6));
            let rightrandomnumber = Math.floor(Util.Mathf.RandomRange(1, 6));
            totalValue.setText(`Total= ${parseInt(leftrandomnumber.toString()) + parseInt(rightrandomnumber.toString())}!`);
            leftDiceValue.setText(`Value=${leftrandomnumber.toString()}`);
            rightDiceValue.setText(`Value=${rightrandomnumber.toString()}`);
            let leftimage = assets.getResult(leftrandomnumber.toString());
            let rightimage = assets.getResult(rightrandomnumber.toString());
            leftDice.image = leftimage;
            rightDice.image = rightimage;
        });
    }
    window.addEventListener('load', Preload);
})();
//# sourceMappingURL=game.js.map