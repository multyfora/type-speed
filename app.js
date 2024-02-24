const typeSpace = document.querySelector(".type-space");
const clear = document.querySelector(".clear");
const card = document.querySelector(".card");
const targetTextElement = document.querySelector(".target-text");
const score = document.querySelector(".score-value");

let text = [];
let scoreArray = [];
let scoreValue = 0;

let targetTextsArray = ["The essence of strategy is choosing what not to do.","One cannot and must not try to erase the past merely because it does not fit the present.","Patriotism means to stand by the country. It does not mean to stand by the president.","Death is something inevitable. When a man has done what he considers to be his duty to his people and his country, he can rest in peace. I believe I have made that effort and that is, therefore, why I will sleep for the eternity.","You have to love a nation that celebrates its independence every July 4, not with a parade of guns, tanks, and soldiers who file by the White House in a show of strength and muscle, but with family picnics where kids throw Frisbees, the potato salad gets iffy, and the flies die from happiness. You may think you have overeaten, but it is patriotism.","Be more concerned with your character than your reputation, because your character is what you really are, while your reputation is merely what others think you are.","Weak people revenge. Strong people forgive. Intelligent People Ignore.","A mind is like a parachute. It doesn't work if it is not open.","Never be afraid to raise your voice for honesty and truth and compassion against injustice and lying and greed. If people all over the world...would do this, it would change the earth.","There are three kinds of men. The one that learns by reading. The few who learn by observation. The rest of them have to pee on the electric fence for themselves.","A strong nation, like a strong person, can afford to be gentle, firm, thoughtful, and restrained. It can afford to extend a helping hand to others. It's a weak nation, like a weak person, that must behave with bluster and boasting and rashness and other signs of insecurity.","The difference between stupidity and genius is that genius has its limits.","We the people are the rightful masters of both Congress and the courts, not to overthrow the Constitution but to overthrow the men who pervert the Constitution.","With or without religion, you would have good people doing good things and evil people doing evil things. But for good people to do evil things, that takes religion.","Human kindness has never weakened the stamina or softened the fiber of a free people. A nation does not have to be cruel to be tough.","A person who never made a mistake never tried anything new.","My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style","Life is short, Break the Rules. Forgive quickly, Kiss slowly. Love truly. Laugh uncontrollably And never regret ANYTHING That makes you smile.","This country will not be a good place for any of us to live in unless we make it a good place for all of us to live in.","In a world filled with hate, we must still dare to hope. In a world filled with anger, we must still dare to comfort. In a world filled with despair, we must still dare to dream. And in a world filled with distrust, we must still dare to believe.","Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.","To be a Christian means to forgive the inexcusable because God has forgiven the inexcusable in you.","A man who is good enough to shed his blood for the country is good enough to be given a square deal afterwards.","Kindness is the language which the deaf can hear and the blind can see.","Most folks are as happy as they make up their minds to be.","A happy marriage is the union of two good forgivers.","I believe in Christianity as I believe that the sun has risen: not only because I see it, but because by it I see everything else.","Politics is the art of looking for trouble, finding it everywhere, diagnosing it incorrectly and applying the wrong remedies.","I believe in everything until it's disproved. So I believe in fairies, the myths, dragons. It all exists, even if it's in your mind. Who's to say that dreams and nightmares aren't as real as the here and now?","At the end of your life, you will never regret not having passed one more test, not winning one more verdict or not closing one more deal. You will regret time not spent with a husband, a friend, a child, or a parent.","I never think of the future - it comes soon enough.","Our greatest fear should not be of failure but of succeeding at things in life that don't really matter.","Failure is simply the opportunity to begin again, this time more intelligently.","Music expresses that which cannot be put into words.","Good actions are a guard against the blows of adversity.","Positive thinking will let you do everything better than negative thinking will.","You have enemies? Good. That means you've stood up for something, sometime in your life.","You don't have to be great to start, but you have to start to be great","Let every nation know, whether it wishes us well or ill, that we shall pay any price, bear any burden, meet any hardship, support any friend, oppose any foe to assure the survival and the success of liberty.","If you want total security, go to prison. There you're fed, clothed, given medical care and so on. The only thing lacking... is freedom.","Socialism is a philosophy of failure, the creed of ignorance, and the gospel of envy, its inherent virtue is the equal sharing of misery.","It is the supreme art of the teacher to awaken joy in creative expression and knowledge.","Once you replace negative thoughts with positive ones, you'll start having positive results.","You build on failure. You use it as a stepping stone. Close the door on the past. You don't try to forget the mistakes, but you don't dwell on it. You don't let it have any of your energy, or any of your time, or any of your space.","All my life through, the new sights of Nature made me rejoice like a child.","I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.","Marriage is not a ritual or an end. It is a long, intricate, intimate dance together and nothing matters more than your own sense of balance and your choice of partner.","When obstacles arise, you change your direction to reach your goal; you do not change your decision to get there.","Time you enjoy wasting, was not wasted.","The next time some academics tell you how important diversity is, ask how many Republicans there are in their sociology department.","Faith is not the belief that God will do what you want. It is the belief that God will do what is right.","If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.","It is hard to imagine a more stupid or more dangerous way of making decisions than by putting those decisions in the hands of people who pay no price for being wrong.","I say that the most liberating thing about beauty is realizing that you are the beholder.","The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.","The soldier, above all other people, prays for peace, for he must suffer and bear the deepest wounds and scars of war.","A true leader has the confidence to stand alone, the courage to make tough decisions, and the compassion to listen to the needs of others. He does not set out to be a leader, but becomes one by the equality of his actions and the integrity of his intent.","I am a Soldier, I fight where I am told, and I win where I fight.","Trying to do the Lord's work in your own strength is the most confusing, exhausting, and tedious of all work. But when you are filled with the Holy Spirit, then the ministry of Jesus just flows out of you.","Sports for me is when a guy walks off the court, and you really can't tell whether he won or lost, when he carries himself with pride either way.","Expect the best. Prepare for the worst. Capitalize on what comes.","I became insane, with long intervals of horrible sanity.","Failure is a detour, not a dead-end street.","I am not a product of my circumstances. I am a product of my decisions.","You can cut all the flowers but you cannot keep spring from coming.","Life doesn't run away from nobody. Life runs at people.","In order to succeed, your desire for success should be greater than your fear of failure.","It's difficult to think anything but pleasant thoughts while eating a homegrown tomato.","Too many of us are not living our dreams because we are living our fears.","If the only prayer you ever say in your entire life is thank you, it will be enough.","It's just a job. Grass grows, birds fly, waves pound the sand. I beat people up.","A man must be big enough to admit his mistakes, smart enough to profit from them, and strong enough to correct them.","Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.","It has been said, 'time heals all wounds.' I do not agree. The wounds remain. In time, the mind, protecting its sanity, covers them with scar tissue and the pain lessens. But it is never gone.","This is one small step for a man, one giant leap for mankind.","I have held many things in my hands, and I have lost them all; but whatever I have placed in God's hands, that I still possess.","Welfare's purpose should be to eliminate, as far as possible, the need for its own existence.","Each time, before you intercede, be quiet first, and worship God in His glory. Think of what He can do, and how He delights to hear the prayers of His redeemed people. Think of your place and privilege in Christ, and expect great things!","Failure is not the opposite of success; it's part of success.","No one has ever become poor by giving.","It is not my ability, but my response to God’s ability, that counts.","No one is born hating another person because of the color of his skin, or his background, or his religion. People must learn to hate, and if they can learn to hate, they can be taught to love, for love comes more naturally to the human heart than its opposite.","No matter what people tell you, words and ideas can change the world.","A man should never neglect his family for business.","Those who dare to fail miserably can achieve greatly.","The two most important days in your life are the day you are born and the day you find out why.","We must be global Christians with a global vision because our God is a global God.","With everything that has happened to you, you can either feel sorry for yourself or treat what has happened as a gift. Everything is either an opportunity to grow or an obstacle to keep you from growing. You get to choose.","Don’t let the noise of others’ opinions drown out your own inner voice.","History, despite its wrenching pain, cannot be unlived, but if faced with courage, need not be lived again.","How old would you be if you didn't know how old you are?","Leadership is a privilege to better the lives of others. It is not an opportunity to satisfy personal greed.","If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.","Never cut a tree down in the wintertime. Never make a negative decision in the low time. Never make your most important decisions when you are in your worst moods. Wait. Be patient. The storm will pass. The spring will come.","An optimist stays up until midnight to see the new year in. A pessimist stays up to make sure the old year leaves.","When the going gets weird, the weird turn pro.","When a train goes through a tunnel and it gets dark, you don't throw away the ticket and jump off. You sit still and trust the engineer.","If you think you are too small to make a difference, try sleeping with a mosquito.","God doesn't require us to succeed, he only requires that you try.","Change your thoughts and you change your world.", "The lowest theoretical temperature, at which entropy reaches its minimum value, is called absolute zero", "The change in the path of a wave due to an obstacle is known as diffraction", "The process by which green plants and some other organisms convert light energy into chemical energy in the form of glucose is called photosynthesis.", "The force of attraction between masses, responsible for pulling objects toward each other, is known as gravity.", "DNA (deoxyribonucleic acid) is a molecule that carries genetic instructions for the development, functioning, and reproduction of all known living organisms.", "Evolution refers to the gradual change in species over time through natural selection and genetic variation.", "Entropy represents the measure of disorder or randomness in a system.", "A hypothesis is a testable explanation or prediction based on observations and prior knowledge.", "The entire range of electromagnetic waves, including radio waves, microwaves, visible light, X-rays, and gamma rays, constitutes the electromagnetic spectrum.", "Quantum mechanics is the branch of physics that deals with the behavior of particles at the atomic and subatomic levels.", "Kinetic energy is the energy possessed by an object due to its motion.", "Nuclear fusion is the process by which atomic nuclei combine to form heavier nuclei, releasing a tremendous amount of energy.", "Osmosis refers to the movement of solvent molecules through a semipermeable membrane from an area of lower solute concentration to an area of higher solute concentration.", "Friction is the force that opposes the relative motion of two surfaces in contact.", "Chromatography is a technique used to separate and analyze mixtures of compounds based on their differential migration through a stationary phase.", "A neutron is a subatomic particle found in the nucleus of an atom, with no net electrical charge.", "Plate tectonics explains the movement of Earth’s lithospheric plates, leading to phenomena like earthquakes and volcanic activity.", "Fossilization is the process by which organic remains become preserved in rocks over geological time.", "Bioluminescence refers to the production of light by living organisms, such as fireflies and certain deep-sea creatures.", "An isotope is a variant of an element with the same number of protons but a different number of neutrons.", "A catalyst speeds up a chemical reaction without being consumed in the process.", "Refraction occurs when light changes direction as it passes from one medium to another.", "A gene is a segment of DNA that codes for a specific protein or trait.", "Mitosis is the process of cell division that results in two identical daughter cells.", "Entropy represents the measure of disorder or randomness in a system.", "Quantum mechanics is the branch of physics that deals with the behavior of particles at the atomic and subatomic levels.", "Kinetic energy is the energy possessed by an object due to its motion.", "Nuclear fusion is the process by which atomic nuclei combine to form heavier nuclei, releasing a tremendous amount of energy.", "Osmosis refers to the movement of solvent molecules through a semipermeable membrane from an area of lower solute concentration to an area of higher solute concentration.", "The set of reactions in which organic molecules like carbon monoxide and hydrogen are converted into liquid hydrocarbons is known as Fischer-Tropsch reaction"];

let targetText = targetTextsArray[Math.floor(Math.random() * targetTextsArray.length)];
let targetTextArray = targetText.split("");
console.log(targetTextArray);
const placeholder = "start typing...";

let targetTextHtml = [];

window.onload = () => {
  typeSpace.innerHTML = placeholder;

  for (let i = 0; i < targetTextArray.length; i++) {
    targetTextHtml.push(`<span class="neutral">${targetText[i]}</span>`);
  }
  targetTextElement.innerHTML = targetTextHtml.join("");
};

window.onkeydown = function (e) {
  typingSolver(e);
};

clear.onclick = function () {
  text = [];
  typeSpace.innerHTML = placeholder;
  
  scoreArray = [];
  scoreValue = scoreArray.reduce(add,0);
  score.innerHTML = scoreValue;

  score.innerHTML = scoreValue;
  
  for (let i = 0; i < targetTextHtml.length; i++) {
    if(targetTextArray[i] !== undefined) {
    targetTextHtml[i] = `<span class="neutral">${targetTextArray[i]}</span>`;
    }
    else {
      targetTextHtml[i] = ``;
    }
  }
  targetTextElement.innerHTML = targetTextHtml.join("");
};

function typingSolver(e) {
  ifDeletingText(e);

  ifTypingText(e);

  typeSpace.innerHTML = text.join("");
  score.innerHTML = scoreValue;

  ifEmptyText(e);

  console.log(text);

  isComplete();

}

function ifDeletingText(e) {
  if (e.key === "Backspace") {
    if (text.length > 0) {
      
        scoreArray.pop();
        scoreValue = scoreArray.reduce(add,0);

    }
    text.pop();
    // typeSpace.innerHTML = text.join("");
    correctDelete();
  }
}

function ifTypingText(e) {
  if (e.key.length == 1) {
    console.log("key: ", e.key);
      text.push(e.key);
    // typeSpace.innerHTML = text.join("");
    correctCheck();
  }
}

function ifEmptyText(e) {
  if (text.length == 0) {
    typeSpace.innerHTML = placeholder;
  }
}

function correctCheck() {
  if (text[text.length - 1] == targetTextArray[text.length - 1]) {
    targetTextHtml[text.length - 1] = `<span class="right">${
      text[text.length - 1]
    }</span>`;
    scoreArray.push(1);
  } else {
    targetTextHtml[text.length - 1] = `<span class="wrong">${
      text[text.length - 1]
    }</span>`;
    scoreArray.push(-1);
  }

  targetTextElement.innerHTML = targetTextHtml.join("");
  scoreValue = scoreArray.reduce(add, 0);
  console.log('score: ', scoreValue,'score array: ', scoreArray);
  score.innerHTML = scoreValue;
  console.log(targetTextElement);
}

function correctDelete() {
  if(targetTextArray[text.length] !== undefined) {
  targetTextHtml[text.length] = `<span class="neutral">${
    targetTextArray[text.length]
  }</span>`;
  
  targetTextElement.innerHTML = targetTextHtml.join("");
}
else {
  targetTextHtml[text.length] = ``;
  
  targetTextElement.innerHTML = targetTextHtml.join("");
}
}


function add(accumulator, currentNumber) {
  return accumulator + currentNumber;
}

function isComplete() {

  if(scoreValue == targetTextArray.length){
    console.log("you won!");
    newText()
  }

}

function newText(){
  window.location = window.location;
}