/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {

    intervals.sort((x,y) => x[0]-y[0]);
    let final = []
    let flag = false;
    for(let i = 0 ; i < intervals.length  ; i++)
      if(i < intervals.length - 1 
        && intervals[i][1] >= intervals[i+1][0])
        {
            if(intervals[i][1] >= intervals[i+1][1])
                final.push([intervals[i][0],intervals[i][1]])
            else
                final.push([intervals[i][0],intervals[i+1][1]])
             intervals.splice(intervals.indexOf(intervals[i+1]),1)
        }
        else
            final.push([intervals[i][0],intervals[i][1]])
            
      for(let i = 0; i < final.length; i++)
          {
              if( i < final.length -1 
              &&  final[i][1] >= final[i+1][0]){ 
                  if(final[i][1] < final[i+1][1]){ 
                      final[i][1] = final[i+1][1]
                                                 }
                final.splice(final.indexOf(final[i+1]),1)
                  i--                           }
          }
    
    return final
    
};
