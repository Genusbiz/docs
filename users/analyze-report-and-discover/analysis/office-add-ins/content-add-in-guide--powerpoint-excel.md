# User guide for content add-in(PowerPoint, Excel)

[UserGuide5]: ./media/UserGuide5.png "Interact etc"
[UserGuide7]: ./media/UserGuide7.png "Add-in fills area"
[UserGuide8]: ./media/UserGuide8.png "Select Analysis, Format>>General>>Fullscreen on open"
[UserGuide14]: ./media/UserGuide14.png "Interact etc"
[UserGuide15]: ./media/UserGuide15.png "Click within to expose menu arrow"
[UserGuide16]: ./media/UserGuide16.png "Click Save as image"


**In order to use the content add-in for Excel or PowerPoint you must first ensure 
that your office admin within your company has installed the add-in and made it available 
to you. Also note that if you need to send a PowerPoint or Excel containing this add-in the 
receipient must also have access to the add-in OR see [Save As Image](#save-as-image)**

## PowerPoint usage

1. First click Insert>My Add-ins 

2. This will open the Office Add-ins dialogue pane. Here, select admin managed, then 
   the appropriate add-in for the directory and dataset you require the viewer for.

3. If it is your first time, you will be prompted to login to your application.

4. If logged in successfully you can choose from analyses which are available to the user 
   you logged in as. Choose one from the list to display it.

5. The selected analysis will then open within the add-in where you can interact with it just 
   like in the usual Viewer
![alt text][UserGuide5]


## Excel usage

1. First click Insert>My Add-ins 

2. This will open the Office add-ins dialogue pane. Here, select admin managed, then 
   the appropriate add-in for the directory and dataset you require the viewer for.

3. If it is your first time, you will be prompted to login to your application.

4. If logged in successfully you can choose from analyses which are available to the user 
   you logged in as. Choose one from the list to display it.

5. The selected analysis will then open within the add-in where you can interact with it just 
   like in the usual Viewer
![alt text][UserGuide14]



## Tips and tricks

#### Grow to size(PowerPoint)
If you are on a slide with content area like below:

and you insert an Add-in, the add-in will grow to fit the content area of the slide
![alt text][UserGuide7]


#### Analysis set up in studio

There are some settings which you can apply to an add-in in studio which will make the 
analysis look much better when being used specifically for a presentation.
Edit your analysis in studio and make the following changes:
1. Select the analysis you want to display in the add-in. On the Format tab, Under General, 
   check the box for "Fullscreen on open"
![alt text][UserGuide8]

2. Select the settings tab, under "Toolbar(Web)" , change "Display toolbar (web)" to off


#### Save as image

If you are going off-site or you wont have internet access but still want to show analysis
within a slide, there is a "Save as image" feature which will allow you to save what is currently 
displayed in the add-in as an image **replacing** the add-in. Keep in mind that once you perform 
this action it can **not** be reversed for the current document. SO it is advised to ensure you "Save As" 
before doing the conversion, so as not to effect your original document.

To use this feature:
1. Click within the boundaries of the add-in(be careful not to make selections), until the menu arrow 
   appears in the top right corner.
![alt text][UserGuide15]

2. Click the arrow to expose the menu. Click "Save as image".
![alt text][UserGuide16]


#### Refreshing analysis

If you have a powerpoint which contains add-ins, To get the latest data ie refresh the analysis, you must
open each slide which contains an add-in and allow it to reload with the latest Data

#### Printing and templates (eg monthly/annual reports)
Using this add-in makes printing monthly reports very convenient. For example you could set up multiple 
slides which contain analysis containing specific monthly data. Save this document as "Monthly Report" 
for example. then at the end of each month open this PowerPoint, go through each slide to refresh the
data, then print the document however you like or save it as a PDF for distribution. Just ensure you 
have allowed each analysis to [update](#refreshing-analysis) before printing etc.

Creating a PowerPoint template allows you to create your report, then each time you want to create a new 
report for example at the end of the month, you can create a new powerpoint presentation using the template 
and save or print etc. The benefit of using a template is that your original template will never be changed 
but if desired you can modify it and save it as a new template or just as a powerpoint presentation.

__Create a template__ by creating the presentation you wish to use as your template. then click File > Save As, 
change the filename if desired, then change the file type dropdown value to "Powerpoint Template (*.potx)"


__Use a template__ by opening PowerPoint, click "PERSONAL" and select the template you want to use. You can 
then or print etc.

