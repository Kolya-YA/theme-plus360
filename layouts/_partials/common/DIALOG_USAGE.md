# Universal Dialog Component (Native `<dialog>`)

A flexible popup dialog component for Hugo themes using the native HTML `<dialog>` element with multiple dialog types and minimal JavaScript functionality.

## Features

- Native HTML `<dialog>` element for better accessibility and performance
- Multiple dialog types: `info`, `warn`, `error`, `success`
- Only one dialog can be open at a time (enforced by browser and JS)
- Responsive design with mobile optimization
- Automatic keyboard navigation (ESC to close)
- Backdrop clicks to close
- Customizable content with Markdown support
- Minimal JavaScript API for show/close functionality

## Usage in Hugo Templates

### Basic Usage

```html
{{ partial "common/dialog.html" (dict 
  "header" "Information" 
  "text" "This is an information dialog." 
  "type" "info"
) }}
```

### Different Dialog Types

#### Info Dialog

```html
{{ partial "common/dialog.html" (dict 
  "header" "Information" 
  "text" "This is an informational message." 
  "type" "info"
) }}
```

#### Warning Dialog

```html
{{ partial "common/dialog.html" (dict 
  "header" "Warning" 
  "text" "Please be careful with this action." 
  "type" "warn"
) }}
```

#### Error Dialog

```html
{{ partial "common/dialog.html" (dict 
  "header" "Error" 
  "text" "Something went wrong. Please try again." 
  "type" "error"
) }}
```

#### Success Dialog

```html
{{ partial "common/dialog.html" (dict 
  "header" "Success" 
  "text" "Operation completed successfully!" 
  "type" "success"
) }}
```

### Custom ID for Multiple Dialogs

```html
{{ partial "common/dialog.html" (dict 
  "id" "custom-dialog-1"
  "header" "Custom Dialog" 
  "text" "This dialog has a custom ID." 
  "type" "info"
) }}
```

### Markdown Content Support

```html
{{ partial "common/dialog.html" (dict 
  "header" "Rich Content" 
  "text" "This dialog supports **bold text**, *italic text*, and [links](https://example.com)." 
  "type" "info"
) }}
```

## JavaScript API

The dialog component includes minimal JavaScript functionality using native dialog methods.

### Show/Close Dialogs

```javascript
// Show a dialog by ID
showDialog('universal-dialog');

// Show with updated content
showDialog('universal-dialog', {
  header: 'New Title',
  text: 'Updated content'
});

// Close a specific dialog by ID
closeDialog('universal-dialog');

// Close currently open dialog (if any)
closeCurrentDialog();
```

### Event Listeners

```javascript
// Listen for dialog events
document.addEventListener('dialogShow', (e) => {
  console.log('Dialog shown:', e.detail.dialogId);
});

document.addEventListener('dialogHide', (e) => {
  console.log('Dialog hidden:', e.detail.dialogId);
});
```

## HTML Button Triggers

Add onclick handlers to buttons to trigger dialogs:

```html
<button onclick="showDialog('my-dialog')">Show Dialog</button>
<button onclick="closeCurrentDialog()">Close Dialog</button>
```

## Native Dialog Behavior

The component leverages native `<dialog>` element features:

- **ESC key**: Automatically closes the dialog (browser native behavior)
- **Backdrop clicks**: Custom implementation to close dialog
- **Modal behavior**: Uses `showModal()` for proper modal display
- **Focus trap**: Browser handles focus management automatically
- **Accessibility**: Full screen reader and keyboard support

## Parameters

### Hugo Partial Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `header` | string | "Dialog" | Dialog title/header text |
| `text` | string | "" | Dialog content (supports Markdown) |
| `type` | string | "info" | Dialog type: `info`, `warn`, `error`, `success` |
| `id` | string | "universal-dialog" | Unique ID for the dialog element |

### JavaScript showDialog() Options

| Parameter | Type | Description |
|-----------|------|-------------|
| `header` | string | Update dialog title |
| `text` | string | Update dialog content |
| `html` | boolean | If true, treat text as HTML instead of plain text |

## Styling

The dialog component uses the following CSS classes for customization:

- `.dialog` - Main dialog element (native `<dialog>`)
- `.dialog--{type}` - Type-specific styling
- `.dialog::backdrop` - Native backdrop styling
- `.dialog__header` - Header section
- `.dialog__content` - Content section
- `.dialog__actions` - Button area

## Single Dialog Policy

Only one dialog can be open at a time:

- Opening a new dialog automatically closes any currently open dialog
- This is enforced both by the browser (native behavior) and the JavaScript code
- Provides better user experience and prevents modal stacking issues

## Accessibility

The component includes:

- Native `<dialog>` element with built-in ARIA semantics
- Automatic focus management by the browser
- ESC key support (browser native)
- Screen reader compatibility
- Proper heading hierarchy

## Browser Support

- Modern browsers with native `<dialog>` support (Chrome 37+, Firefox 98+, Safari 15.4+)
- Graceful degradation for older browsers (dialog shows as regular block element)
- Mobile responsive design
- All major mobile browsers

## Migration from Previous Version

If upgrading from the div-based version:

- HTML structure is now simpler (single `<dialog>` element)
- CSS classes remain mostly the same
- JavaScript API is simplified (removed complex dialog management)
- Better performance and accessibility out of the box
