define(["jquery","backbone","template-loader","app-config"],function(e,t,n,r){var i=t.View.extend({events:{"click #save-settings":"saveSettings"},initialize:function(){this.template=n["settings-page"]},render:function(t){return e(this.el).html(this.template(r)),this.base_url=e("#base-url",this.el),this.add_url=e("#add-url",this.el),this},saveSettings:function(){return this.base_url.val()?this.add_url.val()?(r.baseURL=this.base_url.val(),r.addURL=this.add_url.val(),window.history.back(),!0):!1:!1}});return i});