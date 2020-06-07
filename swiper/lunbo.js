(function (){
	function Swiper(options,wrap){
		this.list = options.list||[];
		this.len = this.list.length;
		this.nowIndex = 0;
		this.timer = null;
		this.type = options.type||'fade';
		this.isAuto = options.isAuto==undefined ? true:options.isAuto;
		this.showBtn = options.showBtn==undefined ? true:options.showBtn;
		this.showSpot = options.showSpot==undefined ? true:options.showSpot;
		this.autoTime = options.autoTime||2000;
		this.width = options.width||$(wrap).width();
		this.height = options.height||$(wrap).height();
		this.wrap = wrap || $('body');
		this.direction = options.direction||'left';
		this.lock = true;
		this.init = function (){
			this.createDom();
			this.getStyle();
			this.bindEvent();
			if(this.isAuto){
				this.autoChange();
			}
			
		}
	}
	
	Swiper.prototype.createDom = function (){
		var self = this;
		var oDiv = $('<div class = "my-swiper"></div>');
		var oUl = $('<ul class = "my-swiper-ul"></ul>');
		var olBtn = $('<div class = "my-swiper-btn my-swiper-lbtn">&lt;</div>');
		var orBtn = $('<div class = "my-swiper-btn my-swiper-rbtn">&gt;</div>');
		var oSpot = $('<div class = "my-swiper-spot"></div>');
		for(var i = 0; i<self.len ; i++){
			var item = self.list[i];
			 $('<li class = "my-swiper-item"></li>')
						.append($(item))
						.appendTo(oUl);
			$('<span></span>').appendTo(oSpot);
		}
		if(self.type == 'animate'){
			$('<li class = "my-swiper-item"></li>')
						.append($(self.list[0]).clone(true))
						.appendTo(oUl);
		}
		
		oDiv.append(oUl)
			.append(olBtn)
			.append(orBtn)
			.append(oSpot)
		    .appendTo(this.wrap); 
		oUl.addClass('my-swiper-'+this.type);
	}
	
	Swiper.prototype.getStyle = function (){
		var self = this;
		if(this.type =='animate'){
			$('.my-swiper-animate.my-swiper-ul',this.wrap).css({
				width:(self.len + 1)*self.width,
				
			});
		}else{
			$('.my-swiper-fade .my-swiper-item',this.wrap).hide().eq(this.nowIndex).show();
		}
		if(!self.showBtn){
			$('.my-swiper-btn',self.wrap).hide();
		}
		if(!self.showSpot){
			$('.my-swiper-spot',self.wrap).hide();
		}
		$('.my-swiper-spot span',this.wrap).eq(self.nowIndex).addClass('active');
	}
	
	Swiper.prototype.bindEvent = function (){
		var self = this;
		$('.my-swiper',this.wrap).mouseenter(function (){
			clearInterval(self.timer);
		}).mouseleave(function (){
			if(self.isAuto){
				self.autoChange();
			}
		});
		$('.my-swiper-lbtn',this.wrap).click(function (){
			if(self.lock){
				self.lock = false;
				if(self.nowIndex == 0){
					if(self.type == 'animate'){
						$('.my-swiper-animate',self.wrap).css({
							left : -self.len * self.width
						});
					}
					self.nowIndex = self.len - 1;
				}else{
					self.nowIndex--;
				}
				self.change();
			}
			
			
		});
		$('.my-swiper-rbtn',this.wrap).click(function (){
			if(self.lock){
				self.lock = false;		
				if(self.type == 'animate'){
					if(self.nowIndex == self.len){
						$('.my-swiper-animate').css({
							left : 0
						})
						self.nowIndex = 1;
					 }else{
						self.nowIndex++;
					}
						 			
				}else if(self.type == 'fade'){
					if(self.nowIndex == self.len-1){					
						self.nowIndex = 0;
					}else{
					self.nowIndex++;
					}			
				}
				self.change();
			}
		});
		$('.my-swiper-spot span',this.wrap).mouseenter(function (){
			if(self.lock){
				self.lock = false;
				self.nowIndex = $(this).index();
				self.change();
			}
			
		});
	}
	
	Swiper.prototype.change = function (){
		var self = this;
		if(self.type == 'fade'){
			$('.my-swiper-fade .my-swiper-item',self.wrap).fadeOut().eq(self.nowIndex).fadeIn(function (){
				self.lock = true;
			});
			
		}else{
			$('.my-swiper-animate.my-swiper-ul',self.wrap).animate({
				left:-self.nowIndex * self.width
			},function (){
				self.lock = true;
			})
		}
		$('.my-swiper-spot span',self.wrap).removeClass('active').eq(self.nowIndex % self.len).addClass('active');
	}
	
	Swiper.prototype.autoChange = function (){
		var self = this;
		if(this.direction == 'left'){
			self.timer = setInterval(function (){
				$('.my-swiper-lbtn',self.wrap).click();
			},self.autoTime);
		}else{
			self.timer = setInterval(function (){
				$('.my-swiper-rbtn',self.wrap).click();
			},self.autoTime);
			
		}
		
	}
	
	$.fn.extend({
		swiper:function (options){
			var obj = new Swiper(options,this);
			obj.init();
		}
	})
}()) 