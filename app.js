(function () {
    window.addEventListener("DOMContentLoaded", () => {
        afterDomLoaded();
    }, false);

    function calculateAndShow() {
        let val1 = document.querySelector("#date1").value;
        let val2 = document.querySelector("#date2").value;

        document.querySelector('#date1val').innerText = new Date(val1);
        document.querySelector('#date2val').innerText = new Date(val2);

       
        let diff = Math.abs(new Date(val1).valueOf() - new Date(val2).valueOf());
        document.querySelector('#result').innerText = `${diff}ms`;
    }


    function afterDomLoaded() {

        document.querySelector('#calculate').addEventListener('click', calculateAndShow);

        document.querySelector('#date1').addEventListener('input', calculateAndShow);

        document.querySelector('#date2').addEventListener('input', calculateAndShow);
    }
})();