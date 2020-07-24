//***********************************************************************************************************
// Change file owner of all the files
function transfer_all() {
  // Load sheet and data fileds.
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = SpreadsheetApp.setActiveSheet(ss.getSheetByName("AUTO_drive"));
  var startRow = 2; 
  var numRows = sheet.getLastRow() - 1; 
  var dataRange = sheet.getRange(startRow, 1, numRows, 2) 
  var data = dataRange.getValues();

  for (i in data) {
    var row = data[i];
    try {
      response_data = change_owner(row[0], row[1]);
      status = "done";
    } catch(err) {
      Logger.log(err);
      status = err;
    }
    sheet.getRange(startRow + Number(i), 10).setValue(status);
  }
}


//*************************************************************
// This is the function that does the actuall work of calling google to change file owner
// https://developers.google.com/apps-script/reference/drive/file
function change_owner(drive_ID,new_owner){
  //Find file
  var file = DriveApp.getFileById(drive_ID);
  // Change owner
  file.setOwner(new_owner);
}


//***********************************************************************************************************
// Give edit access to all of the files
function edit_to_all() {
  // Load sheet and data fileds.
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = SpreadsheetApp.setActiveSheet(ss.getSheetByName("AUTO_drive"));
  var startRow = 2; 
  var numRows = sheet.getLastRow() - 1; 
  var dataRange = sheet.getRange(startRow, 1, numRows, 2) 
  var data = dataRange.getValues();

  for (i in data) {
    var row = data[i];
    try {
      response_data = add_editor(row[0], row[1]);
      status = "done";
    } catch(err) {
      Logger.log(err);
      status = err;
    }
    sheet.getRange(startRow + Number(i), 10).setValue(status);
  }
}


//*************************************************************
// This is the function that does the actuall work of calling google to add person as owner
// https://developers.google.com/apps-script/reference/drive/drive-app
// https://developers.google.com/apps-script/reference/drive/file
function add_editor(drive_ID,new_owner){
  //Find file
  var file = DriveApp.getFileById(drive_ID);
  // Change owner
  file.addEditor(new_owner);
}
