tinymce.create("tinymce.plugins.Tryvary",{init:function(t,e){t.addButton("tryvary_code_block",{title:"Code",cmd:"tryvary_code_block",icon:"code"}),t.addCommand("tryvary_code_block",(function(){t.windowManager.open({title:"Tryvary - Insert Information",body:[{type:"textbox",name:"firstname",placeholder:"Enter First Name",multiline:!0,minWidth:700,minHeight:30},{type:"textbox",name:"age",placeholder:"Enter Age",multiline:!0,minWidth:700,minHeight:30},{type:"textbox",name:"code",placeholder:"Enter content",multiline:!0,minWidth:700,minHeight:150}],onsubmit:function(e){t.insertContent('[tryvary_shortcode name="'+e.data.firstname+'" age="'+e.data.age+'"]'+e.data.code+"[/tryvary_shortcode]")}})}))}}),tinymce.PluginManager.add("tryvary_code_block",tinymce.plugins.Tryvary);