
(function() {

  // Days worked at employer banner
  const today = new Date();
  const dates = { msftStartDate: new Date(2016, 6, [1]) }

  const daysWorkedBanner = Math.floor((today - dates.msftStartDate) / (1000 * 60 * 60 * 24));
  document.getElementById('days').innerHTML = daysWorkedBanner;

  // Current project prompt
  const currentProjectLink = document.getElementById('current-project-link');
  const currentProjectPrompt = document.getElementById('current-project-prompt');

  const showCurrentProjectPrompt = function(e) {
    currentProjectPrompt.className = 'prompt-display--active prompt'
  };
  const hideCurrentProjectPrompt = function(e) {
    currentProjectPrompt.className = 'prompt-display--hidden prompt'
  };

  const currentProjectPromptCheck = function() {
    // Only show current project prompt if in a larger window
    if (window.innerWidth > 700) {
      currentProjectLink.addEventListener('mouseover', showCurrentProjectPrompt)
      currentProjectLink.addEventListener('mouseout', hideCurrentProjectPrompt)
    } else {
      currentProjectLink.removeEventListener('mouseover', showCurrentProjectPrompt)
      currentProjectLink.removeEventListener('mouseout', hideCurrentProjectPrompt)
    }
  }
  // Check if project prompt should be active on load;
  currentProjectPromptCheck();
  // Check if project prompt should be active on window resizing
  window.addEventListener('resize', currentProjectPromptCheck);
})();