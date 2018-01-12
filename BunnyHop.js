"use strict"

var ID = {}
var sprites = {}

Game.loadAssets = function () {
    var loadSprite = function (sprite, collisionMask) {
        return new SpriteSheet("assets/" + sprite/*, collisionMask*/)
    }

    sprites.ground_platform = loadSprite("assets/Environment/ground_stone.png")

    sprites.background_title = loadSprite("backgrounds/spr_title.jpg")
    sprites.background_help = loadSprite("backgrounds/spr_help.jpg")
    sprites.background_sky = loadSprite("backgrounds/spr_sky.jpg")
    sprites.cloud_1 = loadSprite("backgrounds/spr_cloud_1.png")
    sprites.cloud_2 = loadSprite("backgrounds/spr_cloud_2.png")
    sprites.cloud_3 = loadSprite("backgrounds/spr_cloud_3.png")
    sprites.cloud_4 = loadSprite("backgrounds/spr_cloud_4.png")
    sprites.cloud_5 = loadSprite("backgrounds/spr_cloud_5.png")
    sprites.mountain_1 = loadSprite("backgrounds/spr_mountain_1.png")
    sprites.mountain_2 = loadSprite("backgrounds/spr_mountain_2.png")
    sprites.levelselect = loadSprite("backgrounds/spr_levelselect.jpg")

    // if (Touch.isTouchDevice) {
    //     sprites.overlay_gameover = loadSprite("overlays/spr_gameover_tap.png")
    //     sprites.overlay_welldone = loadSprite("overlays/spr_welldone_tap.png")
    // } else {
    //     sprites.overlay_gameover = loadSprite("overlays/spr_gameover_click.png")
    //     sprites.overlay_welldone = loadSprite("overlays/spr_welldone_click.png")
    // }
    // sprites.frame_hint = loadSprite("overlays/spr_frame_hint.png")
    // sprites.timer = loadSprite("overlays/spr_timer.png")

    // sprites.button_play = loadSprite("gui/spr_button_play.png")
    // sprites.button_help = loadSprite("gui/spr_button_help.png")
    // sprites.button_back = loadSprite("gui/spr_button_back.png")
    // sprites.button_quit = loadSprite("gui/spr_button_quit.png")
    // sprites.level_solved = loadSprite("gui/spr_level_solved.png")
    // sprites.level_unsolved = loadSprite("gui/spr_level_unsolved.png")
    // sprites.level_locked = loadSprite("gui/spr_level_locked.png")
    // sprites.buttons_player = loadSprite("gui/spr_buttons_player@3.png")

    sprites.wall = loadSprite("tiles/spr_wall.png")
    sprites.wall_hot = loadSprite("tiles/spr_wall_hot.png")
    sprites.wall_ice = loadSprite("tiles/spr_wall_ice.png")
    sprites.platform = loadSprite("tiles/spr_platform.png")
    sprites.platform_hot = loadSprite("tiles/spr_platform_hot.png")
    sprites.platform_ice = loadSprite("tiles/spr_platform_ice.png")

    sprites.goal = loadSprite("spr_goal.png", true)
    sprites.water = loadSprite("spr_water.png")

    // player animations
    sprites.player_idle = loadSprite("player/spr_idle.png", true)
    sprites.player_run = loadSprite("player/spr_run@13.png", true)
    sprites.player_jump = loadSprite("player/spr_jump@14.png", true)
    sprites.player_celebrate = loadSprite("player/spr_celebrate@14.png")
    sprites.player_die = loadSprite("player/spr_die@5.png")
    sprites.player_explode = loadSprite("player/spr_explode@5x5.png")

    // enemy animations
    sprites.rocket = loadSprite("rocket/spr_rocket@3.png", true)
    sprites.flame = loadSprite("flame/spr_flame@9.png", true)
    sprites.turtle_sneeze = loadSprite("turtle/spr_sneeze@9.png", true)
    sprites.turtle_idle = loadSprite("turtle/spr_idle.png", true)
    sprites.sparky_electrocute = loadSprite("sparky/spr_electrocute@6x5.png", true)
    sprites.sparky_idle = loadSprite("sparky/spr_idle.png", true)

}

Game.initialize = function () {

    // define the layers
    ID.layer_background = 1
    ID.layer_background_1 = 2
    ID.layer_background_2 = 3
    ID.layer_background_3 = 4
    ID.layer_tiles = 10
    ID.layer_objects = 20
    ID.layer_overlays = 30
    ID.layer_overlays_1 = 31
    ID.layer_overlays_2 = 32

    // define object IDs
    ID.player = 1
    // ID.timer = 2
    ID.tiles = 3
    ID.exit = 4
    // ID.hint_timer = 5
    ID.button_walkleft = 6
    ID.button_walkright = 7
    ID.button_jump = 8

    // ID.game_state_title = GameStateManager.add(new TitleMenuState())
    // ID.game_state_help = GameStateManager.add(new HelpState())
    // ID.game_state_playing = GameStateManager.add(new PlayingState())
    // ID.game_state_levelselect = GameStateManager.add(new LevelMenuState())
    // ID.game_state_gameover = GameStateManager.add(new GameOverState())
    // ID.game_state_levelfinished = GameStateManager.add(new LevelFinishedState())
    // GameStateManager.switchTo(ID.game_state_title)
}
