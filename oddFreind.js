

// Problem no 4: oddFriend

function oddFriend(friends) {
  let odd = [];
  for (let i = 0; i < friends.length; i++) {
    if (i % 2 != 0) {
      odd.push(friends[i]);
    }
  }
  return odd;
}
let friends = ['sojol', 'safi', 'rafi', 'masud', 'monon', 'biddut', 'sayem', 'shuvo', 'newaz', 'arif'];
console.log(oddFriend(friends));