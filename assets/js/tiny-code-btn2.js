(function() {
	tinymce.create('tinymce.plugins.Tryvary2', {
		init : function(ed, url) {
			ed.addButton('tryvary_code_block2', {
				title : 'Code 2',
				cmd : 'tryvary_code_block2',
				icon: 'code'
			});
	
			ed.addCommand('tryvary_code_block2', function() {
				ed.windowManager.open({
					title: 'Tryvary - Insert Information 2',
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
						ed.insertContent( '[tryvary_shortcode2 name="'+e.data.firstname+'" age="'+e.data.age+'"]'+e.data.code+'[/tryvary_shortcode2]');
					}
				});
			});
			
		},
	});
	tinymce.PluginManager.add( 'tryvary_code_block2', tinymce.plugins.Tryvary2);
})();