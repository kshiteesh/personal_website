---
layout: page
title: About Me
image:
  feature: about.JPG
  credit: 
  creditlink: 
comments: false
reading_time: false
modified: 2015-06-19
---

Hello!  

Welcome to my page! My name is Kshiteesh Hegde. I'm a Graduate Student in the [Department of Computer Science](https://cs.rpi.edu/) at [Rensselaer Polytechnic Institute](https://www.rpi.edu/). I'm working on Matrix Reconstruction techniques for various Machine Learning applications. I'm also interested in Linear Algebra, Machine Learning, Data Science, Social Networks and Recommendation Systems.   

During my leisure time, I love to watch soccer, F1 and tennis. I also try to travel whenever I can. I will be writing here about my travel stories and experiences among other things.   

Feel free to [email me](mailto:kshiteesh@hegde.me) if you have anything to say. Alternatively, you can use the appropriate comments sections if you have specific things to say about my posts.   

Have a nice day!  

<form
    id="subscribe-form"
    action="http://hegde.us10.list-manage.com/subscribe/post-json?u=def4dd9781daa1f9d44dc7676&amp;id=d57ca91cf1"
    method="get">

    <p>If you would like to be notified when there are new blog posts, please sign up here</p>

    <div>
        <input type="email" placeholder="email *" value="" name="EMAIL" >
    </div>

    <div>
        <input type="submit" value="fa fa-fw fa-angle-right" name="subscribe">
    </div>

</form>


<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>

<script type="text/javascript">
    $(document).ready(function(){
        ajaxMailChimpForm($("#subscribe-form"), $("#subscribe-result"));
        // Turn the given MailChimp form into an ajax version of it.
        // If resultElement is given, the subscribe result is set as html to
        // that element.
        function ajaxMailChimpForm($form, $resultElement){
            // Hijack the submission. We'll submit the form manually.
            $form.submit(function(e) {
                e.preventDefault();
                if (!isValidEmail($form)) {
                    var error =  "A valid email address must be provided.";
                    $resultElement.html(error);
                    $resultElement.css("color", "red");
                } else {
                    $resultElement.css("color", "black");
                    $resultElement.html("Subscribing...");
                    submitSubscribeForm($form, $resultElement);
                }
            });
        }
        // Validate the email address in the form
        function isValidEmail($form) {
            // If email is empty, show error message.
            // contains just one @
            var email = $form.find("input[type='email']").val();
            if (!email || !email.length) {
                return false;
            } else if (email.indexOf("@") == -1) {
                return false;
            }
            return true;
        }
        // Submit the form with an ajax/jsonp request.
        // Based on http://stackoverflow.com/a/15120409/215821
        function submitSubscribeForm($form, $resultElement) {
            $.ajax({
                type: "GET",
                url: $form.attr("action"),
                data: $form.serialize(),
                cache: false,
                dataType: "jsonp",
                jsonp: "c", // trigger MailChimp to return a JSONP response
                contentType: "application/json; charset=utf-8",
                error: function(error){
                    // According to jquery docs, this is never called for cross-domain JSONP requests
                },
                success: function(data){
                    if (data.result != "success") {
                        var message = data.msg || "Sorry. Unable to subscribe. Please try again later.";
                        $resultElement.css("color", "red");
                        if (data.msg && data.msg.indexOf("already subscribed") >= 0) {
                            message = "You're already subscribed. Thank you.";
                            $resultElement.css("color", "black");
                        }
                        $resultElement.html(message);
                    } else {
                        $resultElement.css("color", "black");
                        $resultElement.html("Thank you!<br>You must confirm the subscription in your inbox.");
                    }
                }
            });
        }
    });
</script>
