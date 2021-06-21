export function random(range){
    return parseInt(Math.random()*range);
}

export function matrixClear9X9(){
    var m = [];
    for ( var i = 0 ; i < 9 ; i ++ ){
        m.push([0,0,0, 0,0,0, 0,0,0])
    }
    return m ; 
}

export function makeSudokuProcess(){
    let m = matrixClear9X9();
    
    let total = 0 ; 
    
    for ( let i = 1 ; i <= 9 ; i ++ ) {
        for ( let j = 0 ; j < 9 ; j += 3 ) {
            for ( let z = 0 ; z < 9 ; z += 3 ) {
                let loop = true ; 
                
                while ( loop ) {
                    let num1 = this.random(3) + j ;
                    let num2 = this.random(3) + z ;
                    
                    if ( m[num1][num2] == 0 ) {
                        let exists = false ; 
                        
                        for ( let x = 0 ; x < 9 ; x ++ ) {
                            if ( m[x][num2] == i ) {
                                exists = true ; 
                                x = 10 ;
                            }
                            if ( m[num1][x] == i ) {
                                exists = true ;
                                x = 10 ;
                            }
                        } 
                        
                        total ++ ; 

                        if ( total > 3000 ) {
                            loop = false ;
                            i = 10 ;
                            j = 10 ; 
                            z = 10 ;
                        } else if ( exists == false ) {
                            loop = false ; 
                            m[num1][num2] = i ;
                        }
                    }
                }
            }
        }
    }
    

    return m ;
}

export function makeSudoku9X9(){
    var loop = true ; 
    var m = null ; 
    while ( loop ){
        loop = false ; 
        try {
            m = this.makeSudokuProcess();    
        } catch (error) {
            // console.warn(error);
        }
        
        for ( var i = 0 ; i < 9 ; i ++ ){
            for ( var j = 0 ; j < 9 ; j ++ ){
                if ( m[i][j] == 0 ) {
                    loop = true ; 
                    break;
                }
            }
        }
    }

    // console.log('\n')
    // for ( var i = 0 ; i < 9 ; i ++ ){
    //     var row = '';
    //     for ( var j = 0 ; j < 9 ; j ++ ){
    //         row += ' ' + m[i][j]  ;
    //         if ( j % 3 == 2 ){
    //             row += ' ' ;
    //         }
    //     }
    //     // console.log(row)
    // }

    return m ; 
}