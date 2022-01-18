/* var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var raf = requestAnimationFrame;
var caf = cancelAnimationFrame;

var W, H;
var TAU = Math.PI*2;

function resize() {
  W = canvas.width = innerWidth;
  H = canvas.height = innerHeight;
}

var Len = 50;
var xs = new Array(Len);
var ys = new Array(Len);

function dist(x1, y1, x2, y2) {
  var dx = x1 - x2;
  var dy = y1 - y2;
  return Math.sqrt(dx*dx + dy*dy);
}

function ease(n) {
  return 3*n*n - 2*n*n*n;
}

function Goo(opts) {
  var len = opts.len;
  var xs = new Array(len);
  var ys = new Array(len);
  var rs = new Array(len);
  var radius = opts.radius
  var hr = radius/2;
  var border = opts.border;
  var bg = opts.bg;
  var fg = opts.fg;
  
  var animating = null;
  var Threshold = 0.1;
  var i;
  
  for (i = 0; i < len; i++) {
    rs[i] = hr + hr*(1 - i/len);
  }
  
  function update(x0, y0) {
    var same = 0;
    xs[0] = x0;
    ys[0] = y0;

    for (i = 1; i < len; i++) {
      if (!(x = xs[i])) x = xs[i] = x0;
      if (!(y = ys[i])) y = ys[i] = y0;
      var dx = x0 - x;
      var dy = y0 - y;
      var d = Math.sqrt(dx*dx + dy*dy);
      
      if (d < Threshold) {
        xs[i] = x0;
        ys[i] = y0;
        same++;
      } else {
        xs[i] += dx * 0.7;
        ys[i] += dy * 0.7;
      }
      
      x0 = x;
      y0 = y;
    }
    
    draw(len);
    if (same < len - 1) {
      raf(function() {
        update(xs[0], ys[0]);
      });
    }
  }

  function draw(n) {
    ctx.clearRect(0, 0, W, H);
    
    for (i = n-1; i >= 0; i--) {
      x = xs[i];
      y = ys[i];
      ctx.beginPath();
      ctx.arc(x, y, border + rs[i], 0, TAU);
      ctx.fillStyle = bg;
      ctx.fill();
    }
    for (i = n-1; i >= 0; i--) {
      x = xs[i];
      y = ys[i];
      ctx.beginPath();
      ctx.arc(x, y, rs[i], 0, TAU);
      ctx.fillStyle = fg;
      ctx.fill();
    }
  }
  
  return {
    update: update
  };
}

var goo = Goo({
  len: 120,
  radius: 20,
  border: 3,
  bg: 'white',
  fg: '#22313F'
});

resize();
document.onmousemove = function(e) {
  goo.update(e.pageX, e.pageY);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};
goo.update(W/2, H/2, 0, 0); */

document.addEventListener('scroll', function (e) {
  var top  = window.pageYOffset + window.innerHeight,
      isVisible = top > document.querySelector('.main > #projects').offsetTop;
       
  if (isVisible) {
    document.getElementById('projects').classList.add('animate');
  }
  else {
    document.getElementById('projects').classList.remove('animate');
  }
});

/*
document.addEventListener('scroll', function (e) {
  var top  = window.pageYOffset + window.innerHeight,
      isVisible = top > document.querySelector('.main > .about').offsetTop;
       
  if (isVisible) {
    document.getElementByClass('about').classList.add('animate');
  }
  else {
    document.getElementByClass('about').classList.remove('animate');
  }
});
*/

var currentTheme;

function checkTheme() {
	currentTheme = localStorage.getItem("theme");

	console.log(currentTheme);
			
	if (currentTheme === null) {
		console.log("Null, set to light.");
		localStorage.setItem("theme", "light-theme");
		document.querySelector(".theme").setAttribute("name", "moon");
    document.querySelector("")
	}

	else if (currentTheme === "light-theme") {
		console.log("light, set to light");
		document.body.classList.add("light-theme");
    
		document.querySelector(".theme").setAttribute("name", "moon");
	}

	else if (currentTheme === "dark-theme") {
		console.log("dark, set to dark");
		document.body.classList.add("dark-theme");
		document.querySelector(".theme").setAttribute("name", "sunny");
	}

	else {
		localStorage.clear();
	}
}

function changeTheme() {
	currentTheme = localStorage.getItem("theme");

	console.log("theme before change:")
	console.log(currentTheme);

	if (currentTheme === "light-theme") {
		document.body.classList.remove("light-theme");
		document.body.classList.add("dark-theme");
		localStorage.setItem("theme", "dark-theme");
		document.querySelector(".theme").setAttribute("name", "sunny");
	}

	else if (currentTheme === "dark-theme") {
		document.body.classList.remove("dark-theme");
		document.body.classList.add("light-theme");
		localStorage.setItem("theme", "light-theme");
		document.querySelector(".theme").setAttribute("name", "moon");
	}

	currentTheme = localStorage.getItem("theme");
	console.log("current theme after change:")
	console.log(currentTheme);

	// document.querySelector(".theme").classList.toggle("rotated");
}

document.querySelector('.theme').addEventListener('click', function() {
  const icon = this.querySelector('i');
  // const text = this.querySelector('span');

  if (icon.classList.contains('fa-moon')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});


window.onscroll = function() {stickyNav()};

var navbar = document.getElementByClass("navbar");

var sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}