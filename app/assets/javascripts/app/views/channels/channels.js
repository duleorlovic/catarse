CATARSE.channels = {
  profiles: {

    show: Backbone.View.extend({

      events: {
        'click a.subscribe' : 'subscribe'
      },

      subscribe: function(event){
        alert('subscribe');
        return false;
      },

      el: 'body',

      initialize: function(){
        this.banner = this.$('.call_to_action'),
        this.setupBackground();
      },

      setupBackground: function(){
        this.banner.css({"background": 'url("' + 
                        this.banner.data('background') + '") no-repeat center',
                      'opacity': 1 
        });
      }
    }), 
    // End Show
  },

  projects: {
    new: function() {
      $('#project_form').attr('action', window.location.pathname.slice(0,-4));
      return new CATARSE.ProjectsNewView();
    },
  }
}

