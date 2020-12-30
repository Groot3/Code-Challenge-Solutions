# 12/28/2020
# Groot
# Format phone numbers in Excel Sheets using xlrd module
# Unfinished, for now.

import xlrd
excelFile = xlrd.open_workbook("excel.xls") # Your File name here
excelSheet = excelFile.sheet_by_index(0)
PhoneNumberFormat = "standard"
CountryCode = "1" ## Country Code cannot be more than 1 char at the moment.

def stripPhoneNumbers (PhoneNumber):
    PhoneNumber.replace("-","").replace(" ","").replace("_","").replace("+","").replace(".","")
    return PhoneNumber

def formatPhoneNumbers (PhoneNumber, Format):
    if Format == "standard":
        if PhoneNumber = "*-***-***-****":
            ##TODO: Regex check for wildcards.

            return
        elif PhoneNumber isnumeric() = False:
            console.log("Cell is not Numeric. Skipping.")
            # TODO: show on exported sheet skipped "non numeric" cells.
            ## TODO: make non-numeric cells fit requirements if they contain "Phone Number" strings. 
            return
        else:
            stripPhoneNumbers(PhoneNumber)
            if PhoneNumber.startswith(CountryCode):
                ##Check length

            #Format appropriately


def getPhoneNumbers (SheetColumn,SheetRow): 
    # TODO: Make SheetRow optional, autodetect down from column detecting rows with values.
    while excelSheet.cell_value is not None:
        print(excelSheet.cell_value(SheetColumn,SheetRow))
        PhoneNumber = excelSheet.cell_value(SheetColumn,SheetRow)
        SheetColumn += 1
        return PhoneNumber
        # Prints the cell to console, then moves to next cell. Ends at empty cell / error.


getPhoneNumbers(1,1)
