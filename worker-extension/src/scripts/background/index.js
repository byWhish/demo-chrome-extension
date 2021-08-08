chrome.action.onClicked.addListener(async () => {
	const url = chrome.runtime.getURL('./page.html');

	const tab = await chrome.tabs.create({url});

	if (tab) console.log('Se ha lanzado la tab');
});
