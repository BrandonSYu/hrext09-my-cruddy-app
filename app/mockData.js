//Creates Mock Restaurant and User data and updates local storage
//Restaurant data format: [Name, "{MENU OBJECT}", Location, Hours of Operation, Phone#, PriceRange(out of $$$$$), MaxOccupancy, CurrentOccupancy, searchtag]
keys = ["House of Prime Rib", "Cliff House", "Fogo de Chao", "San Tung"]
valHouse = {name : "House of Prime Rib", menu: {"primerib" : "abc"}, location: "1906 Van Ness Ave, San Francisco, CA 94109", hours: "5a.m-10p.ms", phone: "(415) 885-4605", price : "$$$$", maxOccupancy: 150, currOccupancy : 90, searchTag : "Prime rib mashed potatoes gravy wine alcohol van ness downtown prime rib medium rare and it was PERFECT, plus that au jus sauce Mashed potatoes are delicious but I wasn't the biggest fan of the creamed spinach or Yorkshire pudding cocktail"};
valCliff = {name: "Cliff House", menu:{"Seafood" : "abc"}, location:"1090 Point Lobos Ave, San Francisco, CA 94121", hours:"9a.m-9:30p.m", phone:"(415) 386-3330",price : "$$$", maxOccupancy: 200, currOccupancy :50, searchTag :"wine alcohol california bistro jazz ocean beach brunch buffet brunch From large prawns, seafood paella, popover with homemade jams, Korean bbq, fresh salmon and bubbly champagne seafood omelette Unlimited mimosas. Seafood, salads, wonderful deserts Spicy Fried Calamari ($16.50) and the Steamed Clams sourdough bread For entrees we ordered The Cliff House Cioppino ($34.00) and Frutti De Mare. ($33.50) The Cioppono is a fish stew served in a tomato based broth"};
valFogo = {name: "Fogo de Chao", menu : {"steak": {price : 100, desc : ""}, "filetmignon" : {price : 100, desc : ""}, "beefancho" : {price : 100, desc : ""}, "seafood" : {price : 100, desc : ""}, "porkloin" : {price : 100, desc : ""}, "porksausaage" : {price : 100, desc : ""}}, location : "201 S 3rd St Suite 100, San Francisco, CA 94103",hours: "11:30a.m-10:30p.m", phone:"(415) 427-0004", price : "$$$", maxOccupancy : 140, currOccupancy : 60, searchTag : "steak brazilian wine alcohol seafood chicken lamb pork gaucho lunch brunch polenta garlic mashed potatoes giger caramelized bananas farofa fire roasted seasoned filet mignon costela beef ribs braised beef sliders smoked salmon fejioada cured meats marinated mushrooms"};
valSan = {name : "San Tung", menu : {"chickenwing" : "abc", "noodle" : "abc", "dumpling" : "abc", "friedrice" : "abc", "chowmein" : "abc"}, location : "1031 Irving St, San Francisco, CA 94122", hours : "11a.m-9:30p.m", phone : "(415) 242-0828", price : "$$", maxOccupancy : 110, currOccupancy : 111, searchTag : "chicken wings kimchi chinese korean noodles taiwanese dumplings bao rice tea dim sum Famed dry fried chicken wings, handmade noodles & other Chinese eats in a no-frills setting honey walnut shrimp sizzling rice soup mongolian beef dry fried chicen pork dumplings seafood pot stickers black bean sauce noodles shrimp and leek dumpling"};
window.localStorage.setItem("House of Prime Rib", valHouse)
window.localStorage.setItem("Cliff House", valCliff)
window.localStorage.setItem("Fogo de Chao", valFogo)
window.localStorage.setItem("San Tung", valSan)

