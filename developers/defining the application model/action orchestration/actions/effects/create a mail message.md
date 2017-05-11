## Create a Mail Message

With this effect you can create and send a mail message to one or more recipients containing a subject, message and attachments. The content of the message can be personalized for each recpient by associating the subject, message and attachments to your data sources.

You can fill out the message manually, or from a data source containing a message. The message can be sent immediately, or you can write the contents of the message to a data source.

*   In the **Name** box, optionally enter a name. The name is displayed in the action tree, if a name is not entered, a summary of the effect is displayed.
*   In the **Description** box, optionally enter a description.

In this article

* * *

*   [Fill Out a Mail Message Manually](#fill-out-a-mail-message-manually)

*   [Fill Out a Mail Message from a Data Source](#fill-out-a-mail-message-from-a-data-source)

*   [Send or Write the Mail Message to a Data Source](#send-or-write-the-mail-message-to-a-data-source)

*   [Use SMTP as Mail Transfer Protocol](#use-smtp-as-mail-transfer-protocol)

* * *

## Fill Out a Mail Message Manually

1.  In the **Input** section, click **Fill out manually**.
2.  Enter the sender name in the **From** box.
3.  Enter the recpients' names in the **To**, **Cc**, or **Bcc** box. Separate the names with a semicolon.
4.  If replies not should be sent to the sender of the message, enter an address in the **Reply To** box to which responses are to be sent. For example, if you are sending an online survey for customers to fill in, you can use a no-reply address to avoid that messages which failed to be delivered are returned.

To select the sender name or recipients' names from the Address Book, click the **From**, **To**, **Cc** or **Bcc** button. You can also generate dynamic addresses by inserting fields from one of your data sources in the **From, To**, **Cc**, or **Bcc** box. To insert a field, click **Add Field**. In the **Select Field or Group** dialog box, select a field containing data of type **E-Mail**.

1.  Enter a subject in the **Subject** box.
2.  To add an attachment, click **Attachments**, and then click **Add Field**. You can create attachments from data sources of type **File** and **Report**, or from fields containing data of type **File Data**. Data sources of type **Report** supports multiple file formats. To select a file format, in the **Select Field or Group** dialog box, expand the group **File Formats**, and then select the file format you want to use. If the data source is an report, and the file format is an image, the size of the image is determined by the report [Page Setup](../../../../../users/reporting on data/report/save to file or print a report.md).
3.  In the **Message** box, enter a message.

To generate dynamic content, see [Generate Dynamic Values for Text Fields](../generate dynamic values for text fields.md "Generate Dynamic Values for Text Fields").



## Fill Out a Mail Message from a Data Source

In the **Input** section, click **Fill out from a data source**, and the select a data source of type **Mail Message**.



## Send or Write the Mail Message to a Data Source

To send the message immediately, in the **Action** section, click **Send message immediately**. If you want to write the contents of the message to a data source, click **Write message to a data source**, and then select a data source of type **Mail Message**.



## Use SMTP as Mail Transfer Protocol

The mail transfer protocol used when sending messages is configured on your Application Server. If you need to send messages using SMTP, and the Application Server is configured to use another protocol, you can override this setting:

1.  Click **Advanced**.
2.  In the **Advanced Options** dialog, click **Use SMTP**.
3.  To configure the server to use for submitting the mail message, click **Settings**.



See Also

*   [Generate Dynamic Values for Text Fields](../generate dynamic values for text fields.md)