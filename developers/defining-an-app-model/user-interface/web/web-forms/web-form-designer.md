# Web form designer

The web form designer is used to create the user interface of a web form and logic related to user actions.

To create a new or open an exisiting web form, navigate to User Interface -> Web -> Components -> Forms 2.0 -> Dobule click to open existing form or right click+New to create a new form.

To view the form definition in a read only mode, press and hold the CTRL+SHIFT keys when opening the form. This prevents the form from being locked for other modelers, and it is not possible to save any changes to the form.

## Creating a new web form

When creating a new web form, you must define a name and a web component model for it.  
After choosing a name and a component model, you are prompted to select a grid layout template for your form. Here you can choose between default grid layouts for your form. You can change this later if you want.

## Web form designer interface

The web form designer is split into two areas:
* The left area contains the Form. it is split into two areas:
  * Breakpoint toggles - Toggle a breakpoint (portrait/landscape/desktop) to view the Form for that breakpoint.
  * Form content - the Form in WYSIWYG-style. Here you can select/reorder form elements etc.
* The right area contains the Edit pane, where you edit selected controls, drag new controls to your form, edit form settings etc. Its divided into four tabs:
  * Controls - a list of available controls. Drag or double clikc to add to form
  * Data - List available data sources to your Form. Drag or double click to add applicable controls with binding to the wanted data source/field.
  * Edit - Edit the selected Control/Form Element, Form Area or Form
  * Settings - Edit general settings for Form, e.g. form name/description, theme etc.

### Form Content

### Edit pane
In the edit pane you can edit selected elements in the form, drag new controls/data sources into your form and edit general form settings

#### Controls
All available controls are listed here. Drag or double click to add the control to the form

#### Data
All available data sources (as defined by the web component model) are lusted here. Drag or double click to add applicable controls with pre-defined data bindings to the form

#### Edit
Edit the active/selected form, form area, form element/control  
From here you can define e.g. labels and data bindings to a selected controls.

#### Settings
Edit general form settings (name, description) and e.g. change active form theme