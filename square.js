var Square = function(x, y, w, h, r1, g1, b1, a1) {
	this.x = x // x position
	this.y = y // y position
	this.w = w // width
	this.h = h // height

	this.r0 = r1 // base red
	this.g0 = g1 // base green
	this.b0 = b1 // base blue
	this.a0 = a1 // base alpha

	this.r1 = this.r0 // update red
	this.g1 = this.g0 // updata green
	this.b1 = this.b0 // update blue
	this.a1 = this.a0 // updata alpha

	this.rsound;

	this.playsound = false
	this.rollOver = false

	// take attributres passed into rectangle class and use them for xyposition, whsize, color, alpha of the rectangle//
	this.update = function() {
		fill(this.r1, this.g1, this.b1, this.a1)
		rect(this.x, this.y, this.w, this.h)

	}

	this.setSound = function(s) {
		this.rsound = s
	}

	this.mouseCheck1 = function(redness, greenness, blueness, alphaness) {
		if (mouseX > this.x && mouseY > this.y && mouseX <= this.x + this.w && mouseY <= this.y + this.h) {
			this.r1 = this.r1 + 5
			this.g1 = this.g1 + 5
			this.b1 = this.b1 + 5
			this.a1 = this.a1 + 5
			this.r1 = min([this.r1, redness])
			this.g1 = min([this.g1, greenness])
			this.b1 = min([this.b1, blueness])
			this.a1 = min([this.a1, alphaness])
		} else {
			this.r1 = this.r1 - 5
			this.g1 = this.g1 - 5
			this.b1 = this.b1 - 5
			this.a1 = this.a1 - 5
			this.r1 = max([this.r0, this.r1])
			this.g1 = max([this.g0, this.g1])
			this.b1 = max([this.b0, this.b1])
			this.a1 = max([this.a0, this.a1])
		}

	}

	this.mouseCheck2 = function() {
		if (this.playsound) {
			this.rsound.stop()
			this.rsound.play()
			this.playsound = false
		}

		if (mouseX > this.x && mouseY > this.y && mouseX < this.x + this.w && mouseY < this.y + this.h && !this.rollOver) {
			this.playsound = true
			this.rollOver = true
		} else if (!(mouseX > this.x && mouseY > this.y && mouseX < this.x + this.w && mouseY < this.y + this.h)) {
			this.rollOver = false
		}
	}

	this.mouseCheck3 = function(redness, greenness, blueness, alphaness) {
		if (mouseX > this.x && mouseY > this.y && mouseX <= this.x + this.w && mouseY <= this.y + this.h) {
			this.r1 = this.r1 - 5
			this.g1 = this.g1 - 5
			this.b1 = this.b1 - 5
			this.a1 = this.a1 - 5
			this.r1 = max([this.r1, redness])
			this.g1 = max([this.g1, greenness])
			this.b1 = max([this.b1, blueness])
			this.a1 = max([this.a1, alphaness])
		} else {
			this.r1 = this.r1 + 5
			this.g1 = this.g1 + 5
			this.b1 = this.b1 + 5
			this.a1 = this.a1 + 5
			this.r1 = min([this.r1, this.r0])
			this.g1 = min([this.g1, this.g0])
			this.b1 = min([this.b1, this.b0])
			this.a1 = min([this.a1, this.a0])
		}

	}

	this.move1 = function(start, end, speed) {
		this.x += speed
		if (this.x > end - (this.w / 2)) {

			if (this.w == 50) {
				console.log("x", end - (this.w / 2))
			}
			this.x = start
		}
	}

	this.move2 = function(start, end, speed) {
		this.x += speed
		if (this.x < start) {
			this.x = end - this.w
		}
	}



}
