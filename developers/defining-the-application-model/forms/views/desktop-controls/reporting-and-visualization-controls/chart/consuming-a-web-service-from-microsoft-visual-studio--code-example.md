## Consuming a Web Service from Microsoft Visual Studio - Code Example

The code example below shows how a Web Service _CustomerRelationsService_ and its operation _GetAllCustomerContacts()_ can be called from Microsoft Visual Studio 2012 project using C#. Client proxy classes _CustomerReleationsServiceClient_, _CustomerContacts_, and _CustomerContact_ were generated using **Add Service Reference...** as described [here](../../../../../../how-to/consuming-a-web-service-from-microsoft-visual-studio.md "Consuming a Web Service from Microsoft Visual Studio").

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">1 <span style="COLOR: gray">///<span style="COLOR: gray"><summary></pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">2 <span style="COLOR: gray">/// <span style="COLOR: green">The main program's entry point. This function is</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">3 <span style="COLOR: gray">/// <span style="COLOR: green">part of a Console Application project.</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">4 <span style="COLOR: gray">///<span style="COLOR: gray"></summary></pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">5 <span style="COLOR: gray">///<span style="COLOR: gray"><param name="args"><span style="COLOR: green">The command-line arguments.<span style="COLOR: gray"></param></pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">6 <span style="COLOR: blue">public<span style="COLOR: blue">static<span style="COLOR: blue">void Main(<span style="COLOR: blue">string[] args)</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">7 {</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">8     <span style="COLOR: green">// Create an instance of the generated client proxy class.</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">9     <span style="COLOR: #2b91af">CustomerRelationsServiceClient client = <span style="COLOR: blue">new<span style="COLOR: #2b91af">CustomerRelationsServiceClient();</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">10 </pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">11     <span style="COLOR: green">// Set credentials for the web service client. The use of </pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">12     <span style="COLOR: green">// "MyCredential.UserName" and "MyCredential.Password"</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">13     <span style="COLOR: green">// is to be replaced by your own user name and password.</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">14 </pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">15     <span style="COLOR: green">// Needed for "Basic" authentication.</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">16     client.ClientCredentials.UserName.UserName = MyCredential.UserName;</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">17     client.ClientCredentials.UserName.Password = MyCredential.Password;</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">18 </pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">19     <span style="COLOR: green">// Needed for "Windows" authentication.</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">20     client.ClientCredentials.Windows.ClientCredential.UserName = MyCredential.UserName;</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">21     client.ClientCredentials.Windows.ClientCredential.UserName = MyCredential.Password;</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">22 </pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">23     <span style="COLOR: green">// Optional part: Accept larger reponses than allowed by WCF defaults.</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">24     <span style="COLOR: blue">if (client.Endpoint.Binding <span style="COLOR: blue">is<span style="COLOR: #2b91af">BasicHttpBinding)</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">25     {</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">26         <span style="COLOR: #2b91af">BasicHttpBinding endpointBinding = (<span style="COLOR: #2b91af">BasicHttpBinding)client.Endpoint.Binding;</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">27 </pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">28         <span style="COLOR: green">// Adjust this size according to the expected size of the result.</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">29         endpointBinding.MaxReceivedMessageSize *= 4;</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">30         endpointBinding.MaxBufferSize = <span style="COLOR: #2b91af">Math.Max(</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">31             endpointBinding.MaxBufferSize, (<span style="COLOR: blue">int)endpointBinding.MaxReceivedMessageSize);</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">32     }</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">33 </pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">34     <span style="COLOR: #2b91af">Console.WriteLine(<span style="COLOR: #a31515">"Calling web service...\n");</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">35 </pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">36     <span style="COLOR: green">// Call the web service.</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">37     <span style="COLOR: #2b91af">CustomerContacts contacts = client.GetAllCustomerContacts();</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">38 </pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">39     <span style="COLOR: green">// Output the result ordered by the customer contact's last name.</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">40     <span style="COLOR: blue">int count = 0;</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">41     <span style="COLOR: blue">foreach (<span style="COLOR: #2b91af">CustomerContact contact <span style="COLOR: blue">in contacts.OrderBy(contact => contact.LastName))</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">42     {</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">43         count++;</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">44         <span style="COLOR: #2b91af">Console.WriteLine(count + <span style="COLOR: #a31515">". " +</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">45             contact.LastName + <span style="COLOR: #a31515">", " +</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">46             contact.FirstName + <span style="COLOR: #a31515">": " +</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">47             (<span style="COLOR: blue">string.IsNullOrEmpty(contact.EMail) ?</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">48                 <span style="COLOR: #a31515">"(No e-mail address)" : contact.EMail));</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">49     }</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">50 </pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">51     <span style="COLOR: green">// Always close the client.</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">52     client.Close();</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">53 </pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">54     <span style="COLOR: #2b91af">Console.WriteLine(<span style="COLOR: #a31515">"\nHit a key to end the program...\n");</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">55     <span style="COLOR: #2b91af">Console.ReadKey(<span style="COLOR: blue">true);</pre>

<pre style="PADDING-BOTTOM: 0px; LINE-HEIGHT: 11pt; MARGIN: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 0px"> <span style="COLOR: #2b91af">56 }</pre>