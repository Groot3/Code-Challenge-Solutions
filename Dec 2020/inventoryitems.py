#12/25/2020
#Automate the Boring Stuff Practice Project
#Groot

stuff1 = {'rope':1,'torch':6,'gold coin':42,'dagger':1,'arrow':12}

def displayInventory(inventory):
    print("Inventory:")
    item_total = 0
    #print(inventory.items())
    for k, v in inventory.items():
        item_total += inventory.get(k,v)
        print(k + " " + str(inventory.get(k,v)))
    print("Total number of items " + str(item_total))


dragonLoot = ['gold coin', 'dagger', 'gold coin', 'gold coin', 'ruby']

def addToInventory(inventory, addeditems):
    for item in addeditems:
        if inventory.get(item) == None: 
            inventory.update({item: 1})
        else: 
            itemcount = inventory.get(item) 
            itemcount += 1
            # print(itemcount, item)
            inventory.update({item: itemcount})
            # print(inventory)
    return inventory
            



stuff = addToInventory(stuff1, dragonLoot)
displayInventory(stuff)