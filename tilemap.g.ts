// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100002020202020202020202020202020202020101010101010109090101010101020203020202020202020202020102020202010203030301010301020201020202020102030403010101010202010101020201020303030505010102020101030202010202020205050101020207010102020101050505050501010202010107020201010505050501010102020101010202010101010101010103010207010102020103010101050605010102010301020202020505050506050101020101010202020201010103010101020202010302020101010102010102010202020108020202010101020101020101020202020202020202020202020202020202020202`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 . 2 2 2 
2 . 2 . . . . . . . 2 2 . 2 2 2 
2 . 2 . . . . . . . 2 2 . . . 2 
2 . 2 . . . 2 2 . . 2 2 . . . 2 
2 . 2 2 2 2 2 2 . . 2 2 . . . 2 
2 . . 2 2 2 2 2 . . 2 2 . . . 2 
2 . . 2 2 2 2 . . . 2 2 . . . 2 
2 . . . . . . . . . . 2 . . . 2 
2 . . . . . . . 2 . . 2 . . . 2 
2 2 2 2 2 2 2 . 2 . . 2 . . . 2 
2 2 2 . . . . . . . 2 2 2 . . 2 
2 . . . . 2 . . 2 . 2 2 2 . . 2 
2 2 . . . 2 . . 2 . . 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorDarkDiamond,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.floorDark3,sprites.dungeon.floorLightMoss,sprites.dungeon.greenOuterSouth2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
