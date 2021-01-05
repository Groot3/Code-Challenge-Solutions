// Simple script to calculate the time it takes to reach Feudal Age on Age of Empires.
// Groot
// 1/5/2021

UnitProductionSeconds =
    {
    Villager: 25,
    FeudalAge: 130,
    }
StartingVills = 3

for (let Villagers = StartingVills; Villagers < 22; Villagers++) { // runs until you have 21 villagers
    FeudalTime = ((UnitProductionSeconds.Villager * Villagers) - (UnitProductionSeconds.Villager * StartingVills)) + UnitProductionSeconds.FeudalAge // removes the time it takes for you to create your first two villagers
    console.log(FeudalTime / 60 + " Minutes")
}