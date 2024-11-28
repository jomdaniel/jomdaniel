
var x = 1;
var captions = new Array(0, <!-- Starts to index 1 to avoid confusion on number -->
"This is my photo where i finished Sub1-10K Challenge in 2015, where i finished 10km running in under 1 hour.",
"This is my photo wearing NEUST PHOENIX TRANGKISTA jersey in Palayan,City.",
"This photo was taken at Minalungao National Park as a requirement for one of my subjects back when I was in highschool.",
"This is a photo of me and my favorite legend in League of Legends in Rampage 2015, Bloodmoon Thresh",
"Backpacking with my bike from Tarlac City to Lingayen, Pangasinan",
"Me raising my bike in Pantabangan Dam",
"Visiting a cat cafe called &quot;Hello Meow Cafe&quot; with my girlfriend and my friends",
"Me getting a Gold and two Bronze medal in University Meet Swimming Event.",
"Me doing a wheelie and having fun in Mambukal Resort located in Negros Occidental.",
"Visiting Japan with my mom and dad."
);

document.addEventListener("scroll", () => {
    const contactBar = document.querySelector(".contact-bar");
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    // Show the contact bar only at the bottom
    if (scrollTop + windowHeight >= docHeight - 10) {
        contactBar.style.display = "block";
    } else {
        contactBar.style.display = "none";
    }
});
