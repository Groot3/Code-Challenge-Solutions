# 12/28/2020
# Groot
# Format phone numbers in Excel Sheets using xlrd module
# Unfinished, for now.

import xlrd
excelFile = xlrd.open_workbook("excel.xls") # Your File name here
excelSheet = excelFile.sheet_by_index(0)
PhoneNumberFormat = "standard"

def stripPhoneNumbers (PhoneNumber):
    # TODO: Strip spaces, strip "-" strip "_"

def formatPhoneNumbers (PhoneNumber, Format):
    if Format == "standard":
        if PhoneNumber = "*-***-***-****":
            return
        else:
            #If not standard format, stripPhoneNumbers
            #Check if starts with "1"
            #TODO: implement country code variations
            #Check length
            #Format appropriately


def getPhoneNumbers (SheetColumn,SheetRow): 
    # TODO: Make SheetRow optional, autodetect down from column detecting rows with values.
    while excelSheet.cell_value is not None:
        print(excelSheet.cell_value(SheetColumn,SheetRow))
        SheetColumn += 1
        # Prints the sheet to console, then moves to next sheet. Ends at empty cell / error.


getPhoneNumbers(1,1)
