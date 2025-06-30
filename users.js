//// GAMES HUB ////

var users = false;
var currentUserID = null;

var currentlyPlayingUserID = null;

var totalUserCount = 0;

var avatar = ["assets/nouser.png", "assets/nouser.png", "assets/nouser.png", "assets/nouser.png"];
var XP = [0, 0, 0, 0];
var username = ["1", "2", "3", "4"];

function toggleUsers()
{
  playMainClick();

  const setting = document.getElementById("usersToggle");
  if (setting.checked)
  {
    currentUserID = -1;
    document.getElementById("addUserCard").style.display = "grid";
    document.getElementById("appendChildDiv").style.display = "block";
    users = true;
  }
  else
  {
    users = false;
    currentUserID = null;
    document.getElementById("addUserCard").style.display = "none";
    document.getElementById("appendChildDiv").style.display = "none";

    for (let i = 0; i < 4; i++) 
    {
      deleteUser(i, true);
    }
  }
}

function openUserDialog()
{
  console.log("currentUSERID: " + currentUserID)
  playMainClick();

  if (totalUserCount === 4)
  {
    alert("You can only add up to 4 users.");
    return;
  }

  currentUserID++;

  for (let i = 1; i <= 8; i++) 
  {
    document.getElementById("avatar" + i).style.backgroundImage = "url('assets/user" + i + ".png')";
  }

  document.getElementById("box").style.display = "grid";
}

function closeUserDialog()
{
  playMainClick();
  document.getElementById("box").style.display = "none";
  document.getElementById("newUserName").value = "";
}

function selectAvatar(avatarId)
{
  playMainClick();

  for (let i = 1; i <= 8; i++) 
  {
    document.getElementById("avatar" + i).style.borderColor = "white";
  }

  document.getElementById("avatar" + avatarId).style.borderColor = "yellow"; // Highlight selected avatar

  avatar[currentUserID] = 'assets/user' + avatarId + '.png'; // STORE selected avatar
}

function addUser() 
{
  const userName = document.getElementById("newUserName").value;
  if (userName === "") 
  {
    alert("Please enter a valid username!");
    return;
  }

  // USER CARD ATTRIBUTES
  document.getElementById("user" + currentUserID).style.display = "grid";
  document.getElementById("userName" + currentUserID).innerText = userName;
  document.getElementById("userXP" + currentUserID).innerText = "XP: " + XP[currentUserID];
  document.getElementById("userPic" + currentUserID).src = avatar[currentUserID];

  totalUserCount += 1;

  username[currentUserID] = userName; // STORE new username

  console.log("ADDED USER " + currentUserID);
  console.log("username " + username[currentUserID] + " pic: " + avatar[currentUserID])

  closeUserDialog();
}

function deleteUser(id, triggerSound) 
{
  if(!triggerSound)
  {
    playMainClick();
  }

  document.getElementById("user" + id).style.display = "none";
  document.getElementById("userName" + id).innerText = "";
  document.getElementById("userXP" + id).innerText = "";

  currentUserID--;
  totalUserCount--;

  username[id] = "";
  avatar[id] = "assets/nouser.png";
  XP[id] = 0;
}

function debug()
{
  for (let i = 0; i < 4; i++) {
    console.log("User " + i + ": " + username[i] + ", Avatar: " + avatar[i] + ", XP: " + XP[i]);
  }
  console.log("totalusercount: " + totalUserCount)
}

var userSelectionGame;

function showUserSelection(gameID)
{
  document.getElementById("userSelection").style.display = "block";
  if(totalUserCount === 3)
  {
    document.getElementById("userSelection2").style.display = "block";
  }
  if(totalUserCount === 4)
  {
    document.getElementById("userSelection2").style.display = "block";
    document.getElementById("userSelection3").style.display = "block";
  }
  for(let i = 0; i < 4; i++)
  {
    document.getElementById("userCardPic" + i).src = avatar[i];
    document.getElementById("userCardName" + i).innerHTML = username[i];
    document.getElementById("userCardXP" + i).innerHTML = "XP: " + XP[i];
  }

  userSelectionGame = gameID;
}

function selectUser(id, triggerSound)
{
  if(triggerSound)
  {
    playMainClick();
  }
  currentlyPlayingUserID = id;
  document.getElementById("userSelection").style.display = "none";
  if(userSelectionGame === 3)
  {
    loadMemoryGame();
  }
  else
  {
    loadQuiz(true);
  }
  document.getElementById("currentUserPic").src = avatar[id];
  document.getElementById("currentUserName").innerHTML = username[id];
  document.getElementById("currentUserXP").innerHTML = "XP: " + XP[id];

}

function updateXP(userID)
{
  document.getElementById("currentUserXP").innerHTML = "XP: " + XP[userID];
  document.getElementById("userCardXP" + userID).innerHTML = "XP: " + XP[userID];
  document.getElementById("userXP" + userID).innerHTML = "XP: " + XP[userID];
}