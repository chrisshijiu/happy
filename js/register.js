$(function () {
    let oMobile = $("#mobile");
    let oMobile_code = $("#mobile_code");
    let oPassword = $("#password");
    let oPassword_confirm = $("#password_confirm");
    let mobileReg = /^1[3-9]\d{9}$/;
    let mobile_codeReg = /^\w{6}$/;
    let passwordReg = /^[\w_-]{6,16}$/;

    // console.log(mobile);
    //手机验证
    $("#mobile").focus(function () {
        $(".err-msg1").css("display", "block")
    })
    $("#mobile").blur(function () {
        let mobile = oMobile.val().trim();
        $(".err-msg1").css("display", "none")
        if (mobile) {
            if (mobileReg.test(mobile)) {
                $(".err-msg1-warm").css("display", "none");
                $(".err-msg1-none").css("display", "none");
                this.isOK = true;
            } else {
                $(".err-msg1-warm").css("display", "block");
                this.isOK = false;
            }
        } else {
            $(".err-msg1-warm").css("display", "none");
            $(".err-msg1-none").css("display", "block");
            this.isOK = false;
        }
    })
    //验证码验证
    $("#mobile_code").focus(function () {
        $(".err-msg2").css("display", "block")
    })
    $("#mobile_code").blur(function () {
        let mobile_code = oMobile_code.val().trim();
        $(".err-msg2").css("display", "none")
        if (mobile_code) {
            if (mobile_codeReg.test(mobile_code)) {
                $(".err-msg2-warm").css("display", "none");
                // $(".err-msg2-none").css("display", "none");
                this.isOK = true;
            } else {
                $(".err-msg2-warm").css("display", "block");
                this.isOK = false;
            }
        } else {
            $(".err-msg2-warm").css("display", "none");
            // $(".err-msg2-none").css("display", "block")
            this.isOK = false;
        }
    })


    //密码验证
    $("#password").focus(function () {
        $(".err-msg3").css("display", "block")
    })
    $("#password").blur(function () {
        $(".err-msg3").css("display", "none");
        let password = oPassword.val().trim();
        if (password) {
            if (passwordReg.test(password)) {
                $(".err-msg3-warm").css("display", "none");
                // this.isOK =true;
            } else {
                $(".err-msg3-warm").css("display", "block");
            }
        } else {
            $(".err-msg3-warm").css("display", "none");
        }
    })
    $("#password_confirm").focus(function () {
        $(".err-msg4").css("display", "block")
    })
    $("#password_confirm").blur(function () {
        $(".err-msg4").css("display", "none");
        let password = oPassword.val().trim();
        let password_confirm = oPassword_confirm.val().trim();
        if (password_confirm) {
            if (passwordReg.test(password_confirm)) {
                $(".err-msg4-warm").css("display", "none");
                if (password == password_confirm) {
                    this.isOK = true;
                } else {
                    $(".err-msg4-warm").css("display", "block");
                    this.isOK = false;
                }
            } else {
                // $(".err-msg4-warm").css("display", "block");
            }
        } else {
            // $(".err-msg4-warm").css("display", "none");
        }
    })
    $("#capt").blur(function () {
        let capt = $("#capt").val().trim();
        if (capt == 1234) {
            this.isOK = true;
        }
    })
    // $("#checkbox").check(function(){
    //     console.log(123);
    // })
    // $("#checkbox").prop('checked',true);
    $("#checkbox").click(function () {
        console.log(($("#checkbox").prop("checked")));
    })


    //console.log$("#mobile_code"));
    $(".login-btn").click(function () {
        let mobile = oMobile.val().trim();
        let password = oPassword.val().trim();
        if ($("#mobile")[0].isOK && $("#mobile_code")[0].isOK &&
            $("#password_confirm")[0].isOK && $("#capt")[0].isOK
        ) {
            $.post({
                url: "../server/api/register.php",
                data: {
                    "mobile": mobile,
                    "password": password
                },
                success(res) {
                    console.log(res);

                    setTimeout(function () {

                        document.write("注册成功，即将跳转到登录页面");
                        setTimeout(function () {
                            window.location.href = "http://localhost/happy/html/login.html"
                        }, 2000)
                    }, 1500);
                }

            })

            // setTimeout(function () {
            //     document.write("注册成功，即将跳转到登录页面");
            //     setTimeout(function () {
            //         window.location.href = "http://localhost/happy/html/login.html"
            //     }, 2000)
            // }, 1500);


        }
        console.log($("#mobile_code")[0].isOK);
    })

    // console.log($("#mobile_code")[0].isOK);
})