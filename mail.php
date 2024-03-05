<!--PHP code for form starts---->


<?php
if(isset($_POST['email'])){

$to = "sivashankaran2003@gmail.com";
$subject = "VOLUNTEERS REGISTRATION FORM";
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$Subject = $_POST['subject'];
$msg = $_POST['message'];



$message = "
<table><tr>
		<td><h2>Test</h2></td></tr>
	 <tr><td>   ----------- </td></tr>
	<tr><td>	Your Name    : $name  </td></tr>		
	<tr><td>	Email Id	 : $email </td></tr>
	<tr><td>	Phone Number : $phone </td></tr>
	<tr><td>	Subject      : $Subject </td></tr>
	<tr><td>	Message	     : $msg </td></tr>
</table>
	
		
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <photography-recreate@gmail.com>' . "\r\n";
//$headers .= 'From: <webmaster@example.com>' . "\r\n";
//$headers .= 'Cc: myboss@example.com' . "\r\n";

if(mail($to,$subject,$message,$headers))
	{
		echo '<script language="javascript">alert("Your Mail has been sent successfully!!")</script>';
        echo '<script language="javascript">window.location = "https://photography-recreate.vercel.app/index.html"</script>';
        
	}
	else {
		echo '<script language="javascript">alert("Please try later !!")</script>';
		echo '<script language="javascript">window.location = "https://photography-recreate.vercel.app/index.html#content"</script>';
		}
}
?>