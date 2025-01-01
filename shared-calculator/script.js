    function calculateShares() {
            const startingBalance = document.getElementById('available-balance').value;
            const ashleysShare = document.getElementById('ashleys-share');
            const nicksShare = document.getElementById('nicks-share');

            const ashleysAmount = (((10000 - startingBalance) * 0.45).toFixed(2));
            const nicksAmount = (((10000 - startingBalance) * 0.55).toFixed(2));

            ashleysShare.innerHTML= `$${ashleysAmount}`;
            nicksShare.innerHTML = `$${nicksAmount}`;
        }       
