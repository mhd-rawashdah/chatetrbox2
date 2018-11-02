// YOUR CODE HERE:

$(document).ready( () => {
	let app = {};
	app.server = 'http://parse.rbk.hackreactor.com/chatterbox/classes/messages';
	app.init = () => {};
	app.send = (message) => {
		$.ajax({
			url: app.server,
			type: 'POST',
			data: JSON.stringify(message),
			contentType: 'application/json',
			success: (data) => {
				console.log('Message sent',data);
				app.fetch();

			},
			error: (data) => {
				console.log(data);
			} 
		});
	};
	// fetch data from parse api
	app.fetch = () => {
		$.ajax({
			url: app.server,
			type: 'GET',
			data: {order:'-createdAt'},
			contentType: 'application/json',
			success: (data) => {
			  // data represent json object contain arr of 
			  data.results.forEach((elem) => {
			  	app.renderMessage(elem);
			  });
			},
			error: (data) => {
				console.log('Faile in fetch Messages',data);
			} 
		});
	};

	app.clearMessages = () => {
		$('#chats').html('');
	};

	app.renderMessage = (data) => {
		let $containerMessage = $(`<div class="chat" id = ${data.username}></div>`);
		let $user = $(`<label class="username">@${data.username}</label>`);
		let $text = $(`<p>${data.text}</p>`);
		$containerMessage.append($user);
		$containerMessage.append($text);
	  $('#chats').append($containerMessage);
	};

	app.renderRoom = () => {

	}
  
	// call fetch function to retrive the data from the server
  app.fetch();
	$('#send_btn').on('click',function () {
	  let message = {};
	  message.text = $('input#submit-message').val();
	  let getUserName = window.location.search.substring(window.location.search.indexOf('username'));
	  message.username = getUserName.substring(getUserName.indexOf('=')+1);
	  message.roomname = 'rbk2';
	  if(message.text !== ''){
	  	 app.send(message);
	  }
	 
	  $('input#submit-message').empty;
	  //console.log(username , $text);
	});
});






