(function($){

CKEDITOR.plugins.add('accordion', {
  requires: 'widget',
  init: function(editor) {
    // Register the toolbar buttons for the CKEditor editor instance.
    editor.ui.addButton('accordion',
    {
      label : 'Insert Accordion',
      icon : this.path + 'icon-accordion.png',
      command : 'accordion'
    });

    // Add our plugin-specific CSS to style the widget within CKEditor.
    editor.addContentsCss( this.path + 'editor-accordion.css' );

    // Register the widget.
    editor.widgets.add('accordion', {
      template:
        '<div class="accordion">' +
          '<div class="accordion__title">Accordion title</div>' +
          '<div class="accordion__content"><p>Accordion contents</p></div>' +
        '</div>',
      editables: {
        title: {
          selector: '.accordion__title',
          allowedContent: 'strong em'
        },
        content: {
          selector: '.accordion__content'
        }
      },

      allowedContent: 'div(!accordion); div(!accordion__content); div(!accordion__title)',
//
//      requiredContent: 'div(accordion)',

      upcast: function(element) {
        return element.name == 'div' && element.hasClass('accordion');
      }

    });

  }

});


})(jQuery);
