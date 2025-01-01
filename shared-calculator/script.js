    function calculateShares() {
            const startingBalance = document.getElementById('available-balance').value;
            const fortyFiveShare = document.getElementById('forty-five-share');
            const fiftyFiveShare = document.getElementById('fifty-five-share');

            const fortyFiveAmount = (((10000 - startingBalance) * 0.45).toFixed(2));
            const fiftyFiveAmount = (((10000 - startingBalance) * 0.55).toFixed(2));

            fortyFiveShare.innerHTML= `$${fortyFiveAmount}`;
            fiftyFiveShare.innerHTML = `$${fiftyFiveAmount}`;
        }       
