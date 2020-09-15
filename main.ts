namespace SpriteKind {
    export const Premio = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Premio, function (sprite, otherSprite) {
    music.powerUp.play()
    game.setDialogTextColor(9)
    game.setDialogCursor(img`
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
        6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
        6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6 
        6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6 
        6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6 
        6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6 
        6 9 c 6 6 6 9 9 9 6 9 c c c 9 6 
        6 9 c c c 9 6 9 9 9 6 6 6 c 9 6 
        6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6 
        6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6 
        6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6 
        6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6 
        6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
        6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        `)
    game.setDialogFrame(img`
        2 2 f 2 2 2 2 2 2 2 2 2 f 2 2 
        2 f f f f f f f f f f f f f 2 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        2 f 1 f f f f f f f f f 1 f 2 
        2 f 1 f f f f f f f f f 1 f 2 
        2 f 1 f f f f f f f f f 1 f 2 
        2 f 1 f f f f f f f f f 1 f 2 
        2 f 1 f f f f f f f f f 1 f 2 
        2 f 1 f f f f f f f f f 1 f 2 
        2 f 1 f f f f f f f f f 1 f 2 
        2 f 1 f f f f f f f f f 1 f 2 
        2 f 1 f f f f f f f f f 1 f 2 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        2 f f f f f f f f f f f f f 2 
        2 2 f 2 2 2 2 2 2 2 2 2 f 2 2 
        `)
    game.showLongText("tiempo empleado: " + Math.round(game.runtime() / 1000) + " seg", DialogLayout.Bottom)
})
function Fondos () {
    color = randint(1, 16)
    if (color == 1) {
        scene.setBackgroundColor(0)
    } else if (color == 2) {
        scene.setBackgroundColor(1)
    } else if (color == 3) {
        scene.setBackgroundColor(2)
    } else if (color == 4) {
        scene.setBackgroundColor(3)
    } else if (color == 5) {
        scene.setBackgroundColor(4)
    } else if (color == 6) {
        scene.setBackgroundColor(5)
    } else if (color == 7) {
        scene.setBackgroundColor(6)
    } else if (color == 8) {
        scene.setBackgroundColor(7)
    } else if (color == 9) {
        scene.setBackgroundColor(8)
    } else if (color == 10) {
        scene.setBackgroundColor(9)
    } else if (color == 11) {
        scene.setBackgroundColor(10)
    } else if (color == 12) {
        scene.setBackgroundColor(11)
    } else if (color == 13) {
        scene.setBackgroundColor(12)
    } else if (color == 14) {
        scene.setBackgroundColor(13)
    } else if (color == 15) {
        scene.setBackgroundColor(14)
    } else if (color == 16) {
        scene.setBackgroundColor(15)
    }
}
let color = 0
game.splash("Laberinto 6x6", "Autor: Claudio Orts")
let yo = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . 6 6 6 5 5 6 6 6 . . . . 
    . . . 7 7 7 7 6 6 6 6 6 6 . . . 
    . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
    . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
    . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
    . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
    . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
    . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
    . . . 6 8 8 8 8 8 8 8 8 6 . . . 
    . . . . 6 6 8 8 8 8 6 6 . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
yo.setPosition(24, 24)
controller.moveSprite(yo)
scene.cameraFollowSprite(yo)
let meta = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
    6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
    6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6 
    6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6 
    6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6 
    6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6 
    6 9 c 6 6 6 9 9 9 6 9 c c c 9 6 
    6 9 c c c 9 6 9 9 9 6 6 6 c 9 6 
    6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6 
    6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6 
    6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6 
    6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6 
    6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
    6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, SpriteKind.Premio)
meta.setPosition(184, 184)
Fondos()
tiles.setTilemap(tiles.createTilemap(hex`0d000d00010101010101010101010101010102020302020203020202060101000004000000040000000401010702050206000400070208010104000000040004000400000101040004000400040009020201010400040004000000000000010109020800090206000702060101000000000000040004000401010202020203020a0004000401010000000004000400040004010102020202080009020800040101010101010101010101010101`, img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 . . . . . . . . . . . 2 
    2 2 2 . 2 2 2 . 2 2 2 . 2 
    2 . . . . . 2 . 2 . . . 2 
    2 . 2 2 2 . 2 . 2 . 2 2 2 
    2 . 2 . 2 . 2 . 2 . . . 2 
    2 . 2 . 2 . 2 2 2 2 2 2 2 
    2 . . . 2 . . . 2 . . . 2 
    2 2 2 2 2 2 2 . 2 . 2 . 2 
    2 . . . . . . . 2 . 2 . 2 
    2 2 2 2 2 . 2 . 2 . 2 . 2 
    2 . . . . . 2 . . . 2 . 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.vehicle.roadHorizontal,sprites.vehicle.roadIntersection3,sprites.vehicle.roadVertical,sprites.vehicle.roadIntersection1,sprites.vehicle.roadTurn2,sprites.vehicle.roadTurn1,sprites.vehicle.roadTurn4,sprites.vehicle.roadTurn3,sprites.vehicle.roadIntersection4], TileScale.Sixteen))
