function dasturlash() {
    let urlsBaza = [
        "./dasturlash/index.html",
        "/dinshunoslik/index.html",
        "/Falsafa/index.html",
        "/Fizika/index.html",
        "/Hisob/index.html",
        "/Ingliz tili/index.html"
    ]
    let urlsBaza2 = [
        "./dasturlash/info.html",
        "/dinshunoslik/info.html",
        "/Falsafa/info.html",
        "/Fizika/info.html",
        "/Hisob/info.html",
        "/Ingliz tili/info.html"
    ]
    for (let i = 0; i <= 5; i++){
        document.querySelector(`#a${i}`).addEventListener("click", () => {
            let log = prompt("Login:");
            let password = prompt("Password:");
            if ((log == "abdulaziz06" && password == "yamachbey06") || (log == "hunter2308" && password == "881892308")) {
                document.querySelector(`#a${i} a`).href = urlsBaza[i];
                if (log == "abdulaziz06" && password == "yamachbey06") {
                    alert("Xush kelibsiz Abdulaziz!")
                } else {
                    alert("Xush kelibsiz Sadettin!")
                }
            } else {
                alert("Xush kelibsiz hurmatli foydalanuvchi!")
                document.querySelector(`#a${i} a`).href = urlsBaza2[i];
            }
        })
    }
}
dasturlash()
