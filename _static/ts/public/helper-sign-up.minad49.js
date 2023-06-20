var HelperSignUp=function(){function e(){}return e.prototype.init=function(){$(document).ready(function(){$(".js-list-company").click(function(e){e.preventDefault(),helperSignUpLogic.captureInitialInfo()}),$(".js-submit-application").click(function(e){e.preventDefault(),helperSignUpLogic.validateApplication()}),$(".triggersFirstFormSubmit").keypress(function(e){13==e.which&&$(".js-list-company").click()})})},e.prototype.captureInitialInfo=function(){var e=$.trim($("#initial-first-name").val()),r=$.trim($("#initial-last-name").val()),s=$.trim($("#initial-email").val());this.hideErrorMessages(),""!=e?""!=r?""!=s?globalSitewide.ValidateEmail(s)?(Hireahelper.Global.Utils.performFormPostWithJsonResult("/Home/CaptureHelperSignupInterest/",{firstName:e,lastName:r,email:s},function(e,r,s){},function(e,r,s){}),$("#firstName").val(e),$("#lastName").val(r),$("#email").val(s),$("#initial-info-wrapper").hide(),$("#complete-helper-form").show(),$("html, body").animate({scrollTop:$("#complete-helper-form").offset().top},250)):this.showInitialErrorMessageAndScroll("The email address you provided is not valid.","initial-email"):this.showInitialErrorMessageAndScroll("Please provide your email address.","initial-email"):this.showInitialErrorMessageAndScroll("Please provide your last name.","initial-last-name"):this.showInitialErrorMessageAndScroll("Please provide your first name.","initial-first-name")},e.prototype.validateApplication=function(){var e=$.trim($("#firstName").val()),r=$.trim($("#lastName").val()),s=$.trim($("#email").val()),o=($.trim($("#driverLicense").val()),$.trim($("#ssn").val())),i=$.trim($("#businessName").val()),l=$.trim($("#primaryPhone").val()),a=$.trim($("#altPhone").val()),t=$.trim($("#businessAddress").val()),n=$.trim($("#businessCity").val()),d=$.trim($("#businessState").val()),p=$.trim($("#businessZip").val()),m=$.trim($("#crewMemberCount").val()),c=$.trim($("#distanceToJob").val());this.hideErrorMessages(),""!=e?""!=r?""!=s?globalSitewide.ValidateEmail(s)?""==o||""!=globalSitewide.CleanAndValidateSSN(o)?""!=i?""!=(l=globalSitewide.ValidateAndCleanPhoneNumber(l))?""==a||""!=globalSitewide.ValidateAndCleanPhoneNumber(a)?""!=t?""!=n?""!=d&&globalSitewide.IsValidStateCode(d)?""!=p&&globalSitewide.IsValidZipCode(p)?isNaN(parseInt(m,10))?this.showCompletedErrorMessageAndScroll("Please provide the amount of crew members you can provide. (1-100)","crewMemberCount"):""==m||parseInt(m)<1||100<parseInt(m)?this.showCompletedErrorMessageAndScroll("Please provide the amount of crew members you can provide. (1-100)","crewMemberCount"):isNaN(parseInt(c,10))?this.showCompletedErrorMessageAndScroll("Please provide how many miles you can travel for jobs. (1-100)","distanceToJob"):""==c||parseInt(c)<1||100<parseInt(c)?this.showCompletedErrorMessageAndScroll("Please provide how many miles you can travel for jobs. (1-100)","distanceToJob"):$("#z__AgreesToTerms").is(":checked")?$("#willDoBackgroundCheck").is(":checked")?(c=$("#complete-helper-form form").serialize(),$.blockUI(),Hireahelper.Global.Utils.performFormPostWithJsonResult("/SubmitHelperApplication/",c,function(e,r,s){return $.unblockUI(),e.Success?($("#initial-info-wrapper,#complete-helper-form").hide(),void $(".successfullySubmitted").show()):(HireahelperCsLogger.Main.sendDataWithMsg("public-helpersignup-submit returned non-success",e,3),void helperSignUpLogic.showCompletedErrorMessageAndScroll(e.ErrorMessages[0],""))},function(e,r,s){$.unblockUI(),helperSignUpLogic.showCompletedErrorMessageAndScroll("Oops! Our support team has been notified that we couldn't save your application.","")})):this.showCompletedErrorMessageAndScroll("You must be willing to submit to a background check in order to sign up as a Helper on HireAHelper.","willDoBackgroundCheck"):this.showCompletedErrorMessageAndScroll("Please review and agree to our Service Provider Terms of Service.","z__AgreesToTerms"):this.showCompletedErrorMessageAndScroll("Please provide the ZIP code for your business.","businessZip"):this.showCompletedErrorMessageAndScroll("Please provide the state code for your business.","businessState"):this.showCompletedErrorMessageAndScroll("Please provide the city of your business.","businessCity"):this.showCompletedErrorMessageAndScroll("Please provide the street address for your business.","businessAddress"):this.showCompletedErrorMessageAndScroll("The alternate phone number provided is invalid.","altPhone"):this.showCompletedErrorMessageAndScroll("Please provide the primary phone number for your business.","primaryPhone"):this.showCompletedErrorMessageAndScroll("Please provide the name of your business.","businessName"):this.showCompletedErrorMessageAndScroll("The social security number provided is not valid.","ssn"):this.showCompletedErrorMessageAndScroll("The email address provided is not valid.","email"):this.showCompletedErrorMessageAndScroll("Please provide your email address.","email"):this.showCompletedErrorMessageAndScroll("Please provide your last name.","lastName"):this.showCompletedErrorMessageAndScroll("Please provide your first name.","firstName")},e.prototype.hideErrorMessages=function(){$("input").removeClass("is-invalid"),$(".js-errorlist").removeClass("validation-summary-errors").addClass("validation-summary-valid")},e.prototype.showInitialErrorMessageAndScroll=function(e,r){this.showErrorMessageAndScroll("initial-info-wrapper",e,r)},e.prototype.showCompletedErrorMessageAndScroll=function(e,r){this.showErrorMessageAndScroll("complete-helper-form",e,r)},e.prototype.showErrorMessageAndScroll=function(e,r,s){$("#"+s).addClass("is-invalid"),$("#"+e+" .js-errorlist li").text(r),$("#"+e+" .js-errorlist").addClass("validation-summary-errors").removeClass("validation-summary-valid"),$("html, body").animate({scrollTop:$("#"+e+" .js-errorlist").offset().top},500)},e}(),helperSignUpLogic=new HelperSignUp;