addEventListener('message', function (e) {
	var data = e.data;

	switch (data.cmd) {
		case 'start':
			postMessage('Поток Запущен : ' + data.msg);
			break;
		case 'stop':
			postMessage('Поток Остановлен : ' + data.msg);
			close();
			break;
		default:
			postMessage('Неизвестная команда: ' + data.msg)
	}
}, true);