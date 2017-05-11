## Step 4 - Assign a Web Server Certificate

1.  Once the SSL certificate has been successfully installed to the server, you will need to assign that certificate to the appropriate website using IIS.  

2.  From the "Connections" menu in the main Internet Information Services (IIS) Manager window, select the name of the server to which the certificate was installed.  

3.  Under "Sites," select the site to be secured with SSL.  

4.  From the "Actions" menu (on the right), click on "Bindings." This will open the "Site Bindings" window.   
    ![ID52B0CBDD64BB48F8.gif](media/3297d145e3594e9fb1f567e1c10113aa.gif)  

5.  In the "Site Bindings" window, click "Add..." This will open the "Add Site Binding" window.   
    ![IDB3D938D2DF6E4D74.gif](media/fcd76e99f50d48979cd96cdbfa64c5c9.gif) 

6.  Under "Type" choose https. The IP address should be the IP address of the site or All Unassigned, and the port over which traffic will be secured by SSL is usually 443\. The "SSL Certificate" field should specify the certificate that was installed in step 7\.   
    ![ID1EC80FC846924201.gif](media/13d40dfeb81445f3bf6381969aaa0da0.gif)  

7.  Click "OK."   
    ![ID3D480AF61C324CD3.gif](media/f7c510987e5d48d4ab5f2d18295986ed.gif)  

8.  Your SSL certificate is now installed, and the website configured to accept secure connections.