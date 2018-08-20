export default class HiddenMenu {

  constructor(submenu, item, timer){
    this.submenu = submenu;
    this.item = item;
    this.time = 300;
    this.timer = timer || 500;
    let self = this;
    this.showMenu = function() {
      if ($(self.submenu).is(':hover')) {
        clearTimeout($.data(self.item, 'timer'));
        $(self.submenu).one('mouseout', self.hideMenu);
      };
      $(self.submenu).stop().css({
        display: "block"
      });
      $(self.submenu).one('mouseout', self.showMenu)
    };
    this.hideMenu = function() {
      $.data(self.item, 'timer', setTimeout(function() {
        $(self.submenu).stop().css({
          display: "none"
        });
        $(self.submenu).off();
      }, self.timer));
    };
  }
  init(){
    $(this.item).hover(this.showMenu, this.hideMenu)
  }
  }
