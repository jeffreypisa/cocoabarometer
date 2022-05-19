(function() {
	tinymce.create('tinymce.plugins.Tryvary', {
		init : function(ed, url) {
			ed.addButton('tryvary_code_block', {
				title : 'Code',
				cmd : 'tryvary_code_block',
				icon: 'code'
			});

			ed.addCommand('tryvary_code_block', function() {
				ed.windowManager.open({
					title: 'Tryvary - Insert Information',
					body: [{
						type: 'textbox',
						name: 'firstname',
						placeholder: 'Enter First Name',
						multiline: true,
						minWidth: 700,
						minHeight: 30,
					},{
						type: 'textbox',
						name: 'age',
						placeholder: 'Enter Age',
						multiline: true,
						minWidth: 700,
						minHeight: 30,
					},{
						type: 'textbox',
						name: 'code',
						placeholder: 'Enter content',
						multiline: true,
						minWidth: 700,
						minHeight: 150,
					}],
					onsubmit: function( e ) {
						ed.insertContent( '[tryvary_shortcode name="'+e.data.firstname+'" age="'+e.data.age+'"]'+e.data.code+'[/tryvary_shortcode]');
					}
				});
			});
			
		},
	});
	tinymce.PluginManager.add( 'tryvary_code_block', tinymce.plugins.Tryvary);
})();