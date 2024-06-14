(function() {
  const element = document.querySelector('body');
  console.log('element', element);
  
  const branchName = element ? element.textContent : null;
  // if (branchName) {
  //   chrome.runtime.sendMessage({ action: "branchName", branchName });
  // }

  chrome.runtime.sendMessage({ action: "branchName", branchName });
})();