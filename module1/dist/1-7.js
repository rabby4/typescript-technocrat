"use strict";
{
    // spread operator
    // rest operator
    // destructuring
    // spread operator
    const arr = ["mehedi", "fahad"];
    const arr2 = ["rabby", "najir"];
    arr.push(...arr2);
    const mentor = {
        Mezba: "typescript",
        Mir: "Redux",
    };
    const mentor2 = {
        nextjs: "tonmoy",
        cloud: "nahid",
    };
    const allMentor = Object.assign(Object.assign({}, mentor), mentor2);
    // learn rest operator
    const myFriends = (...friends) => {
        // console.log()
        friends.forEach((friend) => {
            console.log(`Hi, ${friend}`);
        });
    };
    myFriends("aboul", "babul");
}
