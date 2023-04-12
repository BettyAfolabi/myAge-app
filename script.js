
    const d1 = document.getElementById('day').value;
    const m1 = document.getElementById('month').value;
    const y1 = document.getElementById('year').value;
    const form = document.getElementById('form');

   
    form.addEventListener('submit', e => {
        e.preventDefault();
    
        const day = new Date();
        let d2 = day.getDate();
        let m2 = 1 + day.getMonth();
        let y2 = day.getFullYear();
        let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
        if(d1 > d2){
            d2 = d2 + month[m2 - 1];
            m2 -= 1
        }
        if (m1 > m2){
            m2 += 12;
            y2 -= 1;
        }
        const d = d2 - d1;
        const m = m2 - m1;
        const y = y2 - y1;
    
    
        const d3 = document.getElementById('day');
        const m3 = document.getElementById('month');
        const y3 = document.getElementById('year');
    
        const setError = (element, message) => {
            const inputControl = element.parentElement;
            const errorDisplay = inputControl.querySelector('.error');
    
            errorDisplay.innerText = message;
            inputControl.classList.add('error');
            inputControl.classList.remove('success');
        }
        const setSuccess = element => {
            const inputControl = element.parentElement;
            const errorDisplay = inputControl.querySelector('.error');
    
            errorDisplay.innerText = '';
            inputControl.classList.add('success');
            inputControl.classList.remove('error');  
        }
    
        const validateInputs = () => {
            const d3Value = d3.value.trim();
            const m3Value = m3.value.trim();
            const y3Value = y3.value.trim();
            
    
            if (d3Value === ''){
                setError(d3, "This field is required");
            }else if(d3Value >= 32 || d3Value < 1){
                setError(d3, 'Enter a valid date');
            }else if (m3Value == 04 || m3Value == 06 || m3Value == 09 || m3Value == 11 && d3Value > 30) {
                setError(d3, 'There are 30 days in this month');
            }else if (m3Value == 02 && y3Value % 4 == 0 && d3Value > 29 ) {
                setError(d3, 'There are 29 days in this month');
            }else if (m3Value == 02 &&  y3Value % 100 != 0 && d3Value > 28) {
                setError(d3, 'There are 28 days in this month');
            }else{
                setSuccess(d3);
            };
    
            if (m3Value === ''){
                setError(m3, "This field is required");
            }else if (m3Value < 1 || m3Value >= 13) {
                setError(m3, 'Enter a valid month');
            }else{
                setSuccess(m3);
            }
    
            if (y3Value === ''){
                setError(y3, "This field is required");
            }else if (y3Value > y2){
                setError(y3, 'Must be in the past');
            }else{
                setSuccess(y3);
            }
    
            document.getElementById('output-d').innerHTML = d;
            document.getElementById('output-m').innerHTML = m;
            document.getElementById('output-y').innerHTML = y;
        }
    
        validateInputs();    
    
        // let monthCount = setInterval(monthc, 10);          
        // let daysCount = setInterval(days, 10);
        // let yearCount = setInterval(yearc, 10);
        // let count1 = 0;
        // let count2 = 0;
        // let count3 = 0;
        
        // function monthc () {
        //     count1++;
        //     document.getElementById('output-m').innerHTML= count1;
        //     if (count1 == m) {
        //         clearInterval(monthCount);
        //     }
        // }
    
        // function days () {
        //     count2++;
        //     document.getElementById('output-d').innerHTML= count2;
        //     if (count2 == d) {
        //         clearInterval(daysCount);
        //     }
        // }
    
        // function yearc () {
        //     count3++;
        //     document.getElementById('output-y').innerHTML= count3;
        //     if (count3 == y) {
        //         clearInterval(yearCount);
        //     }
        // }
    
    });    
    