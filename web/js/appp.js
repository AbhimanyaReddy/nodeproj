function ret() {
    let c = document.getElementById("zeff").value
    c = '"'+c+'"'
    const v = "/weather?address="+c
    fetch(v).then((response ) => {
        response.json().then((data) => {
            if (data.cod === "404"){
                let d = document.getElementById("output1")
                d.textContent = data.message
            }
            else
            {
                let d = document.getElementById("output1")
                let e = document.getElementById("output2")
                let f = document.getElementById("output3")
                d.textContent = data.location
                e.textContent = data.temperature
                f.textContent = data.weather

            }
        })
    })
}