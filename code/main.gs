//This project will require you to:
//1. Correctly add all needed credentailas to project properties so they can be called from there. https://developers.google.com/apps-script/reference/properties
//2. https://github.com/gsuitedevs/apps-script-oauth2

//*******************************************************************************************************************************************
// Start of code
// Create basic interface for manuall trigering sync ( normally it's expected you will switch on daily sync )
// https://script.google.com/home/triggers
// Menu options
var ui = SpreadsheetApp.getUi();
function onOpen() {
  ui.createMenu("Drive Actions")
  .addItem("Create Drive Template", "create_drive_template")
  .addItem("Check files", "file_check_all")
  .addItem("Transfer all files", "transfer_all")
  .addItem("Give edit", "edit_to_all")
  .addToUi();
};

// Get all tokens and codes from project properties
var scriptProperties = PropertiesService.getScriptProperties()
