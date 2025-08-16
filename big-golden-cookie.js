Game.Loader.Replace('perfectCookie.png','https://i.imgur.com/yjGBb7y.png');
Game.ClickCookie=function(e,amount)
		{
			var now=Date.now();
			if (e) e.preventDefault();
			if (Game.OnAscend || Game.AscendTimer>0 || Game.T<3 || now-Game.lastClick<1000/((e?e.detail:1)===0?3:50)) {}
			else
			{
				if (now-Game.lastClick<(1000/15))
				{
					Game.autoclickerDetected+=Game.fps;
					if (Game.autoclickerDetected>=Game.fps*5) Game.Win('Uncanny clicker');
				}
				Game.loseShimmeringVeil('shimmer');
				new Game.shimmer('golden'); Game.shimmers[Game.shimmers.length-1].x=Game.mouseX; Game.shimmers[Game.shimmers.length-1].y=Game.mouseY; Game.shimmerTypes.golden.popFunc(Game.shimmers[Game.shimmers.length-1]);
				
				Game.goldenClicks++;
        Game.goldenClicksLocal++;
			}
		}
