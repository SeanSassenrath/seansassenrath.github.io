
(function() {

  const today = new Date();
  const dates = { msftStartDate: new Date(2016, 6, [1]) }

  const daysWorkedBanner = Math.floor((today - dates.msftStartDate) / (1000 * 60 * 60 * 24));
  document.getElementById('days').innerHTML = daysWorkedBanner;

  const currentProjectLink = document.getElementById('current-project-link');
  const currentProjectPrompt = document.getElementById('current-project-prompt');

  currentProjectLink.addEventListener('mouseover', function(e) {
    currentProjectPrompt.className = 'prompt-display--active prompt'
  })
  currentProjectLink.addEventListener('mouseout', function(e) {
    currentProjectPrompt.className = 'prompt-display--hidden prompt'
  })

})();