const { Command } = require('klasa');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, { description: 'Gives you a random dog fact.' });
	}

	async run(msg) {
		return msg.send(facts[Math.floor(Math.random() * facts.length)]);
	}

};

/* eslint-disable max-len */
const facts = [
	'Puppies have 28 teeth and adult dogs have 42.',
	'Hollywood’s first and arguably best canine superstar was Rin Tin Tin, a five-day-old German Shepherd found wounded in battle in WWI France and adopted by an American soldier, Lee Duncan. He would sign his own contracts with his paw print.',
	"Spiked dog collars were used to protect dogs' throats from wolf attacks in ancient Greece.",
	'Chocolate contains a substance known as theobromine (similar to caffeine) which can kill dogs or, at the very least, make them violently ill.',
	"A dog's whiskers are used as sensing devices.",
	'Dogs judge objects first by their movement, then by their brightness, and lastly by their shape.',
	"n ancient China, an emperor's last line of defense was a small Pekingese dog literally hidden up his sleeve.",
	'Greyhounds appear to be the most ancient dog breed. "Greyhound" comes from a mistake in translating the early German name Greishund, which means "old (or ancient) dog," not from the color gray.',
	'There are about 400 million dogs in the world.',
	'Dogs with little human contact in the first three months typically don’t make good pets.',
	'Endal was the first dog to ride on the London Eye (the characteristic ferris wheel in London, England), and was also the first known dog to successfully use a ATM machine.',
	'Dogs’ only sweat glands are between their paw pads.',
	'Dogs can count up to five and can perform simple mathematical calculations.',
	'Dogs can see best at dawn and dusk.',
	'Zorba, an English mastiff, is the biggest dog ever recorded. He weighed 343 pounds and measured 8’ 3" from his nose to his tail.',
	'Dogs have a wet nose to collect more of the tiny droplets of smelling chemicals in the air.',
	'It pays to be a lap dog. Three dogs (from First Class cabins!) survived the sinking of the Titanic – two Pomeranians and one Pekingese.',
	'A dog’s vision is not fully developed until after the first month.',
	'The smallest dog on record was a matchbox-size Yorkshire Terrier. It was 2.5" tall at the shoulder, 3.5" from nose tip to tail, and weighed only 4 ounces.',
	'The Beagle came into prominence in the 1300s and 1400s during the days of King Henry VII of England. Elizabeth I was fond of Pocket Beagles, which were only 9" high.',
	'Chase that tail! Dogs chase their tails for a variety of reasons: curiosity, exercise, anxiety, predatory instinct or, they might have fleas! If your dog is chasing his tail excessively, talk with your vet.',
	'Irish Wolfhounds, the tallest breed, are 30 to 35 inches tall.',
	'Growing up. While the Chow Chow dogs are well known for their distinctive blue-black tongues, they’re actually born with pink tongues. They turn blue-black at 8-10 weeks of age.',
	'Greyhounds are the fastest dogs on earth, with speeds of up to 45 miles per hour.',
	'Rock star Ozzy Osborne saved his wife Sharon’s Pomeranian from a coyote by tackling and wresting the coyote until it released the dog.',
	'In addition to "formal" forms of dog training (operant conditioning, reinforcement, or classical conditioning), dogs are able to learn merely from observation.',
	'Some dogs can smell dead bodies under water, where termites are hiding, and natural gas buried under 40 feet of dirt. They can even detect cancer that is too small to be detected by a doctor and can find lung cancer by sniffing a person’s breath.',
	'U.S. Customs dogs "Rocky" and "Barco" were so good at patrolling the border that Mexican drug lords put a $300,000 bounty on their heads.',
	'Different smells in the a dog’s urine can tell other dogs whether the dog leaving the message is female or male, old or young, sick or healthy, happy or angry.',
	'Dogs can see in color, though they most likely see colors similar to a color-blind human. They can see better when the light is low.',
	'One of Shakespeare’s most mischievous characters is Crab, the dog belonging to Launce in the Two Gentlemen of Verona. The word "watchdog" is first found in The Tempest.',
	'The oldest dog on record – a Queensland Heeler named Bluey – was 29 years, 5 months old.',
	'Teddy Roosevelt’s dog, Pete, ripped a French ambassador’s pants off at the White House.',
	'Obesity is the top health problem among dogs.',
	'The Mayans and Aztecs symbolized every tenth day with the dog, and those born under this sign were believed to have outstanding leadership skills.',
	'The Labrador Retriever has been the most popular dog breed since 1991.',
	'Dogs’ nose prints are as unique as a human’s finger prints, and can be used to accurately identify them.',
	'When "Bobbie," a Collie/Shepherd mix, was accidentally abandoned on a family vacation, he traveled 2,551 miles over six months to return to his home.',
	'Analysis of the dog genome demonstrate only 4 major types of dogs: "Old Lineage Dogs," "Mastiff-type Dogs," "Herding Dogs," and "Modern Hunting Dogs."',
	'Davy Crockett had a dog named Sport.',
	'Dogs live an average of 15 years.',
	'The dog was frequently depicted in Greek art, including Cerberus, the three-headed hound guarding the entrance to the underworld, and the hunting dogs which accompanied the virgin goddess of the chase, Diana.',
	'Puppies sleep 90% of the day for their first few weeks.',
	'Many foot disorders in dogs are simply an issue of too-long toenails.',
	'A Russian dog named Laika was the first animal in space, traveling around Earth in 1957.',
	'Move over Rover! 45% of dogs sleep in their owner’s bed (we’re pretty sure a large percentage also hog the blankets!)',
	'Dogs with a flesh colored nose is said to have a "Dudley Nose."',
	'Fifty-eight percent of people put pets in family and holiday portraits.',
	'The U.S. has the highest dog population in the world.',
	'Newfoundlands are great swimmers because of their webbed feet.',
	'The Berger Picard, Miniature American Shepherd and Lagotto Romagnolo are the newest dog breeds recognized by the American Kennel Club in 2015.',
	'During the Middle Ages, mixed breeds of peasants’ dogs were required to wear blocks around their necks to keep them from breeding with noble hunting dogs. Purebred dogs were very expensive and hunting became the province of the rich.',
	'The Chihuahua was named after the state in Mexico where they were discovered.',
	'Teams of dogs compete for the fastest time without errors in Flyball races.',
	'Three of the 12 dogs on the Titanic survived.',
	'Bichons, Portuguese Water Dogs, Kerry Blue Terriers, Maltese and Poodles are all good choices if you have allergies since they shed less than other breeds.',
	'Petting a dog can lower your blood pressure.',
	'One survey reports that 33% of dog owners admit they talk to their dogs on the phone or leave messages on answering machines while they are away..',
	'Dogs are naturally submissive to any creature with a higher pack status.',
	'Dogs are naturally submissive to any creature with higher pack status, human or canine.',
	'President Lyndon Johnson had two beagles named Him and Her.',
	'Humans can detect sounds at 20,000 times per second, while dogs can sense frequencies of 30,000 times per second.',
	'The most dogs ever owned by one person were 5,000 Mastiffs owned by Kublai Khan.',
	'There are an estimated 400 million dogs in the world.',
	'More than one in three U.S. families owns a dog.',
	"Dogs don't enjoy being hugged as much as humans and other primates. Canines interpret putting a limb over another animal as a sign of dominance.",
	'The phrase "raining cats and dogs" originated in 17th century England when it is believed that many cats and dogs drowned during heavy periods of rain.',
	'The ancient religion Zoroastrianism includes in its religious text titled the Zend Avesta a section devoted to the care and breeding of dogs.',
	'The bible mentions dogs 14 times.',
	'Boxers are so named because of their manner of playing using their front paws.',
	'During the Renaissance, detailed portraits of the dog as a symbol of fidelity and loyalty appeared in mythological, allegorical, and religious art throughout Europe, including works by Leonardo da Vinci, Diego Velázquez, Jan van Eyck, and Albrecht Durer.',
	'Petting dogs is proven to lower blood pressure of dog owners.',
	'Smaller breeds mature faster than larger breeds.',
	'Dogs have no sense of time.',
	'In 2001, it was estimated that there are approximately 400 million dogs in the world.',
	'At the end of WWI, the German government trained the first guide dogs for war-blinded soldiers.',
	'Dogs sleep for an average of 10 hours per day.',
	'Dogs have been used since the 1700’s for therapy.',
	'Smaller breeds of dogs mature faster than larger breeds.',
	'A dog’s pregnancy lasts for approximately 60 days.',
	'Seventy percent of people sign their pet’s name on greeting and holiday cards.',
	'French poodles did not originate in France but in Germany ("poodle" comes from the German pudel or pudelhund, meaning "splashing dog"). Some scholars speculate the poodle’s puffs of hair evolved when hunters shaved the poodle for more efficient swimming, while leaving the pom-poms around the major joints to keep them warm.',
	'In 1957, Laika became the first living being in space via an earth satellite and JFK’s terrier, Charlie, fathered 4 puppies with Laika’s daughter.',
	'The most popular dog breed in Canada, U.S., and Great Britain is the Labrador retriever.',
	"Although it was once illegal to keep dogs as pets in Iceland's capital city, the laws have been relaxed.",
	'The Basenji is the only barkless dog.',
	'Dogs are capable of understanding up to 250 words and gestures, can count up to five and can perform simple mathematical calculations. The average dog is as intelligent as a two-year-old child.',
	'Basset Hounds cannot swim.',
	'The phrase "raining cats and dogs" originated in seventeenth-century England. During heavy rainstorms, many homeless animals would drown and float down the streets, giving the appearance that it had actually rained cats and dogs.',
	'The Labrador is so popular, in 2006 there were approximately 3-5 times more Labs as there were German Shepherds or Golden Retrievers.',
	'Male dogs will raise their legs while urinating to aim higher on a tree or lamppost because they want to leave a message that they are tall and intimidating. Some wild dogs in Africa try to run up tree trunks while they are urinating to appear to be very large.',
	'Even with their poor eyesight, dogs can still see better at night than humans do.',
	'An elderly woman was saved by her 12-pound Yorkshire Terrier, who fought off an 80- pound Akita, and survived with only 9 stitches.',
	'Unlike cats, dogs are not exclusively carnivores: they can adapt to different foods, and a percentage of their diets can be fruits and vegetables.',
	'Female wolves have been known to travel great distances to regurgitate full meals for their hungry pups.',
	'There are hundreds of breeds of dogs.',
	'In Egypt, a person bitten by a rabid dog was encouraged to eat the roasted liver of a dog infected with rabies to avoid contracting the disease. The tooth of a dog infected with rabies would also be put in a band tied to the arm of the person bitten. The menstrual blood of a female dog was used for hair removal, while dog genitals were used for preventing the whitening of hair.',
	'Dogs can get jealous when their humans display affection toward someone or something else.',
	'Weird dog laws include allowing police offers in Palding, Ohio, to bite a dog to quiet it. In Ventura County, California, cats and dogs are not allowed to have sex without a permit.',
	'The largest dog was an English Mastiff who weighed 343 pounds.'
];
