function changeUrl(requestDetails) {
    const url = new URL(requestDetails.url);
    if (!url.pathname.includes('embed')) {
        const embedUrl = url.protocol + "//" + url.host + "/embed/" + url.searchParams.get('v');
        return {redirectUrl: embedUrl};
    }
}

browser.webRequest.onBeforeRequest.addListener(
        changeUrl,
        {urls: ["*://*.youtube.com/watch*"]},
        ["blocking"]);
