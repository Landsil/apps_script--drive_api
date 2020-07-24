// Create template sheet that will be used later on.
function create_drive_template() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  spreadsheet.insertSheet().setName("AUTO_drive");
  var AUTO_drive = spreadsheet.getSheetByName("AUTO_drive");
  
  // Formating
  AUTO_drive.setFrozenRows(1) // header
  AUTO_drive.getRange("1:1").activate();
  AUTO_drive.getActiveRangeList().setHorizontalAlignment("center").setFontWeight("bold"); // center and bold
  AUTO_drive.getRange(1, 1, AUTO_drive.getMaxRows(), AUTO_drive.getMaxColumns()).activate();
  AUTO_drive.getActiveRangeList().setWrapStrategy(SpreadsheetApp.WrapStrategy.CLIP);  // Clip when text to long
  AUTO_drive.setColumnWidth(4, 140);
  AUTO_drive.setColumnWidth(7, 120);  // Column size
  AUTO_drive.setColumnWidth(8, 140);
  
  // Content
  AUTO_drive.getRange("A1").activate();
  AUTO_drive.getCurrentCell().setValue("FileID");
  AUTO_drive.getRange("B1").activate();
  AUTO_drive.getCurrentCell().setValue("Transfer to");
  AUTO_drive.getRange("C1").activate();
  AUTO_drive.getCurrentCell().setValue("File Name");
  AUTO_drive.getRange("D1").activate();
  AUTO_drive.getCurrentCell().setValue("Current Owner");
  AUTO_drive.getRange("E1").activate();
  AUTO_drive.getCurrentCell().setValue("Editors");
  AUTO_drive.getRange("F1").activate();
  AUTO_drive.getCurrentCell().setValue("Viewers");
  AUTO_drive.getRange("G1").activate();
  AUTO_drive.getCurrentCell().setValue("Sharing Access");
  AUTO_drive.getRange("H1").activate();
  AUTO_drive.getCurrentCell().setValue("Sharing Permission");
  AUTO_drive.getRange("J1").activate();
  AUTO_drive.getCurrentCell().setValue("Status");
  
  // Test data
  AUTO_drive.getRange("A2").activate();
  AUTO_drive.getCurrentCell().setValue("drive_ID_1_test");
  AUTO_drive.getRange("A3").activate();
  AUTO_drive.getCurrentCell().setValue("drive_ID_2_test");
  AUTO_drive.getRange("A4").activate();
  AUTO_drive.getCurrentCell().setValue("drive_ID_3_test");
  
  
}
