//Creates Mock Restaurant and User data and updates local storage
//Restaurant data format: [Name, "{MENU OBJECT}", Location, Hours of Operation, Phone#, PriceRange(out of $$$$$), MaxOccupancy, CurrentOccupancy, searchtag]
keys = ["House of Prime Rib", "Cliff House", "Fogo de Chao", "San Tung"]
valHouse = {name : "House of Prime Rib", menu: {"primerib" : }, location: "1906 Van Ness Ave, San Francisco, CA 94109", hours: "5a.m-10p.ms", phone: "(415) 885-4605",price : "$$$$", maxOccupancy: 150, currOccupancy : 90, searchTag : "Prime rib mashed potatoes gravy wine alcohol van ness downtown"];
valCliff = [name: "Cliff House", menu:{}, location:"1090 Point Lobos Ave, San Francisco, CA 94121", hours:"9a.m-9:30p.m", phone:"(415) 386-3330",price : "$$$", maxOccupancy: 200, currOccupancy :50, searchTag :"wine alcohol california bistro jazz ocean beach brunch buffet brunch "];
valFogo = [name: "Fogo de Chao", menu : {"steak": {price : 100, desc : ""}"filetmignon" : {price : 100, desc : ""}, "beefancho" : {price : 100, desc : ""}, "seafood" : {price : 100, desc : ""}, "porkloin" : {price : 100, desc : ""}, "porksausaage" : {price : 100, desc : ""}}, location : "201 S 3rd St Suite 100, San Francisco, CA 94103",hours: "11:30a.m-10:30p.m", phone:"(415) 427-0004", price : "$$$", maxOccupancy : 140, currOccupancy : 60, searchTag : "steak brazilian wine alcohol seafood chicken lamb pork gaucho lunch brunch polenta garlic mashed potatoes giger caramelized bananas farofa fire roasted seasoned filet mignon"];
valSan = [name : "San Tung", menu : {"chickenwing" : , "noodle" : , "dumpling" : , "friedrice" : [], "chowmein" : []}, location : "1031 Irving St, San Francisco, CA 94122", hours : "11a.m-9:30p.m", phone : "(415) 242-0828", price : "$$", maxOccupancy : 110, currOccupancy 111, searchTag : "chicken wings kimchi chinese korean noodles taiwanese dumplings bao rice tea dim sum"];
window.localStorage.setItem()