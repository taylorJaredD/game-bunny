"use strict"

    function Canvas2D_Singleton() {
        this._canvas = null
        this._canvasContext = null
        this._pixeldrawingCanvas = null
        this._canvasOffset = Vector2.zero
    }

    Object.defineProperty(Canvas2D_Singleton.prototype, "offset",
        {
            get: function () {
                return this._canvasOffset
            }
        })

    Object.defineProperty(Canvas2D_Singleton.prototype, "scale",
        {
            get: function () {
                return new Vector2(this._canvas.width / Game.size.x,
                    this._canvas.height / Game.size.y)
            }
        })

    Canvas2D_Singleton.prototype.initialize = function (divName, canvasName) {
        this._canvas = document.getElementById(canvasName)
        this._div = document.getElementById(divName)

        if (this._canvas.getContext)
            this._canvasContext = this._canvas.getContext('2d')
        else {
            alert('Your browser is not HTML5 compatible.!')
            return
        }

        this._pixeldrawingCanvas = document.createElement('canvas')

        window.onresize = this.resize
        this.resize()
    }

    Canvas2D_Singleton.prototype.clear = function () {
        this._canvasContext.clearRect(0, 0, this._canvas.width, this._canvas.height)
    }

    Canvas2D_Singleton.prototype.resize = function () {
        var gameCanvas = Canvas2D._canvas
        var gameArea = Canvas2D._div
        var widthToHeight = Game.size.x / Game.size.y
        var newWidth = window.innerWidth
        var newHeight = window.innerHeight
        var newWidthToHeight = newWidth / newHeight

        if (newWidthToHeight > widthToHeight) {
            newWidth = newHeight * widthToHeight
        } else {
            newHeight = newWidth / widthToHeight
        }
        gameArea.style.width = newWidth + 'px'
        gameArea.style.height = newHeight + 'px'

        gameArea.style.marginTop = (window.innerHeight - newHeight) / 2 + 'px'
        gameArea.style.marginLeft = (window.innerWidth - newWidth) / 2 + 'px'
        gameArea.style.marginBottom = (window.innerHeight - newHeight) / 2 + 'px'
        gameArea.style.marginRight = (window.innerWidth - newWidth) / 2 + 'px'

        gameCanvas.width = newWidth
        gameCanvas.height = newHeight

        var offset = Vector2.zero
        if (gameCanvas.offsetParent) {
            do {
                offset.x += gameCanvas.offsetLeft
                offset.y += gameCanvas.offsetTop
            } while ((gameCanvas = gameCanvas.offsetParent))
        }
        Canvas2D._canvasOffset = offset
    }

    Canvas2D_Singleton.prototype.drawImage = function (sprite, position, rotation, scale, origin, sourceRect, mirror) {
        var canvasScale = this.scale

        position = typeof position !== 'undefined' ? position : Vector2.zero
        rotation = typeof rotation !== 'undefined' ? rotation : 0
        scale = typeof scale !== 'undefined' ? scale : 1
        origin = typeof origin !== 'undefined' ? origin : Vector2.zero
        sourceRect = typeof sourceRect !== 'undefined' ? sourceRect : new Rectangle(0, 0, sprite.width, sprite.height)

        this._canvasContext.save()
        if (mirror) {
            this._canvasContext.scale(scale * canvasScale.x * -1, scale * canvasScale.y)
            // move the sprite to a certain position
            this._canvasContext.translate(-position.x - sourceRect.width, position.y)
            // rotate the sprite
            this._canvasContext.rotate(rotation)
            // (name, srcX, srcY, srcWidth, srcHeight, destX, destY, destWidth, destHeight)
            this._canvasContext.drawImage(sprite, sourceRect.x, sourceRect.y,
                sourceRect.width, sourceRect.height,
                sourceRect.width - origin.x, -origin.y,
                sourceRect.width, sourceRect.height)
        }
        else {
            this._canvasContext.scale(scale * canvasScale.x, scale * canvasScale.y)
            // move the sprite to a certain position
            this._canvasContext.translate(position.x, position.y)
            // rotate the sprite
            this._canvasContext.rotate(rotation)
            // (name, srcX, srcY, srcWidth, srcHeight, destX, destY, destWidth, destHeight)
            this._canvasContext.drawImage(sprite, sourceRect.x, sourceRect.y,
                sourceRect.width, sourceRect.height,
                -origin.x, -origin.y,
                sourceRect.width, sourceRect.height)
        }
        // remove the drawing state when drawing is done
        this._canvasContext.restore()
    }

    Canvas2D_Singleton.prototype.drawText = function (text, position, origin, color, textAlign, fontname, fontsize) {
        var canvasScale = this.scale

        position = typeof position !== 'undefined' ? position : Vector2.zero
        origin = typeof origin !== 'undefined' ? origin : Vector2.zero
        color = typeof color !== 'undefined' ? color : Color.black
        textAlign = typeof textAlign !== 'undefined' ? textAlign : "top"
        fontname = typeof fontname !== 'undefined' ? fontname : "Courier New"
        fontsize = typeof fontsize !== 'undefined' ? fontsize : "20px"

        // create a new drawing state
        this._canvasContext.save()
        this._canvasContext.scale(canvasScale.x, canvasScale.y)
        this._canvasContext.translate(position.x - origin.x, position.y - origin.y)
        this._canvasContext.textBaseline = 'top'
        this._canvasContext.font = fontsize + " " + fontname
        this._canvasContext.fillStyle = color.toString()
        this._canvasContext.textAlign = textAlign
        this._canvasContext.fillText(text, 0, 0)
        // remove the drawing state when drawing is done
        this._canvasContext.restore()
    }

    Canvas2D_Singleton.prototype.drawPixel = function (x, y, color) {
        var canvasscale = this.scale
        // create a new drawing state
        this._canvasContext.save()
        this._canvasContext.scale(canvasscale.x, canvasscale.y)
        this._canvasContext.fillStyle = color.toString()
        this._canvasContext.fillRect(x, y, 1, 1)
        // remove the drawing state when drawing is done
        this._canvasContext.restore()
    }

    Canvas2D_Singleton.prototype.drawRectangle = function (x, y, width, height) {
        var canvasScale = this.scale
        // create a new drawing state
        this._canvasContext.save()
        this._canvasContext.scale(canvasScale.x, canvasScale.y)
        this._canvasContext.strokeRect(x, y, width, height)
        // remove the drawing state when drawing is done
        this._canvasContext.restore()
    }

    var Canvas2D = new Canvas2D_Singleton()
