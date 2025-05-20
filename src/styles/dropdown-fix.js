/**
 * Dropdown Menu Fix
 * This script fixes the issue with dropdown menus disappearing when moving the mouse from the
 * menu item to the dropdown content.
 */

if (typeof window !== 'undefined') {
  // Add a safety wrapper for DOM manipulation
  const safelyManipulateDOM = (callback) => {
    try {
      callback();
    } catch (error) {
      console.warn('DOM manipulation error:', error);
    }
  };

  // Patch Element.prototype.removeChild to add safety checks
  const originalRemoveChild = Element.prototype.removeChild;
  Element.prototype.removeChild = function(child) {
    if (!child) {
      console.warn('Attempted to remove null child element');
      return null;
    }
    try {
      return originalRemoveChild.call(this, child);
    } catch (error) {
      console.warn('Error removing child element:', error);
      return null;
    }
  };

  // Wait for the DOM to be fully loaded
  window.addEventListener('DOMContentLoaded', () => {
    safelyManipulateDOM(() => {
      // Find all dropdown menu trigger elements
      const menuContainers = document.querySelectorAll('.menu-container');
      
      // Increase hover area by adding padding to menu containers
      menuContainers.forEach(container => {
        if (container) {
          // Add padding-bottom to increase hover area
          container.style.paddingBottom = '10px';
          container.style.marginBottom = '-10px';
          
          // Find the button inside this container
          const button = container.querySelector('button');
          if (button) {
            // Increase the clickable area of the button
            button.style.padding = '5px 0';
          }
        }
      });
      
      // Find all dropdown elements
      const dropdowns = document.querySelectorAll('.mt-1');
      dropdowns.forEach(dropdown => {
        if (dropdown) {
          // Add negative margin-top to bring the dropdown closer to the menu item
          dropdown.style.marginTop = '-5px';
          dropdown.style.paddingTop = '5px';
        }
      });
      
      // Override the setTimeout for any menu hide functions
      // This is a more aggressive approach that modifies any existing timeouts
      const originalSetTimeout = window.setTimeout;
      window.setTimeout = function(callback, delay, ...args) {
        // If a timeout is being set to hide a menu and it's a short delay, extend it
        if (delay < 300 && typeof callback === 'function' && 
            callback.toString().includes('setActiveMenu') && 
            callback.toString().includes('null')) {
          // Extend the delay to 400ms to give users more time to move to the dropdown
          delay = 400;
        }
        return originalSetTimeout(callback, delay, ...args);
      };
    });
  });
}

export default {}; // Export empty object to satisfy module requirements 