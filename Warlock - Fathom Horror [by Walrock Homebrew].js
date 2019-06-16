/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Warlock, called "Fathom Horror"
				This subclass is made by Walrock Homebrew
	Code by:	staggindraggin
	Date:		2019-06-15 (sheet v12.999)
*/

var iFileName = "Warlock - Fathom Horror [by Walrock Homebrew].js";
RequiredSheetVersion(12.999);

SourceList["WH:FH"] = {
	name : "Walrock Homebrew: Fathom Horror v0.3",
	abbreviation : "WH:FH",
	group : "Walrock Homebrew",
	url : "https://walrock-homebrew.blogspot.com/2017/11/otherworldly-patron-fathom-horror-third.html",
	date : "2017/11/25"
};


AddSubClass("warlock", "fathom horror", {
	regExpSearch : /^(((?=.*(aboleth|dagon|kraken|olhydra))(?=.*warlock))|((?=.*(deep|sea))(?=.*(ancient|old))(?=.*\b(horror|entity)\b))).*$/i
	subname : "Fathom Horror",
	source : ["WH:FH", 1],
	spellcastingExtra : ["create or destroy water", "fog cloud", "bigby's blistering barnacles", "urchin spines", "tidal wave", "wall of water", "control water", "depthsurge", "maelstrom", "red tide"],
    //not done yet
	features : {
		"subclassfeature1" : {
			name : "Pelagic Tentacle",
			source : ["WH:FH", 2],
			minlevel : 1,
            description : desc([
                "As an action, I can conjure a tentacle from the ocean depths to grasp at my foes",
                "The tentacle bursts forth from extraplanar space and attempts to grasp a creature within 30 feet of me",
                "The creature must make a Dexterity saving throw against my spell save DC",
                "If it fails, the creatures movement speed becomes 0 as the tentacle grasps them and they cannot move (except by forced movement or teleportation) until the tentacle dissipates at the beginning of my next turn",
                "If a creature that is flying or falling is targeted, they are held in place and do not begin falling on their turn while the tentacle lasts",
                "A falling creature may intentionally choose to fail their saving throw against this ability",
                "Once I use this ability, I cannot use it again until I take a short or long rest"
            ]),
			recovery : "short rest",
			action : ["action", ""],
            usages : 1,
		},
		"subclassfeature6" : {
			name : "Brine",
			source : ["WH:FH", 2],
			minlevel : 6,
            description : desc([
                "I can call upon the salt of the sea to consume the weapons of my attackers",
                "As a reaction when I am hit with a meleee attack, I can coat my attacker with brine, causing the attack to deal half its usual damage (rounded down)",
                "If the creature that triggered this ability attacked with a non-magical melee weapon made of metal, this ability rusts the weapon and eats it away",
                "A rusted weapon counts as an improvised weapon dealing only 1d4 + Strength modifier bludgeoning damage on a hit, and not adding the creatures to proficiency bonus to attack rolls unless that creature is specifically proficient in improvised weapons",
                "A remove curse spell or a skilled blacksmith can restore an affected weapon to its former condition",
                "Once I use this ability, I cannot use it again until I take a short or long rest"
            ]),
			recovery : "short rest",
			action : ["reaction", " (when attacked)"],
            usages : 1,
            additional : "Save DC: 8 + Cha mod + Proficiency bonus"
		},
		"subclassfeature10" : {
			name : "Squamous Hide",
			source : ["WH:FH", 2],
			minlevel : 10,
            description : desc([
                "The flesh on my arms, legs, and body carries scattered patches of scales, slippery and fish-like",
                "I have advantage on any checks I make to resist or escape a grapple, and I am resistant to cold damage"
            ]),
			dmgres : ["Cold"],
            savetxt : { adv_vs : ["grappled"] }
		},
		"subclassfeature14" : {
			name : "Jellify",
			source : ["WH:FH", 2],
			minlevel : 14,
            description : desc([
                "I can work dark magics that convert the flesh and physical form of my enemies into sea jelly",
                "As an action, choose one creature within 120 feet of me that I can see and that is not an ooze",
                "This creature must succeed on a Constitution saving throw against my spell save DC or suffer horrific pain as its flesh begins to congeal and jellify, taking 8d12 acid damage",
                "A creature that fails this saving throw also reduces its movement speed by half, though any swimming speed the creature may have is unaffected",
                "Only a remove curse spell or similar magic may end this effect",
                "If a creature succeeds on this saving throw, it takes half damage and is not subjected to any other effects from this ability",
                "In either case, a creature reduced to 0 hit points by this ability dissolves into a grey ooze (Monster Manual, page 243) under my control, which lacks the Corrode Metal ability and lasts for an hour, after which it dissipates into seafoam",
                "Once I use this ability, I cannot use it again until I take a short or long rest"             
            ]),
            recovery : "short rest",
			action : ["action", ""]
			usages : 1,
		}
	}
});

// Add Warlock Invocations
AddWarlockInvocation("Sea Serpent (prereq: Pact of the Chain)", {
	name : "Sea Serpent",
	description : desc([
        "In addition to the other familiar options presented by the Pact of the Cahin, you may choose to conjure a young sea drake as your familiar",
        "A sea drake is a long, lithe, finned serpent that is naturally at home amongst the waves and sky"
    ]),
	source : ["WH:FH", 3],
	prereqeval : "What('Class Features Remember').indexOf('warlock,pact boon,pact of the chain') !== -1",
});
AddWarlockInvocation("Siren Song (prereq: level 5 warlock)", {
	name : "Siren Song",
	description : desc([
		"As a bonus action, I can usher forth an unearthly song taht seems to come from all directions",
		"Any creature within 30 feet of me that can hear me must make a Wisdom saving throw against my spell save DC",
		"If a creature fails this saving throw, it is charmed by me until the end of my next turn",
		"When I charm a creature with this ability, I may choose to move it up to 20 feet in a straight line closer to me",
        "Once I use this ability, I cannot use it again until I take a short or long rest"
	]),
	source : ["WH:FH", 3],
	prereqeval : "classes.known.warlock.level >= 5",
	recovery : "short rest",
	usages : 1,
	action : ["bonus action", " (start/stop)"]
	additional : "Save DC: 8 + Cha mod + Proficiency bonus"
});
AddWarlockInvocation("Treasure Tome (prereq: Pact of the Tome)", {
	name : "Treasure Tome",
	description : desc([
        "My Book of Shadows contains many maps to hidden treasures, penned by my patron or persons best forgotten",
        "At any time as an object interaction, I may open my Book of Shadows, roll an Intelligence (Arcana) check, and attempt to recall a map",
        "If I am within 5,000 feet of a cache of at least 500 gp worth of items or treasure, and the result of your check is at least 10, my book will contain a map showing the general path to take to get to the treasure",
        "If the result is at least 15, this map will also show any traps or hazards, not including hostile creatures, that may exist along the way",
        "If the result is 20 or greater, the map also contains detailed notes about how to avoid these traps or hazards, and on the nature and type of treasure that awaits",
        "If I attempt this check and there is no valid cache of treasure within its area, the check fails regardless of result, and my book displays no map",
        "I may perform this check a number of times equal to my Charisma modifier before requiring a long rest to refresh its uses",
        "If the cache is in motion, howver, the map will correct itself to the caches present location at the end of every minute, unless the cache moves outside the inital 5,000 feet of this effect",
        "If the cache is removed from this area, the effect ends and the map goes blank",
        "If a cache becomes split while this effect is active, the map then points towards the largest portion of the map still in the effect's area"
    ]),
	source : ["WH:FH", 3],
	prereqeval : "What('Class Features Remember').indexOf('warlock,pact boon,pact of the tome') !== -1",
    recovery : "long rest",
    usages : "Charisma modifier per ",
    usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
});
// Add included spells
SpellsList["bigby's blistering barnacles"] = {
	name : "Bigby's Blistering Barnacles",
	classes : ["druid","sorcerer", "warlock"],
	source : [["WH:FH", 4],["WH:CW", 5]],
	level : 2,
	school : "Conj",
	time : "1 a",
	range : "30 ft",
	components : "V,S,M",
    compMaterial : "A single barnacle and a droplet of lye",
	duration : "Conc, 1 min",
    save: "Con",
	description : "1 crea 1d6+1d6/SL Acid dmg at end of each turn, disadv. on attacks, Dex saves, and Cha checks; crea within 5 ft Str vs spell DC to remove barnacles and end effect",
	descriptionFull : "Choose a creature you can see within range. The target must succeed on a Constitution saving throw or become covered head to toe in barnacles of varying sixes for the duration of this spell." + "\n   " + "While covered in barnacles, the creature has disadvantage on attacks, Dexterity saving throws, and Charisma checks. At the end of each turn the creature is still covered in barnacles, it takes 1d6 acid damage." + "\n   " + "A creature within 5 feet of the target of this spell (including the target itself) may attempt to remove the barnacles by using an action to make a Strength check against your spell save DC. If this check succeeds the spell ends." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the acid damage increases by 1d6 for each slot level above 2nd."
};
SpellsList["depthsurge"] = {
	name : "Depthsurge",
	classes : ["sorcerer, warlock, wizard"],
	source : [["WH:FH", 4],["WH:CW", 6]],
	level : 4,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,M",
	compMaterial : "A shattered vial of water",
	duration : "Instantaneous",
	save : "Str",
	description : "10-ft rad all crea 4d10+1d10/SL bludg. dmg, knocked 15ft+5ft/SL straight line from center and prone; save halves damage, no movement, not prone",
	descriptionFull : "You conjure a powerful explosion of water, scattering creatures affected by it. Choose a point within range. Creatures within a 10-foot radius sphere must make a Strength saving throw" + "\n   " + "If a creature fails this saving throw, it takes 4d10 bludgeoning damage, is knocked 15 feet away in a straight line from the center of the explosion, and is rendered prone. A creature that succeeds on this saving throw takes half damage and is subject to no other effects from this spell." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the bludgeoning damage increases by 1d10 and the distance pushed increases by 5ft, for each slot level above 4th."
};
SpellsList["red tide"] = {
	name : "Red Tide",
	classes : ["sorcerer, warlock, wizard"],
	source : [["WH:FH", 4],["WH:CW", 6]],
	level : 5,
	school : "Conj",
	time : "1 a",
	range : "120 ft",
	components : "S,M",
	compMaterial : "A pinch of brine",
	duration : "Instantaneous",
	save : "Con",
	description : "20-ft rad, 5 foot tall all crea 2d10 bludg. dmg and 2d10 Poison dmg and Poisoned until end of your next turn, save halves damage, not poisoned. One dmg type + 1d10/SL",
	descriptionFull : "Choose a point within range that is either on or within a body of water, or on solid ground. A torrent of frothing red water issues forth, mercilessly battering all creatures within a 5 foot tall, 20 foot radius cylinder centered on that point" + "\n   " + "Creatures within this area must make a Constitution saving throw, taking 2d10 bludgeoning and 2d10 Poison damage if they fail this save, and half that amount if the succeed. A creature that fails this saving throw is also poisoned until the end of your next turn." + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the bludgeoning damage or the Poison damage (your choice) increases by 1d10 for each slot level above 5th."
};
SpellsList["urchin's spines"] = {
	name : "Urchin's Spines",
	classes : ["druid","warlock"],
	source : [["WH:FH", 5],["WH:CW", 8]],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "S,M",
    compMaterial : "A sea urhcin spine, sewing needle, pine needle, or similar",
	duration : "Conc, 1 min",
	description : "Crea grows purple or black spikes on entire body. Spikes cause 1d6 piercing and 1d6 poison dmg to crea that touch or make melee attack against target. One dmg type + 1d6/SL",
	descriptionFull : "A willing creature that you touch sprouts clusters of 3 inch long purple or black spines along its entire body. Any time a spined creature is the target of a melee attack, a spell with a range of touch (not including this one), or an ability that requires touching the spined creature, the targeting creature takes 1d6 piercing and 1d6 poison damage." + "\n   " + "Creatures affected by this spell have disadvantage on all Charisma checks besides Intimidation checks." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, either the piercing or poison damage (you choose) increases by 1d6 for each slot level above 2nd."
};
//Add stats for Young Sea Drake
CreatureList["young sea drake"] = {
	name : "Young Sea Drake",
	source : ["WH:FH", 3],
	size : 5,
	type : "Dragon",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 9,
	hd : [2, 4],
	speed : "10ft, fly 50ft, swim 60 ft",
	scores : [6, 15, 14, 10, 12, 9],
	saves : ["", "", "", "", "", ""],
    skills : {
		"perception" : 3,
		"stealth" : 4,
        "survival" : 3,
	},
	senses : "Darkvision 60 ft",
	passivePerception : 13,
	languages : "understands Aquan, Common, and Draconic but can't speak",
	challengeRating : "1/8",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 2,
			damage : [1, 4, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Target also takes 1d4 piercing damage"
		}
	],
    actions : [{
        name : "Torrent Breath",
        description : "Choose one creature the drake can see within 30 feet. The drake unleashes a torrent of water from its mouth, causing the trageted creature to make a Dexterity saving throw against your warlock spell save DC." + "\n   " + " If that creature fails, it is pushed up to 10 feet directly away from the drake and takes bludgeoning damage equal to your warlock level + your Charisma modifier (half damage on a success",
        },{ 
			name : "Marine Camouflage",
			description : "As an action, the drake shifts the color of its scales to belnd into its environment until it attacks oir uses its Torrent Breath, or until its concentration ends (as if concentrating on a spell). Until then, it and any creature it is riding have advantage on Dexterity (Stealth) checks made to hide", 
		},
	], 
	traits : [{
		name : "Keen Senses",
        description : "The drake has advantage on Wisdom (Perception) checks that rely on hearing or sight, hearing, or smell."
        },{
        name : "Magic Resistance",
		description : "The drake has advantage on saves against spells and magical effects."
        },{
        name : "Limited Telepathy",
        description : "The drake can magically communicate simple ideas, emotions, and images telepathically with any creature within 100 feet of it that can understand a language."
	}]
}
