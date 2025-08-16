Game.Loader.Replace('perfectCookie.png','https://i.imgur.com/yjGBb7y.png');
eval('Game.ClickCookie = ' + Game.Init.toString().replaceAll("var now=Date.now(); if (e) e.preventDefault(); if (Game.OnAscend || Game.AscendTimer>0 || Game.T<3 || now-Game.lastClick<1000/((e?e.detail:1)===0?3:50)) {} else { if (now-Game.lastClick<(1000/15)) { Game.autoclickerDetected+=Game.fps; if (Game.autoclickerDetected>=Game.fps*5) Game.Win('Uncanny clicker'); } Game.loseShimmeringVeil('click'); var amount=amount?amount:Game.computedMouseCps; Game.Earn(amount); Game.handmadeCookies+=amount; if (Game.prefs.particles) { Game.particleAdd(); Game.particleAdd(Game.mouseX,Game.mouseY,Math.random()*4-2,Math.random()*-2-2,Math.random()*0.5+0.75,1,2); } if (Game.prefs.numbers) Game.particleAdd(Game.mouseX+Math.random()*8-4,Game.mouseY-8+Math.random()*8-4,0,-2,1,4,2,'','+'+Beautify(amount,1)); Game.runModHook('click'); Game.playCookieClickSound(); Game.cookieClicks++; if (Game.clicksThisSession==0) PlayCue('preplay'); Game.clicksThisSession++; Game.lastClick=now;", "var now=Date.now(); if (e) e.preventDefault(); if (Game.OnAscend || Game.AscendTimer>0 || Game.T<3 || now-Game.lastClick<1000/((e?e.detail:1)===0?3:50)) {} else { if (now-Game.lastClick<(1000/15)) { Game.autoclickerDetected+=Game.fps; if (Game.autoclickerDetected>=Game.fps*5) Game.Win('Uncanny clicker'); } Game.loseShimmeringVeil('shimmer'); new Game.shimmer('golden'); Game.shimmers[Game.shimmers.length-1].x=Game.mouseX; Game.shimmers[Game.shimmers.length-1].y=Game.mouseY; Game.shimmerTypes.golden.popFunc(Game.shimmers[Game.shimmers.length-1]); Game.goldenClicks++; Game.goldenClicksLocal++;"));

function ClickCookieGold(e,amount)
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
