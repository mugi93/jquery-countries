// function getCountries() {
//     $("#btnShowCountries").click(function () {

//         $.ajax({
//             url: 'http://localhost:8000/countries',
//             success: function (data, statuts, response) {
//                 for (var i = 0; i < data.length; i++) {
//                     console.log(data[i])
//                     $("ul").append(`<li>${data[i]}</li>`)

//                 };


//             }
//         });

//     })
// }
// getCountries()



// function getCountries() {

//     $.ajax({
//         url: 'http://localhost:8000/countries',
//         success: function (data, statuts, response) {

//              for (var i = 0; i < data.length; i++) {
//             console.log(data[i])
//             $("ul").append(`<li>${data[i]}</li>`)
            

//         };

//         }
//      })
    

    
    
// }

// $("#btnShowCountries").click(function () {

//         getCountries()

       
//     })

let getCountries=()=>{
    
    $.ajax({
                url: 'http://localhost:8000/countries',
                success:  (data, statuts, response)=> {
        
                     for (var i = 0; i < data.length; i++) {
                    console.log(data[i])
                    $("ul").append(`<li>${data[i]}</li>`)
                    
        
                };
        
                }
             })

}

$("#btnShowCountries").click( ()=> {

        getCountries()

       
    })



    let getCapital=()=>{
    
        $.ajax({
                    url: 'http://localhost:8000/countries/[countries_name]/capital',
                    success:  (data, statuts, response)=> {
            
                         for (var i = 0; i < data.length; i++) {
                        console.log(data[i])
                        $("ul").append(`<li>${data[i]}</li>`)
                        
            
                    };
            
                    }
                 })
    
    }
    
    $("#btnShowCountries").click( ()=> {
    
            getCountries()
    
           
        })