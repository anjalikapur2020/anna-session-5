var gameState = "wait"
var storybutton, mutebutton, musicbutton, nextbutton, playbutton, restartbutton
var level1bg
var health = 50;
var maxHealth = 400;
var ladderimg, ladder, tile1img
var platform1, platform2, platform3, platform4, platformimg1, platformimg2
var score1 = 0
var score2 = 0
var health2 = 10
var score3 = 0
var health3 = 10


function preload() {
    splashimg = loadImage("splashimage.gif")
    level1bg = loadImage("t5.jpg")
    // ladderimg=loadImage("ladder.png")
    // tile1img=loadImage("tile2.png")
    platformimg1 = loadImage("tile9.png")
    platformimg2 = loadImage("tile10.png")

    // level 1
    eye1img = loadImage("eyes-removebg-preview.png")
    eye2img = loadImage("eyes2-removebg-preview.png")
    eyescoreimg = loadImage("eyes3-removebg-preview.png")
    eye4img = loadImage("eyes4-removebg-preview.png")

    player1idleimg = loadImage("playerIdle.gif")
    player1jumpimg = loadImage("playerJump.gif")
    player1walkimg = loadImage("playerWalk.gif")



    // level 2

    hand1img = loadImage("images/anna-main/eyehand-removebg-preview.png")
    hand2img = loadImage("images/anna-main/handeye-removebg-preview.png")
    hand3img = loadImage("hand3.png")


    level2platform1 = loadImage("tile6.png")
    level2platform2 = loadImage("tile5.png")
    level2platform3 = loadImage("tile7.png")
    level2platform4 = loadImage("tile8.png")
    handscoreimg = loadImage("playerJump.gif")



    // level 3
    brain1img=loadImage("brain/brain1.png")
    brain2img=loadImage("brain/brain2.png")
    brain3img=loadImage("brain/brain3.png")

    level3img=loadImage("level3bg.png")
    brainscoreimg = loadImage("brain/brainnew.gif")



}

function setup() {
    createCanvas(windowWidth, windowHeight)

    playbutton = createImg("play2.png")
    playbutton.position(width / 2.5, height - (height / 4.8))
    playbutton.size(350, 170)




    musicbutton = createImg("openmouth2.png")
    musicbutton.position(playbutton.x - width / 3, height / 2 + 130)
    musicbutton.size(300, 300)

    mutebutton = createImg("closemouth.png")
    mutebutton.position(playbutton.x + width / 3, height / 2 + 115)
    mutebutton.size(260, 300)
    mutebutton.hide()

    // nextbutton = createImg("assets/rightarrow.gif")
    // nextbutton.position(width - 100, height - 150)
    // nextbutton.size(100, 100)
    // nextbutton.hide()

    infobutton = createImg("info.gif")
    infobutton.position(0, 0)
    infobutton.size(width, height)
    infobutton.hide()



    // level 1 platforms
    platform1 = createSprite(220, height / 2)
    platform1.addImage(platformimg2)

    // platform1.scale=.75
    eye1 = createSprite(platform1.x, platform1.y - (platform1.height / 1.25))
    eye1.addImage(eye1img)
    eye1.scale = 0.25

    platform2 = createSprite(width / 2, height / 1.5)
    platform2.addImage(platformimg1)

    platform2.scale = 0.75
    eye2 = createSprite(platform2.x, platform2.y - (platform2.height / 1.5))
    eye2.addImage(eye2img)
    eye2.rotation = 65
    eye2.scale = 0.75

    // eye2.mirrorX(-1)

    platform3 = createSprite(width - width / 4, height / 3)
    platform3.addImage(platformimg2)


    eye3 = createSprite(platform3.x, platform3.y - (platform3.height / 1.25))
    eye3.addImage(eye4img)
    eye3.scale = 0.25


    platform4 = createSprite(width - 100, height - height / 2.5)
    platform4.addImage(platformimg2)


    // level1 platform visible

    platform1.visible = false
    platform2.visible = false
    platform3.visible = false
    platform4.visible = false

    // platform1.tint=("#FF5F49")
    // platform2.tint=("#FF5F49")
    // platform3.tint=("#FF5F49")
    // platform4.tint=("#FF5F49")


    eye1.visible = false
    eye2.visible = false
    eye3.visible = false





    invisibleground = createSprite(width / 2, height - 50, width, 10)

    invisibleground.setCollider("rectangle", 0, 0, invisibleground.width / 1.75, invisibleground.height / 10)

    invisibleground.visible = false


    invisibleground2 = createSprite(50, height - 80, width / 4, 10)

    invisibleground2.setCollider("rectangle", 0, 0, invisibleground2.width / 1.75, invisibleground2.height / 10)

    invisibleground2.visible = false

    level1endwall = createSprite(width - 10, 100, 20, height * 2)
    level1endwall.visible = false

    bg2img = loadImage("level2bg.jpg")

    player1 = createSprite(100, height - 150)
    player1.addImage("idle", player1idleimg)
    player1.addImage("walk", player1walkimg)
    player1.addImage("jump", player1jumpimg)

    player1.scale = 0.5
    player1.visible = false
    // player1.debug = true
    player1.setCollider("circle", 0, 50, 40)



    eyescore = createSprite(width - width / 6, 50)
    eyescore.addImage("eyescore", eyescoreimg)
    eyescore.scale = 0.25
    eyescore.visible = false



    handscore = createSprite(width - width / 6, 50)
    handscore.addImage("handscore", player1idleimg)
    handscore.scale = 0.3
handscore.tint=("lime")
    handscore.visible = false


    brainscore = createSprite(width - width /5.9, 50)
    brainscore.addImage("brainscore", brainscoreimg)
    brainscore.scale = 0.45
    brainscore.rotation=-265
    // brainhandscore.tint=("lime")
    brainscore.visible = false





    leftwall = createSprite(width / 2 - width / 4, height / 2, 10, height)
    leftwall.visible = false

    rightwall = createSprite(width - width / 4, height / 2, 10, height)
    rightwall.visible = false



    //    level 2 platformes
    platform5 = createSprite(200, height - height / 3.5)
    platform5.addImage(level2platform1)
    platform5.scale = 0.65

    platform6 = createSprite(width / 2, height / 1.5)
    platform6.addImage(level2platform2)

    platform7 = createSprite(width - width / 6, height - height / 5)
    platform7.addImage(level2platform3)
    // platform7.scale=1.5

    platform8 = createSprite(width - width / 4, height / 2.5)
    platform8.addImage(level2platform4)
    platform8.scale = 0.5

    platform5.visible = false
    platform6.visible = false
    platform7.visible = false

    platform8.visible = false


    // collectibles level 2
    hand1 = createSprite(platform5.x - 20, platform5.y - (platform5.height / 2))
    hand1.addImage(hand2img)
    hand1.scale = 0.25
    hand1.visible = false

    hand2 = createSprite(platform6.x - 20, platform6.y - (platform6.height / 1.2))
    hand2.addImage(hand1img)
    hand2.scale = 0.35
    hand2.rotation = 95
    hand2.visible = false


    hand3 = createSprite(platform8.x, platform8.y - (platform8.height / 3))
    hand3.addImage(hand3img)
    hand3.rotation = -75
    hand3.scale = 0.5
    hand3.visible = false




    // collectibles level 3
    brain1=createSprite(platform2.x-20,platform2.y-(platform2.height/5.7))
    brain1.addImage(brain1img)
    brain1.scale=0.75

    brain2=createSprite(platform3.x-20,platform3.y-(platform3.height/5.5))
    brain2.addImage(brain3img)
    brain2.rotation=-65
    brain2.scale=0.5

    brain3=createSprite(platform4.x-20,platform4.y-(platform4.height/5.7))
    brain3.addImage(brain2img)
    brain3.scale=0.75


    brain1.visible=false
    brain2.visible=false
    brain3.visible=false


// level 3 platforms
// platform9 = createSprite(width / 4 + 50, height - 120)
// platform9.addImage(platformimg1)
// platform9.scale = 1
// platform9.visible = false
//     platform9.setCollider("rectangle", 0, -10, platform9.width / 1.75, platform9.height / 4)
//     // platform1.debug = true



    // platform10 = createSprite(200, height / 2)
    // platform10.addImage(platformimg2)
    // platform10.scale = 0.5
    // platform10.visible = false
    // platform10.setCollider("rectangle", 0, -10, platform10.width / 1.75, platform10.height / 4)
    // // platform2.debug = true


    // platform11 = createSprite(width / 2, height / 4)
    // platform11.addImage(platformimg1)
    // platform11.scale = 0.5
    // platform11.visible = false
    // platform11.setCollider("rectangle", 0, 0, platform11.width / 1.75, platform11.height / 4)


    // platform12 = createSprite(width - 400, height / 2)
    // platform12.addImage(platformimg2)
    // platform12.scale = 0.5
    // platform12.visible = false
    // platform12.setCollider("rectangle", 0, 0, platform12.width / 2.5, platform12.height / 4)


    
    platform0 = createSprite(50, height - 70)
    platform0.addImage(platformimg1)
    platform0.scale = 0.5
    platform0.visible = false
    platform0.setCollider("rectangle", 0, 0, platform0.width / 1.75, platform0.height / 2)

    



}

function draw() {
    if (gameState == "wait") {
        background(splashimg)
    }

    playbutton.mousePressed(() => {
        playbutton.hide()
        infobutton.show()
        mutebutton.hide()
        musicbutton.hide()

    })


    infobutton.mousePressed(() => {
        gameState = "level1"
        playbutton.hide()
        infobutton.hide()

    })


    musicbutton.mousePressed(() => {
        musicbutton.hide()
        mutebutton.show()
    })

    mutebutton.mousePressed(() => {
        musicbutton.show()
        mutebutton.hide()
    })



    if (gameState === "level1") {
        image(level1bg, 0, 0, width, height)
        // background(level1bg)
        healthlevel1()


        platform1.visible = true
        platform2.visible = true
        platform3.visible = true


        eye1.visible = true
        eye2.visible = true
        eye3.visible = true
        player1.visible = true
        if (player1.isTouching(invisibleground)) {
            gameState = "end"
        }

        eyescore.visible = true
        // level1popbutton.hide()
        PLAYLEVEL1()
        musicbutton.mousePressed(() => {
            musicbutton.hide()
            mutebutton.show()
            // bgmusic.play()
        })
        mutebutton.mousePressed(() => {
            musicbutton.show()
            mutebutton.hide()
            // bgmusic.stop()

        })
        // if (platform1.isTouching(leftwall)) {
        //     platform1.velocityX = 2
        // }

        // else if (platform1.isTouching(rightwall)) {
        //     platform1.velocityX = -2
        // }
        player1.velocityY += 0.8
        player1.collide(invisibleground2)

    }




    if (gameState == "level2") {
        image(bg2img, 0, 0, width, height)
        // background(bg2img)
        // background("green")
        healthlevel2()
        eyescore.visible = false



        player1.collide(invisibleground)
        platform5.visible = true
        platform6.visible = true
        // platform7.visible = true
        platform8.visible = true
        handscore.visible = true
        

        // platform8.visible = true




        if (player1.isTouching(invisibleground)) {
            gameState = "end"
        }

        if (platform6.isTouching(leftwall)) {
            platform6.velocityX = 2
        }

        else if (platform6.isTouching(rightwall)) {
            platform6.velocityX = -2
        }


        player1.velocityY += 0.8
        player1.collide(invisibleground2)

    }



    if (gameState == "level3") {
        background(level3img)
        brain1.visible=true
        brain2.visible=true
        brain3.visible=true
        healthlevel3()


        platform0.visible=true
        platform1.visible = true
        platform2.visible = true
        platform3.visible = true
        platform4.visible = true
        topwall = createSprite(width / 2, 50, width, 20)
    bottomwall = createSprite(width / 2, height - 100, width, 20)
   
    topwall.visible = false
    bottomwall.visible = false

    score1 = 0
    score2 = 0
    platform1.x = width / 2
    
    // player1.x = 100
    player1.collide(platform0)




        if (player1.isTouching(invisibleground)) {
            gameState = "end"
        }

        if (platform1.isTouching(leftwall)) {
            platform1.velocityX = -(platformvelocityX)
        }

        else if (platform1.isTouching(rightwall)) {
            platform1.velocityX = -2
        }


        player1.velocityY += 0.8
        // player1.collide(platform0)

        if (platform2.isTouching(topwall) || platform2.isTouching(bottomwall)) {
            if (platform2.isTouching(topwall)) {
                platform2.velocityY = 2
            }

            if (platform2.isTouching(bottomwall)) {
                platform2.velocityY = -2
            }
        }

        if (platform3.isTouching(topwall) || platform3.isTouching(bottomwall)) {
            if (platform3.isTouching(topwall)) {
                platform3.velocityY = 2
            }

            if (platform3.isTouching(bottomwall)) {
                platform3.velocityY = -2
            }
        }



        if (platform4.isTouching(topwall) || platform4.isTouching(bottomwall)) {
            if (platform4.isTouching(topwall)) {
                platform4.velocityY = 2
            }

            if (platform4.isTouching(bottomwall)) {
                platform4.velocityY = -2
            }
        }

    }


 


    drawSprites()


    if (gameState === "end") {

        GameOver()

    }



    if (gameState === "level1") {

        // player movement... added 2 april

        textSize(60)
        fill("red")
        stroke(0)
        strokeWeight(2)
        text(": " + score1, eyescore.x + (eyescore.width / 8), 70)

        stroke("red")
        strokeWeight(6)
        fill("white")
        text(gameState, width / 2 - 100, 50)

        if (keyIsDown(RIGHT_ARROW)) {
            player1.x += 5
            player1.changeImage("walk", player1walkimg)

        }

        if (keyIsDown(LEFT_ARROW)) {
            player1.x -= 5
            player1.changeImage("idle", player1idleimg)


        }

        if (keyDown("space")) {
            player1.velocityY = -15
            player1.changeImage("jump", player1jumpimg)


        }





        if (player1.isTouching(platform1)) {
            //jumpsound.play()
            player1.velocityX = 0
            player1.velocityY = 0

        }



        if (player1.isTouching(platform2)) {
            //jumpsound.play()
            player1.velocityX = 0
            player1.velocityY = 0
        }



        if (player1.isTouching(platform3)) {
            //jumpsound.play()
            player1.velocityX = 0
            player1.velocityY = 0
        }

        if (player1.isTouching(platform4)) {
            //jumpsound.play()
            player1.velocityX = 0
            player1.velocityY = 0
        }



        if (player1.isTouching(eye1) || player1.isTouching(eye2) || player1.isTouching(eye3)) {
            // coinCollecting.play()
            if (player1.isTouching(eye1)) {
                eye1.remove()
                score1 += 10
                health += 115
            }
            if (player1.isTouching(eye2)) {
                eye2.remove()
                score1 += 10
                health += 115

            }
            if (player1.isTouching(eye3)) {
                eye3.remove()
                score1 += 10
                health += 115

            }

        }




    }


    if (score1 == 30) {
        platform1.x = width - 100
        platform1.velocityX = 0

        if (player1.isTouching(level1endwall)) {

            eyescore.visible=false
            level1over()

        }
    }






    if (gameState == "level2") {
        textSize(60)
        fill("red")
        stroke(0)
        strokeWeight(2)
        text(" : " + score2, handscore.x + (handscore.width / 4), 70)

        //   player movement
        if (keyDown(RIGHT_ARROW)) {
            player1.x += 5

        }

        if (keyDown(LEFT_ARROW)) {
            player1.x -= 5

        }

        if (keyDown("space")) {
            player1.velocityY = -15
        }



        // standing on platforms

        if (player1.isTouching(platform5)) {
            //jumpsound.play()
            player1.velocityX = 0
            player1.velocityY = 0

        }



        if (player1.isTouching(platform6)) {
            //jumpsound.play()
            player1.velocityX = 0
            player1.velocityY = 0
        }



        if (player1.isTouching(platform7)) {
            //jumpsound.play()
            player1.velocityX = 0
            player1.velocityY = 0
        }

        if (player1.isTouching(platform8)) {
            //jumpsound.play()
            player1.velocityX = 0
            player1.velocityY = 0
        }




        // level 2 player touching coin
        if (player1.isTouching(hand1) || player1.isTouching(hand2) || player1.isTouching(hand3)) {
            if (player1.isTouching(hand1)) {
                hand1.remove()
                score2 += 10
                health2 += 115

            }
            if (player1.isTouching(hand2)) {
                hand2.remove()
                score2 += 10
                health2 += 115


            }

            if (player1.isTouching(hand3)) {
                hand3.remove()
                score2 += 10
                health2 += 115


            }

            // if(score2>=30){
            //     platform7.visible=true
            // }

        }


        if (score2 >= 30) {
            rightwall.remove()
        }

        if (player1.isTouching(level1endwall))
       
            level2over()

    }



// level 3

if (gameState == "level3") {
    textSize(60)
    fill("red")
    stroke(0)
    strokeWeight(2)
    text(" : " + score3, brainscore.x + (brainscore.width / 4), 70)

    platform5.visible=false
    platform6.visible=false
    platform7.visible=false
    platform8.visible=false

    if (keyDown("space")) {
        player1.velocityY = -5
        console.log("jump")
    }

    if (keyDown(RIGHT_ARROW)) {
        player1.x += 5
        console.log("right")
    }


    if (keyDown(LEFT_ARROW)) {
        player1.x -= 5
        console.log("left")
    }


    if (player1.isTouching(platform1)) {

        player1.velocityX = 0
        player1.velocityY = 0

    }
    if (player1.isTouching(platform2)) {

        player1.velocityX = 0
        player1.velocityY = 0

    }
    if (player1.isTouching(platform3)) {

        player1.velocityX = 0
        player1.velocityY = 0

    }

    if (player1.isTouching(platform4)) {

        player1.velocityX = 0
        player1.velocityY = 0

    }


    if (player1.isTouching(brain1) || player1.isTouching(brain2) || player1.isTouching(brain3)) {

        if (player1.isTouching(brain1) && player1.isTouching(platform2)) {
            brain1.remove()
            platform2.remove()
            // coinCollecting.play()
            score3 += 10
        }
        if (player1.isTouching(brain2) && player1.isTouching(platform3)) {
            brain2.remove()
            platform3.remove()

            // coinCollecting.play()

            score3 += 10
        }
        if (player1.isTouching(brain3) && player1.isTouching(platform4)) {
            brain3.remove()
            platform4.remove()
            // coinCollecting.play()

            score3 += 10
        }

        if (player1.isTouching(topwall) || player1.isTouching(bottomwall)) {
            
          if  (player1.isTouching(topwall)){
            gameState = "end"}

            if  (player1.isTouching(bottomwall)){
                gameState = "end"}
        }



        if (score3 >= 30) {
            win()
        }

    }




}




}

function healthlevel1() {

    //   health = min(maxHealth, ++health);
    // health=health+score1


    stroke("green");
    strokeWeight(10);
    noFill();
    rect(10, 10, 200, 20);

    noStroke();
    fill(255, 0, 0);
    rect(10, 10, map(health, 0, maxHealth, 0, 200), 20);
    //   health++
}




// level 1

function PLAYLEVEL1() {
    invisibleground.visible = false

    player1.collide(invisibleground)
    platform1.visible = true
    platform2.visible = true
    platform3.visible = true
    // platform4.visible = true
    // platform1.velocityX=2


}


function level1over() {
    swal({
        title: "You have done it!! ",
        text: " LEVEL 1 CLEARED!!",
        imageUrl: "gotit.gif",
        imageSize: '200x200',
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'LEVEL 2 !!!',
    },
        function (isConfirm) {
            Level2()

        })

}


// level 2
// level 2


function Level2() {
    gameState = "level2"
    platform1.visible = false
    platform2.visible = false
    platform3.visible = false
    platform4.visible = false

    score1 = 0
    platform6.x = width / 2
    platform6.velocityX = 2
    player1.x = 100
    // player.y=height-150
    player1.collide(invisibleground2)
    // platform0.debug = true
    hand1.visible = true
    hand2.visible = true
    hand3.visible = true

}


function healthlevel2() {

    //   health = min(maxHealth, ++health);
    // health=health+score1


    stroke("green");
    strokeWeight(10);
    noFill();
    rect(10, 10, 200, 20);

    noStroke();
    fill(255, 0, 0);
    rect(10, 10, map(health2, 0, maxHealth, 0, 200), 20);
    //   health++
}



function level2over() {
    swal({
        title: "You have done it!! ",
        text: " LEVEL 2 CLEARED!!",
        imageUrl: "gotit.gif",
        imageSize: '200x200',
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'LEVEL 3 !!!',
    },
        function (isConfirm) {
            // Level3()
            platform1.velocityX = 2
    platform2.velocityY = -2
    platform3.velocityY = 2
    platform4.velocityY = -2
    player1.x = 100

gameState="level3"

        })

}



// level 3
function Level3() {
    gameState = "level3"
    topwall = createSprite(width / 2, 50, width, 20)
    bottomwall = createSprite(width / 2, height - 100, width, 20)

    // topwall.debug = true
    // bottomwall.debug = true
    topwall.visible = false
    bottomwall.visible = false

    score1 = 0
    score2 = 0
    platform1.x = width / 2
   
    player1.x = 100
    player1.collide(platform0)
    // platform0.debug = true

    platform1.velocityX = 2
    platform2.velocityY = -2
    platform3.velocityY = 2
    platform4.velocityY = -2

    platform0.visible=true
    platform5.visible=false
    platform6.visible=false
    platform7.visible=false
    platform8.visible=false

    // brain1.visible = true
    // brain2.visible = true
    // brain3.visible = true



}

function healthlevel3() {

    //   health = min(maxHealth, ++health);
    // health=health+score1


    stroke("green");
    strokeWeight(10);
    noFill();
    rect(10, 10, 200, 20);

    noStroke();
    fill(255, 0, 0);
    rect(10, 10, map(health3, 0, maxHealth, 0, 200), 20);
    //   health++
}


function GameOver() {
    score1 = 0
    score2=0
    score3=0
    player1.remove()
    swal({
        title: "YOU LOST IT !!",
        text: "TRY AGAIN ",
        textSize: 50,
        // imageUrl: "gameover.png",
        imageSize: "500x300",
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'OK',
    },

        function () {

            window.location.reload();
        });

}

function win() {
    player1.remove()
    swal({
        title: "KUDOS !! YOU DID IT !!!",
        text: "CONGRATULATIONS ",
        textSize: 50,
        imageUrl: "gotit.gif",
        imageSize: "500x300",
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'OK',
    },

        function () {

            window.location.reload();
        });

}
