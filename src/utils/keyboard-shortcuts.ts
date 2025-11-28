// Keyboard Shortcuts Utility
// Provides keyboard shortcuts for common actions

export function initKeyboardShortcuts() {
  if (typeof window === 'undefined') return;

  document.addEventListener('keydown', (e) => {
    // Cmd/Ctrl + K: Open search
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      const openSearch = (window as any).openSearch;
      if (openSearch) {
        openSearch();
      }
    }

    // Cmd/Ctrl + /: Show keyboard shortcuts help
    if ((e.metaKey || e.ctrlKey) && e.key === '/') {
      e.preventDefault();
      showKeyboardShortcutsHelp();
    }

    // Escape: Close modals/overlays
    if (e.key === 'Escape') {
      // Close search overlay
      const searchOverlay = document.getElementById('search-overlay');
      if (searchOverlay && !searchOverlay.classList.contains('hidden')) {
        const closeBtn = document.getElementById('search-close');
        if (closeBtn) closeBtn.click();
      }

      // Close chat widget
      const chatWindow = document.getElementById('chat-window');
      if (chatWindow && !chatWindow.classList.contains('hidden')) {
        const chatToggle = document.getElementById('chat-toggle');
        if (chatToggle) chatToggle.click();
      }
    }

    // Alt + H: Go to homepage
    if (e.altKey && e.key === 'h') {
      e.preventDefault();
      window.location.href = '/';
    }

    // Alt + C: Go to contact
    if (e.altKey && e.key === 'c') {
      e.preventDefault();
      window.location.href = '/contact';
    }

    // Alt + S: Go to services
    if (e.altKey && e.key === 's') {
      e.preventDefault();
      window.location.href = '/services';
    }
  });
}

function showKeyboardShortcutsHelp() {
  // Create or show keyboard shortcuts help modal
  let helpModal = document.getElementById('keyboard-shortcuts-help');
  
  if (!helpModal) {
    helpModal = document.createElement('div');
    helpModal.id = 'keyboard-shortcuts-help';
    helpModal.className = 'fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4';
    helpModal.innerHTML = `
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative">
        <button
          id="close-shortcuts-help"
          class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          aria-label="Close"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Keyboard Shortcuts</h2>
        <div class="space-y-4">
          <div class="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
            <span class="text-gray-700 dark:text-gray-300">Open Search</span>
            <kbd class="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm font-mono">⌘K</kbd>
          </div>
          <div class="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
            <span class="text-gray-700 dark:text-gray-300">Show This Help</span>
            <kbd class="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm font-mono">⌘/</kbd>
          </div>
          <div class="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
            <span class="text-gray-700 dark:text-gray-300">Go to Homepage</span>
            <kbd class="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm font-mono">Alt+H</kbd>
          </div>
          <div class="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
            <span class="text-gray-700 dark:text-gray-300">Go to Contact</span>
            <kbd class="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm font-mono">Alt+C</kbd>
          </div>
          <div class="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
            <span class="text-gray-700 dark:text-gray-300">Go to Services</span>
            <kbd class="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm font-mono">Alt+S</kbd>
          </div>
          <div class="flex items-center justify-between py-3">
            <span class="text-gray-700 dark:text-gray-300">Close Modals</span>
            <kbd class="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm font-mono">Esc</kbd>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(helpModal);

    // Close button handler
    const closeBtn = document.getElementById('close-shortcuts-help');
    closeBtn?.addEventListener('click', () => {
      helpModal?.remove();
    });

    // Close on Escape
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        helpModal?.remove();
        document.removeEventListener('keydown', closeOnEscape);
      }
    };
    document.addEventListener('keydown', closeOnEscape);

    // Close on backdrop click
    helpModal.addEventListener('click', (e) => {
      if (e.target === helpModal) {
        helpModal.remove();
      }
    });
  } else {
    helpModal.classList.remove('hidden');
  }
}


