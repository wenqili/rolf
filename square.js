var Square = function(x, y, w, h, r1, g1, b1, a1) {
	this.x = x // x position
	this.y = y // y position
	this.w = w // width
	this.h = h // height

	this.r0 = r1 // base red
	this.g0 = g1 // base green
	this.b0 = b1 // base blue
	this.a0 = a1 // base alpha

	this.r1 = r1 // update red
	this.g1 = g1 // updata green
	this.b1 = b1 // update blue
	this.a1 = a1 // updata alpha

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
		} else {
			this.r1 = this.r1 - 5
			this.g1 = this.g1 - 5
			this.b1 = this.b1 - 5
			this.a1 = this.a1 - 5
		}
		this.r1 = constrain(this.r1, 0, redness)
		this.g1 = constrain(this.g1, 0, greenness)
		this.b1 = constrain(this.b1, 0, blueness)
		this.a1 = constrain(this.a1, 0, alphaness)
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
		} else {
			this.r1 = this.r1 + 5
			this.g1 = this.g1 + 5
			this.b1 = this.b1 + 5
			this.a1 = this.a1 + 5
		}
		this.r1 = constrain(this.r1, redness, this.r0)
		this.g1 = constrain(this.g1, greenness, this.g0)
		this.b1 = constrain(this.b1, blueness, this.b0)
		this.a1 = constrain(this.a1, alphaness, this.a0)
	}

	this.move1 = function(start, end, speed) {
		this.x += speed
		if (this.x > end - (this.w / 2)) {
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
