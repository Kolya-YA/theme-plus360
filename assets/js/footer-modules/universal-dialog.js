/**
 * Simple Universal Dialog for native <dialog> element
 * Minimal functionality: show/hide + proper accessibility
 */

let currentDialog = null;
let lastFocusedElement = null;

// Initialize dialogs when DOM is ready
document.addEventListener('DOMContentLoaded', initDialogs);

function initDialogs() {
  const dialogs = document.querySelectorAll('dialog.dialog');
  
  dialogs.forEach(dialog => {
    // Close button handler
    const closeBtn = dialog.querySelector('.dialog__close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => closeDialog());
    }

    // OK button handler
    const okBtn = dialog.querySelector('.dialog__button--primary');
    if (okBtn) {
      okBtn.addEventListener('click', () => closeDialog());
    }

    // Backdrop click handler
    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) {
        closeDialog();
      }
    });

    // Handle dialog close event (including ESC key)
    dialog.addEventListener('close', () => {
      currentDialog = null;
      restoreFocus();
    });
  });
}

/**
 * Show dialog by ID
 */
function showDialog(dialogId, options = {}) {
  // Close current dialog if any
  if (currentDialog && currentDialog.open) {
    currentDialog.close();
  }

  const dialog = document.getElementById(dialogId);
  if (!dialog) {
    console.warn(`Dialog with ID "${dialogId}" not found`);
    return;
  }

  // Store current focus
  lastFocusedElement = document.activeElement;

  // Update content if provided
  if (options.header) {
    const titleEl = dialog.querySelector('.dialog__title');
    if (titleEl) titleEl.textContent = options.header;
  }

  if (options.text) {
    const textEl = dialog.querySelector('.dialog__text');
    if (textEl) {
      textEl.textContent = options.text;
    }
  }

  // Show dialog
  dialog.showModal();
  currentDialog = dialog;

  // Focus management
  focusDialog(dialog);
}

/**
 * Close current dialog
 */
function closeDialog() {
  if (currentDialog && currentDialog.open) {
    currentDialog.close();
  }
}

/**
 * Focus first focusable element in dialog
 */
function focusDialog(dialog) {
  const focusableElements = dialog.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  if (focusableElements.length > 0) {
    focusableElements[0].focus();
  }
}

/**
 * Restore focus to previously focused element
 */
function restoreFocus() {
  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus();
  }
  lastFocusedElement = null;
}

// Global functions for convenience
window.showDialog = showDialog;
window.closeDialog = closeDialog;