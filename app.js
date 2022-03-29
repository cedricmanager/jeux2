const config = { 
    width: 2000,
    height: 800,
    type: Phaser.AUTO,
    physics:{
        default:'arcade',
        arcade:{
            gravity: {y: 700},
            debug: false
        }
    },

    scene: {
        preload: preload,
        create: create,
        update: update
    }
}


var game = new Phaser.Game(config)

function preload(){
 
}

function create(){


}


function update(){

    

    
}