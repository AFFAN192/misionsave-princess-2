namespace SpriteKind {
    export const P = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.P, function (sprite, otherSprite) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})
let mySprite = Render.getRenderSpriteVariable()
let P = sprites.create(img`
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f 3 3 f f e e e e f f 3 3 f . 
    . f b b f b f e e f b f b b f . 
    . f b b e 1 f 4 4 f 1 e b b f . 
    f f b b f 4 4 4 4 4 4 f b b f f 
    f b b f f f e e e e f f f b b f 
    . f e e f b d d d d b f e e f . 
    . . e 4 c d d d d d d c 4 e . . 
    . . e f b d b d b d b b f e . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `, SpriteKind.P)
tiles.setCurrentTilemap(tilemap`level2`)
let _1 = sprites.create(img`
    . . . . 3 . . . . . . . . . . 
    . . . . . 3 3 . . 3 . . . . . 
    . . . . . . 3 3 3 . . . . . . 
    . . . . 8 8 8 8 8 8 8 . . . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 . . 
    . 3 3 3 3 8 8 8 8 8 3 3 3 3 . 
    3 9 9 9 9 3 8 8 8 3 9 9 9 9 3 
    9 c c 8 8 9 3 8 3 9 8 8 c c 9 
    c 8 8 1 1 8 9 3 9 8 1 1 8 8 c 
    a 8 1 9 f 1 8 9 8 1 9 f 1 8 a 
    a 8 1 f f 1 8 c 8 1 f f 1 8 a 
    a a 8 1 1 8 c 9 c 8 1 1 8 a a 
    a a a 8 8 a a a a a 8 8 a a a 
    a a a a a a a a a a a a a a a 
    8 a 8 a 8 a 8 a 8 a 8 a 8 a 8 
    . 8 . 8 . 8 . 8 . 8 . 8 . 8 . 
    `, SpriteKind.Enemy)
let _2 = sprites.create(img`
    . . . d 4 d . . . . d 5 d . . . 
    . . d d 1 d f d e d d 1 d d . . 
    c c d 1 f 1 f 1 1 d 1 f 1 d c c 
    c . d f f d f d e d f f d d . c 
    c . . d 4 d . . . . d 5 d . . c 
    c . . . . . . . . . . . . . . c 
    `, SpriteKind.Enemy)
let _3 = sprites.create(img`
    . 6 6 . . . . . . . . 
    . . 6 6 . . . . . . . 
    . . 6 6 6 . . . . 6 . 
    . . 6 6 6 . . . 6 . . 
    . . 6 6 6 6 . 6 6 . . 
    . 6 6 6 6 6 6 6 6 . . 
    . 6 6 6 6 6 6 6 6 6 . 
    . 6 6 6 6 6 6 6 6 6 . 
    6 1 1 9 6 6 6 9 1 1 6 
    6 6 1 8 1 6 1 8 1 6 6 
    6 6 6 8 6 6 6 8 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 1 6 1 6 1 6 6 6 
    . 6 1 6 1 6 1 6 1 6 . 
    . . 6 6 6 6 6 6 6 . . 
    . . . 6 6 6 6 6 . . . 
    `, SpriteKind.Enemy)
let _4 = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(_1, sprites.dungeon.greenOuterSouth2)
tiles.placeOnRandomTile(_2, sprites.dungeon.greenOuterSouth2)
tiles.placeOnRandomTile(_3, sprites.dungeon.floorDark3)
tiles.placeOnRandomTile(_4, sprites.dungeon.floorDark3)
tiles.placeOnRandomTile(P, sprites.dungeon.floorLightMoss)
_1.follow(mySprite, 20)
_2.follow(mySprite, 20)
_3.follow(mySprite, 20)
_4.follow(mySprite, 20)
