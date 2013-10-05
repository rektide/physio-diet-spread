function onEdit(e){
  // check range, get sheet
  if(!e || !e.range)
    return
  var r= e.range
  if(r.getRow() != 2 && r.getColumn() != 1 || r.getNumColumns() != 1 || r.getNumRows() != 1)
    return
  var s= r.getSheet()
  
  // add a datestamp
  var timeRange= s.getRange(2, 2),
    time= Date.now().toString()
  timeRange.setValue(time)

  // make a blank row
  s.insertRowBefore(2)
}
