// This function will try to pull data about file
// TODO: Make it work with URL and return file ID while at it.
function file_check_all() {
  // Load sheet and data fileds.
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var AUTO_drive = SpreadsheetApp.setActiveSheet(ss.getSheetByName("AUTO_drive"));
  AUTO_drive.getRange('B2:J').clear();
  var sheet = SpreadsheetApp.setActiveSheet(ss.getSheetByName("AUTO_drive"));
    var startRow = 2; 
    var numRows = sheet.getLastRow() - 1; 
    var dataRange = sheet.getRange(startRow, 1, numRows); 
    var drive_ID_values = dataRange.getValues();
  
    for ( var i in drive_ID_values) {
      var drive_ID = drive_ID_values[i];
      var spreadsheetRow = startRow + Number(i);
      sheet.getRange(spreadsheetRow, 2, spreadsheetRow, 6).setValue("");
      if (drive_ID != "") {
        try {
          data = pull_file_info(drive_ID);
          if (data["status"] == 404) { 
            sheet.getRange(spreadsheetRow, 10).setValue("404 returned ??");
                } else {
                    sheet.getRange(spreadsheetRow, 3).setValue(data["file_name"]);
                    sheet.getRange(spreadsheetRow, 4).setValue(data["owner"]);
                    sheet.getRange(spreadsheetRow, 5).setValue(data["editors"]);
                    sheet.getRange(spreadsheetRow, 6).setValue(data["viewers"]);
                    sheet.getRange(spreadsheetRow, 7).setValue(data["SharingAccess"]);
                    sheet.getRange(spreadsheetRow, 8).setValue(data["SharingPermission"]);
                  }
            } catch(err) {
                Logger.log(err);
                sheet.getRange(spreadsheetRow, 10).setValue("error / not owned by a user?");
                }
       }
    }
}


//***********************************************************************************************************
// This is the function that does the actuall work of calling google to ask
// https://developers.google.com/apps-script/reference/drive/drive-app
// https://developers.google.com/apps-script/reference/drive/file
// TODO: make it work with files in Shared Drives, provide more info?
function pull_file_info(drive_ID) {
  //Find file
  var file = DriveApp.getFileById(drive_ID);
  // Check info about ...
  var owner = file.getOwner().getEmail();
  var editors = file.getEditors();
  var viewers = file.getViewers();
  var SharingAccess = file.getSharingAccess();
  var SharingPermission = file.getSharingPermission();
  var file_name = file.getName();
  
  var editors_list = [];
  for (var i = 0; i < editors.length; i++) {
    editors_list.push(editors[i].getEmail());
  }
  var editors_list = editors_list.toString();
  
  var viewers_list = [];
  for (var i = 0; i < viewers.length; i++) {
    viewers_list.push(viewers[i].getEmail());
  }
  var viewers_list = viewers_list.toString();
  
  // Return dictonary
  var data = {
    "owner": owner,
    "editors": editors_list,
    "viewers": viewers_list,
    "SharingAccess": SharingAccess,
    "SharingPermission": SharingPermission,
    "file_name": file_name
             };
  Logger.log(data);
  
  return data
}
